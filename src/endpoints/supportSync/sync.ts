import type { PayloadRequest } from 'payload'

import { createHash } from 'crypto'

import { markdownToLexical, markdownToPlainText } from './markdown'
import { parseArticleFile, parseImagePath, parseSectionFile } from './validate'

// Core of the support sync. Each function handles one file from the POS repo and reports what
// happened to it, so the GitHub Action can print a per-file summary and fail on any error.

export type SyncResult =
  | { path: string; status: 'created' | 'updated' | 'unchanged'; id: string }
  | { path: string; status: 'error'; errors: string[] }

const sha256 = (data: string | Buffer) => createHash('sha256').update(data).digest('hex')

// Writes run as the authenticated sync user with access control enforced, inside the request's
// transaction.
const asUser = (req: PayloadRequest) => ({ req, user: req.user, overrideAccess: false })

export const syncSection = async (req: PayloadRequest, path: string, content: string): Promise<SyncResult> => {
  const parsed = parseSectionFile(path, content)
  if (!parsed.ok) return { path, status: 'error', errors: parsed.errors }
  const { payload } = req
  const data = parsed.section

  const existing = await payload.find({
    collection: 'support-sections',
    where: { slug: { equals: data.slug } },
    limit: 1,
    ...asUser(req),
  })
  const current = existing.docs[0]
  if (!current) {
    const doc = await payload.create({ collection: 'support-sections', data, ...asUser(req) })
    return { path, status: 'created', id: doc.id }
  }
  const unchanged =
    current.title === data.title && current.description === data.description && current.order === data.order
  if (unchanged) return { path, status: 'unchanged', id: current.id }
  await payload.update({ collection: 'support-sections', id: current.id, data, ...asUser(req) })
  return { path, status: 'updated', id: current.id }
}

const MAX_IMAGE_BYTES = 500 * 1024
const IMAGE_MIME: Record<string, string> = {
  png: 'image/png',
  webp: 'image/webp',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
}

export const syncImage = async (
  req: PayloadRequest,
  path: string,
  file: Buffer,
  alt?: string,
): Promise<SyncResult> => {
  const parsed = parseImagePath(path)
  if (!parsed.ok) return { path, status: 'error', errors: parsed.errors }
  if (file.byteLength > MAX_IMAGE_BYTES) {
    return { path, status: 'error', errors: [`La imagen pesa ${Math.round(file.byteLength / 1024)} KB; el máximo es 500 KB.`] }
  }
  const { payload } = req
  const hash = sha256(file)
  const name = parsed.key.split('/').pop()!
  const upload = {
    data: file,
    mimetype: IMAGE_MIME[name.split('.').pop()!],
    name: parsed.key.replace('/', '--'),
    size: file.byteLength,
  }

  const existing = await payload.find({
    collection: 'support-media',
    where: { key: { equals: parsed.key } },
    limit: 1,
    ...asUser(req),
  })
  const current = existing.docs[0]
  if (!current) {
    const doc = await payload.create({
      collection: 'support-media',
      data: { key: parsed.key, sha256: hash, alt },
      file: upload,
      ...asUser(req),
    })
    return { path, status: 'created', id: doc.id }
  }
  if (current.sha256 === hash) return { path, status: 'unchanged', id: current.id }
  // Replace the file in place so articles keep pointing at the same id.
  await payload.update({
    collection: 'support-media',
    id: current.id,
    data: { sha256: hash },
    file: upload,
    overwriteExistingFiles: true,
    ...asUser(req),
  })
  return { path, status: 'updated', id: current.id }
}

export const syncArticle = async (req: PayloadRequest, path: string, content: string): Promise<SyncResult> => {
  const parsed = parseArticleFile(path, content)
  if (!parsed.ok) return { path, status: 'error', errors: parsed.errors }
  const { payload } = req
  const article = parsed.article

  const sections = await payload.find({
    collection: 'support-sections',
    where: { slug: { equals: article.section } },
    limit: 1,
    ...asUser(req),
  })
  const section = sections.docs[0]
  if (!section) {
    return {
      path,
      status: 'error',
      errors: [`La sección "${article.section}" no existe: subí primero ${article.section}/_seccion.md.`],
    }
  }

  const imageIds = new Map<string, string>()
  if (article.images.length) {
    const media = await payload.find({
      collection: 'support-media',
      where: { key: { in: article.images.map((image) => image.key) } },
      limit: article.images.length,
      pagination: false,
      ...asUser(req),
    })
    for (const doc of media.docs) imageIds.set(doc.key, doc.id)
  }
  const missing = article.images.filter((image) => !imageIds.has(image.key))
  if (missing.length) {
    return {
      path,
      status: 'error',
      errors: missing.map((image) => `La imagen ${image.key} no está subida: subila antes que el artículo.`),
    }
  }

  // Image ids are part of the hash so a re-uploaded (new id) image re-renders the article.
  const contentHash = sha256(JSON.stringify({ content, images: [...imageIds.entries()].sort() }))
  const existing = await payload.find({
    collection: 'support-articles',
    where: { slug: { equals: article.slug } },
    limit: 1,
    draft: true,
    ...asUser(req),
  })
  const current = existing.docs[0]
  if (current?.contentHash === contentHash) return { path, status: 'unchanged', id: current.id }

  const data = {
    title: article.title,
    slug: article.slug,
    section: section.id,
    summary: article.summary,
    order: article.order ?? null,
    updated: article.updated,
    content: await markdownToLexical({
      config: payload.config,
      markdown: article.markdown,
      section: article.section,
      imageIds,
    }),
    meta: { title: article.seoTitle ?? null, description: article.seoDescription ?? null },
    sourceMarkdown: article.markdown,
    plainText: markdownToPlainText(article.markdown),
    contentHash,
    _status: article.status,
  }
  const draft = article.status === 'draft'

  if (!current) {
    const doc = await payload.create({ collection: 'support-articles', data, draft, ...asUser(req) })
    return { path, status: 'created', id: doc.id }
  }
  await payload.update({ collection: 'support-articles', id: current.id, data, draft, ...asUser(req) })
  return { path, status: 'updated', id: current.id }
}
