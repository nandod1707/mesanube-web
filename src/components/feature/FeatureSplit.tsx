import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type FeatureSplitProps = {
  id?: string
  eyebrow: string
  heading: string
  paragraphs: React.ReactNode[]
  /** Optional checklist rendered under the paragraphs. */
  bullets?: string[]
}

/**
 * Two-column text section: eyebrow + heading on the left, a column of
 * paragraphs (and an optional checklist) on the right. Covers "el problema",
 * "sin hardware especial" and similar feature-page blocks.
 */
export function FeatureSplit({ id, eyebrow, heading, paragraphs, bullets }: FeatureSplitProps) {
  return (
    <Reveal
      as="section"
      id={id}
      className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className={`mb-5 ${EYEBROW}`}>{eyebrow}</p>
          <h2 className={TITLE} style={TITLE_STYLE}>
            {heading}
          </h2>
        </div>
        <div className="flex flex-col gap-5">
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
        </div>
      </div>
    </Reveal>
  )
}
