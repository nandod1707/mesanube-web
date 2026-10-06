import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, beforeEach, expect } from 'vitest'

import { lexicalParagraph, noRevalidate, resetSupport } from './helpers/support'

let payload: Payload
let sectionId: string

const article = (slug: string, status: 'draft' | 'published' = 'published') => ({
  title: 'Cómo anular una factura',
  slug,
  section: sectionId,
  summary: 'Anulá una factura emitida.',
  content: lexicalParagraph('Texto'),
  updated: '2026-10-05',
  _status: status,
})

describe('Support collections', () => {
  beforeAll(async () => {
    payload = await getPayload({ config: await config })
  })

  beforeEach(async () => {
    await resetSupport(payload)
    const section = await payload.create({
      collection: 'support-sections',
      data: { title: 'Facturación ARCA', slug: 'facturacion-arca', description: 'd', order: 1 },
      context: noRevalidate,
    })
    sectionId = section.id
  })

  it('rejects two articles with the same slug', async () => {
    await payload.create({ collection: 'support-articles', data: article('anular'), context: noRevalidate })
    await expect(
      payload.create({ collection: 'support-articles', data: article('anular'), context: noRevalidate }),
    ).rejects.toThrow()
  })

  it('requires a section', async () => {
    const { section: _section, ...withoutSection } = article('sin-seccion')
    await expect(
      payload.create({
        collection: 'support-articles',
        data: withoutSection as never,
        context: noRevalidate,
      }),
    ).rejects.toThrow()
  })

  it('rejects slugs that are not kebab-case', async () => {
    await expect(
      payload.create({ collection: 'support-articles', data: article('Anular Factura'), context: noRevalidate }),
    ).rejects.toThrow()
  })

  it('hides draft articles from anonymous readers', async () => {
    await payload.create({ collection: 'support-articles', data: article('borrador', 'draft'), draft: true, context: noRevalidate })
    const result = await payload.find({
      collection: 'support-articles',
      where: { slug: { equals: 'borrador' } },
      overrideAccess: false,
    })
    expect(result.docs).toHaveLength(0)
  })

  it('shows published articles to anonymous readers', async () => {
    await payload.create({ collection: 'support-articles', data: article('publicado'), context: noRevalidate })
    const result = await payload.find({
      collection: 'support-articles',
      where: { slug: { equals: 'publicado' } },
      overrideAccess: false,
    })
    expect(result.docs).toHaveLength(1)
  })
})
