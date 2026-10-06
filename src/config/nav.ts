// ─── Single source of truth for site navigation ──────────────────────────────
// Edit the menus here and every consumer (FloatingNav, SiteFooter) picks them up.
// Section anchors that live on the homepage use the `/#id` form so they work from
// any route.

export type NavItem = {
  /**
   * Where the link goes. Three forms supported:
   *   - `/#section` — navigates to the homepage and scrolls to that section
   *   - `#section` — scrolls to a section on the current page
   *   - `/path` — normal route navigation
   */
  href: string
  label: string
}

/** Main navigation — identical on every page (desktop pill + mobile menu). */
export const MAIN_NAV: NavItem[] = [
  { href: '/#que-es', label: 'Qué es' },
  { href: '/funciones', label: 'Funciones' },
  { href: '/precios', label: 'Precios' },
]

/** Footer navigation. */
export const FOOTER_NAV: NavItem[] = [
  { href: '/funciones', label: 'Funciones' },
  { href: '/precios', label: 'Precios' },
  { href: '/soporte', label: 'Soporte' },
  { href: '/contacto', label: 'Contacto' },
]
