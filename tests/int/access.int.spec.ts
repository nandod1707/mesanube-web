import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, afterAll, expect } from 'vitest'

import type { User } from '@/payload-types'

let payload: Payload
let legacyUser: User
let syncUser: User

describe('Access roles', () => {
  beforeAll(async () => {
    payload = await getPayload({ config: await config })
    await payload.delete({ collection: 'users', where: { email: { like: '@access.test' } } })
    legacyUser = await payload.create({
      collection: 'users',
      data: { email: 'legacy@access.test', password: 'test-password', role: 'admin' },
    })
    // Simulate an account created before roles existed (no role stored).
    await payload.db.updateOne({
      collection: 'users',
      where: { id: { equals: legacyUser.id } },
      data: { role: null },
    })
    legacyUser = await payload.findByID({ collection: 'users', id: legacyUser.id })
    syncUser = await payload.create({
      collection: 'users',
      data: { email: 'sync@access.test', password: 'test-password', role: 'support-sync' },
    })
  })

  afterAll(async () => {
    await payload.delete({ collection: 'users', where: { email: { like: '@access.test' } } })
  })

  it('lets a user without a role keep admin access', async () => {
    const category = await payload.create({
      collection: 'categories',
      data: { title: 'Access test category', slug: 'access-test-category' },
      user: legacyUser,
      overrideAccess: false,
    })
    expect(category.id).toBeDefined()
    await payload.delete({ collection: 'categories', id: category.id })
  })

  it('blocks the support-sync role from writing blog content', async () => {
    await expect(
      payload.create({
        collection: 'categories',
        data: { title: 'Should fail', slug: 'should-fail' },
        user: syncUser,
        overrideAccess: false,
      }),
    ).rejects.toThrow()
  })

  it('blocks the support-sync role from creating users (no self-escalation)', async () => {
    await expect(
      payload.create({
        collection: 'users',
        data: { email: 'escalate@access.test', password: 'x', role: 'admin' },
        user: syncUser,
        overrideAccess: false,
      }),
    ).rejects.toThrow()
  })

  it('requires a role when creating a user', async () => {
    await expect(
      payload.create({
        collection: 'users',
        data: { email: 'norole@access.test', password: 'test-password' } as never,
      }),
    ).rejects.toThrow()
  })

  it('blocks the support-sync role from writing plugin collections and globals', async () => {
    await expect(
      payload.create({
        collection: 'redirects',
        data: { from: '/x', to: { type: 'custom', url: '/y' } },
        user: syncUser,
        overrideAccess: false,
      }),
    ).rejects.toThrow()
    await expect(
      payload.updateGlobal({ slug: 'header', data: { navItems: [] }, user: syncUser, overrideAccess: false }),
    ).rejects.toThrow()
  })

  it('blocks the support-sync role from the admin panel', async () => {
    const usersConfig = payload.collections.users.config
    const canAccessAdmin = await usersConfig.access.admin!({ req: { user: syncUser } } as never)
    expect(canAccessAdmin).toBe(false)
  })
})
