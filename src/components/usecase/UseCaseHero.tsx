import Image from 'next/image'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import { HeroHeading } from '@/components/shared/HeroHeading'
import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW } from './styles'

type UseCaseHeroProps = {
  eyebrow: string
  heading: string
  subtitle: string
  image: { src: string; alt: string }
  /** Small text next to the CTA. */
  note?: string
  ctaLabel?: string
}

/**
 * Use-case hero: eyebrow, serif headline, subtitle, trial CTA + note, and a
 * full-width rounded image.
 */
export function UseCaseHero({
  eyebrow,
  heading,
  subtitle,
  image,
  note = 'Sin tarjeta de crédito. Sin permanencia.',
  ctaLabel = `Probá gratis ${process.env.NEXT_PUBLIC_TRIAL_PERIOD}`,
}: UseCaseHeroProps) {
  return (
    <header className="flex w-full max-w-[1500px] flex-col items-start gap-[60px] overflow-clip sm:gap-[100px]">
      <div className="flex w-full flex-col items-start gap-6">
        <p className={EYEBROW}>{eyebrow}</p>
        <HeroHeading text={heading} className="w-full" />
        <p className={`max-w-[52ch] ${BODY}`}>{subtitle}</p>
        <div className="flex flex-wrap items-center gap-4">
          <TrialButton>{ctaLabel}</TrialButton>
          <p className="text-[13px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">{note}</p>
        </div>
      </div>

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
    </header>
  )
}
