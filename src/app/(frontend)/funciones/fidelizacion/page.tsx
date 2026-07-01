import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { TrialButton } from '@/components/shared/CtaButtons'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { HeroHeading } from '@/components/shared/HeroHeading'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Fidelización para Restaurantes. Próximamente en Mesanube | Mesanube',
  description:
    'El primer módulo de fidelización con gamificación para restaurantes argentinos. Puntos, recompensas y desafíos integrados al POS. Anotate para acceso anticipado.',
}

/* ─────────────────────────────────────────────
   Static data
───────────────────────────────────────────── */
const navItems = [
  { href: '#que-viene', label: '¿Qué viene?' },
  { href: '#acceso', label: 'Acceso anticipado' },
  { href: '/#funciones', label: 'Funciones' },
  { href: '/precios', label: 'Precios' },
]

const comingFeatures = [
  'Puntos por consumo acumulados automáticamente con cada venta',
  'Recompensas configurables (descuentos, productos gratis, experiencias)',
  'Desafíos con gamificación ("Visitá el local 5 veces en el mes")',
  'Sin app para el cliente: el vínculo es por número de teléfono o email',
  'Panel para el dueño con datos de retención y frecuencia de visitas',
]

/* ─────────────────────────────────────────────
   Shared button components
───────────────────────────────────────────── */
function SoftButton({
  children,
  href = '#acceso',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-[#e9e9e9] bg-white px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black transition-[border-color,background-color] duration-200 hover:border-[#485c11] hover:bg-[#f7faf0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#485c11] focus-visible:outline-offset-2 ${className}`}
    >
      {children}
    </Link>
  )
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function FidelizacionPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav items={navItems} />

      {/* ── Top nav ── */}
      <nav className="flex w-full max-w-[1500px] items-center justify-between py-5">
        <Link
          href="/"
          className="text-[22px] leading-[1.2] tracking-[-1px] text-black sm:text-[28px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          mesanube
        </Link>
        <TrialButton>Probá gratis</TrialButton>
      </nav>

      {/* ── Hero ── */}
      <header className="w-full max-w-[1500px] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Funciones, Fidelización
            </p>
            <span className="rounded-full bg-[#dfecc6] px-3 py-1 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Próximamente
            </span>
          </div>
          <HeroHeading text="Fidelización, próximamente" className="mb-6" />
          <p className="mb-8 max-w-[540px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Estamos construyendo el primer módulo de fidelización para restaurantes argentinos.
            Integrado directamente al POS. Sin que tus clientes tengan que bajarse ninguna app.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrialButton>Quiero acceso anticipado</TrialButton>
            <SoftButton href="#que-viene">Ver qué viene</SoftButton>
          </div>
        </Reveal>

        {/* Hero image block */}
        <Reveal delay={1} className="mt-12 w-full">
          <div
            className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#dfecc6]"
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
              <span className="rounded-full bg-[#dfecc6] px-6 py-3 font-mono text-[14px] font-bold leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                En construcción
              </span>
            </div>
          </div>
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* ── Qué viene ── */}
        <section
          id="que-viene"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Qué viene
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Tus clientes vuelven solos, sin que vos tengas que hacer nada extra
              </h2>
            </Reveal>
            <Reveal delay={1} className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                La fidelización en gastronomía suele ser complicada de implementar: apps separadas
                que nadie descarga, tarjetas de puntos que se pierden, promociones que no se
                comunican bien.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Lo que estamos construyendo es diferente. El sistema de fidelización va a estar
                integrado al mismo POS que ya usás. Cuando el cliente paga, acumula puntos. Cuando
                el cliente llega a un hito, recibe una recompensa. Todo automático, sin que vos
                tengas que recordar nada ni el cliente bajarse nada.
              </p>
            </Reveal>
          </div>

          {/* Features list */}
          <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {comingFeatures.map((feature, i) => (
              <Reveal
                key={feature}
                delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
                className="flex flex-col items-start gap-4 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <span className="text-[#485c11]" aria-hidden="true">
                  ✓
                </span>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {feature}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Acceso anticipado ── */}
        <section
          id="acceso"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-center gap-8 rounded-[20px] bg-[#dfecc6] px-6 py-[80px] text-center sm:px-12 sm:py-[120px] lg:px-[240px]">
            <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Acceso anticipado
            </p>
            <h2
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              ¿Para cuándo?
            </h2>
            <p className="w-full max-w-[540px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              No tenemos fecha definida todavía. Los locales que ya usan Mesanube van a tener acceso
              anticipado cuando esté listo. Si te anotás ahora, sos parte del primer grupo.
            </p>
            <TrialButton>Quiero acceso anticipado</TrialButton>
          </Reveal>
        </section>

        {/* ── Mientras tanto ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Mientras tanto
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Empezá con el POS. El resto viene solo
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Si todavía no usás Mesanube, el mejor momento para empezar es ahora. Cuando salga
                la fidelización, ya vas a tener el sistema configurado, el historial de ventas
                cargado y el equipo funcionando con la comanda digital.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Los locales que ya están en Mesanube tienen acceso automático a las funciones nuevas
                sin costo adicional, desde el primer día que salen.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <TrialButton>Probá Mesanube gratis {process.env.NEXT_PUBLIC_TRIAL_PERIOD}</TrialButton>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Image feature ── */}
        <section className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal
              className="relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
              style={{ minHeight: '360px' }}
            >
              <Image
                src="/figma/columns.png"
                alt="Sistema Mesanube listo para sumar fidelización"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={1} className="flex flex-col justify-center gap-6">
              <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Hoy disponible
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Un POS completo mientras llega la fidelización
              </h2>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Comanda digital, app para mozos, monitor de cocina, facturación ARCA, arqueo de
                caja y reportes. Todo integrado, sin módulos separados, sin costos ocultos.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/funciones"
                  className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[#485c11] underline underline-offset-2 transition-colors hover:text-black"
                >
                  Ver todas las funciones →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
