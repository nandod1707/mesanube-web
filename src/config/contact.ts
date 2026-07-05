// ─── Single source of truth for contact details ──────────────────────────────
// Change the WhatsApp number or support email here and every page/component
// picks it up automatically. Keep the raw number and the derived links in sync.

/** WhatsApp number in international format, digits only (used for wa.me links). */
export const WHATSAPP_NUMBER = '5491124018983'

/** Human-readable WhatsApp/phone number for display in copy. */
export const WHATSAPP_DISPLAY = '+54 9 11 2401-8983'

/** wa.me deep link that opens a chat with support. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

/** Support email address. */
export const SUPPORT_EMAIL = 'soporte@mesanube.ar'

/** mailto: link for the support email. */
export const SUPPORT_EMAIL_URL = `mailto:${SUPPORT_EMAIL}`
