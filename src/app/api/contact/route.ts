import { NextResponse } from 'next/server'

import { submitHubspotForm } from '@/lib/hubspot'

export type ContactMode = 'trial' | 'demo' | 'contact'

const FORM_GUID_BY_MODE: Record<ContactMode, string | undefined> = {
  trial: process.env.HUBSPOT_FORM_ID_DEMO,
  demo: process.env.HUBSPOT_FORM_ID_DEMO,
  contact: process.env.HUBSPOT_FORM_ID_CONTACT,
}

/** Our field name → HubSpot internal field name, per form. */
const FIELD_MAP: Record<ContactMode, Record<string, string>> = {
  trial: {
    name: 'firstname',
    email: 'email',
    phone: 'hs_whatsapp_phone_number',
    business: 'name',
    type: 'message',
  },
  demo: {
    name: 'firstname',
    email: 'email',
    phone: 'hs_whatsapp_phone_number',
    business: 'name',
    message: 'message',
  },
  contact: {
    name: 'firstname',
    email: 'email',
    phone: 'hs_whatsapp_phone_number',
    message: 'message',
  },
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid payload' }, { status: 400 })
  }

  const mode: ContactMode =
    body.mode === 'trial' || body.mode === 'demo' || body.mode === 'contact' ? body.mode : 'contact'
  const formGuid = FORM_GUID_BY_MODE[mode]

  console.log('[contact] new submission:', body)

  if (!process.env.HUBSPOT_PORTAL_ID || !formGuid) {
    return NextResponse.json({ ok: true })
  }

  try {
    const rawFields: Record<string, string> = Object.fromEntries(
      Object.entries(body)
        .filter(([k]) => k !== 'mode')
        .map(([k, v]) => [k, String(v ?? '')]),
    )

    await submitHubspotForm({
      formGuid,
      fieldMap: FIELD_MAP[mode],
      rawFields,
      mode,
      pageUri: request.headers.get('referer') ?? undefined,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'hubspot submission failed' }, { status: 502 })
  }
}
