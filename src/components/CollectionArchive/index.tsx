import React from 'react'

import { Card, CardPostData } from '@/components/Card'
import Reveal from '@/components/shared/Reveal'
import { cn } from '@/utilities/ui'

export type Props = {
  posts: CardPostData[]
  className?: string
}

/** Responsive grid of post cards (1 / 2 / 3 columns). */
export const CollectionArchive: React.FC<Props> = ({ posts, className }) => {
  return (
    <div
      className={cn(
        'grid w-full grid-cols-1 gap-x-[20px] gap-y-[60px] sm:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {posts?.map((post, index) =>
        typeof post === 'object' && post !== null ? (
          <Reveal key={post.slug ?? index} delay={((index % 3) + 1) as 1 | 2 | 3}>
            <Card doc={post} showCategories />
          </Reveal>
        ) : null,
      )}
    </div>
  )
}
