import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn(
          'flex items-center rounded-r-[var(--radius-xs)] border-l-[3px] px-5 py-4 text-[var(--heading)]',
          {
            // One accent: informative banners are olive; warnings and errors stay neutral-dark.
            'border-[var(--olive)] bg-[var(--olive-tint)]': style === 'info',
            'border-[var(--olive)] bg-[var(--olive-soft)]': style === 'success',
            'border-[var(--heading)] bg-[var(--media-bg)]': style === 'warning' || style === 'error',
          },
        )}
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  )
}
