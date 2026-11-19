import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import React, { cache } from 'react'

import configPromise from '@payload-config'
import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { BlogShell } from '@/components/blog/BlogShell'
import { PostBody } from '@/components/blog/PostBody'
import { PostHeader } from '@/components/blog/PostHeader'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { JsonLd } from '@/components/shared/JsonLd'
import { UseCaseCta } from '@/components/usecase'
import { BLOG_PATH, postPath } from '@/utilities/blog'
import {
  extractPostFaq,
  generatePostMeta,
  postSeoDescription,
  postSeoImage,
  postSeoTitle,
} from '@/utilities/postSeo'
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from '@/utilities/schema'

type Args = { params: Promise<{ slug?: string }> }

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })
  return posts.docs.map(({ slug }) => ({ slug }))
}

export default async function PostPage({ params }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await params
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = postPath(decodedSlug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) return <PayloadRedirects url={url} />

  const related = post.relatedPosts?.filter((p) => typeof p === 'object') ?? []
  const faq = extractPostFaq(post)

  return (
    <BlogShell>
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Blog', path: BLOG_PATH },
          { name: post.title, path: url },
        ])}
      />
      <JsonLd
        data={buildBlogPostingSchema({
          title: postSeoTitle(post),
          description: postSeoDescription(post),
          path: url,
          image: postSeoImage(post),
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          authors: post.populatedAuthors?.map((a) => a.name).filter((n): n is string => !!n),
        })}
      />
      {faq.length > 0 && <JsonLd data={buildFaqSchema(faq)} />}
      <article className="flex w-full flex-col items-center">
        <PostHeader post={post} />
        <PostBody content={post.content} />
      </article>
      <RelatedPosts docs={related} />
      <UseCaseCta
        heading="Menos papeles, más tiempo para tu local"
        subtitle="Probá Mesanube gratis: comandas, caja y facturación ARCA en un solo lugar."
        secondary={null}
        fullWidth={false}
      />
    </BlogShell>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug = '' } = await params
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })
  return generatePostMeta(post, postPath(decodedSlug))
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: { slug: { equals: slug } },
  })
  return result.docs?.[0] || null
})
