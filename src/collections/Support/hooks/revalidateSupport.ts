import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

// Every support change can affect the index, a section page and article pages, so revalidate the
// whole /soporte subtree. The support center is small enough that this stays cheap.
// Next derives a page's layout cache tags from its file path, route group included
// ("/(frontend)/soporte/layout"), so '/soporte' with type 'layout' matches nothing and the
// prerendered index stays stale. The route group must be part of the path.
export const SUPPORT_LAYOUT_PATH = '/(frontend)/soporte'

const revalidateSupportTree = () => {
  revalidatePath(SUPPORT_LAYOUT_PATH, 'layout')
  revalidateTag('support-sitemap')
}

export const revalidateSupport: CollectionAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info('Revalidating /soporte')
    revalidateSupportTree()
  }
  return doc
}

export const revalidateSupportDelete: CollectionAfterDeleteHook = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) revalidateSupportTree()
  return doc
}
