import Image from 'next/image'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import { HeroHeading } from '@/components/shared/HeroHeading'
import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW } from './styles'

type UseCaseHeroProps = {
  eyebrow: string
  heading: string
  /** A single paragraph or several. */
  subtitle: string | string[]
  /** Optional hero image. Omit for a text-only hero (e.g. the funciones index). */
  image?: { src: string; alt: string }
  /** Small text next to the CTA. Pass `null` to hide it. */
  note?: string | null
  ctaLabel?: string
  /** Replace the default trial CTA + note row entirely (e.g. a waitlist link). */
  cta?: React.ReactNode
}

/**
 * Use-case hero: eyebrow, serif headline, subtitle(s), a CTA row, and a
 * full-width rounded image.
 */
export function UseCaseHero({
  eyebrow,
  heading,
  subtitle,
  image,
  note = 'Sin tarjeta de crédito. Sin permanencia mínima.',
  ctaLabel = `Probalo gratis ${TRIAL_PERIOD}`,
  cta,
}: UseCaseHeroProps) {
  const subtitles = Array.isArray(subtitle) ? subtitle : [subtitle]
  return (
    <header className="flex w-full max-w-[1500px] flex-col items-start gap-[60px] overflow-clip sm:gap-[100px]">
      <div className="flex w-full flex-col items-start gap-6">
        <p className={EYEBROW}>{eyebrow}</p>
        <HeroHeading text={heading} className="w-full" />
        {subtitles.map((s, i) => (
          <p key={i} className={`max-w-[52ch] ${BODY}`}>
            {s}
          </p>
        ))}
        <div className="flex flex-wrap items-center gap-4">
          {cta ?? (
            <>
              <TrialButton>{ctaLabel}</TrialButton>
              {note !== null && (
                <p className="text-[13px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                  {note}
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {image && (
        <Reveal className="zoom-wrap relative h-[220px] w-full overflow-hidden rounded-[20px] sm:h-[320px] lg:h-[420px] lg:rounded-[30px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1500px"
            className="object-cover"
            priority
          />
        </Reveal>
      )}
    </header>
  )
}
