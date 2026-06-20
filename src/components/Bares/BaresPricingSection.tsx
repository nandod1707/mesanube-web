import React from 'react'

import { PricingCards } from '@/components/shared/PricingCards'
import { PLAN_ADVANCED } from '@/config/plans'

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
      heading={`Plan ${PLAN_ADVANCED.name}: para bares que no paran`}
      description="Para bares con múltiples mozos: app para todo el equipo de salón, división de cuentas, comanda ágil, facturación ARCA y reportes. Todo incluido."
      advancedDescription={`${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis. Sin tarjeta de crédito, sin compromiso.`}
      features={features}
      allPlansLinkText="Ver todos los planes →"
    />
  )
}
