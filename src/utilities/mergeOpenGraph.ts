import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Sistema de gestión gastronómica para restaurantes, bares y cafeterías. Comanda digital, facturación electrónica ARCA, control de caja y app para mozos.',
  images: [
    {
      url: `${getServerSideURL()}/screenshot.png`,
    },
  ],
  siteName: 'Mesanube',
  title: 'Mesanube. Sistema POS y Comanda Digital para Restaurantes y Cafeterías',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
