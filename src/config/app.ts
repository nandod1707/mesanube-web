// ─── Mesanube app (product) links ─────────────────────────────────────────────
// The marketing site links out to the actual app for login/signup. Base URL
// comes from NEXT_PUBLIC_APP_URL (public — read from client components too,
// e.g. the mobile nav).

/** Base URL of the Mesanube app, no trailing slash. */
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || 'https://app.mesanube.ar').replace(
  /\/$/,
  '',
)

/** Login link. */
export const APP_LOGIN_URL = APP_URL

/** Sign-up link. */
export const APP_REGISTER_URL = `${APP_URL}/register`
