import Image from 'next/image'
import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { QUOTE_STYLE } from './styles'

type FeatureTestimonialProps = {
  /** Quote text without surrounding quotation marks. */
  quote: string
  author: string
  image?: { src: string; alt: string }
}

/** Two-column testimonial: decorative image on the left, quote on the right. */
export function FeatureTestimonial({ quote, author, image }: FeatureTestimonialProps) {
  const src = image?.src ?? '/figma/sphere.png'
  const decorative = !image
  return (
    <Reveal
      as="section"
      className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div
          className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[var(--media-bg)]"
          style={{ aspectRatio: '550/624' }}
        >
          <Image
            src={src}
            alt={decorative ? '' : image!.alt}
            aria-hidden={decorative || undefined}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <blockquote>
            <p className="font-display text-[var(--heading)]" style={QUOTE_STYLE}>
              &ldquo;{quote}&rdquo;
            </p>
            <footer className="mt-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--caption)]">
              {author}
            </footer>
          </blockquote>
        </div>
      </div>
    </Reveal>
  )
}
