import React from 'react'

type EyebrowProps = {
  children: React.ReactNode
  className?: string
  /** Element to render — `p` (default), `h2`/`h3` when it's the section's semantic heading, or `span`. */
  as?: 'p' | 'span' | 'h2' | 'h3'
  /** Uppercase the label. Off by default (the shipped `/para/*` pages use sentence case). */
  uppercase?: boolean
}

/**
 * Canonical eyebrow label: small mono accent text above a heading. Sentence
 * case by default (matching the `/para/*` reference pages); pass `uppercase`
 * for the all-caps variant. Use instead of re-typing the
 * `font-mono … text-[var(--olive)]` classes.
 */
export function Eyebrow({ children, className = '', as: Tag = 'p', uppercase = false }: EyebrowProps) {
  return (
    <Tag
      className={`font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]${uppercase ? ' uppercase' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
