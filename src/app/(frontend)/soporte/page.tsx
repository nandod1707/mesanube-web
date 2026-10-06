import type { Metadata } from 'next'
import React from 'react'

import { JsonLd } from '@/components/shared/JsonLd'
import { ContactCta } from '@/components/support/ContactCta'
import { SearchBox } from '@/components/support/SearchBox'
import { SectionCardGrid } from '@/components/support/SectionCardGrid'
import { SupportShell } from '@/components/support/SupportShell'
import { BODY, TITLE, TITLE_STYLE } from '@/components/usecase/styles'
import { buildBreadcrumbSchema } from '@/utilities/schema'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getSupportDirectory } from '@/utilities/support'

const title = 'Centro de ayuda | Mesanube'
const description =
  'Guías paso a paso para usar Mesanube: facturación ARCA, comandas, caja, mesas y más. Encontrá la respuesta o escribinos.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/soporte' },
  openGraph: mergeOpenGraph({ title, description, url: '/soporte' }),
}

export default async function SoportePage() {
  const sections = await getSupportDirectory()
  return (
    <SupportShell>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Soporte', path: '/soporte' },
        ])}
      />
      <header className="flex flex-col items-start gap-6">
        <h1 className={TITLE} style={TITLE_STYLE}>
          Hola, ¿en qué te ayudamos?
        </h1>
        <p className={`max-w-[52ch] ${BODY}`}>
          Guías cortas para resolver lo del día a día en tu local, paso a paso.
        </p>
        <SearchBox />
      </header>
      {sections.length > 0 ? (
        <SectionCardGrid sections={sections} />
      ) : (
        <p className={BODY}>Estamos cargando las primeras guías. Mientras tanto, escribinos.</p>
      )}
      <ContactCta />
    </SupportShell>
  )
}
