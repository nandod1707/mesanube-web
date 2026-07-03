import Image from 'next/image'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type SplitFeatureProps = {
  eyebrow: string
  heading: string
  paragraphs: string[]
  image: { src: string; alt: string }
  /** Optional trial CTA under the text column. */
  cta?: string
}

/**
 * Two-column feature: text (eyebrow, heading, paragraphs, optional CTA) beside
 * a tall image. Used for pizzerias' "Pico del viernes".
 */
export function SplitFeature({ eyebrow, heading, paragraphs, image, cta }: SplitFeatureProps) {
  return (
    <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:flex-row lg:items-start lg:gap-[20px] lg:pb-[120px]">
      <Reveal className="flex w-full flex-[1_0_0] flex-col items-start gap-[30px] lg:gap-10 lg:pr-[80px]">
        <h2 className={EYEBROW}>{eyebrow}</h2>
        <p className={TITLE} style={TITLE_STYLE}>
          {heading}
        </p>
        {paragraphs.map((p, i) => (
          <p key={i} className={`w-full ${BODY}`}>
            {p}
          </p>
        ))}
        {cta && <TrialButton>{cta}</TrialButton>}
      </Reveal>

      <Reveal
        delay={1}
        className="zoom-wrap relative w-full flex-[1_0_0] overflow-hidden rounded-[20px] lg:rounded-[30px]"
      >
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:h-[620px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 740px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.06]" />
        </div>
      </Reveal>
    </section>
  )
}
