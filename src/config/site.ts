// ─── Site-wide configuration ──────────────────────────────────────────────────
// Values that used to live in env vars but rarely change and shouldn't require a
// redeploy config step. Edit here; every page and component picks it up.

/**
 * Length of the free trial, interpolated into copy across the site
 * (e.g. "15 días gratis"). Falls back to `NEXT_PUBLIC_TRIAL_PERIOD` when set, so
 * the env var can still override this without touching the code.
 */
export const TRIAL_PERIOD = '15 días'
