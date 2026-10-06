import type { SanitizedConfig } from 'payload'

import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import type { SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'

import type { SupportArticle } from '@/payload-types'
import { randomBytes } from 'crypto'

import { supportEditorFeatures } from '@/collections/Support/editor'
import { normalizeForSearch } from '@/collections/Support/shared'
import { IMAGE_LINE } from './validate'

// The Lexical Markdown import drops the line break between wrapped "> " lines without adding a
// space ("la\n> emitas" → "laemitas"), so wrapped quote lines are joined into one first.
const joinQuoteLines = (markdown: string) => markdown.replace(/^(>.*)\n>\s?(?=\S)/gm, '$1 ')

type Segment = { kind: 'markdown'; text: string } | { kind: 'image'; file: string }

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
      segments.push({ kind: 'image', file: image[2] })
    } else {
      buffer.push(line)
    }
  }
  flush()
  return segments
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
  const editorConfig = await editorConfigFactory.fromFeatures({ config, features: supportEditorFeatures })
  const children: SerializedLexicalNode[] = []
  for (const part of segment(markdown)) {
    if (part.kind === 'markdown') {
      const state = convertMarkdownToLexical({ editorConfig, markdown: part.text })
      children.push(...state.root.children)
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
