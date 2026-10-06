import Link from 'next/link'
import React from 'react'

import Reveal from '@/components/shared/Reveal'
import type { SupportSectionWithArticles } from '@/utilities/support'

import { articleCount } from './articleCount'
import { SectionIcon } from './SectionIcon'
import styles from './SectionCardGrid.module.css'

/** /soporte index: one card per section — olive icon band, serif title, description and count. */
export function SectionCardGrid({ sections }: { sections: SupportSectionWithArticles[] }) {
  return (
    <section aria-labelledby="support-sections" className="flex w-full flex-col gap-6">
      <h2
        id="support-sections"
        className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)]"
      >
        Secciones
      </h2>
      <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {sections.map((section, i) => (
          <Reveal as="li" key={section.id} delay={(Math.min((i % 3) + 1, 4)) as 1 | 2 | 3 | 4}>
            <Link href={`/soporte/${section.slug}`} className={styles.card}>
              <span className={styles.band}>
                <SectionIcon icon={section.icon} className="size-7" />
              </span>
              <span className="flex flex-1 flex-col items-center gap-2 px-6 pt-6 pb-7 text-center">
                <span className="font-display text-[28px] leading-[1.05] tracking-[-0.6px] text-[var(--heading)]">
                  {section.title}
                </span>
                <span className="text-[15px] leading-[1.45] text-[var(--body)]">{section.description}</span>
                <span className="mt-auto pt-2 font-mono text-[13px] leading-[1.4] tracking-[-0.14px] text-[var(--caption)]">
                  {articleCount(section.articles.length)}
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
