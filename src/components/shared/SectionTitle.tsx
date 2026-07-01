import React from 'react'

type SectionTitleProps = {
  children: React.ReactNode
  className?: string
  /** Heading level — defaults to `h2`. Visual style is identical across levels. */
  as?: 'h1' | 'h2' | 'h3'
}

/**
 * Canonical section heading: large serif display type, pure-black, tight.
 * Matches the shipped `clamp(36px, 5.5vw, 60px)` / line-height 0.9 scale used
 * across every internal page. The clamp lives here so it's defined once, not
 * re-typed inline on 90 headings.
 */
export function SectionTitle({ children, className = '', as: Tag = 'h2' }: SectionTitleProps) {
  return (
    <Tag
      className={`font-display text-[var(--heading)] ${className}`.trim()}
      style={{
        fontSize: 'clamp(36px, 5.5vw, 60px)',
        lineHeight: 0.9,
        letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
      }}
    >
      {children}
    </Tag>
  )
}
