import type { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import React from 'react'

import { JsonLd } from '@/components/shared/JsonLd'
import { ArticleBody } from '@/components/support/ArticleBody'
import { ContactCta } from '@/components/support/ContactCta'
import { HelpfulVote } from '@/components/support/HelpfulVote'
import { SupportShell } from '@/components/support/SupportShell'
import { SupportBreadcrumb } from '@/components/support/SupportBreadcrumb'
import { TITLE, TITLE_STYLE } from '@/components/usecase/styles'
import { buildBreadcrumbSchema } from '@/utilities/schema'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getSupportArticle, getSupportDirectory, supportArticlePath } from '@/utilities/support'

type Args = { params: Promise<{ section: string; slug: string }> }

const updatedFormat = new Intl.DateTimeFormat('es-AR', { dateStyle: 'long', timeZone: 'UTC' })

export async function generateStaticParams() {
  const sections = await getSupportDirectory()
  return sections.flatMap((section) =>
    section.articles.map((article) => ({ section: section.slug, slug: article.slug })),
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const article = await getSupportArticle((await params).slug)
  if (!article) return {}
  const title = article.meta?.title || `${article.title} | Mesanube`
  const description = article.meta?.description || article.summary
  const url = supportArticlePath(article.section.slug, article.slug)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: mergeOpenGraph({ title, description, url, type: 'article' }),
  }
}

export default async function SupportArticlePage({ params }: Args) {
  const { section: sectionSlug, slug } = await params
  const article = await getSupportArticle(slug)
  if (!article) notFound()
  const { section } = article
  const path = supportArticlePath(section.slug, article.slug)
  // An article reached through the wrong section segment goes to its canonical URL.
  if (sectionSlug !== section.slug) permanentRedirect(path)

  return (
    <SupportShell activeSection={section.slug} activeArticle={article.slug}>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Soporte', path: '/soporte' },
          { name: section.title, path: `/soporte/${section.slug}` },
          { name: article.title, path },
        ])}
      />
      <article className="flex w-full max-w-[760px] flex-col gap-8">
        <SupportBreadcrumb
          items={[
            { label: 'Centro de ayuda', href: '/soporte' },
            { label: section.title, href: `/soporte/${section.slug}` },
            { label: article.title },
          ]}
        />
        <header className="flex flex-col gap-4">
          <h1 className={TITLE} style={TITLE_STYLE}>
            {article.title}
          </h1>
          <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--caption)]">
            Actualizado el {updatedFormat.format(new Date(article.updated))}
          </p>
        </header>
        <ArticleBody content={article.content} />
        <HelpfulVote articleId={article.id} />
        <ContactCta />
      </article>
    </SupportShell>
  )
}
