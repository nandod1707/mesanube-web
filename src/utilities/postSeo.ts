import type { Metadata } from 'next'

import type { FaqItem } from '@/components/shared/FaqSection'
import type { Media, Post } from '@/payload-types'

import { getServerSideURL } from './getURL'
import { mergeOpenGraph } from './mergeOpenGraph'

// SEO for blog posts. Editors often leave the SEO tab empty, so every field
// falls back to the post itself: title → post title, description → opening
// paragraph, image → featured image. FAQ schema is derived from the content.

type LexicalNode = {
  type?: string
  tag?: string
  text?: string
  format?: number
  children?: LexicalNode[]
}

const FAQ_HEADING = /^preguntas frecuentes$/i
const DESCRIPTION_MAX = 155
const ITALIC = 2

const textOf = (node: LexicalNode): string =>
  (node.text ?? '') + (node.children ?? []).map(textOf).join('')

const clean = (text: string) => text.replace(/\s+/g, ' ').trim()

const topLevel = (post: Partial<Post>): LexicalNode[] =>
  (post.content?.root?.children as LexicalNode[] | undefined) ?? []

/** A paragraph fully in italics (or wrapped in literal `*`) is the closing CTA, not FAQ copy. */
const isAside = (node: LexicalNode, text: string) => {
  if (text.startsWith('*')) return true
  const leaves = (node.children ?? []).filter((c) => c.type === 'text' && c.text?.trim())
  return leaves.length > 0 && leaves.every((c) => ((c.format ?? 0) & ITALIC) !== 0)
}

const isQuestion = (text: string) => text.startsWith('¿') && text.endsWith('?')

/**
 * Q&A pairs under the "Preguntas frecuentes" h2: each `¿…?` paragraph is a
 * question, the paragraphs after it (until the next question or heading) its answer.
 */
export function extractPostFaq(post: Partial<Post>): FaqItem[] {
  const items: FaqItem[] = []
  let inFaq = false
  let current: { q: string; a: string[] } | null = null

  const flush = () => {
    if (current && current.a.length) items.push({ q: current.q, a: current.a.join(' ') })
    current = null
  }

  for (const node of topLevel(post)) {
    const text = clean(textOf(node))
    if (node.type === 'heading') {
      if (inFaq) break
      inFaq = FAQ_HEADING.test(text)
      continue
    }
    if (!inFaq || node.type !== 'paragraph' || !text) continue
    if (isAside(node, text)) continue
    if (isQuestion(text)) {
      flush()
      current = { q: text, a: [] }
    } else if (current) {
      current.a.push(text)
    }
  }
  flush()
  return items
}

/** First real paragraph, trimmed at a word boundary to fit a meta description. */
export function postExcerpt(post: Partial<Post>): string {
  const first = topLevel(post).find(
    (n) => n.type === 'paragraph' && clean(textOf(n)).length > 40,
  )
  const text = first ? clean(textOf(first)) : ''
  if (text.length <= DESCRIPTION_MAX) return text
  const cut = text.slice(0, DESCRIPTION_MAX - 1)
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…'
}

const imageUrl = (image: Post['heroImage'] | undefined): string | undefined => {
  if (!image || typeof image !== 'object') return undefined
  const media = image as Media
  const path = media.sizes?.og?.url || media.url
  return path ? getServerSideURL() + path : undefined
}

export const postSeoTitle = (post: Partial<Post>) => post.meta?.title || post.title || 'Blog'
export const postSeoDescription = (post: Partial<Post>) =>
  post.meta?.description || postExcerpt(post)
export const postSeoImage = (post: Partial<Post>) =>
  imageUrl(post.meta?.image) ?? imageUrl(post.heroImage)

export function generatePostMeta(post: Partial<Post> | null, path: string): Metadata {
  if (!post) return { title: 'Blog | Mesanube' }

  const title = `${postSeoTitle(post)} | Mesanube`
  const description = postSeoDescription(post)
  const image = postSeoImage(post)

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: mergeOpenGraph({
      type: 'article',
      title,
      description,
      url: path,
      images: image ? [{ url: image }] : undefined,
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt ?? undefined,
    }),
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}
