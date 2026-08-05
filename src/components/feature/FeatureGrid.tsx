import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, CARD_TITLE, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type Card = { title: string; body: React.ReactNode }

type FeatureGridProps = {
  id?: string
  eyebrow: string
  heading: string
  items: Card[]
  /** Columns at the lg breakpoint. Defaults to 3. */
  columns?: 2 | 3 | 4
  /** `bold` = bold-sans card title (default); `label` = mono uppercase label (e.g. roles). */
  titleVariant?: 'bold' | 'label'
}

const COLS: Record<2 | 3 | 4, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}

/**
 * Feature-page card grid ("detalles que importan"): stacked header + a grid of
 * cards with a bold sans title and gray body.
 */
export function FeatureGrid({
  id,
  eyebrow,
  heading,
  items,
  columns = 3,
  titleVariant = 'bold',
}: FeatureGridProps) {
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
            className={`flex flex-col items-start border-t border-[var(--divider)] py-[40px] pr-5 ${titleVariant === 'bold' ? 'gap-6' : 'gap-4'}`}
          >
            {titleVariant === 'bold' ? (
              <div>
                <h3 className={`mb-2 ${CARD_TITLE}`}>{item.title}</h3>
                <p className={BODY}>{item.body}</p>
              </div>
            ) : (
              <>
                <p className={EYEBROW}>{item.title}</p>
                <p className={BODY}>{item.body}</p>
              </>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
