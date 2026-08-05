import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import { CtaLink } from '@/components/shared/CtaLink'
import FloatingNav from '@/components/shared/FloatingNav'
import { HeroHeading } from '@/components/shared/HeroHeading'
import Reveal from '@/components/shared/Reveal'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { FeatureCallout, FeatureMedia, FeatureSplit, FeatureTopNav } from '@/components/feature'

export const metadata: Metadata = {
  title: 'Fidelización para Restaurantes. Próximamente en Mesanube | Mesanube',
  description:
    'El primer módulo de fidelización con gamificación para restaurantes argentinos. Puntos, recompensas y desafíos integrados al POS. Anotate para acceso anticipado.',
}

/* ── Static data ── */

const comingFeatures = [
  'Puntos por consumo acumulados automáticamente con cada venta',
  'Recompensas configurables (descuentos, productos gratis, experiencias)',
  'Desafíos con gamificación ("Visitá el local 5 veces en el mes")',
  'Sin app para el cliente: el vínculo es por número de teléfono o email',
  'Panel para el dueño con datos de retención y frecuencia de visitas',
]

const EYEBROW = 'font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)]'
const TITLE_STYLE = {
  fontSize: 'clamp(36px, 5.5vw, 60px)',
  lineHeight: 0.9,
  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
} as const

/* ── Page ── */

export default function FidelizacionPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav />

      {/* Hero (bespoke: coming-soon badge + image overlay) */}
      <header className="w-full max-w-[1500px] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <p className={EYEBROW}>Funciones, Fidelización</p>
            <span className="rounded-full bg-[var(--olive-soft)] px-3 py-1 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
              Próximamente
            </span>
          </div>
          <HeroHeading text="Fidelización, próximamente" className="mb-6" />
          <p className="mb-8 max-w-[540px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
            Estamos construyendo el primer módulo de fidelización para restaurantes argentinos.
            Integrado directamente al POS. Sin que tus clientes tengan que bajarse ninguna app.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrialButton>Quiero acceso anticipado</TrialButton>
            <CtaLink href="#que-viene" variant="outline">
              Ver qué viene
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-12 w-full">
          <div
            className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[var(--olive-soft)]"
            style={{ aspectRatio: '16/7' }}
          >
            <Image
              src="/figma/landscape.png"
              alt="Módulo de fidelización de Mesanube, próximamente"
              fill
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-full bg-[var(--olive-soft)] px-6 py-3 font-mono text-[14px] font-bold leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
                En construcción
              </span>
            </div>
          </div>
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* Qué viene (bespoke: intro + checklist grid) */}
        <section
          id="que-viene"
          className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className={`mb-5 ${EYEBROW}`}>Qué viene</p>
              <h2 className="font-display text-[var(--heading)]" style={TITLE_STYLE}>
                Tus clientes vuelven solos, sin que vos tengas que hacer nada extra
              </h2>
            </Reveal>
            <Reveal delay={1} className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                La fidelización en gastronomía suele ser complicada de implementar: apps separadas
                que nadie descarga, tarjetas de puntos que se pierden, promociones que no se
                comunican bien.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                Lo que estamos construyendo es diferente. El sistema de fidelización va a estar
                integrado al mismo POS que ya usás. Cuando el cliente paga, acumula puntos. Cuando
                el cliente llega a un hito, recibe una recompensa. Todo automático, sin que vos
                tengas que recordar nada ni el cliente bajarse nada.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {comingFeatures.map((feature, i) => (
              <Reveal
                key={feature}
                delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
                className="flex flex-col items-start gap-4 border-t border-[var(--divider)] py-[40px] pr-5"
              >
                <span className="text-[var(--olive)]" aria-hidden="true">
                  ✓
                </span>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                  {feature}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <FeatureCallout
          id="acceso"
          eyebrow="Acceso anticipado"
          heading="¿Para cuándo?"
          paragraphs={[
            'No tenemos fecha definida todavía. Los locales que ya usan Mesanube van a tener acceso anticipado cuando esté listo. Si te anotás ahora, sos parte del primer grupo.',
          ]}
          cta={<TrialButton>Quiero acceso anticipado</TrialButton>}
        />

        <FeatureSplit
          eyebrow="Mientras tanto"
          heading="Empezá con el POS. El resto viene solo"
          paragraphs={[
            'Si todavía no usás Mesanube, el mejor momento para empezar es ahora. Cuando salga la fidelización, ya vas a tener el sistema configurado, el historial de ventas cargado y el equipo funcionando con la comanda digital.',
            'Los locales que ya están en Mesanube tienen acceso automático a las funciones nuevas sin costo adicional, desde el primer día que salen.',
          ]}
          cta={<TrialButton>Probá Mesanube gratis {TRIAL_PERIOD}</TrialButton>}
        />

        <FeatureMedia
          reversed
          eyebrow="Hoy disponible"
          heading="Un POS completo mientras llega la fidelización"
          paragraphs={[
            'Comanda digital, app para mozos, monitor de cocina, facturación ARCA, arqueo de caja y reportes. Todo integrado, sin módulos separados, sin costos ocultos.',
          ]}
          image={{ src: '/figma/columns.png', alt: 'Sistema Mesanube listo para sumar fidelización' }}
          cta={
            <Link
              href="/funciones"
              className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-[var(--heading)]"
            >
              Ver todas las funciones →
            </Link>
          }
        />
      </main>

      <SiteFooter />
    </div>
  )
}
