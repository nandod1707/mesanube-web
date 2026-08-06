// ─── JSON-LD schema.org builders ──────────────────────────────────────────────
// The site is hardcoded (not managed through Payload), so structured data is
// built here from the same config/data every page already uses — never
// hardcoded per page. Render the result with `<JsonLd data={...} />`.

import { getServerSideURL } from './getURL'
import { SUPPORT_EMAIL, WHATSAPP_NUMBER } from '@/config/contact'
import { PLANS } from '@/config/plans'
import type { FaqItem } from '@/components/shared/FaqSection'

const SITE_NAME = 'Mesanube'

/** Organization schema — identifies the business. Rendered once, in the root layout. */
export function buildOrganizationSchema() {
  const url = getServerSideURL()

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url,
    logo: `${url}/media/logo.svg`,
    email: SUPPORT_EMAIL,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: `+${WHATSAPP_NUMBER}`,
      areaServed: 'AR',
      availableLanguage: 'Spanish',
    },
  }
}

/** WebSite schema — identifies the site itself. Rendered once, in the root layout. */
export function buildWebSiteSchema() {
  const url = getServerSideURL()

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url,
  }
}

/**
 * Product schema for `/precios` — one Offer per plan, sourced straight from
 * `PLANS` (`src/config/plans.ts`) so schema pricing can never drift from what's
 * shown on the page. Placeholder plans (e.g. Grande, pending real pricing) are
 * excluded — same rule the UI follows by showing a "Datos preliminares" note.
 */
export function buildPricingSchema() {
  const url = getServerSideURL()

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${SITE_NAME} POS`,
    description: 'Sistema de punto de venta para restaurantes, cafés y bares en Argentina.',
    url: `${url}/precios`,
    offers: PLANS.filter((plan) => !plan.placeholder).map((plan) => ({
      '@type': 'Offer',
      name: `Plan ${plan.name}`,
      description: plan.description,
      price: plan.priceMonthly,
      priceCurrency: 'ARS',
      url: `${url}/precios`,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: plan.priceMonthly,
        priceCurrency: 'ARS',
        unitText: 'MONTH',
      },
    })),
  }
}

/** FAQPage schema — pass the same `items` array already rendered by `<FaqSection>`. */
export function buildFaqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}
