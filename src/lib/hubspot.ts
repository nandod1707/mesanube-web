// ─── HubSpot Forms API (server-side submission) ──────────────────────────────
// Forms stay ours (own markup, own styling) — only the final submit call goes
// to HubSpot, via the Forms API v3 submit endpoint. No embedded HubSpot script.

import type { ContactMode } from '@/app/api/contact/route'

type HubspotFields = Array<{ name: string; value: string }>

type SubmitHubspotFormParams = {
  formGuid: string
  /** Our field names → HubSpot internal field names. */
  fieldMap: Record<string, string>
  /** Raw field values from the form (our names as keys). */
  rawFields: Record<string, string>
  mode: ContactMode
  pageUri?: string
}

/**
 * Submit to HubSpot, renaming our field names to whatever HubSpot expects.
 * Fields not present in `fieldMap` are silently dropped.
 */
export async function submitHubspotForm({
  formGuid,
  fieldMap,
  rawFields,
  mode,
  pageUri,
}: SubmitHubspotFormParams) {
  const portalId = process.env.HUBSPOT_PORTAL_ID

  const fields: HubspotFields = Object.entries(rawFields)
    .filter(([, value]) => value !== '')
    .map(([ourName, value]) => ({
      name: fieldMap[ourName] ?? ourName,
      value,
    }))

  const pageName =
    mode === 'trial' ? 'Prueba gratis' : mode === 'demo' ? 'Agendar demo' : 'Contacto'

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields,
        context: { pageUri, pageName },
      }),
    },
  )

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`[hubspot] submission failed (${res.status}): ${body}`)
  }

  return res.json()
}
