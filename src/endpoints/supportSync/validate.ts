import { parse as parseYaml } from 'yaml'

import { RESERVED_SECTION_SLUGS, SLUG_PATTERN, SUPPORT_IMAGE_FILE } from '@/collections/Support/shared'

// Enforces the source contract in docs/support-article-guidelines.md. Every error message is in
// Spanish because it is shown to whoever writes the article in the POS repo.

export type ParseResult<T> = { ok: true } & T | { ok: false; errors: string[] }

export type ArticleImage = { alt: string; key: string }

export type ParsedArticle = {
  title: string
  slug: string
  section: string
  summary: string
  order?: number
  updated: string
  status: 'published' | 'draft'
  seoTitle?: string
  seoDescription?: string
  markdown: string
  images: ArticleImage[]
}

export type ParsedSection = {
  title: string
  slug: string
  description: string
  order: number
}

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/
const DATE = /^\d{4}-\d{2}-\d{2}$/
// An image must sit alone on its line: ![alt](./images/file.ext)
export const IMAGE_LINE = new RegExp(`^!\\[([^\\]]*)\\]\\(\\./images/(${SUPPORT_IMAGE_FILE})\\)$`)

type Frontmatter = Record<string, unknown>

const splitFile = (content: string): { data: Frontmatter; body: string; bodyStartLine: number } | null => {
  const match = content.match(FRONTMATTER)
  if (!match) return null
  let data: unknown
  try {
    data = parseYaml(match[1])
  } catch {
    return null
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null
  const bodyStartLine = match[0].split('\n').length
  return { data: data as Frontmatter, body: content.slice(match[0].length), bodyStartLine }
}

// Splits "folder/name.md" into its folder and basename without extension.
const splitPath = (path: string) => {
  const parts = path.replace(/\\/g, '/').split('/').filter(Boolean)
  const file = parts.at(-1) ?? ''
  return { folder: parts.at(-2) ?? '', name: file.replace(/\.md$/, ''), isMarkdown: file.endsWith('.md') }
}

class FieldReader {
  errors: string[] = []
  constructor(private data: Frontmatter) {}

  string(name: string, { required = true, max }: { required?: boolean; max?: number } = {}) {
    const value = this.data[name]
    if (value === undefined || value === null || value === '') {
      if (required) this.errors.push(`Falta el campo obligatorio "${name}".`)
      return undefined
    }
    // YAML parses an unquoted date as a string only with the core schema; normalize anyway.
    const text = value instanceof Date ? value.toISOString().slice(0, 10) : String(value).trim()
    if (max && text.length > max) {
      this.errors.push(`"${name}" tiene ${text.length} caracteres; el máximo es ${max}.`)
    }
    return text
  }

  number(name: string, { required = true }: { required?: boolean } = {}) {
    const value = this.data[name]
    if (value === undefined || value === null || value === '') {
      if (required) this.errors.push(`Falta el campo obligatorio "${name}".`)
      return undefined
    }
    if (typeof value !== 'number' || !Number.isInteger(value)) {
      this.errors.push(`"${name}" tiene que ser un número entero.`)
      return undefined
    }
    return value
  }
}

const stripInlineCode = (line: string) => line.replace(/`[^`]*`/g, '``')

const BODY_RULES: { test: (line: string) => boolean; message: string }[] = [
  { test: (l) => /^#\s/.test(l), message: 'no uses "#" (H1): el título ya es el H1. Usá "##".' },
  { test: (l) => /^#{4,}\s/.test(l), message: 'solo se permiten encabezados "##" y "###".' },
  { test: (l) => /^\s*```/.test(l), message: 'no se permiten bloques de código; usá código en línea.' },
  { test: (l) => /^\s*\|/.test(l), message: 'no se permiten tablas.' },
  { test: (l) => /<\/?[a-zA-Z][^>]*>/.test(stripInlineCode(l)), message: 'no se permite HTML.' },
  { test: (l) => /\[\^[^\]]+\]/.test(l), message: 'no se permiten notas al pie.' },
  {
    // Links may only point to the web, a mail address, a site path or an anchor.
    test: (l) =>
      [...stripInlineCode(l).matchAll(/(?<!!)\[[^\]]*\]\(([^)\s]*)/g)].some(
        ([, href]) => !/^(?:https?:\/\/|mailto:|\/|#)/i.test(href),
      ),
    message: 'los links tienen que empezar con https://, mailto:, / o #.',
  },
]

