import Link from 'next/link'
import React from 'react'

import Reveal from '@/components/shared/Reveal'
import { BODY, CARD_TITLE } from '@/components/usecase/styles'
import type { SupportSectionWithArticles } from '@/utilities/support'

import { ArticleLinkList } from './ArticleLinkList'

// How many article links each section card previews on the /soporte index.
const PREVIEW_COUNT = 5

/** /soporte index: one card per section with its first articles and a link to the rest. */
export function SectionDirectory({ sections }: { sections: SupportSectionWithArticles[] }) {
  return (
    <section className="grid w-full max-w-[1500px] grid-cols-1 gap-x-[20px] gap-y-[40px] pb-[80px] md:grid-cols-2 lg:grid-cols-3 lg:pb-[120px]">
      {sections.map((section, i) => (
        <Reveal
          key={section.id}
          as="article"
          delay={(Math.min((i % 3) + 1, 4)) as 1 | 2 | 3 | 4}
          className="flex flex-col gap-4 border-t border-[var(--divider)] pt-6"
        >
          <h2 className={CARD_TITLE}>
            <Link
              href={`/soporte/${section.slug}`}
              className="transition-colors duration-150 hover:text-[var(--olive)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--olive)]"
            >
              {section.title}
            </Link>
          </h2>
          <p className={BODY}>{section.description}</p>
          <ArticleLinkList section={section.slug} articles={section.articles.slice(0, PREVIEW_COUNT)} />
          {section.articles.length > PREVIEW_COUNT && (
            <Link
              href={`/soporte/${section.slug}`}
              className="text-[13px] font-bold leading-[1.4] tracking-[-0.14px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-[var(--heading)]"
            >
              Ver los {section.articles.length} artículos →
            </Link>
          )}
        </Reveal>
      ))}
    </section>
  )
}
