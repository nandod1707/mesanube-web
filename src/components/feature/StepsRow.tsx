import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, CARD_TITLE, EYEBROW, STEP_NUMBER_STYLE, TITLE, TITLE_STYLE } from './styles'

type Step = { number: string; title: string; description: string }

type StepsRowProps = {
  id?: string
  eyebrow: string
  heading: string
  steps: Step[]
  /** Optional paragraph under the heading. */
  subtitle?: string
  /** `grid` = 3-up cards (default); `list` = number-left / text-right rows. */
  layout?: 'grid' | 'list'
}

/**
 * Feature-page "cómo funciona": stacked header + numbered steps, either as a
 * 3-up grid or a vertical number-left list.
 */
export function StepsRow({ id, eyebrow, heading, steps, subtitle, layout = 'grid' }: StepsRowProps) {
  return (
    <section
      id={id}
      className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <Reveal className="mb-12">
        <p className={`mb-5 ${EYEBROW}`}>{eyebrow}</p>
        <h2 className={`${subtitle ? 'mb-5 ' : ''}${TITLE}`} style={TITLE_STYLE}>
          {heading}
        </h2>
        {subtitle && <p className={`${BODY} lg:pr-[400px]`}>{subtitle}</p>}
      </Reveal>

      {layout === 'grid' ? (
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
              className="flex flex-col items-start gap-4 border-t border-[var(--divider)] pt-[40px] pb-[40px] pr-5"
            >
              <p className="font-display text-[var(--caption)]" style={STEP_NUMBER_STYLE}>
                {step.number}
              </p>
              <p className={CARD_TITLE}>{step.title}</p>
              <p className={BODY}>{step.description}</p>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
              className="grid grid-cols-1 gap-4 border-t border-[var(--divider)] pt-[40px] pb-[40px] sm:grid-cols-[120px_1fr] lg:grid-cols-[180px_1fr]"
            >
              <p className="font-display leading-none text-[var(--caption)]" style={STEP_NUMBER_STYLE}>
                {step.number}
              </p>
              <div className="flex flex-col gap-3">
                <p className={CARD_TITLE}>{step.title}</p>
                <p className={BODY}>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
