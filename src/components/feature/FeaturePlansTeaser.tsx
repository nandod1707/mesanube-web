import Link from 'next/link'
import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type PlanTeaser = { name: string; price: string; description: string }

type FeaturePlansTeaserProps = {
  eyebrow: string
  heading: string
  plans: PlanTeaser[]
  linkHref?: string
  linkLabel?: string
}

/**
 * Two-column "en qué planes está incluida" teaser: heading on the left, a stack
 * of compact plan cards and a link to full pricing on the right.
 */
export function FeaturePlansTeaser({
  eyebrow,
  heading,
  plans,
  linkHref = '/precios',
  linkLabel = 'Ver planes y precios →',
}: FeaturePlansTeaserProps) {
  return (
    <Reveal
      as="section"
      className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className={`mb-5 ${EYEBROW}`}>{eyebrow}</p>
          <h2 className={TITLE} style={TITLE_STYLE}>
            {heading}
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-[20px] border border-[var(--divider)] p-8">
                <p className={`mb-1 ${EYEBROW}`}>Plan {plan.name}</p>
                <p
                  className="mb-2 font-display leading-none tracking-[-0.02em] text-[var(--heading)]"
                  style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                >
                  {plan.price}
                  <span className="font-sans text-[16px] font-normal text-[var(--body)]">/mes</span>
                </p>
                <p className={BODY}>{plan.description}</p>
              </div>
            ))}
          </div>
          <Link
            href={linkHref}
            className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-[var(--heading)]"
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </Reveal>
  )
}
