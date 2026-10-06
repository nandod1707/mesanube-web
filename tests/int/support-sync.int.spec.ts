// @vitest-environment node
import { createLocalReq, getPayload, Payload, PayloadRequest } from 'payload'
import config from '@/payload.config'
import sharp from 'sharp'

import { describe, it, beforeAll, beforeEach, afterAll, expect } from 'vitest'

import type { User } from '@/payload-types'
import { supportSyncEndpoints } from '@/endpoints/supportSync'
import { deleteArticle, syncArticle, syncImage, syncSection } from '@/endpoints/supportSync/sync'
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

const SECTION_PATH = 'facturacion-arca/_section.md'
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

  it('keeps a space where a quote wraps onto a second > line', async () => {
    await syncAll(BODY.replace('> **Importante:** no la emitas dos veces.', '> **Importante:** no la\n> emitas dos veces.'))
    const doc = (await payload.find({ collection: 'support-articles', where: { slug: { equals: 'anular-una-factura' } }, depth: 0 })).docs[0]
    const quote = doc.content.root.children.at(-1) as unknown as { children: { text?: string }[] }
    expect(quote.children.map((child) => child.text ?? '').join('')).toContain('no la emitas')
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

  const anonymousCount = async () =>
    (
      await payload.find({
        collection: 'support-articles',
        where: { slug: { equals: 'anular-una-factura' } },
        overrideAccess: false,
      })
    ).docs.length

  it('unpublishes a published article when its file switches to draft', async () => {
    await syncAll(BODY, 'published')
    expect(await anonymousCount()).toBe(1)
    expect((await syncAll(BODY, 'draft')).status).toBe('updated')
    expect(await anonymousCount()).toBe(0)
  })

  it('publishes a draft article when its file switches to published', async () => {
    await syncAll(BODY, 'draft')
    expect((await syncAll(BODY, 'published')).status).toBe('updated')
    expect(await anonymousCount()).toBe(1)
  })

  it('re-links articles when their section is deleted and recreated', async () => {
    await syncAll()
    await payload.delete({ collection: 'support-sections', where: { slug: { equals: 'facturacion-arca' } }, context: noRevalidate })
    const result = await syncAll()
    expect(result.status).toBe('updated')
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
    if ('id' in first && 'id' in changed) expect(changed.id).toBe(first.id)
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

  it('reports a changed section as updated', async () => {
    const req = await reqAs(syncUser)
    expect((await syncSection(req, SECTION_PATH, SECTION)).status).toBe('created')
    expect((await syncSection(req, SECTION_PATH, SECTION)).status).toBe('unchanged')
    const changed = await syncSection(req, SECTION_PATH, SECTION.replace('order: 2', 'order: 5'))
    expect(changed.status).toBe('updated')
  })

  it('maps results to 201, 200 and 422 on the articles endpoint', async () => {
    const endpoint = supportSyncEndpoints.find((e) => e.path === '/support-sync/articles')!
    const call = async (content: string) => {
      const req = await reqAs(syncUser)
      req.json = async () => ({ path: ARTICLE_PATH, content })
      return (await endpoint.handler(req)).status
    }
    const req = await reqAs(syncUser)
    await syncSection(req, SECTION_PATH, SECTION)
    expect(await call(article('Texto.'))).toBe(201)
    expect(await call(article('Texto.'))).toBe(200)
    expect(await call(article('<div>x</div>'))).toBe(422)
  })

  it('accepts a multipart upload on the images endpoint', async () => {
    const endpoint = supportSyncEndpoints.find((e) => e.path === '/support-sync/images')!
    const form = new FormData()
    form.set('path', 'facturacion-arca/images/a.png')
    form.set('file', new Blob([await png({ r: 1, g: 2, b: 3 })], { type: 'image/png' }), 'a.png')
    const req = await reqAs(syncUser)
    req.formData = async () => form
    expect((await endpoint.handler(req)).status).toBe(201)

    const missing = await reqAs(syncUser)
    missing.formData = async () => new FormData()
    expect((await endpoint.handler(missing)).status).toBe(400)
  })

  it('returns 400 from the endpoints for a malformed body', async () => {
    const endpoint = supportSyncEndpoints.find((e) => e.path === '/support-sync/sections')!
    const req = await reqAs(syncUser)
    req.json = async () => ({ nope: true })
    const response = await endpoint.handler(req)
    expect(response.status).toBe(400)
  })

  it('updates by frontmatter id, allowing the slug to change', async () => {
    const created = await syncAll()
    if (created.status !== 'created') throw new Error('setup failed')
    const req = await reqAs(syncUser)
    const renamed = article(BODY)
      .replace('---\n', `---\nid: ${created.id}\n`)
      .replace('slug: anular-una-factura', 'slug: anular-factura')
    const result = await syncArticle(req, 'facturacion-arca/anular-factura.md', renamed)
    expect(result).toMatchObject({ status: 'updated', id: created.id })
    expect((await payload.count({ collection: 'support-articles' })).totalDocs).toBe(1)
  })

  it('adopts an existing article by slug when the file has no id yet', async () => {
    const created = await syncAll()
    const again = await syncAll('Otro texto.')
    expect(again.status).toBe('updated')
    if ('id' in created && 'id' in again) expect(again.id).toBe(created.id)
  })

  it('rejects an unknown id and a slug owned by another article', async () => {
    const created = await syncAll()
    if (created.status !== 'created') throw new Error('setup failed')
    const req = await reqAs(syncUser)
    const withId = (id: string) => article('Texto.').replace('---\n', `---\nid: ${id}\n`)
    expect((await syncArticle(req, ARTICLE_PATH, withId('000000000000000000000000'))).status).toBe('error')

    const other = await syncArticle(
      req,
      'facturacion-arca/otro.md',
      article('Texto.').replace('slug: anular-una-factura', 'slug: otro'),
    )
    if (other.status !== 'created') throw new Error('setup failed')
    expect((await syncArticle(req, ARTICLE_PATH, withId(other.id))).status).toBe('error')
  })

  it('deletes an article by id, then reports not_found on a repeat', async () => {
    const created = await syncAll()
    if (created.status !== 'created') throw new Error('setup failed')
    const req = await reqAs(syncUser)
    expect(await deleteArticle(req, created.id)).toEqual({ status: 'deleted', id: created.id })
    expect((await deleteArticle(req, created.id)).status).toBe('not_found')
  })

  it('maps delete results to 200, 400 and 401 on the endpoint', async () => {
    const endpoint = supportSyncEndpoints.find((e) => e.path === '/support-sync/articles' && e.method === 'delete')!
    const call = async (user: User | null, id: unknown) => {
      const req = await reqAs(user)
      req.json = async () => ({ id })
      return (await endpoint.handler(req)).status
    }
    const created = await syncAll()
    if (created.status !== 'created') throw new Error('setup failed')
    expect(await call(null, created.id)).toBe(401)
    expect(await call(syncUser, created.id)).toBe(200)
    expect(await call(syncUser, created.id)).toBe(200)
    expect(await call(syncUser, 42)).toBe(400)
  })
})
