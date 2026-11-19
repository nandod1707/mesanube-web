import Link from 'next/link'
import React from 'react'

import { Media } from '@/components/Media'
import Reveal from '@/components/shared/Reveal'
import { BODY, EYEBROW, TITLE, TITLE_STYLE } from '@/components/usecase/styles'
import type { Post } from '@/payload-types'
import { BLOG_PATH } from '@/utilities/blog'

import { categoryTitles, formatAuthorNames, formatPostDate } from './format'

const META = 'font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--caption)]'

/**
 * Article header: "Blog · category" eyebrow, serif title, the meta description as a lede, author
 * and date, then the hero image as a rounded panel (no full-bleed overlay).
 */
export function PostHeader({ post }: { post: Post }) {
  const { heroImage, meta, populatedAuthors, publishedAt, title } = post
  const categories = categoryTitles(post.categories)
  const authors = formatAuthorNames(populatedAuthors)
  const lede = meta?.description

  return (
    <header className="flex w-full flex-col items-center gap-[60px] pt-6 sm:gap-[80px] lg:pt-10">
      <Reveal immediate className="flex w-full max-w-[900px] flex-col items-start gap-[30px]">
        <p className={`${EYEBROW} flex flex-wrap gap-x-2`}>
          <Link href={BLOG_PATH} className="hover:text-[var(--heading)]">
            Blog
          </Link>
          {categories.length > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span>{categories.join(', ')}</span>
            </>
          )}
        </p>
        <h1 className={TITLE} style={TITLE_STYLE}>
          {title}
        </h1>
        {lede && <p className={`max-w-[720px] ${BODY}`}>{lede}</p>}
        {(authors || publishedAt) && (
          <p className={`${META} flex flex-wrap gap-x-2`}>
            {authors && <span>Por {authors}</span>}
            {authors && publishedAt && <span aria-hidden="true">·</span>}
            {publishedAt && <time dateTime={publishedAt}>{formatPostDate(publishedAt)}</time>}
          </p>
        )}
      </Reveal>

      {heroImage && typeof heroImage === 'object' && (
        <Reveal
          immediate
          delay={1}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--media-bg)] lg:rounded-[var(--radius-3xl)]"
        >
          <Media fill priority imgClassName="object-cover" resource={heroImage} size="100vw" />
        </Reveal>
      )}
    </header>
  )
}
