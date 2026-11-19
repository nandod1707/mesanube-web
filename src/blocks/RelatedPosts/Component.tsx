import React from 'react'

import { CollectionArchive } from '@/components/CollectionArchive'
import Reveal from '@/components/shared/Reveal'
import { EYEBROW, TITLE, TITLE_STYLE } from '@/components/usecase/styles'
import type { Post } from '@/payload-types'
import { cn } from '@/utilities/ui'

export type RelatedPostsProps = {
  className?: string
  docs?: Post[]
  heading?: string
}

/** "Seguí leyendo": section header + post card grid. */
export const RelatedPosts: React.FC<RelatedPostsProps> = ({
  className,
  docs,
  heading = 'Más para tu local',
}) => {
  const posts = docs?.filter((doc) => typeof doc === 'object') ?? []
  if (posts.length === 0) return null

  return (
    <section className={cn('flex w-full flex-col items-start pb-[80px] lg:pb-[120px]', className)}>
      <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[var(--divider)] pt-[60px] pb-[40px] sm:pt-[80px]">
        <h2 className={EYEBROW}>Seguí leyendo</h2>
        <p className={TITLE} style={TITLE_STYLE}>
          {heading}
        </p>
      </Reveal>
      <CollectionArchive posts={posts} />
    </section>
  )
}
