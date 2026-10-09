// ─── Site-wide configuration ──────────────────────────────────────────────────
// Values that used to live in env vars but rarely change and shouldn't require a
// redeploy config step. Edit here; every page and component picks it up.

/**
 * Length of the free trial, interpolated into copy across the site
 * (e.g. "15 días gratis"). This is the single source of truth: no env var.
 */
export const TRIAL_PERIOD = '15 días'
