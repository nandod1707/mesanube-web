import Image from 'next/image'
import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, CARD_TITLE, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type Card = { title: string; body: React.ReactNode }

type CardGridProps = {
  id?: string
  eyebrow: string
  heading: string
  items: Card[]
  /** Columns at the lg breakpoint. Defaults to 3. */
  columns?: 3 | 4
  /** Optional full-width image rendered under the grid. */
  image?: { src: string; alt: string }
  /** Optional small caption rendered under the grid. */
  footnote?: string
}

const COLS: Record<3 | 4, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}

/**
 * Eyebrow + heading followed by a responsive grid of text cards, with an
 * optional image below. Covers the "qué resuelve" and "funciones" sections.
 */
export function CardGrid({
  id,
  eyebrow,
  heading,
  items,
  columns = 3,
  image,
  footnote,
}: CardGridProps) {
  return (
    <section
      id={id}
      className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
    >
      <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[var(--divider)] pt-[60px] pb-[40px] sm:pt-[80px]">
        <h2 className={EYEBROW}>{eyebrow}</h2>
        <p className={`${TITLE} lg:pr-[400px]`} style={TITLE_STYLE}>
          {heading}
        </p>
      </Reveal>

      <div className={`grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 ${COLS[columns]}`}>
        {items.map((item, i) => (
          <Reveal
            key={typeof item.title === 'string' ? item.title : i}
            delay={(Math.min(i % columns, 3) + 1) as 1 | 2 | 3 | 4}
            as="article"
            className="flex flex-col items-start gap-4 border-t border-[var(--divider)] py-[40px] pr-5"
          >
            <p className={CARD_TITLE}>{item.title}</p>
            <p className={`w-full ${BODY}`}>{item.body}</p>
          </Reveal>
        ))}
      </div>

      {footnote && (
        <Reveal delay={1} className="mt-[40px] w-full">
          <p className="text-[14px] leading-[1.4] tracking-[-0.09px] text-[var(--caption)]">
            {footnote}
          </p>
        </Reveal>
      )}

      {image && (
        <Reveal
          delay={1}
          className="zoom-wrap relative mt-[40px] h-[260px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:h-[500px] lg:rounded-[30px]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1500px"
            className="object-cover"
          />
        </Reveal>
      )}
    </section>
  )
}
