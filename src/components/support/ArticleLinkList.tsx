import Link from 'next/link'
import React from 'react'

import { BODY } from '@/components/usecase/styles'
import { supportArticlePath, type SupportArticleSummary } from '@/utilities/support'

export type ArticleLink = SupportArticleSummary & { sectionSlug: string }

type ArticleLinkListProps = {
  articles: ArticleLink[]
  showSummary?: boolean
}

/** Divider-separated list of article links, optionally with their summaries. */
export function ArticleLinkList({ articles, showSummary = false }: ArticleLinkListProps) {
  return (
    <ul className="flex w-full flex-col">
      {articles.map((article) => (
        <li key={article.id} className="border-t border-[var(--divider)]">
          <Link
            href={supportArticlePath(article.sectionSlug, article.slug)}
            className="group flex flex-col gap-1 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--olive)]"
          >
            <span className="text-[16px] font-bold leading-[1.4] tracking-[-0.09px] text-[var(--heading)] transition-colors duration-150 group-hover:text-[var(--olive)]">
              {article.title} →
            </span>
            {showSummary && <span className={BODY}>{article.summary}</span>}
          </Link>
        </li>
      ))}
    </ul>
  )
}
