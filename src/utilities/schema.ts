// ─── JSON-LD schema.org builders ──────────────────────────────────────────────
// The site is hardcoded (not managed through Payload), so structured data is
// built here from the same config/data every page already uses — never
// hardcoded per page. Render the result with `<JsonLd data={...} />`.

import { getServerSideURL } from './getURL'
import { INSTAGRAM_URL, SUPPORT_EMAIL, WHATSAPP_NUMBER } from '@/config/contact'
import { PLANS } from '@/config/plans'
import type { FaqItem } from '@/components/shared/FaqSection'

const SITE_NAME = 'Mesanube'

// Stable entity IDs so Organization, WebSite and SoftwareApplication link to each
// other across pages instead of being read as unrelated, duplicate entities.
const orgId = (url: string) => `${url}/#organization`
const websiteId = (url: string) => `${url}/#website`
const softwareId = (url: string) => `${url}/#software`

/** Organization schema — identifies the business. Rendered once, in the root layout. */
export function buildOrganizationSchema() {
  const url = getServerSideURL()

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId(url),
    name: SITE_NAME,
    url,
    // Google requires a raster logo of at least 112x112px (SVG isn't accepted).
    logo: `${url}/android-chrome-512x512.png`,
    email: SUPPORT_EMAIL,
    // Official profiles that confirm the brand entity (helps Google and AI search).
    sameAs: [INSTAGRAM_URL],
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
    '@id': websiteId(url),
    name: SITE_NAME,
    url,
    inLanguage: 'es-AR',
    publisher: { '@id': orgId(url) },
  }
}

/**
 * SoftwareApplication schema — the product entity, shared by `@id` across pages.
 * `SoftwareApplication` (not `Product`) is the correct schema.org type for a
 * SaaS — `Product` implies a tangible good.
 */
export function buildSoftwareSchema() {
  const url = getServerSideURL()

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': softwareId(url),
    name: `${SITE_NAME} POS`,
    description: 'Sistema de punto de venta para restaurantes, cafés y bares en Argentina.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    url,
    publisher: { '@id': orgId(url) },
  }
}

/**
 * SoftwareApplication schema for `/precios` — the shared product entity plus one
 * Offer per plan, sourced straight from `PLANS` (`src/config/plans.ts`) so schema
 * pricing can never drift from what's shown on the page. Plans flagged
 * `placeholder` are excluded, same rule the UI follows.
 */
export function buildPricingSchema() {
  const url = getServerSideURL()

  return {
    ...buildSoftwareSchema(),
    offers: PLANS.filter((plan) => !plan.placeholder).map((plan) => ({
      '@type': 'Offer',
      name: `Plan ${plan.name}`,
      description: plan.description,
      price: plan.priceMonthly,
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
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
