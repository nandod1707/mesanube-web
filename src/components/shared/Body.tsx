import React from 'react'

type BodyProps = {
  children: React.ReactNode
  className?: string
  /** `body` (18px gray, default) or `caption` (14px mono, muted). */
  tone?: 'body' | 'caption'
  as?: 'p' | 'div' | 'span'
}

const toneClass: Record<NonNullable<BodyProps['tone']>, string> = {
  body: 'text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]',
  caption: 'font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--caption)]',
}

/**
 * Canonical paragraph text. `body` is the standard 18px gray copy; `caption`
 * is the small mono footnote used under quotes and CTAs.
 */
export function Body({ children, className = '', tone = 'body', as: Tag = 'p' }: BodyProps) {
  return <Tag className={`${toneClass[tone]} ${className}`.trim()}>{children}</Tag>
}
