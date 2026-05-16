import React from 'react'

import { PricingCards } from '@/components/shared/PricingCards'

const basicFeatures = [
  'Facturación ARCA nativa (A, B y C)',
  'Pedidos digitales',
  'Carta QR',
  'Arqueo de caja',
]

const advancedFeatures = [
  'Todo lo del Plan Básico',
  'App para mozos (sin límite de usuarios)',
  'Monitor de cocina (KDS)',
  'Control de stock',
  'Reportes avanzados',
]

export function ArcaPricingSection() {
  return (
    <PricingCards
      eyebrow="Precios"
      heading="La facturación ARCA está incluida en todos los planes"
      description="Sin módulo de facturación separado. Sin costo por comprobante. Sin sorpresas."
      basicDescription="Para cafeterías y locales con mostrador."
      advancedDescription="Para bares y restaurantes con salón."
      basicFeatures={basicFeatures}
      advancedFeatures={advancedFeatures}
    />
  )
}
