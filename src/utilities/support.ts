import { getPayload, type Where } from 'payload'
import config from '@payload-config'
import { cache } from 'react'

import { normalizeForSearch } from '@/collections/Support/shared'
import type { SupportArticle, SupportSection } from '@/payload-types'

// Data access for the public /soporte pages. Only published content, with access control applied,
// so drafts never leak (R12). Wrapped in React `cache` to dedupe generateMetadata + page queries.

export type SupportArticleSummary = Pick<SupportArticle, 'id' | 'title' | 'slug' | 'summary' | 'order'>
export type SupportSectionWithArticles = SupportSection & {
  articles: (SupportArticleSummary & { sectionSlug: string })[]
}

const publicQuery = { overrideAccess: false, draft: false } as const

// Articles with an explicit order come first, then the rest by title (per the writing guidelines).
export const byOrderThenTitle = (a: SupportArticleSummary, b: SupportArticleSummary) =>
  (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) ||
  a.title.localeCompare(b.title, 'es')

const summarySelect = { title: true, slug: true, summary: true, order: true, section: true } as const

export const getSupportDirectory = cache(async (): Promise<SupportSectionWithArticles[]> => {
  const payload = await getPayload({ config })
  const [sections, articles] = await Promise.all([
    payload.find({ collection: 'support-sections', sort: 'order', pagination: false, depth: 0, ...publicQuery }),
    payload.find({
      collection: 'support-articles',
      where: { _status: { equals: 'published' } },
      pagination: false,
      depth: 0,
      select: summarySelect,
      ...publicQuery,
    }),
  ])
  return sections.docs
    .map((section) => ({
      ...section,
      articles: articles.docs
        .filter((article) => article.section === section.id)
        .sort(byOrderThenTitle)
        .map((article) => ({ ...article, sectionSlug: section.slug })),
    }))
    .filter((section) => section.articles.length > 0)
})

export const getSupportSection = cache(async (slug: string) => {
  const directory = await getSupportDirectory()
  return directory.find((section) => section.slug === slug) ?? null
})

export const getSupportArticle = cache(async (slug: string) => {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'support-articles',
    where: { slug: { equals: slug }, _status: { equals: 'published' } },
    limit: 1,
    depth: 1,
    ...publicQuery,
  })
  const article = result.docs[0]
  if (!article || typeof article.section !== 'object') return null
  return article as SupportArticle & { section: SupportSection }
})

export const supportArticlePath = (section: string, slug: string) => `/soporte/${section}/${slug}`

export type SupportSearchResult = SupportArticleSummary & { sectionSlug: string; sectionTitle: string }

// Support-only search (independent of the blog search plugin): every word of the query must appear
// in the article's search text, ignoring accents and case. Title matches rank first.
export const searchSupportArticles = cache(async (query: string): Promise<SupportSearchResult[]> => {
  const words = normalizeForSearch(query)
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 1)
    .slice(0, 8)
  if (!words.length) return []
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'support-articles',
    where: {
      and: [
        { _status: { equals: 'published' } },
        ...words.map(
          (word): Where => ({
            // plainText holds the normalized title + summary + body (see buildSearchText).
            plainText: { like: word },
          }),
        ),
      ],
    },
    limit: 30,
    depth: 1,
    select: { ...summarySelect },
    ...publicQuery,
  })
  const titleScore = (title: string) => words.filter((word) => normalizeForSearch(title).includes(word)).length
  return result.docs
    .flatMap((article) => {
      const section = article.section
      if (!section || typeof section !== 'object') return []
      return [{ ...article, sectionSlug: section.slug, sectionTitle: section.title }]
    })
    .sort((a, b) => titleScore(b.title) - titleScore(a.title) || a.title.localeCompare(b.title, 'es'))
})
