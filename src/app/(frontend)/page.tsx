import type { Metadata } from 'next'
import React from 'react'

import { ArcaSection } from '@/components/Homepage/ArcaSection'
import { BusinessTypesSection } from '@/components/Homepage/BusinessTypesSection'
import { ComingSoonSection } from '@/components/Homepage/ComingSoonSection'
import { CtaFinalSection } from '@/components/Homepage/CtaFinalSection'
import { FeaturesSection } from '@/components/Homepage/FeaturesSection'
import { HeroSection } from '@/components/Homepage/HeroSection'
import { IntroSection } from '@/components/Homepage/IntroSection'
import { PricingSection } from '@/components/Homepage/PricingSection'
import { TrustBar } from '@/components/Homepage/TrustBar'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Mesanube — POS y comanda digital para restaurantes y cafeterías en Argentina',
  description:
    'Sistema de gestión para restaurantes argentinos. Comanda digital, facturación ARCA, control de caja y app para mozos. Probá 30 días gratis, sin tarjeta.',
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <TrustBar />
      <IntroSection />
      <BusinessTypesSection />
      <FeaturesSection />
      <ArcaSection />
      <ComingSoonSection />
      <PricingSection />
      <CtaFinalSection />
    </main>
  )
}
