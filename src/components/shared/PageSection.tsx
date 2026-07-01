import React from 'react'

import Reveal from './Reveal'

type PageSectionProps = {
  children: React.ReactNode
  id?: string
  className?: string
  /** Wrap in a scroll-reveal (equivalent to `<Reveal as="section">`). */
  reveal?: boolean
  /** Reveal stagger delay when `reveal` is set. */
  revealDelay?: 0 | 1 | 2 | 3 | 4
}

/**
 * Canonical internal-page section wrapper. Applies the shipped section rhythm:
 * top divider + vertical padding, capped at the 1500px content width. This is
 * the `border-t border-[var(--divider)] pt-[60px] pb-[80px] …` pattern repeated
 * ~83 times across pages, centralized.
 */
export function PageSection({
  children,
  id,
  className = '',
  reveal = false,
  revealDelay = 0,
}: PageSectionProps) {
  const classes =
    `w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px] ${className}`.trim()

  if (reveal) {
    return (
      <Reveal as="section" id={id} delay={revealDelay} className={classes}>
        {children}
      </Reveal>
    )
  }

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}
