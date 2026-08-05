import Link from 'next/link'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { PlanCard } from '@/components/shared/PlanCard'
import { TrialButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'
import { PLANS, PLAN_SMALL, PLAN_MEDIUM, PLAN_LARGE, type Plan } from '@/config/plans'

import styles from './PricingCards.module.css'

// Re-export so existing imports from this module keep working.
export { PLAN_SMALL, PLAN_MEDIUM, PLAN_LARGE }

// ─── Types ────────────────────────────────────────────────────────────────────

type PricingCardsProps = {
  // Section heading (full mode only)
  eyebrow?: string
  heading?: string
  description?: React.ReactNode
  // CTA button text
  ctaText?: string
  // "Ver todos los planes" link
  showAllPlansLink?: boolean
  allPlansLinkText?: string
  // ── Compact mode: a single centered card focused on one plan ────────────────
  compact?: boolean
  /** Which plan the compact card shows. Defaults to the first (cheapest) plan. */
  plan?: Plan
  compactLabel?: string
  /** Feature-list override for the compact card (defaults to the plan's own). */
  features?: string[]
}

const LINK_CLASS =
  'text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--olive)] focus-visible:outline-offset-2'

// ─── Component ────────────────────────────────────────────────────────────────

export function PricingCards({
  eyebrow,
  heading,
  description,
  ctaText,
  showAllPlansLink,
  allPlansLinkText = 'Ver todos los planes y comparar →',
  compact = false,
  plan,
  compactLabel,
  features,
}: PricingCardsProps) {
  const showLink = showAllPlansLink ?? !compact

  // ── Compact mode: centered narrow card focused on one plan ──────────────────
  if (compact) {
    const focusPlan = plan ?? PLANS[0]
    const label = compactLabel ?? `Incluido en el Plan ${focusPlan.name}`
    const fs = features ?? focusPlan.features
    const cta = ctaText ?? 'Empezá tu prueba gratuita'

    return (
      <Reveal
        as="section"
        id="precios"
        className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
      >
        <div className="mx-auto max-w-[600px] rounded-[20px] border border-[var(--divider)] p-8 text-center">
          <p className="mb-4 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
            {label}
          </p>
          <p
            className="mb-2 font-display text-black"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            {focusPlan.price}
            <span
              className="text-[var(--body)]"
              style={{ fontSize: '0.5em', letterSpacing: '-0.5px' }}
            >
              /mes
            </span>
          </p>
          {focusPlan.placeholder && (
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[-0.14px] text-[var(--caption)]">
              Datos preliminares
            </p>
          )}
          {description && (
            <div className="mb-6 text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              {description}
            </div>
          )}
          <ul className="mb-8 flex flex-col gap-2 text-left">
            {fs.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]"
              >
                <span className="text-[var(--olive)]" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <TrialButton className="w-full">{cta}</TrialButton>
          <p className="mt-3 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--caption)]">
            {TRIAL_PERIOD} gratis. Sin tarjeta de crédito.
          </p>
          {showLink && (
            <div className="mt-4">
              <Link href="/precios" className={LINK_CLASS}>
                {allPlansLinkText}
              </Link>
            </div>
          )}
        </div>
      </Reveal>
    )
  }

  // ── Full mode: every plan, looped from PLANS ────────────────────────────────
  return (
    <section
      id="precios"
      className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      {(eyebrow || heading || description) && (
        <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
          {eyebrow && (
            <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              {heading}
            </h2>
          )}
          {description && (
            <div className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              {description}
            </div>
          )}
        </Reveal>
      )}

      <div className={styles.grid}>
        {PLANS.map((p, i) => (
          <PlanCard
            key={p.name}
            plan={p}
            ctaText={ctaText}
            delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}
          />
        ))}
      </div>

      {showLink && (
        <div className="flex w-full justify-center">
          <Link href="/precios" className={LINK_CLASS}>
            {allPlansLinkText}
          </Link>
        </div>
      )}
    </section>
  )
}
