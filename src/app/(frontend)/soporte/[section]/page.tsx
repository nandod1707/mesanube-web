import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import { JsonLd } from '@/components/shared/JsonLd'
import { ArticleLinkList } from '@/components/support/ArticleLinkList'
import { ContactCta } from '@/components/support/ContactCta'
import { SupportHeader } from '@/components/support/SupportHeader'
import { SupportShell } from '@/components/support/SupportShell'
import { buildBreadcrumbSchema } from '@/utilities/schema'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getSupportDirectory, getSupportSection } from '@/utilities/support'

type Args = { params: Promise<{ section: string }> }

export async function generateStaticParams() {
  const sections = await getSupportDirectory()
  return sections.map((section) => ({ section: section.slug }))
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const section = await getSupportSection((await params).section)
  if (!section) return {}
  const title = `${section.title} | Centro de ayuda Mesanube`
  const url = `/soporte/${section.slug}`
  return {
    title,
    description: section.description,
    alternates: { canonical: url },
    openGraph: mergeOpenGraph({ title, description: section.description, url }),
  }
}

export default async function SupportSectionPage({ params }: Args) {
  const section = await getSupportSection((await params).section)
  if (!section) notFound()
  return (
    <SupportShell>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Soporte', path: '/soporte' },
          { name: section.title, path: `/soporte/${section.slug}` },
        ])}
      />
      <SupportHeader eyebrow="Centro de ayuda" heading={section.title} subtitle={section.description} />
      <div className="flex w-full max-w-[1500px] flex-col gap-[60px] pb-[80px]">
        <div className="max-w-[760px]">
          <ArticleLinkList articles={section.articles} showSummary />
        </div>
        <ContactCta />
      </div>
    </SupportShell>
  )
}
