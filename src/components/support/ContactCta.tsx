import React from 'react'

import { CtaLink } from '@/components/shared/CtaLink'
import { BODY, CARD_TITLE } from '@/components/usecase/styles'
import { SUPPORT_EMAIL, SUPPORT_EMAIL_URL, WHATSAPP_URL } from '@/config/contact'

/** "¿No encontraste lo que buscabas?" panel with the support contacts (R14). */
export function ContactCta() {
  return (
    <aside className="flex w-full flex-col items-start gap-5 rounded-[20px] bg-[var(--olive-soft)] p-6 sm:p-8">
      <div className="flex flex-col gap-2">
        <h2 className={CARD_TITLE}>¿No encontraste lo que buscabas?</h2>
        <p className={BODY}>
          Escribinos y te ayuda el mismo equipo que hace Mesanube. Respondemos por WhatsApp o a{' '}
          {SUPPORT_EMAIL}.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <CtaLink href={WHATSAPP_URL} variant="primary" external>
          Escribinos por WhatsApp
        </CtaLink>
        <CtaLink href={SUPPORT_EMAIL_URL} variant="outline">
          Mandanos un mail
        </CtaLink>
      </div>
    </aside>
  )
}
