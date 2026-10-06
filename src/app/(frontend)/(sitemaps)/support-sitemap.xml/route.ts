import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

import { getServerSideURL } from '@/utilities/getURL'
import { supportArticlePath } from '@/utilities/support'

const getSupportSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL = getServerSideURL()

    const [sections, articles] = await Promise.all([
      payload.find({
        collection: 'support-sections',
        overrideAccess: false,
        depth: 0,
        pagination: false,
        select: { slug: true, updatedAt: true },
      }),
      payload.find({
        collection: 'support-articles',
        overrideAccess: false,
        draft: false,
        depth: 0,
        pagination: false,
        where: { _status: { equals: 'published' } },
        select: { slug: true, section: true, updatedAt: true },
      }),
    ])

    const sectionSlugs = new Map(sections.docs.map((section) => [section.id, section.slug]))
    const dateFallback = new Date().toISOString()

    const articleEntries = articles.docs.flatMap((article) => {
      const sectionSlug = sectionSlugs.get(article.section as string)
      if (!sectionSlug) return []
      return [
        {
          loc: `${SITE_URL}${supportArticlePath(sectionSlug, article.slug)}`,
          lastmod: article.updatedAt || dateFallback,
        },
      ]
    })
    // Only sections that have at least one published article have a page.
    const liveSections = new Set(articles.docs.map((article) => article.section as string))
    const sectionEntries = sections.docs
      .filter((section) => liveSections.has(section.id))
      .map((section) => ({
        loc: `${SITE_URL}/soporte/${section.slug}`,
        lastmod: section.updatedAt || dateFallback,
      }))

    return [{ loc: `${SITE_URL}/soporte`, lastmod: dateFallback }, ...sectionEntries, ...articleEntries]
  },
  ['support-sitemap'],
  {
    tags: ['support-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getSupportSitemap()

  return getServerSideSitemap(sitemap)
}
