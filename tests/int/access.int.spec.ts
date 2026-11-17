import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, afterAll, expect } from 'vitest'

import type { User } from '@/payload-types'

let payload: Payload
let legacyUser: User
let syncUser: User
let editorUser: User

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
    editorUser = await payload.create({
      collection: 'users',
      data: { email: 'editor@access.test', password: 'test-password', role: 'editor' },
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

  it('lets the editor role into the admin panel and write blog content', async () => {
    const usersConfig = payload.collections.users.config
    expect(await usersConfig.access.admin!({ req: { user: editorUser } } as never)).toBe(true)
    const category = await payload.create({
      collection: 'categories',
      data: { title: 'Editor category', slug: 'editor-category' },
      user: editorUser,
      overrideAccess: false,
    })
    expect(category.id).toBeDefined()
    await payload.delete({ collection: 'categories', id: category.id })
  })

  it('blocks the editor role from users, globals, plugin collections and support content', async () => {
    const asEditor = { user: editorUser, overrideAccess: false } as const
    await expect(
      payload.create({
        collection: 'users',
        data: { email: 'escalate2@access.test', password: 'x', role: 'admin' },
        ...asEditor,
      }),
    ).rejects.toThrow()
    await expect(
      payload.update({ collection: 'users', id: editorUser.id, data: { role: 'admin' }, ...asEditor }),
    ).rejects.toThrow()
    await expect(
      payload.updateGlobal({ slug: 'footer', data: { navItems: [] }, ...asEditor }),
    ).rejects.toThrow()
    await expect(
      payload.create({
        collection: 'redirects',
        data: { from: '/x', to: { type: 'custom', url: '/y' } },
        ...asEditor,
      }),
    ).rejects.toThrow()
    await expect(
      payload.create({
        collection: 'support-sections',
        data: { title: 'Nope', slug: 'nope' } as never,
        ...asEditor,
      }),
    ).rejects.toThrow()
  })

  it('lets the editor read only their own user', async () => {
    const { docs } = await payload.find({ collection: 'users', user: editorUser, overrideAccess: false })
    expect(docs.map((d) => d.id)).toEqual([editorUser.id])
  })
})
