import React from 'react'

import { PricingCards } from '@/components/shared/PricingCards'

const features = [
  'App para mozos sin límite de usuarios',
  'División de cuentas y multimedios de pago',
  'Monitor de cocina (KDS)',
  'Facturación ARCA (facturas A, B y C)',
  'Carta QR actualizable',
  'Arqueo de caja por turno',
  'Reportes completos',
]

export function BaresPricingSection() {
  return (
    <PricingCards
      variant="advanced"
      eyebrow="Precio"
      heading="Plan Avanzado — para bares que no paran"
      description="Para bares con múltiples mozos: app para todo el equipo de salón, división de cuentas, comanda ágil, facturación ARCA y reportes. Todo incluido."
      advancedDescription="30 días gratis. Sin tarjeta de crédito, sin compromiso."
      features={features}
      allPlansLinkText="Ver todos los planes →"
    />
  )
}
