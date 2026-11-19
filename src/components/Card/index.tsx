import Link from 'next/link'
import React from 'react'

import { categoryTitles, formatPostDate } from '@/components/blog/format'
import { Media } from '@/components/Media'
import { BODY, CARD_TITLE, EYEBROW } from '@/components/usecase/styles'
import type { Post } from '@/payload-types'
import { postPath } from '@/utilities/blog'
import { cn } from '@/utilities/ui'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'> &
  Partial<Pick<Post, 'publishedAt' | 'heroImage'>>

/**
 * Post card: rounded image, category eyebrow, bold sans title, description and date. Flat — no
 * box, border or shadow; the whole card is one link and the image zooms on hover.
 */
export const Card: React.FC<{
  className?: string
  doc?: CardPostData
  /** Kept for the Payload blocks that pass it; posts are the only card type. */
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = ({ className, doc, showCategories, title: titleFromProps }) => {
  const { slug, categories, heroImage, meta, title, publishedAt } = doc || {}
  // The featured (hero) image is what the post shows; the SEO image is only a fallback.
  const image = heroImage && typeof heroImage === 'object' ? heroImage : meta?.image
  const description = meta?.description?.replace(/\s/g, ' ')
  const titleToUse = titleFromProps || title
  const labels = showCategories ? categoryTitles(categories) : []

  return (
    <article className={cn('h-full', className)}>
      <Link
        href={postPath(slug)}
        className="group flex h-full flex-col gap-5 rounded-[var(--radius-xl)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--olive)]"
      >
        {image && typeof image === 'object' && (
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--media-bg)]">
            <Media
              fill
              imgClassName="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              resource={image}
              size="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-col gap-3">
          {labels.length > 0 && <p className={EYEBROW}>{labels.join(', ')}</p>}
          {titleToUse && (
            <h3 className={`${CARD_TITLE} transition-colors duration-200 group-hover:text-[var(--olive)]`}>
              {titleToUse}
            </h3>
          )}
          {description && <p className={`line-clamp-3 ${BODY}`}>{description}</p>}
          {publishedAt && (
            <time
              dateTime={publishedAt}
              className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--caption)]"
            >
              {formatPostDate(publishedAt)}
            </time>
          )}
        </div>
      </Link>
    </article>
  )
}
