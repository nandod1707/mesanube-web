import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getPagesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results = await payload.find({
      collection: 'pages',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()

    // Hardcoded Next.js marketing routes — these are NOT managed as Payload
    // `pages`, so they must be listed explicitly. Keep in sync when adding a
    // marketing page. Payload-managed pages are appended after this.
    const staticRoutes = [
      '/',
      '/funciones',
      '/funciones/comanda-digital',
      '/funciones/arqueo-de-caja',
      '/funciones/carta-qr',
      '/funciones/monitor-de-cocina',
      '/funciones/app-para-mozos',
      '/funciones/reportes-y-analitica',
      '/funciones/facturacion-electronica-arca',
      '/funciones/fidelizacion',
      '/para/cafeterias',
      '/para/restaurantes',
      '/para/bares',
      '/para/pizzerias',
      '/para/cadenas-multilocal',
      '/precios',
      '/soporte',
      '/landing/comanda-digital-cafeteria',
      '/posts',
      '/search',
    ]

    const defaultSitemap = staticRoutes.map((path) => ({
      loc: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
      lastmod: dateFallback,
    }))

    const sitemap = results.docs
      ? results.docs
          .filter((page) => Boolean(page?.slug))
          .map((page) => {
            return {
              loc: page?.slug === 'home' ? `${SITE_URL}/` : `${SITE_URL}/${page?.slug}`,
              lastmod: page.updatedAt || dateFallback,
            }
          })
      : []

    return [...defaultSitemap, ...sitemap]
  },
  ['pages-sitemap'],
  {
    tags: ['pages-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getPagesSitemap()

  return getServerSideSitemap(sitemap)
}
