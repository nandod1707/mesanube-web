import Image from 'next/image'
import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { QUOTE_STYLE } from './styles'

type TestimonialProps = {
  /** Quote text without surrounding quotation marks — they're added here. */
  quote: string
  author: string
  role: string
  image: { src: string; alt: string }
}

/** Two-column testimonial: image on the left, quote + attribution on the right. */
export function Testimonial({ quote, author, role, image }: TestimonialProps) {
  return (
    <section className="flex w-full max-w-[1500px] flex-col items-start gap-6 pb-[80px] lg:flex-row lg:items-stretch lg:gap-5 lg:pb-[120px]">
      <Reveal className="zoom-wrap relative w-full overflow-hidden rounded-[20px] lg:w-1/2 lg:flex-[1_0_0] lg:rounded-[30px]">
        <div className="relative aspect-[550/624] w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-cover"
          />
        </div>
      </Reveal>
      <Reveal
        delay={1}
        as="section"
        aria-label="Testimonio de un cliente de Mesanube"
        className="flex w-full flex-[1_0_0] flex-col items-start justify-center gap-8 border-t border-[var(--divider)] pt-8 sm:gap-[50px] lg:w-1/2 lg:pl-[50px] lg:pt-0"
      >
        <p className="w-full font-display text-[var(--heading)]" style={QUOTE_STYLE}>
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex w-full flex-col items-start gap-2 leading-[1.4]">
          <p className="text-[18px] tracking-[-0.09px] text-[var(--heading)]">{author}</p>
          <p className="font-mono text-[14px] tracking-[-0.14px] text-[var(--olive)]">{role}</p>
        </div>
      </Reveal>
    </section>
  )
}
