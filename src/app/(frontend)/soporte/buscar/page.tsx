import type { Metadata } from 'next'
import React from 'react'

import { ArticleLinkList } from '@/components/support/ArticleLinkList'
import { ContactCta } from '@/components/support/ContactCta'
import { SearchBox } from '@/components/support/SearchBox'
import { SupportHeader } from '@/components/support/SupportHeader'
import { SupportShell } from '@/components/support/SupportShell'
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
      <SupportHeader
        eyebrow="Centro de ayuda"
        heading={heading}
        subtitle={query && !results.length ? 'Probá con otras palabras o escribinos.' : undefined}
      >
        <SearchBox defaultValue={query} />
      </SupportHeader>
      <div className="flex w-full max-w-[1500px] flex-col gap-[60px] pb-[80px]">
        {results.length > 0 && (
          <div className="max-w-[760px]">
            <ArticleLinkList articles={results} showSummary />
          </div>
        )}
        <ContactCta />
      </div>
    </SupportShell>
  )
}
