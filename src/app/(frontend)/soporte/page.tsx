import type { Metadata } from 'next'
import React from 'react'

import { JsonLd } from '@/components/shared/JsonLd'
import { ContactCta } from '@/components/support/ContactCta'
import { SearchBox } from '@/components/support/SearchBox'
import { SectionDirectory } from '@/components/support/SectionDirectory'
import { SupportHeader } from '@/components/support/SupportHeader'
import { SupportShell } from '@/components/support/SupportShell'
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
      <SupportHeader
        eyebrow="Centro de ayuda"
        heading="¿En qué te ayudamos?"
        subtitle="Guías cortas para resolver lo del día a día en tu local, paso a paso."
      >
        <SearchBox />
      </SupportHeader>
      {sections.length > 0 ? (
        <SectionDirectory sections={sections} />
      ) : (
        <p className="w-full max-w-[1500px] pb-[60px] text-[18px] text-[var(--body)]">
          Estamos cargando las primeras guías. Mientras tanto, escribinos.
        </p>
      )}
      <div className="w-full max-w-[1500px] pb-[80px]">
        <ContactCta />
      </div>
    </SupportShell>
  )
}
