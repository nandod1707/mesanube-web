import Image from 'next/image'
import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type FeatureMediaProps = {
  id?: string
  eyebrow: string
  heading: string
  paragraphs: React.ReactNode[]
  image: { src: string; alt: string }
  /** Put the image on the left instead of the right. */
  reversed?: boolean
  /** Optional checklist under the paragraphs. */
  bullets?: string[]
  /** Optional CTA row under the text column. */
  cta?: React.ReactNode
}

/** Two-column section with text on one side and an image on the other. */
export function FeatureMedia({ id, eyebrow, heading, paragraphs, image, reversed, bullets, cta }: FeatureMediaProps) {
  const text = (
    <Reveal className={`flex flex-col justify-center gap-6 ${reversed ? 'lg:order-2' : ''}`}>
      <p className={EYEBROW}>{eyebrow}</p>
      <h2 className={TITLE} style={TITLE_STYLE}>
        {heading}
      </h2>
      {paragraphs.map((p, i) => (
        <p key={i} className={BODY}>
          {p}
        </p>
      ))}
      {bullets && (
        <ul className="flex flex-col gap-2">
          {bullets.map((item) => (
            <li key={item} className={`flex items-start gap-2 ${BODY}`}>
              <span className="mt-[2px] text-[var(--olive)]" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {cta && <div className="flex flex-wrap gap-3">{cta}</div>}
    </Reveal>
  )
  const media = (
    <Reveal
      delay={1}
      className={`relative w-full overflow-hidden rounded-[20px] bg-[var(--media-bg)] ${reversed ? 'lg:order-1' : ''}`}
      style={{ minHeight: '360px' }}
    >
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
    </Reveal>
  )
  return (
    <section
      id={id}
      className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {text}
        {media}
      </div>
    </section>
  )
}
