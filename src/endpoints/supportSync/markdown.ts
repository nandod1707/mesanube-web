import type { SanitizedConfig } from 'payload'

import { convertLexicalToMarkdown, convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import type { SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'

import type { SupportArticle } from '@/payload-types'
import { randomBytes } from 'crypto'

import { supportEditorFeatures } from '@/collections/Support/editor'
import { normalizeForSearch } from '@/collections/Support/shared'
import { IMAGE_LINE } from './validate'

// The Lexical Markdown import drops the line break between wrapped "> " lines without adding a
// space ("la\n> emitas" → "laemitas"), so wrapped quote lines are joined into one first.
const joinQuoteLines = (markdown: string) => markdown.replace(/^(>.*)\n>\s?(?=\S)/gm, '$1 ')

const LIST_ITEM = /^( *)([-*+]|\d+\.)( +)(.*)$/

// The Lexical list import reads nesting as 4 spaces per level, so the 3-space indent CommonMark uses
// under "1. " lands at level 0. List items are re-indented by nesting (an item is nested when it
// starts at or past the parent item's text column), 4 spaces per level. Other lines are untouched.
const normalizeListIndent = (markdown: string) => {
  let parents: number[] = [] // text column of each open parent item
  return markdown
    .split('\n')
    .map((line) => {
      const item = line.match(LIST_ITEM)
      if (!item) {
        if (line.trim() && !line.startsWith(' ')) parents = []
        return line
      }
      const [, spaces, marker, gap, text] = item
      while (parents.length && spaces.length < parents[parents.length - 1]) parents.pop()
      const level = parents.length
      parents.push(spaces.length + marker.length + gap.length)
      return `${'    '.repeat(level)}${marker} ${text}`
    })
    .join('\n')
}

type ListNode = SerializedLexicalNode & { listType: string; start?: number; children: ListItemNode[] }
type ListItemNode = SerializedLexicalNode & { value?: number; children: SerializedLexicalNode[] }

const isList = (node: SerializedLexicalNode | undefined): node is ListNode => node?.type === 'list'

// An item that only holds a nested list: Lexical's shape for a sublist under the item before it.
const isNestingItem = (item: ListItemNode) => item.children.length === 1 && isList(item.children[0])

// A sublist of another type than its parent (bullets under a numbered step) comes out of the import
// as three sibling lists: the parent's items, the nested items, the parent's remaining items. They
// are joined back into one list with the nested items in place, numbered as Lexical numbers them
// (a nesting item takes the next value without using it up).
const joinSplitLists = (children: SerializedLexicalNode[]) => {
  const joined: SerializedLexicalNode[] = []
  for (let i = 0; i < children.length; i++) {
    const node = children[i]
    const nested = children[i + 1]
    if (!isList(node) || !isList(nested) || !nested.children.every(isNestingItem)) {
      joined.push(node)
      continue
    }
    const rest = children[i + 2]
    const sameType = isList(rest) && rest.listType === node.listType
    const items = [...node.children, ...nested.children, ...(sameType ? rest.children : [])]
    let value = node.start ?? 1
    for (const item of items) {
      item.value = value
      if (!isNestingItem(item)) value++
    }
    joined.push({ ...node, children: items } as ListNode)
    i += sameType ? 2 : 1
  }
  return joined
}

// Bumped when the conversion changes, so a full re-sync reconverts every article (it is part of the
// sync's contentHash). Version 1 had no list fixes.
export const CONVERTER_VERSION = 2

// `legacy` reproduces version 1, which is what articles synced before exportHash were stored with.
const parseMarkdown = (editorConfig: EditorConfig, markdown: string, legacy = false) =>
  legacy
    ? convertMarkdownToLexical({ editorConfig, markdown }).root.children
    : joinSplitLists(convertMarkdownToLexical({ editorConfig, markdown: normalizeListIndent(markdown) }).root.children)

type Segment = { kind: 'markdown'; text: string } | { kind: 'image'; file: string; alt: string }

// The Lexical upload feature has no Markdown transformer, so image lines (validated to sit alone on
// their line) are split out and inserted as upload nodes between the converted Markdown chunks.
const segment = (markdown: string): Segment[] => {
  const segments: Segment[] = []
  let buffer: string[] = []
  const flush = () => {
    if (buffer.join('\n').trim()) segments.push({ kind: 'markdown', text: buffer.join('\n') })
    buffer = []
  }
  for (const line of joinQuoteLines(markdown).split('\n')) {
    const image = line.trim().match(IMAGE_LINE)
    if (image) {
      flush()
      segments.push({ kind: 'image', file: image[2], alt: image[1].trim() })
    } else {
      buffer.push(line)
    }
  }
  flush()
  return segments
}

export const supportEditorConfig = (config: SanitizedConfig) =>
  editorConfigFactory.fromFeatures({ config, features: supportEditorFeatures })

type EditorConfig = Awaited<ReturnType<typeof supportEditorConfig>>

// Lexical nodes back to Markdown, as one block (no images: those are handled by the caller).
export const nodesToMarkdown = (editorConfig: EditorConfig, children: SerializedLexicalNode[]) =>
  convertLexicalToMarkdown({
    data: { root: { type: 'root', format: '', indent: 0, version: 1, direction: 'ltr', children } } as never,
    editorConfig,
  }).trim()

export const imageLine = (alt: string, file: string) => `![${alt}](./images/${file})`

// The form the body takes after a trip through Lexical (Markdown to Lexical to Markdown). The
// converters do not preserve formatting details (blank lines, nested list indentation), so the
// sync compares bodies in this form, never as written.
export const canonicalMarkdown = async (config: SanitizedConfig, markdown: string, { legacy = false } = {}) => {
  const editorConfig = await supportEditorConfig(config)
  return segment(markdown)
    .map((part) =>
      part.kind === 'image'
        ? imageLine(part.alt, part.file)
        : nodesToMarkdown(editorConfig, parseMarkdown(editorConfig, part.text, legacy)),
    )
    .filter(Boolean)
    .join('\n\n')
}

export const markdownToLexical = async ({
  config,
  markdown,
  section,
  imageIds,
}: {
  config: SanitizedConfig
  markdown: string
  section: string
  // support-media id by key (<section>/<file>); every referenced image must be present
  imageIds: Map<string, string>
}): Promise<SupportArticle['content']> => {
  const editorConfig = await supportEditorConfig(config)
  const children: SerializedLexicalNode[] = []
  for (const part of segment(markdown)) {
    if (part.kind === 'markdown') {
      children.push(...parseMarkdown(editorConfig, part.text))
    } else {
      const value = imageIds.get(`${section}/${part.file}`)
      if (!value) throw new Error(`Imagen sin subir: ${section}/${part.file}`)
      children.push({
        type: 'upload',
        version: 3,
        format: '',
        // Same 24-hex shape as the ObjectId the admin editor assigns to upload nodes.
        id: randomBytes(12).toString('hex'),
        relationTo: 'support-media',
        value,
        fields: {},
      } as SerializedLexicalNode)
    }
  }
  return {
    root: { type: 'root', format: '', indent: 0, version: 1, direction: 'ltr', children },
  } as SupportArticle['content']
}

// Search text: title, summary and body without Markdown syntax, normalized for accent-insensitive
// matching. Never rendered.
export const buildSearchText = (title: string, summary: string, markdown: string) =>
  normalizeForSearch(`${title} ${summary} ${markdownToPlainText(markdown)}`)

const markdownToPlainText = (markdown: string) =>
  markdown
    .replace(/^!\[([^\]]*)\]\([^)]*\)$/gm, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#{2,3}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^\s*(?:\d+\.|[-*+])\s+/gm, '')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
