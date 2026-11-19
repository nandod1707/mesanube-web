import type { Metadata } from 'next'

import type { FaqItem } from '@/components/shared/FaqSection'
import type { Media, Post } from '@/payload-types'

import { getServerSideURL } from './getURL'
import { mergeOpenGraph } from './mergeOpenGraph'

// SEO for blog posts. Editors often leave the SEO tab empty, so every field
// falls back to the post itself: title → post title, description → opening
// paragraph, image → featured image. The FAQ comes from the post's `faq` field.

type LexicalNode = {
  type?: string
  tag?: string
  text?: string
  children?: LexicalNode[]
}

const DESCRIPTION_MAX = 155

const textOf = (node: LexicalNode): string =>
  (node.text ?? '') + (node.children ?? []).map(textOf).join('')

const clean = (text: string) => text.replace(/\s+/g, ' ').trim()

const topLevel = (post: Partial<Post>): LexicalNode[] =>
  (post.content?.root?.children as LexicalNode[] | undefined) ?? []

/** The post's FAQ field as `{ q, a }` pairs (shared by the section and the FAQPage schema). */
export function postFaq(post: Partial<Post>): FaqItem[] {
  return (post.faq ?? [])
    .map(({ question, answer }) => ({ q: question.trim(), a: answer.trim() }))
    .filter((item) => item.q && item.a)
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
