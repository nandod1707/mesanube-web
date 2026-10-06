import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

// Every support change can affect the index, a section page and article pages, so revalidate the
// whole /soporte subtree. The support center is small enough that this stays cheap.
const revalidateSupportTree = () => {
  revalidatePath('/soporte', 'layout')
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
