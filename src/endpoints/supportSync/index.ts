import type { Endpoint, PayloadHandler, PayloadRequest } from 'payload'

import { isAdminOrSupportSync } from '@/access/roles'
import { syncArticle, syncImage, syncSection, type SyncResult } from './sync'

// Endpoints the POS repo's GitHub Action calls to publish support content. Contract and examples:
// docs/support-sync-api.md. Auth: `Authorization: users API-Key <key>` of a support-sync user.

const respond = (result: SyncResult) =>
  Response.json(result, { status: result.status === 'error' ? 422 : result.status === 'created' ? 201 : 200 })

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

export const supportSyncEndpoints: Endpoint[] = [
  { path: '/support-sync/sections', method: 'put', handler: fileHandler(syncSection) },
  { path: '/support-sync/images', method: 'put', handler: imageHandler },
  { path: '/support-sync/articles', method: 'put', handler: fileHandler(syncArticle) },
]
