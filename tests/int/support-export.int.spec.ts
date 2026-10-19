// @vitest-environment node
import { createLocalReq, getPayload, Payload, PayloadRequest } from 'payload'
import config from '@/payload.config'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

import { describe, it, beforeAll, beforeEach, afterAll, expect } from 'vitest'

import type { User } from '@/payload-types'
import { exportArticle, hasAdminEdits } from '@/endpoints/supportSync/export'
import { syncArticle, syncSection } from '@/endpoints/supportSync/sync'
import { noRevalidate, resetSupport } from './helpers/support'

// Copy of the synced articles in the POS repo's docs/publishable/ (2026-10-19). Re-copy it when the
// article format changes so the round-trip keeps covering what writers actually use.
const FIXTURES = join(__dirname, 'fixtures/publishable')

const fixtureFiles = () =>
  readdirSync(FIXTURES, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((dir) =>
      readdirSync(join(FIXTURES, dir.name))
        .filter((file) => file.endsWith('.md'))
        .map((file) => `${dir.name}/${file}`),
    )

// The fixtures carry the production ids; the test database has none, so they are created fresh.
const withoutId = (content: string) => content.replace(/^id: .*\n/m, '')

const frontmatter = (content: string) => content.split('\n---\n')[0]

let payload: Payload
let syncUser: User

const reqAs = async (user: User): Promise<PayloadRequest> =>
  createLocalReq({ user: { ...user, collection: 'users' }, context: noRevalidate }, payload)

describe('Support export', () => {
  beforeAll(async () => {
    payload = await getPayload({ config: await config })
    await payload.delete({ collection: 'users', where: { email: { like: '@export.test' } } })
    syncUser = await payload.create({
      collection: 'users',
      data: { email: 'bot@export.test', password: 'test-password', role: 'support-sync' },
    })
  })

  beforeEach(async () => {
    await resetSupport(payload)
  })

  afterAll(async () => {
    await payload.delete({ collection: 'users', where: { email: { like: '@export.test' } } })
  })

  it('exports every synced article without reporting an admin edit', async () => {
    const req = await reqAs(syncUser)
    const files = fixtureFiles()
    for (const path of files.filter((file) => file.endsWith('/_section.md'))) {
      const result = await syncSection(req, path, readFileSync(join(FIXTURES, path), 'utf8'))
      expect(result.status, path).not.toBe('error')
    }

    const problems: string[] = []
    for (const path of files.filter((file) => !file.endsWith('/_section.md'))) {
      const original = withoutId(readFileSync(join(FIXTURES, path), 'utf8'))
      const result = await syncArticle(req, path, original)
      if (result.status === 'error' || result.status === 'conflict') {
        throw new Error(`${path}: ${result.errors.join(' ')}`)
      }
      const doc = await payload.findByID({ collection: 'support-articles', id: result.id, draft: true, depth: 0 })
      const exported = await exportArticle(req, doc)
      const content = withoutId(exported.content)
      if (exported.path !== path) problems.push(`${path}: exported as ${exported.path}`)
      if (await hasAdminEdits(req, doc, exported)) problems.push(`${path}: reported as edited in the admin`)
      // Frontmatter must come back as written; the body only in the converters' canonical form.
      if (frontmatter(content) !== frontmatter(original)) problems.push(`${path}: frontmatter differs`)
      // Re-syncing the export is what a pull + merge does: it must go through and stay quiet.
      const again = await syncArticle(req, path, content)
      if (again.status === 'error' || again.status === 'conflict') problems.push(`${path}: re-sync ${again.status}`)
    }
    expect(problems).toEqual([])
  }, 60_000)
})
