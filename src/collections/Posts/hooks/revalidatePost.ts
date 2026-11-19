import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Post } from '../../../payload-types'
import { BLOG_PATH, postPath } from '@/utilities/blog'

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = postPath(doc.slug)

      payload.logger.info(`Revalidating post at path: ${path}`)

      revalidatePath(path)
      revalidatePath(BLOG_PATH)
      revalidateTag('posts-sitemap')
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = postPath(previousDoc.slug)

      payload.logger.info(`Revalidating old post at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidatePath(BLOG_PATH)
      revalidateTag('posts-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = postPath(doc?.slug)

    revalidatePath(path)
    revalidatePath(BLOG_PATH)
    revalidateTag('posts-sitemap')
  }

  return doc
}
