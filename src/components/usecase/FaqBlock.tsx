import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type FaqItem = { q: string; a: string }

type FaqBlockProps = {
  heading: string
  items: FaqItem[]
  eyebrow?: string
}

/** Inline FAQ section: eyebrow + heading, then a stacked list of Q/A pairs. */
export function FaqBlock({ heading, items, eyebrow = 'Preguntas frecuentes' }: FaqBlockProps) {
  return (
    <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
      <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[var(--divider)] pt-[60px] pb-[40px] sm:pt-[80px] lg:pr-[400px]">
        <h2 className={EYEBROW}>{eyebrow}</h2>
        <p className={TITLE} style={TITLE_STYLE}>
          {heading}
        </p>
      </Reveal>
      <div className="w-full">
        {items.map((item, i) => (
          <Reveal
            key={i}
            delay={(Math.min(i, 3) + 1) as 1 | 2 | 3 | 4}
            as="article"
            className="flex w-full flex-col gap-2 border-t border-[var(--divider)] py-5 lg:pr-[400px]"
          >
            <p className="text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-[var(--heading)]">
              {item.q}
            </p>
            <p className={BODY}>{item.a}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
