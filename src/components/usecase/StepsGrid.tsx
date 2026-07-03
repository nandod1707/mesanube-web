import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'

import { BIG_NUMBER_STYLE, BODY, CARD_TITLE, TITLE_STYLE } from './styles'

type Step = { n: string; title: string; body: string }

type StepsGridProps = {
  heading: string
  steps: Step[]
  /** Optional soft CTA shown to the right of the heading. */
  softCta?: string
}

/**
 * Numbered 4-up grid with a heading and an optional soft CTA. Covers the
 * "cada rol, cada pantalla" / "del primer cliente al último pedido" sections.
 */
export function StepsGrid({ heading, steps, softCta }: StepsGridProps) {
  return (
    <section className="flex w-full max-w-[1500px] flex-col items-start gap-[50px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:gap-[80px] sm:pt-[80px] lg:pb-[120px]">
      <Reveal className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-display text-[var(--heading)]" style={TITLE_STYLE}>
          {heading}
        </p>
        {softCta && <TrialButton variant="soft">{softCta}</TrialButton>}
      </Reveal>
      <div className="grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal
            key={s.n}
            delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
            as="article"
            aria-label={`Paso ${i + 1} de ${steps.length}`}
            className="flex flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[40px] pr-[30px] pb-5 sm:gap-[60px] sm:pt-[60px]"
          >
            <p className="w-full leading-none text-[var(--caption)]" style={BIG_NUMBER_STYLE}>
              {s.n}
            </p>
            <div className="flex w-full flex-col items-start gap-5">
              <p className={CARD_TITLE}>{s.title}</p>
              <p className={`w-full ${BODY}`}>{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
