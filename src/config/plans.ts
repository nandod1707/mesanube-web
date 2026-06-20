// ─── Single source of truth for plan & pricing data ──────────────────────────
// Edit prices, names and features here — every page and component picks them up
// automatically. Prices are stored as raw numbers (ARS) so we can format them
// consistently and run calculations (annual totals, discounts) from one place.

/** Format a number as Argentine pesos: 19000 → "$19.000". */
export function formatARS(amount: number): string {
  return '$' + Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export type Plan = {
  /** Display name without the "Plan " prefix, e.g. "Básico". */
  name: string
  /** Monthly price in ARS as a raw number, e.g. 19000. */
  priceMonthly: number
  /** Formatted monthly price, e.g. "$19.000". Derived from priceMonthly. */
  price: string
  description: string
  features: string[]
  /** Badge label for the highlighted plan, e.g. "Más popular". */
  popular?: string
}

export const PLAN_BASIC: Plan = {
  name: 'Básico',
  priceMonthly: 21000,
  price: formatARS(21000),
  description: 'Para cafeterías, locales de mostrador y negocios que no tienen salón con mozos.',
  features: [
    'Pedidos digitales con impresión en cocina',
    'Gestión de menú (categorías, productos, precios, modificadores)',
    'Carta QR para tus clientes',
    'Facturación electrónica ARCA (facturas A, B y C)',
    'Arqueo de caja por turno',
    'Soporte por WhatsApp',
    'Actualizaciones incluidas',
  ],
}

export const PLAN_ADVANCED: Plan = {
  name: 'Avanzado',
  priceMonthly: 38000,
  price: formatARS(38000),
  description: 'Para bares, restaurantes y cafeterías con equipo de salón y cocina separada.',
  popular: 'Más popular',
  features: [
    `Todo el plan ${PLAN_BASIC.name}`,
    'App para mozos (sin límite de usuarios simultáneos)',
    'Monitor de cocina (pedidos a pantalla en tiempo real)',
    'Reportes de ventas por período, producto y medio de pago',
    'Control de stock con alertas de reposición',
    'Recetas y cálculo de márgenes por plato',
    'División de cuentas',
  ],
}

export const PLANS = {
  basic: PLAN_BASIC,
  advanced: PLAN_ADVANCED,
} as const

// ─── Convenience accessors for prose interpolation ────────────────────────────
// Use these in copy so prices/names live in one place:
//   `desde ${BASIC_PRICE}/mes`  ·  `(${PLAN_BASIC.name})`

/** "$19.000" */
export const BASIC_PRICE = PLAN_BASIC.price
/** "$34.000" */
export const ADVANCED_PRICE = PLAN_ADVANCED.price
/** "$19.000/mes" */
export const BASIC_PRICE_MONTHLY = `${PLAN_BASIC.price}/mes`
/** "$34.000/mes" */
export const ADVANCED_PRICE_MONTHLY = `${PLAN_ADVANCED.price}/mes`
