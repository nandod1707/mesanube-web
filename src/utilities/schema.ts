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
 * SoftwareApplication schema for `/precios` — one Offer per plan, sourced
 * straight from `PLANS` (`src/config/plans.ts`) so schema pricing can never
 * drift from what's shown on the page. Placeholder plans (e.g. Grande,
 * pending real pricing) are excluded — same rule the UI follows by showing a
 * "Datos preliminares" note. `SoftwareApplication` (not `Product`) is the
 * correct schema.org type for a SaaS — `Product` implies a tangible good.
 */
export function buildPricingSchema() {
  const url = getServerSideURL()

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${SITE_NAME} POS`,
    description: 'Sistema de punto de venta para restaurantes, cafés y bares en Argentina.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
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

/**
 * BreadcrumbList schema — pass the page's trail as `[{ name, path }]`,
 * root-relative paths without the domain (e.g. `/funciones`). Helps both
 * Google rich results and AI crawlers place a page in the site hierarchy.
 */
export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  const url = getServerSideURL()

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${url}${item.path}`,
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
