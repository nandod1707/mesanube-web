import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { EYEBROW, TITLE_STYLE } from './styles'

type FeatureCalloutProps = {
  id?: string
  eyebrow?: string
  heading: string
  paragraphs: React.ReactNode[]
  /** Optional CTA rendered under the text. */
  cta?: React.ReactNode
}

/**
 * Centered soft-olive callout panel — used for "próximamente" / early-access
 * blocks inside feature pages.
 */
export function FeatureCallout({ id, eyebrow, heading, paragraphs, cta }: FeatureCalloutProps) {
  return (
    <section id={id} className="w-full max-w-[1500px] pb-[80px] lg:pb-[120px]">
      <Reveal className="flex w-full flex-col items-center gap-8 rounded-[20px] bg-[var(--olive-soft)] px-6 py-[80px] text-center sm:px-12 sm:py-[120px] lg:px-[240px]">
        {eyebrow && <p className={EYEBROW}>{eyebrow}</p>}
        <h2 className="w-full font-display text-[var(--heading)]" style={TITLE_STYLE}>
          {heading}
        </h2>
        {paragraphs.map((p, i) => (
          <div
            key={i}
            className="w-full max-w-[540px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]"
          >
            {p}
          </div>
        ))}
        {cta}
      </Reveal>
    </section>
  )
}
