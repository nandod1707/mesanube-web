import type { PayloadRequest } from 'payload'

import type { SupportArticle } from '@/payload-types'

import { createHash } from 'crypto'

import { SUPPORT_IMAGE_MAX_BYTES, SUPPORT_IMAGE_TYPES } from '@/collections/Support/shared'

import { buildSearchText, markdownToLexical } from './markdown'
import { parseArticleFile, parseImagePath, parseSectionFile } from './validate'

// Core of the support sync. Each function handles one file from the POS repo and reports what
// happened to it, so the GitHub Action can print a per-file summary and fail on any error.

export type SyncResult =
  | { path: string; status: 'created' | 'updated' | 'unchanged'; id: string }
  | { path: string; status: 'error'; errors: string[] }

export type DeleteResult = { id: string; status: 'deleted' | 'not_found' }

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
    current.title === data.title &&
    current.description === data.description &&
    current.order === data.order &&
    current.icon === data.icon
  if (unchanged) return { path, status: 'unchanged', id: current.id }
  await payload.update({ collection: 'support-sections', id: current.id, data, ...asUser(req) })
  return { path, status: 'updated', id: current.id }
}


export const syncImage = async (
  req: PayloadRequest,
  path: string,
  file: Buffer,
  alt?: string,
): Promise<SyncResult> => {
  const parsed = parseImagePath(path)
  if (!parsed.ok) return { path, status: 'error', errors: parsed.errors }
  if (file.byteLength > SUPPORT_IMAGE_MAX_BYTES) {
    return { path, status: 'error', errors: [`La imagen pesa ${Math.round(file.byteLength / 1024)} KB; el máximo es 500 KB.`] }
  }
  const { payload } = req
  const hash = sha256(file)
  const name = parsed.key.split('/').pop()!
  const upload = {
    data: file,
    mimetype: SUPPORT_IMAGE_TYPES[name.split('.').pop() as keyof typeof SUPPORT_IMAGE_TYPES],
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

// The frontmatter `id` is the article's identity, so the slug (and file) can be renamed. A file
// without `id` is new: it is created, and the Action writes the returned id back into the file. If an
// article with that slug already exists (an earlier run created it but the id write-back failed), it
// is adopted instead of duplicated.
const findArticle = async (
  req: PayloadRequest,
  id: string | undefined,
  slug: string,
): Promise<{ doc?: SupportArticle } | { errors: string[] }> => {
  const { payload } = req
  const bySlug = await payload.find({
    collection: 'support-articles',
    where: { slug: { equals: slug } },
    limit: 1,
    draft: true,
    depth: 0,
    ...asUser(req),
  })
  const slugOwner = bySlug.docs[0]
  if (!id) return { doc: slugOwner }

  const doc = await payload.findByID({
    collection: 'support-articles',
    id,
    draft: true,
    depth: 0,
    disableErrors: true,
    ...asUser(req),
  })
  if (!doc) {
    return { errors: [`No existe un artículo con id "${id}". Si se borró, sacá el "id" del frontmatter para crearlo de nuevo.`] }
  }
  if (slugOwner && slugOwner.id !== doc.id) {
    return { errors: [`El slug "${slug}" ya lo usa otro artículo (id ${slugOwner.id}).`] }
  }
  return { doc }
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

  // Image and section ids are part of the hash so a recreated image or section (new id) re-links the
  // article instead of being skipped as unchanged.
  const contentHash = sha256(
    JSON.stringify({ content, section: section.id, images: [...imageIds.entries()].sort() }),
  )
  const found = await findArticle(req, article.id, article.slug)
  if ('errors' in found) return { path, status: 'error', errors: found.errors }
  const current = found.doc
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
    plainText: buildSearchText(article.title, article.summary, article.markdown),
    contentHash,
    _status: article.status,
  }
  // Always write the main document (draft: false) and let `_status` decide visibility. Payload's
  // `draft: true` would only save a draft version and leave an already-published article live.
  if (!current) {
    const doc = await payload.create({ collection: 'support-articles', data, draft: false, ...asUser(req) })
    return { path, status: 'created', id: doc.id }
  }
  await payload.update({
    collection: 'support-articles',
    id: current.id,
    data,
    draft: false,
    ...asUser(req),
  })
  return { path, status: 'updated', id: current.id }
}

// Deletes the article whose file was removed. The Action reads the `id` from the file's last version
// in git. Idempotent: an article that is already gone reports not_found instead of failing the run.
export const deleteArticle = async (req: PayloadRequest, id: string): Promise<DeleteResult> => {
  const { payload } = req
  const current = await payload.findByID({
    collection: 'support-articles',
    id,
    draft: true,
    depth: 0,
    disableErrors: true,
    ...asUser(req),
  })
  if (!current) return { id, status: 'not_found' }

  await payload.delete({ collection: 'support-articles', id: current.id, ...asUser(req) })
  return { id, status: 'deleted' }
}
