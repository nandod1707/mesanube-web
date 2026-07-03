import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type Column = { label: string; items: string[]; note?: React.ReactNode }

type FeatureChecklistsProps = {
  id?: string
  eyebrow: string
  heading: string
  columns: Column[]
}

/**
 * Header + two-column labelled checklists (e.g. arqueo "Ingresos / Egresos"),
 * each column with an optional trailing note.
 */
export function FeatureChecklists({ id, eyebrow, heading, columns }: FeatureChecklistsProps) {
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

      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
        {columns.map((col, ci) => (
          <Reveal
            key={col.label}
            delay={ci as 0 | 1 | 2 | 3 | 4}
            className={`flex flex-col gap-5 border-t border-[var(--divider)] py-[40px] pr-5 ${ci === 0 ? 'sm:pr-10' : 'sm:pl-10'}`}
          >
            <p className={EYEBROW}>{col.label}</p>
            <ul className="flex flex-col gap-3">
              {col.items.map((item) => (
                <li key={item} className={`flex items-start gap-2 ${BODY}`}>
                  <span className="mt-[2px] text-[var(--olive)]" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            {col.note && <p className={`mt-2 ${BODY}`}>{col.note}</p>}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
