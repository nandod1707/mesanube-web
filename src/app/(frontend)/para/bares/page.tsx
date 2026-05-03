import type { Metadata } from 'next'
import React from 'react'

import { BaresCtaSection } from '@/components/Bares/BaresCtaSection'
import { BaresFaqSection } from '@/components/Bares/BaresFaqSection'
import { BaresFeaturesSection } from '@/components/Bares/BaresFeaturesSection'
import { BaresHeroSection } from '@/components/Bares/BaresHeroSection'
import { BaresHowItWorksSection } from '@/components/Bares/BaresHowItWorksSection'
import { BaresPricingSection } from '@/components/Bares/BaresPricingSection'
import { BaresSolutionsSection } from '@/components/Bares/BaresSolutionsSection'
import { BaresTestimonialSection } from '@/components/Bares/BaresTestimonialSection'
import { BaresContextSection } from '@/components/Bares/BaresContextSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { SiteFooter } from '@/components/shared/SiteFooter'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Sistema POS para Bares en Argentina. Comanda Ágil para Múltiples Mozos | Mesanube',
  description:
    'Sistema de gestión para bares argentinos. Comanda digital para múltiples mozos, división de cuentas y facturación ARCA. Probá 30 días gratis.',
}

/* ─────────────────────────────────────────────
   Floating nav items
───────────────────────────────────────────── */
const navItems = [
  { href: '/#problema', label: 'El bar' },
  { href: '/#funciones', label: 'Funciones' },
  { href: '/precios', label: 'Precio' },
  { href: '#contacto', label: 'Empezá' },
]

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function BaresPage() {
  return (
    <>
      <FloatingNav items={navItems} />
      <BaresHeroSection />
      <main>
        <BaresContextSection />
        <BaresSolutionsSection />
        <BaresHowItWorksSection />
        <BaresFeaturesSection />
        <BaresTestimonialSection />
        <BaresPricingSection />
        <BaresFaqSection />
        <BaresCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
