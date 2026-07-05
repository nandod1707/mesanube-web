import Image from 'next/image'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import { CtaLink } from '@/components/shared/CtaLink'
import { HeroHeading } from '@/components/shared/HeroHeading'
import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW } from './styles'

type FeatureHeroProps = {
  eyebrow: string
  heading: string
  subtitle: string
  image: { src: string; alt: string }
  /** Primary trial CTA label. */
  ctaLabel?: string
  /** Optional outline "ver cómo funciona" style link. */
  secondary?: { href: string; label: string }
  /** Optional small text next to the CTA (used instead of a secondary link). */
  note?: string
}

/**
 * Feature-page hero: uppercase eyebrow, serif headline, subtitle, CTA row and
 * a 16/7 rounded image below.
 */
export function FeatureHero({
  eyebrow,
  heading,
  subtitle,
  image,
  ctaLabel = 'Probá gratis',
  secondary,
  note,
}: FeatureHeroProps) {
  return (
    <header className="w-full max-w-[1500px] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
      <Reveal>
        <p className={`mb-5 ${EYEBROW}`}>{eyebrow}</p>
        <HeroHeading text={heading} className="mb-6" />
        <p className={`mb-8 max-w-[520px] ${BODY}`}>{subtitle}</p>
        <div className="flex flex-wrap items-center gap-3">
          <TrialButton>{ctaLabel}</TrialButton>
          {secondary && (
            <CtaLink href={secondary.href} variant="outline">
              {secondary.label}
            </CtaLink>
          )}
          {note && (
            <p className="text-[13px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">{note}</p>
          )}
        </div>
      </Reveal>

      <Reveal delay={1} className="mt-12 w-full">
        <div
          className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[var(--media-bg)]"
          style={{ aspectRatio: '16/7' }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1500px) 100vw, 1500px"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>
    </header>
  )
}
