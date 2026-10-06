import type { Metadata } from 'next'
import React from 'react'

import { ArticleRows } from '@/components/support/ArticleRows'
import { SupportBreadcrumb } from '@/components/support/SupportBreadcrumb'
import { ContactCta } from '@/components/support/ContactCta'
import { SearchBox } from '@/components/support/SearchBox'
import { SupportShell } from '@/components/support/SupportShell'
import { BODY, TITLE, TITLE_STYLE } from '@/components/usecase/styles'
import { searchSupportArticles } from '@/utilities/support'

export const metadata: Metadata = {
  title: 'Buscar en el centro de ayuda | Mesanube',
  // Result pages are thin and query-dependent; keep them out of the index.
  robots: { index: false, follow: true },
}

type Args = { searchParams: Promise<{ q?: string | string[] }> }

export default async function SupportSearchPage({ searchParams }: Args) {
  const raw = (await searchParams).q
  const query = (Array.isArray(raw) ? raw[0] : raw)?.trim() ?? ''
  const results = await searchSupportArticles(query)

  const heading = !query
    ? 'Buscá en el centro de ayuda'
    : results.length
      ? `Resultados para “${query}”`
      : `No encontramos nada para “${query}”`

  return (
    <SupportShell>
      <header className="flex flex-col items-start gap-5">
        <SupportBreadcrumb items={[{ label: 'Centro de ayuda', href: '/soporte' }, { label: 'Búsqueda' }]} />
        <h1 className={TITLE} style={TITLE_STYLE}>
          {heading}
        </h1>
        {query && !results.length && <p className={BODY}>Probá con otras palabras o escribinos.</p>}
        <SearchBox defaultValue={query} />
      </header>
      {results.length > 0 && (
        <div className="max-w-[820px]">
          <ArticleRows articles={results} showSummary />
        </div>
      )}
      <ContactCta />
    </SupportShell>
  )
}