const validateBody = (body: string, bodyStartLine: number, section: string | undefined) => {
  const errors: string[] = []
  const images: ArticleImage[] = []
  body.split('\n').forEach((raw, index) => {
    const line = raw.trimEnd()
    const where = `línea ${bodyStartLine + index}`
    for (const rule of BODY_RULES) {
      if (rule.test(line)) errors.push(`${where}: ${rule.message}`)
    }
    if (!line.includes('![')) return
    const image = line.trim().match(IMAGE_LINE)
    if (!image) {
      errors.push(
        `${where}: las imágenes van solas en su línea, con alt y desde ./images/ (ej. ![Botón Anular](./images/anular-1.png)).`,
      )
      return
    }
    const alt = image[1].trim()
    if (!alt) errors.push(`${where}: la imagen necesita un texto alternativo (alt).`)
    if (section) images.push({ alt, key: `${section}/${image[2]}` })
  })
  return { errors, images }
}

export const parseArticleFile = (path: string, content: string): ParseResult<{ article: ParsedArticle }> => {
  const file = splitPath(path)
  if (!file.isMarkdown) return { ok: false, errors: [`"${path}" no es un archivo .md.`] }
  const split = splitFile(content)
  if (!split) return { ok: false, errors: ['Falta el frontmatter (bloque --- al principio) o no es YAML válido.'] }

  const fields = new FieldReader(split.data)
  const title = fields.string('title')
  const slug = fields.string('slug')
  const section = fields.string('section')
  const summary = fields.string('summary', { max: 160 })
  const updated = fields.string('updated')
  const status = fields.string('status')
  const order = fields.number('order', { required: false })
  const seoTitle = fields.string('seoTitle', { required: false, max: 60 })
  const seoDescription = fields.string('seoDescription', { required: false, max: 160 })
  const errors = fields.errors

  if (slug && !SLUG_PATTERN.test(slug)) errors.push(`"slug" tiene que ser minúsculas con guiones: "${slug}".`)
  if (slug && slug !== file.name) errors.push(`"slug" (${slug}) tiene que ser igual al nombre del archivo (${file.name}).`)
  if (section && section !== file.folder) {
    errors.push(`"section" (${section}) tiene que ser igual a la carpeta (${file.folder}).`)
  }
  if (updated && !DATE.test(updated)) errors.push(`"updated" tiene que tener formato AAAA-MM-DD: "${updated}".`)
  if (status && status !== 'published' && status !== 'draft') {
    errors.push(`"status" tiene que ser "published" o "draft": "${status}".`)
  }

  const body = validateBody(split.body, split.bodyStartLine, section)
  errors.push(...body.errors)
  if (!split.body.trim()) errors.push('El artículo no tiene contenido.')

  if (errors.length) return { ok: false, errors }
  return {
    ok: true,
    article: {
      title: title!,
      slug: slug!,
      section: section!,
      summary: summary!,
      order,
      updated: updated!,
      status: status as ParsedArticle['status'],
      seoTitle,
      seoDescription,
      markdown: split.body.trim(),
      images: body.images,
    },
  }
}

export const parseSectionFile = (path: string, content: string): ParseResult<{ section: ParsedSection }> => {
  const file = splitPath(path)
  if (file.name !== '_seccion') return { ok: false, errors: [`El archivo de sección se llama _seccion.md, no "${path}".`] }
  const split = splitFile(content)
  if (!split) return { ok: false, errors: ['Falta el frontmatter (bloque --- al principio) o no es YAML válido.'] }

  const fields = new FieldReader(split.data)
  const title = fields.string('title')
  const slug = fields.string('slug')
  const description = fields.string('description')
  const order = fields.number('order')
  const errors = fields.errors
  if (slug && slug !== file.folder) errors.push(`"slug" (${slug}) tiene que ser igual a la carpeta (${file.folder}).`)
  if (slug && RESERVED_SECTION_SLUGS.includes(slug)) errors.push(`"${slug}" está reservado: usá otro nombre de carpeta.`)
  if (slug && !SLUG_PATTERN.test(slug)) errors.push(`"slug" tiene que ser minúsculas con guiones: "${slug}".`)

  if (errors.length) return { ok: false, errors }
  return { ok: true, section: { title: title!, slug: slug!, description: description!, order: order! } }
}

// Image paths arrive as "<section>/images/<file>"; the stored key drops the images/ segment.
export const parseImagePath = (path: string): ParseResult<{ key: string }> => {
  const match = path.replace(/\\/g, '/').match(new RegExp(`^([a-z0-9-]+)/images/(${SUPPORT_IMAGE_FILE})$`))
  if (!match) {
    return { ok: false, errors: [`Ruta de imagen inválida "${path}": se espera <seccion>/images/<archivo>.png|webp|jpg.`] }
  }
  return { ok: true, key: `${match[1]}/${match[2]}` }
}
