import type { Metadata } from 'next'
import React from 'react'

import { ArcaContextSection } from '@/components/FacturacionArca/ArcaContextSection'
import { ArcaCtaSection } from '@/components/FacturacionArca/ArcaCtaSection'
import { ArcaFaqSection } from '@/components/FacturacionArca/ArcaFaqSection'
import { ArcaHeroSection } from '@/components/FacturacionArca/ArcaHeroSection'
import { ArcaNativoSection } from '@/components/FacturacionArca/ArcaNativoSection'
import { ArcaPasoAPasoSection } from '@/components/FacturacionArca/ArcaPasoAPasoSection'
import { ArcaPricingSection } from '@/components/FacturacionArca/ArcaPricingSection'
import { ArcaTestimonialSection } from '@/components/FacturacionArca/ArcaTestimonialSection'
import { ArcaTiposComprobanteSection } from '@/components/FacturacionArca/ArcaTiposComprobanteSection'
import FloatingNav from '@/components/shared/FloatingNav'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    'Facturación Electrónica ARCA para Restaurantes — Facturas A, B y C desde el POS | Mesanube',
  description:
    'Emití facturas electrónicas A, B y C directamente desde tu POS. Compatible con ARCA (ex-AFIP). Sin apps adicionales. Para restaurantes y cafeterías en Argentina.',
}

/* ─────────────────────────────────────────────
   Floating nav items
───────────────────────────────────────────── */
const navItems = [
  { href: '/#como-funciona', label: 'Cómo funciona' },
  { href: '/#tipos', label: 'Comprobantes' },
  { href: '/#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Empezá' },
]

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function FacturacionElectronicaArcaPage() {
  return (
    <>
      <FloatingNav items={navItems} />
      <ArcaHeroSection />
      <main>
        <ArcaContextSection />
        <ArcaNativoSection />
        <ArcaPasoAPasoSection />
        <ArcaTiposComprobanteSection />
        <ArcaTestimonialSection />
        <ArcaPricingSection />
        <ArcaFaqSection />
        <ArcaCtaSection />
      </main>
    </>
  )
}
