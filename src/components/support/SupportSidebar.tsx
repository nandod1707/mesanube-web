import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { supportArticlePath, type SupportSectionWithArticles } from '@/utilities/support'

import { SectionIcon } from './SectionIcon'

type SupportSidebarProps = {
  sections: SupportSectionWithArticles[]
  activeSection?: string
  activeArticle?: string
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--olive)]'

/**
 * Help-center navigation: every section with its icon; the current section unfolds to list its
 * articles. Desktop only — on mobile the breadcrumb and the index cards cover navigation.
 */
export function SupportSidebar({ sections, activeSection, activeArticle }: SupportSidebarProps) {
  return (
    <nav aria-label="Secciones de soporte" className="flex flex-col gap-1">
      <Link
        href="/soporte"
        className={`mb-3 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)] hover:text-[var(--heading)] ${FOCUS}`}
      >
        Centro de ayuda
      </Link>
      <ul className="flex flex-col">
        {sections.map((section) => {
          const open = section.slug === activeSection
          const Chevron = open ? ChevronDown : ChevronRight
          return (
            <li key={section.id}>
              <Link
                href={`/soporte/${section.slug}`}
                aria-current={open && !activeArticle ? 'page' : undefined}
                className={`group flex items-center gap-3 rounded-[10px] px-2 py-2 text-[15px] font-bold leading-[1.3] transition-colors duration-150 hover:bg-[var(--olive-tint)] ${FOCUS} ${
                  open ? 'text-[var(--olive)]' : 'text-[var(--heading)]'
                }`}
              >
                <SectionIcon icon={section.icon} className="size-[18px] shrink-0" />
                <span className="flex-1">{section.title}</span>
                <Chevron
                  aria-hidden="true"
                  className="size-4 shrink-0 text-[var(--caption)] transition-colors group-hover:text-[var(--olive)]"
                />
              </Link>
              {open && (
                <ul className="mb-2 ml-[17px] flex flex-col border-l border-[var(--divider)] pl-4">
                  {section.articles.map((article) => {
                    const current = article.slug === activeArticle
                    return (
                      <li key={article.id}>
                        <Link
                          href={supportArticlePath(section.slug, article.slug)}
                          aria-current={current ? 'page' : undefined}
                          className={`block py-[7px] text-[14px] leading-[1.4] transition-colors duration-150 hover:text-[var(--olive)] ${FOCUS} ${
                            current ? 'font-bold text-[var(--olive)]' : 'text-[var(--body)]'
                          }`}
                        >
                          {article.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
