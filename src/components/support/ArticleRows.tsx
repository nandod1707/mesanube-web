import { FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { supportArticlePath, type SupportArticleSummary } from '@/utilities/support'

export type ArticleLink = SupportArticleSummary & { sectionSlug: string; sectionTitle?: string }

type ArticleRowsProps = {
  articles: ArticleLink[]
  /** Show each article's summary under its title (search results). */
  showSummary?: boolean
}

/** Divider-separated article rows with a document icon, as in a help-center collection page. */
export function ArticleRows({ articles, showSummary = false }: ArticleRowsProps) {
  return (
    <ul className="flex w-full flex-col border-b border-[var(--divider)]">
      {articles.map((article) => (
        <li key={article.id} className="border-t border-[var(--divider)]">
          <Link
            href={supportArticlePath(article.sectionSlug, article.slug)}
            className="group flex items-start gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--olive)]"
          >
            <span className="flex flex-1 flex-col gap-1">
              <span className="text-[16px] font-bold leading-[1.4] tracking-[-0.09px] text-[var(--heading)] transition-colors duration-150 group-hover:text-[var(--olive)]">
                {article.title}
              </span>
              {showSummary && (
                <span className="text-[15px] leading-[1.45] text-[var(--body)]">{article.summary}</span>
              )}
              {showSummary && article.sectionTitle && (
                <span className="font-mono text-[12px] leading-[1.4] tracking-[-0.14px] text-[var(--caption)]">
                  {article.sectionTitle}
                </span>
              )}
            </span>
            <FileText
              aria-hidden="true"
              strokeWidth={1.5}
              className="mt-[2px] size-5 shrink-0 text-[var(--caption)] transition-colors duration-150 group-hover:text-[var(--olive)]"
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
