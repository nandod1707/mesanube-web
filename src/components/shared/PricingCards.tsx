import Link from 'next/link'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'
import { PLAN_BASIC, PLAN_ADVANCED } from '@/config/plans'

// Re-export so existing imports from this module keep working.
export { PLAN_BASIC, PLAN_ADVANCED }

// ─── Types ────────────────────────────────────────────────────────────────────

type PricingCardsProps = {
  variant?: 'both' | 'basic' | 'advanced'
  // Section heading (full mode only)
  eyebrow?: string
  heading?: string
  description?: React.ReactNode
  // Per-card description overrides
  basicDescription?: string
  advancedDescription?: string
  // Feature list overrides
  basicFeatures?: string[] // for 'both' mode
  advancedFeatures?: string[] // for 'both' mode
  features?: string[] // for single-plan and compact modes
  // CTA button text
  ctaText?: string
  // Compact mode: centered narrow card, no heading block
  compact?: boolean
  compactLabel?: string
  // "Ver todos los planes" link
  showAllPlansLink?: boolean
  allPlansLinkText?: string
}

const LINK_CLASS =
  'text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[#485c11] underline underline-offset-2 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#485c11] focus-visible:outline-offset-2'

// ─── Component ────────────────────────────────────────────────────────────────

export function PricingCards({
  variant = 'both',
  eyebrow,
  heading,
  description,
  basicDescription,
  advancedDescription,
  basicFeatures,
  advancedFeatures,
  features,
  ctaText,
  compact = false,
  compactLabel,
  showAllPlansLink,
  allPlansLinkText = 'Ver todos los planes y comparar →',
}: PricingCardsProps) {
  const showLink = showAllPlansLink ?? !compact
  const basicFs = basicFeatures ?? (variant === 'basic' ? features : undefined) ?? PLAN_BASIC.features
  const advancedFs =
    advancedFeatures ?? (variant === 'advanced' ? features : undefined) ?? PLAN_ADVANCED.features

  // ── Compact mode: centered narrow card, no section heading ──────────────────
  if (compact) {
    const plan = variant === 'basic' ? PLAN_BASIC : PLAN_ADVANCED
    const label = compactLabel ?? `Incluido en el Plan ${plan.name}`
    const fs = features ?? plan.features
    const cta = ctaText ?? 'Empezá tu prueba gratuita'

    return (
      <Reveal
        as="section"
        id="precios"
        className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
      >
        <div className="mx-auto max-w-[600px] rounded-[20px] border border-[#e9e9e9] p-8 text-center">
          <p className="mb-4 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
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
            {plan.price}
            <span className="text-[#6f6f6f]" style={{ fontSize: '0.5em', letterSpacing: '-0.5px' }}>
              /mes
            </span>
          </p>
          {description && (
            <div className="mb-6 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              {description}
            </div>
          )}
          <ul className="mb-8 flex flex-col gap-2 text-left">
            {fs.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
              >
                <span className="text-[#485c11]" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <TrialButton className="w-full">{cta}</TrialButton>
          <p className="mt-3 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
            {process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis. Sin tarjeta de crédito.
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

  // ── Full mode ─────────────────────────────────────────────────────────────
  const isAdvanced = variant === 'advanced'
  const plan = isAdvanced ? PLAN_ADVANCED : PLAN_BASIC
  const planFs = isAdvanced ? advancedFs : basicFs
  const planDesc = isAdvanced
    ? (advancedDescription ?? PLAN_ADVANCED.description)
    : (basicDescription ?? PLAN_BASIC.description)
  const cta = ctaText ?? 'Empezar gratis'

  return (
    <section
      id="precios"
      className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      {(eyebrow || heading || description) && (
        <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
          {eyebrow && (
            <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
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
            <div className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              {description}
            </div>
          )}
        </Reveal>
      )}

      {variant === 'both' ? (
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          {/* Plan Básico */}
          <Reveal
            delay={1}
            className="flex flex-1 flex-col items-start gap-6 rounded-[20px] border border-[#e9e9e9] p-8"
          >
            <div>
              <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                {PLAN_BASIC.name}
              </p>
              <p
                className="mt-2 font-display leading-none tracking-[-0.02em] text-black"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
              >
                {PLAN_BASIC.price}
                <span className="text-[16px] font-sans font-normal text-[#6f6f6f]">/mes</span>
              </p>
              <p className="mt-2 text-[14px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                {basicDescription ?? PLAN_BASIC.description}
              </p>
            </div>
            <ul className="flex w-full flex-col gap-3">
              {basicFs.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-black"
                >
                  <span className="mt-[2px] shrink-0 font-bold text-[#485c11]" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <TrialButton className="mt-auto w-full">{cta}</TrialButton>
          </Reveal>

          {/* Plan Avanzado */}
          <Reveal
            delay={2}
            className="relative flex flex-1 flex-col items-start gap-6 rounded-[20px] border border-[var(--dark-green)] bg-[var(--dark-green)] p-8"
          >
            <span className="absolute right-6 top-6 rounded-full bg-[#dfecc6] px-3 py-1 font-mono text-[11px] font-bold tracking-[-0.14px] text-black">
              {PLAN_ADVANCED.popular}
            </span>
            <div>
              <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#dfecc6]">
                {PLAN_ADVANCED.name}
              </p>
              <p
                className="mt-2 font-display leading-none tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
              >
                {PLAN_ADVANCED.price}
                <span className="text-[16px] font-sans font-normal text-white/60">/mes</span>
              </p>
              <p className="mt-2 text-[14px] leading-[1.4] tracking-[-0.09px] text-white/70">
                {advancedDescription ?? PLAN_ADVANCED.description}
              </p>
            </div>
            <ul className="flex w-full flex-col gap-3">
              {advancedFs.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-white"
                >
                  <span className="mt-[2px] shrink-0 font-bold text-[#dfecc6]" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <TrialButton className="mt-auto w-full">{cta}</TrialButton>
          </Reveal>
        </div>
      ) : (
        // Single plan: centered card
        <div className="flex w-full justify-center">
          <Reveal
            delay={1}
            className={`relative flex w-full max-w-[28rem] flex-col items-start gap-6 rounded-[20px] p-8 ${
              isAdvanced
                ? 'border border-[var(--dark-green)] bg-[var(--dark-green)]'
                : 'border border-[#e9e9e9]'
            }`}
          >
            {isAdvanced && (
              <span className="absolute right-6 top-6 rounded-full bg-[#dfecc6] px-3 py-1 font-mono text-[11px] font-bold tracking-[-0.14px] text-black">
                {PLAN_ADVANCED.popular}
              </span>
            )}
            <div>
              <p
                className={`font-mono text-[14px] leading-[1.4] tracking-[-0.14px] ${isAdvanced ? 'text-[#dfecc6]' : 'text-[#485c11]'}`}
              >
                {plan.name}
              </p>
              <p
                className={`mt-2 font-display leading-none tracking-[-0.02em] ${isAdvanced ? 'text-white' : 'text-black'}`}
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
              >
                {plan.price}
                <span
                  className={`text-[16px] font-sans font-normal ${isAdvanced ? 'text-white/60' : 'text-[#6f6f6f]'}`}
                >
                  /mes
                </span>
              </p>
              <p
                className={`mt-2 text-[14px] leading-[1.4] tracking-[-0.09px] ${isAdvanced ? 'text-white/70' : 'text-[#6f6f6f]'}`}
              >
                {planDesc}
              </p>
            </div>
            <ul className="flex w-full flex-col gap-3">
              {planFs.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] ${isAdvanced ? 'text-white' : 'text-black'}`}
                >
                  <span
                    className={`mt-[2px] shrink-0 font-bold ${isAdvanced ? 'text-[#dfecc6]' : 'text-[#485c11]'}`}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <TrialButton className="w-full">{cta}</TrialButton>
          </Reveal>
        </div>
      )}

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
