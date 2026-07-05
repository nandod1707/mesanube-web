import Link from 'next/link'
import React from 'react'

import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type LinkCard = {
  icon?: string
  title: string
  body: string
  href: string
  label: string
  badge?: string | null
}

type LinkCardGridProps = {
  id?: string
  eyebrow: string
  heading: string
  items: LinkCard[]
}

/**
 * Directory grid of cards that each link to a detail page (used by the
 * funciones index): icon + title + optional badge + body + "Ver X →" link.
 */
export function LinkCardGrid({ id, eyebrow, heading, items }: LinkCardGridProps) {
  return (
    <section
      id={id}
      className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
    >
      <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[var(--divider)] pt-[60px] pb-[40px] sm:pt-[80px] sm:pb-[60px] lg:pr-[400px]">
        <h2 className={EYEBROW}>{eyebrow}</h2>
        <p className={`${TITLE} lg:pr-[400px]`} style={TITLE_STYLE}>
          {heading}
        </p>
      </Reveal>

      <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal
            key={item.href}
            delay={(Math.min((i % 3) + 1, 4)) as 1 | 2 | 3 | 4}
            as="article"
            className="flex flex-col items-start gap-6 border-t border-[var(--divider)] py-[40px] pr-5"
          >
            <div className="flex w-full flex-col items-start gap-5">
              <div className="flex w-full items-center gap-3">
                {item.icon && (
                  <span className="text-[22px] leading-none" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                <p className="font-display text-[18px] leading-none tracking-[-0.54px] text-[var(--heading)]">
                  {item.title}
                </p>
                {item.badge && (
                  <span className="ml-auto shrink-0 rounded-full bg-[var(--olive-soft)] px-2.5 py-0.5 font-mono text-[11px] font-bold tracking-[-0.14px] text-[var(--olive)]">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className={`w-full ${BODY}`}>{item.body}</p>
            </div>
            <Link
              href={item.href}
              className="text-[13px] font-bold leading-[1.4] tracking-[-0.14px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--olive)] focus-visible:outline-offset-2"
              aria-label={`${item.label}: ${item.title}`}
            >
              {item.label} →
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
