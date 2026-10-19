import type { Endpoint, PayloadHandler, PayloadRequest } from 'payload'

import { isAdminOrSupportSync } from '@/access/roles'
import { exportArticle, hasAdminEdits } from './export'
import { deleteArticle, syncArticle, syncImage, syncSection, type SyncResult } from './sync'

// Endpoints the POS repo's GitHub Action calls to publish support content. Contract and examples:
// docs/support-sync-api.md. Auth: `Authorization: users API-Key <key>` of a support-sync user.

const HTTP_STATUS: Record<SyncResult['status'], number> = {
  created: 201,
  updated: 200,
  unchanged: 200,
  error: 422,
  conflict: 409,
}

const respond = (result: SyncResult) => Response.json(result, { status: HTTP_STATUS[result.status] })

const unauthorized = () => Response.json({ status: 'error', errors: ['No autorizado.'] }, { status: 401 })

const fileHandler =
  (sync: (req: PayloadRequest, path: string, content: string) => Promise<SyncResult>): PayloadHandler =>
  async (req) => {
    if (!isAdminOrSupportSync({ req })) return unauthorized()
    const body = (await req.json?.().catch(() => null)) as { path?: unknown; content?: unknown } | null
    if (typeof body?.path !== 'string' || typeof body?.content !== 'string') {
      return Response.json(
        { status: 'error', errors: ['El body tiene que ser JSON { "path": string, "content": string }.'] },
        { status: 400 },
      )
    }
    return respond(await sync(req, body.path, body.content))
  }

const imageHandler: PayloadHandler = async (req) => {
  if (!isAdminOrSupportSync({ req })) return unauthorized()
  const form = await req.formData?.().catch(() => null)
  const path = form?.get('path')
  const file = form?.get('file')
  const alt = form?.get('alt')
  if (typeof path !== 'string' || !(file instanceof Blob)) {
    return Response.json(
      { status: 'error', errors: ['El body tiene que ser multipart con "path" y "file".'] },
      { status: 400 },
    )
  }
  const buffer = Buffer.from(await file.arrayBuffer())
  return respond(await syncImage(req, path, buffer, typeof alt === 'string' ? alt : undefined))
}

const deleteHandler: PayloadHandler = async (req) => {
  if (!isAdminOrSupportSync({ req })) return unauthorized()
  const body = (await req.json?.().catch(() => null)) as { id?: unknown } | null
  if (typeof body?.id !== 'string' || !body.id) {
    return Response.json({ status: 'error', errors: ['El body tiene que ser JSON { "id": string }.'] }, { status: 400 })
  }
  return Response.json(await deleteArticle(req, body.id))
}

// Articles edited in the admin since their last sync, as repo files, so the POS repo can pull them
// before editing. `?ids=a,b` limits the check to those articles; without it every article is checked.
// Reads drafts too: an admin draft that is not published yet is still the latest text.
const adminEditsHandler: PayloadHandler = async (req) => {
  if (!isAdminOrSupportSync({ req })) return unauthorized()
  const ids = String(req.searchParams?.get('ids') ?? '')
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean)
  const found = await req.payload.find({
    collection: 'support-articles',
    where: ids.length ? { id: { in: ids } } : {},
    draft: true,
    depth: 0,
    pagination: false,
    req,
    user: req.user,
    overrideAccess: false,
  })
  const articles = []
  for (const doc of found.docs) {
    const exported = await exportArticle(req, doc)
    if (await hasAdminEdits(req, doc, exported)) {
      articles.push({ id: exported.id, path: exported.path, content: exported.content })
    }
  }
  return Response.json({ articles })
}

export const supportSyncEndpoints: Endpoint[] = [
  { path: '/support-sync/sections', method: 'put', handler: fileHandler(syncSection) },
  { path: '/support-sync/images', method: 'put', handler: imageHandler },
  { path: '/support-sync/articles', method: 'put', handler: fileHandler(syncArticle) },
  { path: '/support-sync/articles', method: 'delete', handler: deleteHandler },
  { path: '/support-sync/articles/admin-edits', method: 'get', handler: adminEditsHandler },
]
