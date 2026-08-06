import React from 'react'

import { DemoLink, TrialButton } from '@/components/shared/CtaButtons'
import { CtaLink } from '@/components/shared/CtaLink'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'

type FeatureHeroProps = {
  eyebrow: string
  heading: string
  subtitle: string
  /** Panel background photo (same treatment as the /para heroes). */
  image: { src: string; alt: string }
  /** Primary trial CTA label. */
  ctaLabel?: string
  /** Optional outline "ver cómo funciona" link shown next to the trial CTA. */
  secondary?: { href: string; label: string }
  /** Small line under the CTAs. */
  note?: string
}

/**
 * Feature-page hero. Uses the same showcase treatment as the /para pages: a wide
 * panel with the product screenshot floating over a background photo. Thin
 * adapter over {@link ShowcaseHero} so every /funciones page shares one hero.
 */
export function FeatureHero({
  eyebrow,
  heading,
  subtitle,
  image,
  ctaLabel = 'Probalo gratis',
  secondary,
  note,
}: FeatureHeroProps) {
  return (
    <ShowcaseHero
      eyebrow={eyebrow}
      heading={heading}
      subtitle={subtitle}
      background={image}
      note={note}
      cta={
        <>
          <TrialButton>{ctaLabel}</TrialButton>
          {secondary ? (
            <CtaLink href={secondary.href} variant="outline">
              {secondary.label}
            </CtaLink>
          ) : (
            <DemoLink tone="dark">Agendá una demo →</DemoLink>
          )}
        </>
      }
    />
  )
}
