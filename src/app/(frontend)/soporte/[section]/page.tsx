import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import { JsonLd } from '@/components/shared/JsonLd'
import { ArticleRows } from '@/components/support/ArticleRows'
import { articleCount } from '@/components/support/articleCount'
import { SectionIcon } from '@/components/support/SectionIcon'
import { SupportBreadcrumb } from '@/components/support/SupportBreadcrumb'
import { ContactCta } from '@/components/support/ContactCta'
import { SupportShell } from '@/components/support/SupportShell'
import { BODY, TITLE, TITLE_STYLE } from '@/components/usecase/styles'
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
    <SupportShell activeSection={section.slug}>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Soporte', path: '/soporte' },
          { name: section.title, path: `/soporte/${section.slug}` },
        ])}
      />
      <header className="flex flex-col items-start gap-5">
        <SupportBreadcrumb items={[{ label: 'Centro de ayuda', href: '/soporte' }, { label: section.title }]} />
        <span className="flex size-14 items-center justify-center rounded-[16px] bg-[var(--olive)] text-[var(--warm-white)]">
          <SectionIcon icon={section.icon} className="size-7" />
        </span>
        <h1 className={TITLE} style={TITLE_STYLE}>
          {section.title}
        </h1>
        <p className={`max-w-[52ch] ${BODY}`}>{section.description}</p>
        <p className="font-mono text-[13px] leading-[1.4] tracking-[-0.14px] text-[var(--caption)]">
          {articleCount(section.articles.length)}
        </p>
      </header>
      <section aria-labelledby="section-articles" className="flex max-w-[820px] flex-col gap-4">
        <h2
          id="section-articles"
          className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)]"
        >
          Artículos
        </h2>
        <ArticleRows articles={section.articles} />
      </section>
      <ContactCta />
    </SupportShell>
  )
}
