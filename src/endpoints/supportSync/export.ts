import type { PayloadRequest, SanitizedConfig } from 'payload'
import { parse as parseYaml } from 'yaml'

import type { SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'

import type { SupportArticle } from '@/payload-types'

import { createHash } from 'crypto'

import { canonicalMarkdown, imageLine, nodesToMarkdown, supportEditorConfig } from './markdown'
import { IMAGE_LINE, type ParsedArticle } from './validate'

// Turns an article back into the POS repo's .md file, so edits made in the admin can be pulled into
// the repo. Inverse of parseArticleFile + markdownToLexical: frontmatter from the fields, body from
// the Lexical content, upload nodes as image lines alone on their line.
//
// Admin edits are detected by comparison, not by a flag: the sync stores `exportHash`, the hash of
// the file as it exports right after the sync wrote it. An article whose export no longer matches
// was changed in the admin since.

type UploadNode = SerializedLexicalNode & { value: string | { id: string } }

type FileFields = Pick<ParsedArticle, 'title' | 'slug' | 'section' | 'summary' | 'updated' | 'status'> &
  Partial<Pick<ParsedArticle, 'id' | 'order' | 'seoTitle' | 'seoDescription'>>

const isUpload = (node: SerializedLexicalNode): node is UploadNode => node.type === 'upload'

const idOf = (value: string | { id: string } | null | undefined) =>
  value && typeof value === 'object' ? value.id : value

const sha256 = (data: string) => createHash('sha256').update(data).digest('hex')

// Writes a scalar plain, as the repo's files do, unless YAML would read it back as something else
// (a number, a boolean, a date object, a mapping).
const yamlValue = (value: string) => (parseYaml(`v: ${value}`)?.v === value ? value : JSON.stringify(value))

// Same field order the POS writer uses, `id` first.
const buildFile = (fields: FileFields, body: string) => {
  const entries: [string, string | number | null | undefined][] = [
    ['id', fields.id],
    ['title', fields.title],
    ['slug', fields.slug],
    ['section', fields.section],
    ['summary', fields.summary],
    ['order', fields.order],
    ['updated', fields.updated],
    ['status', fields.status],
    ['seoTitle', fields.seoTitle],
    ['seoDescription', fields.seoDescription],
  ]
  const frontmatter = entries
    .filter(([, value]) => value !== null && value !== undefined && value !== '')
    .map(([key, value]) => `${key}: ${typeof value === 'number' ? value : yamlValue(String(value))}`)
    .join('\n')
  return `---\n${frontmatter}\n---\n${body}\n`
}

// The hash ignores `id`: a new article has none in the file the sync receives.
const hashOf = (fields: FileFields, body: string) => sha256(buildFile({ ...fields, id: undefined }, body))

// Hash of an incoming repo file in exported form. The sync stores it as `exportHash`.
export const fileExportHash = async (config: SanitizedConfig, article: ParsedArticle) =>
  hashOf(article, await canonicalMarkdown(config, article.markdown))

// The alt text is not stored on the upload node, so it comes from the image line last synced from
// the repo, then from the media's own alt, then from the file name.
const altsFromMarkdown = (markdown: string | null | undefined) => {
  const alts = new Map<string, string>()
  for (const line of (markdown ?? '').split('\n')) {
    const image = line.trim().match(IMAGE_LINE)
    if (image) alts.set(image[2], image[1].trim())
  }
  return alts
}

const articleBody = async (req: PayloadRequest, doc: SupportArticle) => {
  const { payload } = req
  const children = (doc.content?.root?.children ?? []) as SerializedLexicalNode[]
  const mediaIds = children.filter(isUpload).map((node) => idOf(node.value)!)
  const media = mediaIds.length
    ? (
        await payload.find({
          collection: 'support-media',
          where: { id: { in: mediaIds } },
          limit: mediaIds.length,
          pagination: false,
          depth: 0,
          req,
          overrideAccess: true,
        })
      ).docs
    : []
  const mediaById = new Map(media.map((item) => [item.id, item]))
  const alts = altsFromMarkdown(doc.sourceMarkdown)
  const editorConfig = await supportEditorConfig(payload.config)

  const blocks: string[] = []
  let buffer: SerializedLexicalNode[] = []
  const flush = () => {
    if (buffer.length) blocks.push(nodesToMarkdown(editorConfig, buffer))
    buffer = []
  }
  for (const node of children) {
    if (!isUpload(node)) {
      buffer.push(node)
      continue
    }
    flush()
    const item = mediaById.get(idOf(node.value)!)
    if (!item?.key) continue
    const file = item.key.split('/').pop()!
    blocks.push(imageLine(alts.get(file) || item.alt || file, file))
  }
  flush()
  return blocks.filter(Boolean).join('\n\n')
}

// `hash` is null when the article's section is gone (deleted in the admin): the path and the
// frontmatter cannot be rebuilt then, only the body can be compared.
export type ExportedArticle = { id: string; path: string; content: string; body: string; hash: string | null }

export const exportArticle = async (req: PayloadRequest, doc: SupportArticle): Promise<ExportedArticle> => {
  const section = await req.payload.findByID({
    collection: 'support-sections',
    id: idOf(doc.section as string | { id: string })!,
    depth: 0,
    disableErrors: true,
    req,
    overrideAccess: true,
  })
  const sectionSlug = section?.slug ?? ''
  const fields: FileFields = {
    id: doc.id,
    title: doc.title,
    slug: doc.slug,
    section: sectionSlug,
    summary: doc.summary,
    order: doc.order ?? undefined,
    updated: doc.updated?.slice(0, 10),
    status: doc._status === 'draft' ? 'draft' : 'published',
    seoTitle: doc.meta?.title ?? undefined,
    seoDescription: doc.meta?.description ?? undefined,
  }
  const body = await articleBody(req, doc)
  return {
    id: doc.id,
    path: `${sectionSlug}/${doc.slug}.md`,
    content: buildFile(fields, body),
    body,
    hash: section ? hashOf(fields, body) : null,
  }
}

// `doc` is read with draft: true, so an admin draft that is not published yet also counts.
// Articles synced before `exportHash` existed fall back to comparing the body with the last synced
// Markdown, which catches body edits made in the admin before this shipped.
export const hasAdminEdits = async (req: PayloadRequest, doc: SupportArticle, exported?: ExportedArticle) => {
  const current = exported ?? (await exportArticle(req, doc))
  if (doc.exportHash && current.hash) return current.hash !== doc.exportHash
  if (!doc.sourceMarkdown) return false
  return current.body !== (await canonicalMarkdown(req.payload.config, doc.sourceMarkdown))
}
