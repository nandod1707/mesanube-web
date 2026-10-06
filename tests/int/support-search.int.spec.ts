// @vitest-environment node
import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, expect } from 'vitest'

import { buildSearchText } from '@/endpoints/supportSync/markdown'
import { searchSupportArticles } from '@/utilities/support'
import { lexicalParagraph, noRevalidate, resetSupport } from './helpers/support'

let payload: Payload

describe('Support search', () => {
  beforeAll(async () => {
    payload = await getPayload({ config: await config })
    await resetSupport(payload)
    const section = await payload.create({
      collection: 'support-sections',
      data: { title: 'Facturación ARCA', slug: 'facturacion-arca', description: 'd', order: 1 },
      context: noRevalidate,
    })
    const base = { section: section.id, content: lexicalParagraph('x'), updated: '2026-10-05' }
    await payload.create({
      collection: 'support-articles',
      data: {
        ...base,
        title: 'Cómo anular una factura',
        slug: 'anular-una-factura',
        summary: 'Anulá una factura emitida.',
        plainText: buildSearchText(
          'Cómo anular una factura',
          'Anulá una factura emitida.',
          'Mesanube emite la nota de crédito y la informa a ARCA.',
        ),
        _status: 'published',
      },
      context: noRevalidate,
    })
    await payload.create({
      collection: 'support-articles',
      data: {
        ...base,
        title: 'Nota de crédito parcial',
        slug: 'nota-de-credito-parcial',
        summary: 'Devolvé parte de una venta.',
        plainText: buildSearchText('Nota de crédito parcial', 'Devolvé parte de una venta.', 'Texto.'),
        _status: 'published',
      },
      context: noRevalidate,
    })
    await payload.create({
      collection: 'support-articles',
      data: {
        ...base,
        title: 'Borrador sobre la nota de crédito',
        slug: 'borrador',
        summary: 's',
        plainText: buildSearchText('Borrador sobre la nota de crédito', 's', 'nota de crédito'),
        _status: 'draft',
      },
      draft: true,
      context: noRevalidate,
    })
  })

  it('finds an article whose body text matches', async () => {
    const results = await searchSupportArticles('informa ARCA')
    expect(results.map((r) => r.slug)).toEqual(['anular-una-factura'])
    expect(results[0].sectionSlug).toBe('facturacion-arca')
  })

  it('ranks title matches first and never returns drafts', async () => {
    const results = await searchSupportArticles('nota de crédito')
    expect(results.map((r) => r.slug)).toEqual(['nota-de-credito-parcial', 'anular-una-factura'])
  })

  it('ignores accents and case', async () => {
    const results = await searchSupportArticles('NOTA DE CREDITO')
    expect(results.map((r) => r.slug)).toEqual(['nota-de-credito-parcial', 'anular-una-factura'])
  })

  it('returns nothing for an empty query', async () => {
    expect(await searchSupportArticles('   ')).toEqual([])
  })
})
