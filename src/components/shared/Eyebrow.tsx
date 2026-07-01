import React from 'react'

type EyebrowProps = {
  children: React.ReactNode
  className?: string
  /** Element to render — `p` (default) or `span` for inline use. */
  as?: 'p' | 'span'
}

/**
 * Canonical eyebrow label: small uppercase mono text above a heading.
 * Olive accent, matching the shipped design. Use everywhere instead of
 * re-typing the `font-mono … text-[var(--olive)]` classes.
 */
export function Eyebrow({ children, className = '', as: Tag = 'p' }: EyebrowProps) {
  return (
    <Tag
      className={`font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)] ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
