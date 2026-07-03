import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, BOLD_CARD_TITLE, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type Card = { title: string; body: React.ReactNode }

type FeatureGridProps = {
  id?: string
  eyebrow: string
  heading: string
  items: Card[]
  /** Columns at the lg breakpoint. Defaults to 3. */
  columns?: 2 | 3
}

const COLS: Record<2 | 3, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
}

/**
 * Feature-page card grid ("detalles que importan"): stacked header + a grid of
 * cards with a bold sans title and gray body.
 */
export function FeatureGrid({ id, eyebrow, heading, items, columns = 3 }: FeatureGridProps) {
  return (
    <section
      id={id}
      className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <Reveal className="mb-12">
        <p className={`mb-5 ${EYEBROW}`}>{eyebrow}</p>
        <h2 className={TITLE} style={TITLE_STYLE}>
          {heading}
        </h2>
      </Reveal>

      <div className={`grid grid-cols-1 gap-0 sm:grid-cols-2 ${COLS[columns]}`}>
        {items.map((item, i) => (
          <Reveal
            key={typeof item.title === 'string' ? item.title : i}
            delay={(i % columns) as 0 | 1 | 2 | 3 | 4}
            className="flex flex-col items-start gap-6 border-t border-[var(--divider)] py-[40px] pr-5"
          >
            <div>
              <h3 className={`mb-2 ${BOLD_CARD_TITLE}`}>{item.title}</h3>
              <p className={BODY}>{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
