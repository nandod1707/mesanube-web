// @vitest-environment node
import { createLocalReq, getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, beforeEach, expect } from 'vitest'

import { supportVoteEndpoint } from '@/endpoints/supportVote'
import { lexicalParagraph, noRevalidate, resetSupport } from './helpers/support'

let payload: Payload
let publishedId: string
let draftId: string

const vote = async (id: string, body: unknown) => {
  const req = await createLocalReq({ context: noRevalidate }, payload)
  req.user = null
  req.routeParams = { id }
  req.json = async () => body
  return supportVoteEndpoint.handler(req)
}

const counts = async (id: string) => {
  const article = await payload.findByID({ collection: 'support-articles', id, draft: true })
  const tally = (await payload.find({ collection: 'support-feedback', where: { article: { equals: id } } })).docs[0]
  return {
    yes: tally?.helpfulYes ?? 0,
    no: tally?.helpfulNo ?? 0,
    title: article.title,
    updatedAt: article.updatedAt,
  }
}

describe('Support vote', () => {
  beforeAll(async () => {
    payload = await getPayload({ config: await config })
  })

  beforeEach(async () => {
    await resetSupport(payload)
    const section = await payload.create({
      collection: 'support-sections',
      data: { title: 'Caja', slug: 'caja', description: 'd', order: 1 },
      context: noRevalidate,
    })
    const base = {
      section: section.id,
      summary: 's',
      content: lexicalParagraph('x'),
      updated: '2026-10-05',
    }
    publishedId = (
      await payload.create({
        collection: 'support-articles',
        data: { ...base, title: 'Publicado', slug: 'publicado', _status: 'published' },
        context: noRevalidate,
      })
    ).id
    draftId = (
      await payload.create({
        collection: 'support-articles',
        data: { ...base, title: 'Borrador', slug: 'borrador', _status: 'draft' },
        draft: true,
        context: noRevalidate,
      })
    ).id
  })

  it('increments helpfulNo by one for a "no" vote (AE4)', async () => {
    const before = await counts(publishedId)
    const response = await vote(publishedId, { value: 'no' })
    expect(response.status).toBe(200)
    const after = await counts(publishedId)
    expect(after.no).toBe(before.no + 1)
    expect(after.yes).toBe(before.yes)
  })

  it('does not change updatedAt', async () => {
    const before = await counts(publishedId)
    await vote(publishedId, { value: 'yes' })
    expect((await counts(publishedId)).updatedAt).toBe(before.updatedAt)
  })

  it('rejects an invalid value with 400', async () => {
    expect((await vote(publishedId, { value: 'maybe' })).status).toBe(400)
  })

  it('returns 404 for a draft or unknown article', async () => {
    expect((await vote(draftId, { value: 'yes' })).status).toBe(404)
    expect((await vote('000000000000000000000000', { value: 'yes' })).status).toBe(404)
  })

  it('counts concurrent first votes without losing any', async () => {
    await Promise.all([1, 2, 3, 4, 5].map(() => vote(publishedId, { value: 'yes' })))
    expect((await counts(publishedId)).yes).toBe(5)
    expect((await payload.count({ collection: 'support-feedback' })).totalDocs).toBe(1)
  })

  it('ignores any other field in the body', async () => {
    await vote(publishedId, { value: 'yes', title: 'Hackeado', helpfulNo: 999 })
    const after = await counts(publishedId)
    expect(after.title).toBe('Publicado')
    expect(after.no).toBe(0)
  })
})
