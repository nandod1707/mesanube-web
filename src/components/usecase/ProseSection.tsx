import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type ProseSectionProps = {
  id?: string
  eyebrow: string
  heading: string
  paragraphs: React.ReactNode[]
  /** Optional CTA row rendered under the paragraphs. */
  cta?: React.ReactNode
}

/**
 * Two-part text section: eyebrow + big heading, then a column of paragraphs
 * (both constrained on large screens) and an optional CTA. Used for "el
 * problema", "soporte", and coming-soon copy blocks.
 */
export function ProseSection({ id, eyebrow, heading, paragraphs, cta }: ProseSectionProps) {
  return (
    <section
      id={id}
      className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
        <h2 className={EYEBROW}>{eyebrow}</h2>
        <p className={TITLE} style={TITLE_STYLE}>
          {heading}
        </p>
      </Reveal>
      <Reveal delay={1} className={`flex w-full flex-col items-start gap-5 ${BODY} lg:pr-[400px]`}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Reveal>
      {cta && (
        <Reveal delay={2} className="flex flex-wrap gap-4">
          {cta}
        </Reveal>
      )}
    </section>
  )
}
