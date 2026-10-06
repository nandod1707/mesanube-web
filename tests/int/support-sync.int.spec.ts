// @vitest-environment node
import { createLocalReq, getPayload, Payload, PayloadRequest } from 'payload'
import config from '@/payload.config'
import sharp from 'sharp'

import { describe, it, beforeAll, beforeEach, afterAll, expect } from 'vitest'

import type { User } from '@/payload-types'
import { supportSyncEndpoints } from '@/endpoints/supportSync'
import { syncArticle, syncImage, syncSection } from '@/endpoints/supportSync/sync'
import { noRevalidate, resetSupport } from './helpers/support'

let payload: Payload
let syncUser: User

const reqAs = async (user: User | null): Promise<PayloadRequest> => {
  const req = await createLocalReq(
    { user: user ? { ...user, collection: 'users' } : undefined, context: noRevalidate },
    payload,
  )
  if (!user) req.user = null
  return req
}

const SECTION_PATH = 'facturacion-arca/_seccion.md'
const SECTION = `---
title: Facturación ARCA
slug: facturacion-arca
description: Emití y anulá comprobantes.
order: 2
---
`
const ARTICLE_PATH = 'facturacion-arca/anular-una-factura.md'
const article = (body: string, status = 'published') => `---
title: Cómo anular una factura
slug: anular-una-factura
section: facturacion-arca
summary: Anulá una factura emitida generando la nota de crédito.
updated: 2026-10-05
status: ${status}
---
${body}`
const BODY = `Si emitiste una factura con un error, se anula con una nota de crédito.

## Pasos

1. Andá a **Ventas → Comprobantes**.
2. Tocá **Anular**.

![Botón Anular en la lista de comprobantes](./images/anular-una-factura-1.png)

> **Importante:** no la emitas dos veces.
`

const png = (color: { r: number; g: number; b: number }) =>
  sharp({ create: { width: 4, height: 4, channels: 3, background: color } }).png().toBuffer()

describe('Support sync', () => {
  beforeAll(async () => {
    payload = await getPayload({ config: await config })
    await payload.delete({ collection: 'users', where: { email: { like: '@sync.test' } } })
    syncUser = await payload.create({
      collection: 'users',
      data: { email: 'bot@sync.test', password: 'test-password', role: 'support-sync' },
    })
  })

  beforeEach(async () => {
    await resetSupport(payload)
  })

  afterAll(async () => {
    await payload.delete({ collection: 'users', where: { email: { like: '@sync.test' } } })
  })

  const syncAll = async (body = BODY, status = 'published') => {
    const req = await reqAs(syncUser)
    await syncSection(req, SECTION_PATH, SECTION)
    await syncImage(req, 'facturacion-arca/images/anular-una-factura-1.png', await png({ r: 255, g: 0, b: 0 }))
    return syncArticle(req, ARTICLE_PATH, article(body, status))
  }

  it('creates the article, then reports unchanged on an identical re-sync (AE1)', async () => {
    expect((await syncAll()).status).toBe('created')
    expect((await syncAll()).status).toBe('unchanged')
    const found = await payload.find({ collection: 'support-articles', where: { slug: { equals: 'anular-una-factura' } } })
    expect(found.totalDocs).toBe(1)
  })

  it('updates the article when the body changes', async () => {
    await syncAll()
    const result = await syncAll(BODY.replace('dos veces', 'tres veces'))
    expect(result.status).toBe('updated')
    const doc = (await payload.find({ collection: 'support-articles', where: { slug: { equals: 'anular-una-factura' } } })).docs[0]
    expect(doc.plainText).toContain('tres veces')
  })

  it('converts Markdown to Lexical with headings, lists, the image and the quote', async () => {
    await syncAll()
    const doc = (await payload.find({ collection: 'support-articles', where: { slug: { equals: 'anular-una-factura' } }, depth: 0 })).docs[0]
    const types = doc.content.root.children.map((node) => node.type)
    expect(types).toEqual(['paragraph', 'heading', 'list', 'upload', 'quote'])
    const upload = doc.content.root.children[3] as unknown as { relationTo: string; value: string }
    expect(upload.relationTo).toBe('support-media')
    expect(doc.sourceMarkdown).toContain('## Pasos')
  })

  it('stores a draft article as unpublished', async () => {
    await syncAll(BODY, 'draft')
    const anonymous = await payload.find({
      collection: 'support-articles',
      where: { slug: { equals: 'anular-una-factura' } },
      overrideAccess: false,
    })
    expect(anonymous.docs).toHaveLength(0)
  })

  it('rejects an article whose section does not exist', async () => {
    const req = await reqAs(syncUser)
    const result = await syncArticle(req, ARTICLE_PATH, article('Texto.'))
    expect(result.status).toBe('error')
    if (result.status === 'error') expect(result.errors[0]).toContain('facturacion-arca')
  })

  it('rejects an article that references an image that was not uploaded', async () => {
    const req = await reqAs(syncUser)
    await syncSection(req, SECTION_PATH, SECTION)
    const result = await syncArticle(req, ARTICLE_PATH, article(BODY))
    expect(result.status).toBe('error')
  })

  it('rejects a file that breaks the guidelines without writing anything', async () => {
    const req = await reqAs(syncUser)
    await syncSection(req, SECTION_PATH, SECTION)
    const result = await syncArticle(req, ARTICLE_PATH, article('<div>HTML</div>'))
    expect(result.status).toBe('error')
    expect((await payload.count({ collection: 'support-articles' })).totalDocs).toBe(0)
  })

  it('skips an unchanged image and replaces a changed one in place', async () => {
    const req = await reqAs(syncUser)
    const path = 'facturacion-arca/images/a.png'
    const first = await syncImage(req, path, await png({ r: 0, g: 0, b: 255 }))
    const again = await syncImage(req, path, await png({ r: 0, g: 0, b: 255 }))
    const changed = await syncImage(req, path, await png({ r: 0, g: 255, b: 0 }))
    expect(first.status).toBe('created')
    expect(again.status).toBe('unchanged')
    expect(changed.status).toBe('updated')
    if (first.status !== 'error' && changed.status !== 'error') expect(changed.id).toBe(first.id)
    expect((await payload.count({ collection: 'support-media' })).totalDocs).toBe(1)
  })

  it('rejects an image over 500 KB', async () => {
    const req = await reqAs(syncUser)
    const result = await syncImage(req, 'facturacion-arca/images/big.png', Buffer.alloc(501 * 1024))
    expect(result.status).toBe('error')
  })

  it('returns 401 from the endpoints for an anonymous caller', async () => {
    const endpoint = supportSyncEndpoints.find((e) => e.path === '/support-sync/articles')!
    const req = await reqAs(null)
    req.json = async () => ({ path: ARTICLE_PATH, content: article(BODY) })
    const response = await endpoint.handler(req)
    expect(response.status).toBe(401)
  })

  it('returns 400 from the endpoints for a malformed body', async () => {
    const endpoint = supportSyncEndpoints.find((e) => e.path === '/support-sync/sections')!
    const req = await reqAs(syncUser)
    req.json = async () => ({ nope: true })
    const response = await endpoint.handler(req)
    expect(response.status).toBe(400)
  })
})
