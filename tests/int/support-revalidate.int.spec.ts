import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('next/cache', () => ({ revalidatePath: vi.fn(), revalidateTag: vi.fn() }))

import { revalidatePath, revalidateTag } from 'next/cache'
import {
  revalidateSupport,
  revalidateSupportDelete,
  SUPPORT_LAYOUT_PATH,
} from '@/collections/Support/hooks/revalidateSupport'

const args = (disableRevalidate: boolean) =>
  ({
    doc: { id: '1' },
    req: { context: { disableRevalidate }, payload: { logger: { info: vi.fn() } } },
  }) as never

describe('Support revalidation hooks', () => {
  beforeEach(() => vi.clearAllMocks())

  it('revalidates the /soporte tree and the sitemap after a change', () => {
    revalidateSupport(args(false))
    expect(revalidatePath).toHaveBeenCalledWith('/(frontend)/soporte', 'layout')
    expect(revalidateTag).toHaveBeenCalledWith('support-sitemap')
  })

  it('revalidates after a delete', () => {
    revalidateSupportDelete(args(false))
    expect(revalidatePath).toHaveBeenCalledWith('/(frontend)/soporte', 'layout')
  })

  it('targets the route-group path that the support pages actually live under', async () => {
    const { existsSync } = await import('fs')
    expect(existsSync(`src/app${SUPPORT_LAYOUT_PATH}/page.tsx`)).toBe(true)
  })

  it('skips revalidation when the context disables it', () => {
    revalidateSupport(args(true))
    revalidateSupportDelete(args(true))
    expect(revalidatePath).not.toHaveBeenCalled()
    expect(revalidateTag).not.toHaveBeenCalled()
  })
})
