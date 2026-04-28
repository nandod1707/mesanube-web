import { NextResponse } from 'next/server'

/**
 * Contact form endpoint stub.
 * Currently logs the submission and returns success.
 * Wire this up to an email provider (Resend, Postmark, etc.) when ready.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('[contact] new submission:', body)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid payload' }, { status: 400 })
  }
}
