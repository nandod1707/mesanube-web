// ─── Single source of truth for plan & pricing data ──────────────────────────
// Edit prices, names and features here — every page and component picks them up
// automatically. Prices are stored as raw numbers (ARS) so we can format them
// consistently and run calculations (annual totals, discounts) from one place.
//
// The whole marketing UI loops over `PLANS`, so adding a fourth plan here (and
// pushing it into the array) makes it appear everywhere automatically.

/** Format a number as Argentine pesos: 19000 → "$19.000". */
export function formatARS(amount: number): string {
  return '$' + Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export type Plan = {
  /** Display name without the "Plan " prefix, e.g. "Chico". */
  name: string
  /** Monthly price in ARS as a raw number, e.g. 19000. */
  priceMonthly: number
  /** Formatted monthly price, e.g. "$19.000". Derived from priceMonthly. */
  price: string
  description: string
  features: string[]
  /** Badge label for the highlighted plan, e.g. "Más popular". */
  popular?: string
  /** Renders the plan as the dark, featured card. */
  highlighted?: boolean
  /**
   * Marks the plan as not-yet-final: the UI shows a "Datos preliminares" note so
   * placeholder prices are never mistaken for the real thing.
   */
  placeholder?: boolean
}

export const PLAN_SMALL: Plan = {
  name: 'Chico',
  priceMonthly: 24000,
  price: formatARS(24000),
  description: 'Para cafeterías, locales de mostrador y negocios que no tienen salón con mozos.',
  features: [
    'Impresión de comandas',
    'Gestión de menú (categorías, productos, precios)',
    'Carta QR para tus clientes',
    'Facturación electrónica ARCA',
    'Arqueo de caja por turno',
    'Soporte por WhatsApp',
    'Actualizaciones incluidas',
    'Reportes de ventas por período, producto y medio de pago',
  ],
}

export const PLAN_MEDIUM: Plan = {
  name: 'Mediano',
  priceMonthly: 38000,
  price: formatARS(38000),
  description: 'Para bares, restaurantes y cafeterías con equipo de salón y cocina separada.',
  popular: 'Más popular',
  highlighted: true,
  features: [
    `Todo el plan ${PLAN_SMALL.name}`,
    'App para mozos (sin límite de usuarios simultáneos)',
    'Monitor de cocina (pedidos a pantalla en tiempo real)',
    'Control de stock con alertas de reposición',
    'Recetas y cálculo de márgenes por plato',
    'Pago con múltiples medios de pago'
  ],
}

export const PLAN_LARGE: Plan = {
  name: 'Grande',
  priceMonthly: 62000,
  price: formatARS(62000),
  description: 'Para locales de alto volumen o cadenas con varias sucursales.',
  features: [
    `Todo el plan ${PLAN_MEDIUM.name}`,
    'Control centralizado de sucursales',
    'Armado de reportes personalizados',
    'Reportes exportables en XLSX',
    'Control de gastos'
  ],
}

/**
 * Ordered list of every plan, cheapest → most complete. The marketing UI loops
 * over this array, so a new plan added here shows up automatically everywhere.
 */
export const PLANS: Plan[] = [PLAN_SMALL, PLAN_MEDIUM, PLAN_LARGE]

// ─── Convenience accessors for prose interpolation ────────────────────────────
// Use these in copy so prices/names live in one place:
//   `desde ${SMALL_PRICE}/mes`  ·  `(${PLAN_SMALL.name})`

/** "$24.000" */
export const SMALL_PRICE = PLAN_SMALL.price
/** "$38.000" */
export const MEDIUM_PRICE = PLAN_MEDIUM.price
/** "$24.000/mes" */
export const SMALL_PRICE_MONTHLY = `${PLAN_SMALL.price}/mes`
/** "$38.000/mes" */
export const MEDIUM_PRICE_MONTHLY = `${PLAN_MEDIUM.price}/mes`
