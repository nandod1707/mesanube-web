import { getPayload } from 'payload'
import React from 'react'

import configPromise from '@payload-config'
import { CollectionArchive } from '@/components/CollectionArchive'
import { CtaLink } from '@/components/shared/CtaLink'
import { UseCaseHero } from '@/components/usecase'

import { BlogPagination } from './BlogPagination'
import { BlogShell } from './BlogShell'

export const POSTS_PER_PAGE = 12

export async function findBlogPage(page: number) {
  const payload = await getPayload({ config: configPromise })
  return payload.find({
    collection: 'posts',
    depth: 1,
    limit: POSTS_PER_PAGE,
    page,
    sort: '-publishedAt',
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      publishedAt: true,
      heroImage: true,
    },
  })
}

type Result = Awaited<ReturnType<typeof findBlogPage>>

/** /blog and /blog/page/N: text hero, post grid, pagination (or an empty state). */
export function BlogArchive({ posts }: { posts: Result }) {
  return (
    <BlogShell>
      <UseCaseHero
        eyebrow="Blog"
        heading="Para los que llevan un local adelante"
        subtitle="Facturación ARCA, caja, cocina y equipo: lo que aprendimos trabajando con restaurantes, cafés y bares de Argentina, contado sin vueltas."
      />
      <section className="flex w-full flex-col items-start gap-[60px] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
        {posts.totalDocs > 0 ? (
          <>
            <CollectionArchive posts={posts.docs} />
            <BlogPagination page={posts.page ?? 1} totalPages={posts.totalPages} />
          </>
        ) : (
          <div className="flex flex-col items-start gap-6">
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              Todavía no publicamos artículos. Mientras tanto, mirá cómo funciona Mesanube.
            </p>
            <CtaLink href="/funciones" variant="outline">
              Ver funciones
            </CtaLink>
          </div>
        )}
      </section>
    </BlogShell>
  )
}
