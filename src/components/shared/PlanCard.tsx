import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'
import type { Plan } from '@/config/plans'

type PlanCardProps = {
  plan: Plan
  /** Renders the dark, featured card. Defaults to `plan.highlighted`. */
  highlighted?: boolean
  /** Override the plan description (defaults to `plan.description`). */
  description?: string
  /** Override the feature list (defaults to `plan.features`). */
  features?: string[]
  ctaText?: string
  /** Reveal stagger index. */
  delay?: 0 | 1 | 2 | 3 | 4
}

/**
 * One pricing plan rendered as a card. Light by default; dark/featured when
 * `highlighted`. All plan data comes from `src/config/plans.ts` — no copy here.
 */
export function PlanCard({
  plan,
  highlighted = plan.highlighted ?? false,
  description,
  features,
  ctaText = 'Empezar gratis',
  delay,
}: PlanCardProps) {
  const fs = features ?? plan.features
  const desc = description ?? plan.description

  return (
    <Reveal
      delay={delay}
      className={`relative flex flex-1 flex-col items-start gap-6 rounded-[20px] p-8 ${
        highlighted
          ? 'border border-[var(--surface-dark)] bg-[var(--surface-dark)]'
          : 'border border-[var(--divider)]'
      }`}
    >
      {plan.popular && (
        <span className="absolute right-6 top-6 rounded-full bg-[var(--olive-soft)] px-3 py-1 font-mono text-[11px] font-bold tracking-[-0.14px] text-black">
          {plan.popular}
        </span>
      )}
      <div>
        <p
          className={`font-mono text-[14px] leading-[1.4] tracking-[-0.14px] ${
            highlighted ? 'text-[var(--olive-soft)]' : 'text-[var(--olive)]'
          }`}
        >
          {plan.name}
        </p>
        <p
          className={`mt-2 font-display leading-none tracking-[-0.02em] ${
            highlighted ? 'text-white' : 'text-black'
          }`}
          style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
        >
          {plan.price}
          <span
            className={`text-[16px] font-sans font-normal ${
              highlighted ? 'text-white/60' : 'text-[var(--body)]'
            }`}
          >
            /mes
          </span>
        </p>
        {plan.placeholder && (
          <p
            className={`mt-1 font-mono text-[11px] uppercase tracking-[-0.14px] ${
              highlighted ? 'text-white/60' : 'text-[var(--caption)]'
            }`}
          >
            Datos preliminares
          </p>
        )}
        <p
          className={`mt-2 text-[14px] leading-[1.4] tracking-[-0.09px] ${
            highlighted ? 'text-white/70' : 'text-[var(--body)]'
          }`}
        >
          {desc}
        </p>
      </div>
      <ul className="flex w-full flex-col gap-3">
        {fs.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] ${
              highlighted ? 'text-white' : 'text-black'
            }`}
          >
            <span
              className={`mt-[2px] shrink-0 font-bold ${
                highlighted ? 'text-[var(--olive-soft)]' : 'text-[var(--olive)]'
              }`}
              aria-hidden="true"
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <TrialButton className="mt-auto w-full">{ctaText}</TrialButton>
    </Reveal>
  )
}
