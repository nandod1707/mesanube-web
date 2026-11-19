import type { Metadata } from 'next/types'
import { notFound, permanentRedirect } from 'next/navigation'
import { getPayload } from 'payload'

import configPromise from '@payload-config'
import { BlogArchive, findBlogPage, POSTS_PER_PAGE } from '@/components/blog/BlogArchive'
import { BLOG_PATH, blogPagePath } from '@/utilities/blog'

export const revalidate = 600

type Args = { params: Promise<{ pageNumber: string }> }

export default async function BlogArchivePage({ params }: Args) {
  const page = Number((await params).pageNumber)
  if (!Number.isInteger(page) || page < 1) notFound()
  // Page 1 lives at /blog.
  if (page === 1) permanentRedirect(BLOG_PATH)

  const posts = await findBlogPage(page)
  if (page > posts.totalPages) notFound()
  return <BlogArchive posts={posts} />
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { pageNumber } = await params
  return {
    title: `Blog de Mesanube. Página ${pageNumber}`,
    alternates: { canonical: blogPagePath(Number(pageNumber)) },
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({ collection: 'posts', overrideAccess: false })
  const totalPages = Math.ceil(totalDocs / POSTS_PER_PAGE)
  // Page 1 is /blog itself.
  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, i) => ({ pageNumber: String(i + 2) }))
}
