import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoLink, TrialButton } from '@/components/shared/CtaButtons'
import { FaqSection } from '@/components/shared/FaqSection'
import { PLAN_BASIC, PLAN_ADVANCED } from '@/components/shared/PricingCards'
import { SiteFooter } from '@/components/shared/SiteFooter'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Precios. Sistema POS para Restaurantes y Cafeterías en Argentina | Mesanube',
  description:
    'Planes desde $19.000/mes. Comanda digital, facturación ARCA y soporte por WhatsApp incluidos. 30 días gratis, sin tarjeta de crédito.',
}

/* ── Static data ── */

const navItems = [
  { href: '#planes', label: 'Planes' },
  { href: '#descuentos', label: 'Descuentos' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Empezá' },
]

const { features: basicFeatures } = PLAN_BASIC
const { features: advancedFeatures } = PLAN_ADVANCED

const comparisonRows: {
  label: string
  basic: boolean
  advanced: boolean
}[] = [
  { label: 'Pedidos digitales', basic: true, advanced: true },
  { label: 'Carta QR', basic: true, advanced: true },
  { label: 'Facturación ARCA', basic: true, advanced: true },
  { label: 'Arqueo de caja', basic: true, advanced: true },
  { label: 'Soporte por WhatsApp', basic: true, advanced: true },
  { label: 'App para mozos', basic: false, advanced: true },
  { label: 'Monitor de cocina', basic: false, advanced: true },
  { label: 'Reportes', basic: false, advanced: true },
  { label: 'Control de stock', basic: false, advanced: true },
  { label: 'Recetas y márgenes', basic: false, advanced: true },
]

const faqs = [
  {
    q: '¿Los 30 días gratis son con acceso completo?',
    a: 'Sí. Durante el período de prueba tenés acceso completo al plan que elegiste, sin restricciones de funciones ni límite de transacciones.',
  },
  {
    q: '¿Necesito tarjeta de crédito para empezar?',
    a: 'No. Los 30 días de prueba arrancan sin tarjeta. Cuando se termina el período, elegís si continuás y cómo pagás.',
  },
  {
    q: '¿Qué pasa cuando termina el período de prueba?',
    a: 'Te avisamos antes de que termine. Si querés continuar, cargás el método de pago y seguís sin interrupciones. Si decidís no continuar, los datos de tu local quedan guardados por 30 días más por si cambiás de idea.',
  },
  {
    q: '¿Puedo cambiar de plan después?',
    a: 'Sí. Si empezás con el Básico y crecés, pasás al Avanzado en cualquier momento. El cambio es inmediato.',
  },
  {
    q: '¿Tienen plan para más de un local?',
    a: 'Si tenés o estás abriendo una segunda o tercera sucursal, contactanos directo. Tenemos una solución para cadenas multilocal que está en desarrollo. Escribinos por WhatsApp y coordinamos.',
  },
  {
    q: '¿Qué incluye el soporte?',
    a: 'Soporte por WhatsApp con el equipo de Mesanube. Sin tickets, sin bot. Respondemos en horario de trabajo y, cuando hay urgencias operativas (el sistema caído durante el servicio), priorizamos.',
  },
  {
    q: '¿El sistema tiene costos adicionales?',
    a: 'No. El precio mensual incluye todo: funciones, actualizaciones y soporte. No hay módulos de pago separado, no hay costo por comprobante ARCA, no hay cargos ocultos.',
  },
  {
    q: '¿Puedo cancelar en cualquier momento?',
    a: 'Sí. Sin permanencia mínima, sin penalidades. Si pagaste un período por adelantado y cancelás antes, no hay reintegro del período ya pagado, pero no hay cargo adicional por cancelar.',
  },
]

/* ── Button primitives ── */

function PrimaryButton({
  children,
  href = '#contacto',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#485c11] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-white transition-[background-color,transform] duration-300 hover:bg-[#3a4c0d] active:scale-[0.98] ${className}`}
    >
      <span>{children}</span>
      <svg
        width="10"
        height="10"
        viewBox="0 0 6 7"
        fill="none"
        className="translate-y-px transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <path
          d="M0.5 6L5.5 1M5.5 1H1.5M5.5 1V5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
        />
      </svg>
    </Link>
  )
}

function SoftButton({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#dfecc6] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black transition-[background-color,transform] duration-300 hover:bg-[#d0e1ac] active:scale-[0.98]"
    >
      {children}
    </Link>
  )
}

/* ── Checkmark cell ── */

function Check({ value }: { value: boolean }) {
  if (value) {
    return (
      <span className="font-bold text-[#485c11]" aria-label="Incluido">
        ✓
      </span>
    )
  }
  return (
    <span className="text-[#929292]" aria-label="No incluido">
      –
    </span>
  )
}

/* ── Page ── */

export default function PreciosPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav items={navItems} />

      {/* Top nav */}
      <nav className="flex w-full max-w-[1500px] items-center justify-between pt-5 pb-10 sm:pt-5 sm:pb-20">
        <Link
          href="/"
          className="text-[26px] leading-[1.2] tracking-[-1.2px] text-black sm:text-[30px] sm:tracking-[-1.5px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          mesanube
        </Link>
        <TrialButton>Probá gratis</TrialButton>
      </nav>

      {/* Hero */}
      <header className="flex w-full max-w-[1500px] flex-col items-start gap-[60px] overflow-clip sm:gap-[100px]">
        <div className="flex w-full flex-col items-start gap-6">
          <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Precios
          </p>
          <h1
            className="word-rise w-full font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            <span>Precios sin letra chica.</span>
          </h1>
          <p className="max-w-[52ch] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            30 días gratis para probarlo. Después elegís el plan que le corresponde a tu local. Sin
            tarjeta, sin permanencia, sin sorpresas en la factura.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <TrialButton>Empezá tu prueba gratuita</TrialButton>
            <p className="text-[13px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Sin tarjeta de crédito. Sin permanencia.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* Planes */}
        <section
          id="planes"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Planes
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Dos planes, sin módulos de pago separado
            </p>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Todos los planes incluyen 30 días de prueba gratuita. Sin tarjeta de crédito para
              empezar.
            </p>
          </Reveal>

          <div className="flex w-full flex-col gap-5 lg:flex-row">
            {/* Plan Básico */}
            <Reveal
              delay={1}
              className="flex flex-1 flex-col items-start gap-8 rounded-[20px] border border-[#e9e9e9] p-8"
            >
              <div className="flex w-full flex-col items-start gap-3">
                <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                  Básico
                </p>
                <p
                  className="font-display leading-none tracking-[-0.02em] text-black"
                  style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                >
                  {PLAN_BASIC.price}
                  <span className="text-[16px] font-sans font-normal text-[#6f6f6f]">/mes</span>
                </p>
                <p className="text-[14px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  Para cafeterías, locales de mostrador y negocios que no tienen salón con mozos.
                </p>
              </div>
              <ul className="flex w-full flex-col gap-3">
                {basicFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-black"
                  >
                    <span className="mt-[2px] shrink-0 font-bold text-[#485c11]" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <TrialButton className="w-full">Empezá con el Plan Básico</TrialButton>
            </Reveal>

            {/* Plan Avanzado */}
            <Reveal
              delay={2}
              className="relative flex flex-1 flex-col items-start gap-8 rounded-[20px] border border-[var(--dark-green)] bg-[var(--dark-green)] p-8"
            >
              <span className="absolute right-6 top-6 rounded-full bg-[#dfecc6] px-3 py-1 font-mono text-[11px] font-bold tracking-[-0.14px] text-black">
                Más elegido
              </span>
              <div className="flex w-full flex-col items-start gap-3">
                <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#dfecc6]">
                  Avanzado
                </p>
                <p
                  className="font-display leading-none tracking-[-0.02em] text-white"
                  style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                >
                  {PLAN_ADVANCED.price}
                  <span className="text-[16px] font-sans font-normal text-white/60">/mes</span>
                </p>
                <p className="text-[14px] leading-[1.4] tracking-[-0.09px] text-white/70">
                  Para bares, restaurantes y cafeterías con equipo de salón y cocina separada.
                </p>
              </div>
              <ul className="flex w-full flex-col gap-3">
                {advancedFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-white"
                  >
                    <span
                      className="mt-[2px] shrink-0 font-bold text-[#dfecc6]"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <TrialButton className="w-full">Empezá con el Plan Avanzado</TrialButton>
            </Reveal>
          </div>
        </section>

        {/* Comparison table */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              ¿Cuál te conviene?
            </h2>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Si tenés dudas sobre cuál te queda mejor, escribinos por WhatsApp y en cinco minutos lo
              resolvemos.
            </p>
          </Reveal>

          <Reveal delay={1} className="w-full overflow-x-auto">
            <table className="w-full min-w-[400px] border-collapse text-left text-[18px] leading-[1.4] tracking-[-0.09px]">
              <thead>
                <tr className="border-b border-[#e9e9e9]">
                  <th className="pb-4 pr-8 font-sans text-[14px] font-bold text-black" scope="col">
                    Función
                  </th>
                  <th
                    className="pb-4 pr-8 font-mono text-[14px] font-bold tracking-[-0.14px] text-[#485c11]"
                    scope="col"
                  >
                    Básico
                    <span className="ml-1 font-normal text-[#929292]">{PLAN_BASIC.price}</span>
                  </th>
                  <th
                    className="pb-4 font-mono text-[14px] font-bold tracking-[-0.14px] text-[#485c11]"
                    scope="col"
                  >
                    Avanzado
                    <span className="ml-1 font-normal text-[#929292]">{PLAN_ADVANCED.price}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-[#e9e9e9]">
                    <td className="py-4 pr-8 text-black">{row.label}</td>
                    <td className="py-4 pr-8 text-center">
                      <Check value={row.basic} />
                    </td>
                    <td className="py-4 text-center">
                      <Check value={row.advanced} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </section>

        {/* Descuentos */}
        <section
          id="descuentos"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Descuentos
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Pagando por adelantado
            </p>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Si sabés que Mesanube es para vos, podés ahorrar pagando por adelantado.
            </p>
          </Reveal>

          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2">
            <Reveal
              delay={1}
              as="article"
              className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
            >
              <p
                className="font-display leading-none text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                10%
              </p>
              <div className="flex w-full flex-col items-start gap-3">
                <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                  6 meses por adelantado
                </p>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  El descuento se aplica sobre el precio mensual del plan que elijas.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={2}
              as="article"
              className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
            >
              <p
                className="font-display leading-none text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                25%
              </p>
              <div className="flex w-full flex-col items-start gap-3">
                <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                  12 meses por adelantado
                </p>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  El pago anual en el Plan Avanzado sale lo mismo que pagar 9 meses al precio de
                  lista.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={1}
            className="w-full rounded-[20px] bg-[#dfecc6] px-8 py-[40px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#485c11]"
          >
            Los primeros 30 días son siempre gratis, independientemente del plan y la frecuencia de
            pago.
          </Reveal>
        </section>

        {/* FAQ */}
        <FaqSection heading="Lo que más nos preguntan sobre los precios." items={faqs} />

        {/* CTA final */}
        <section
          id="contacto"
          className="flex w-full max-w-[1500px] flex-col items-center gap-10 border-t border-[#e9e9e9] px-6 py-[80px] sm:px-24 sm:py-[120px] lg:px-[300px]"
        >
          <Reveal
            as="h2"
            className="w-full text-center font-display text-black"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            Empezá gratis. 30 días sin tarjeta
          </Reveal>
          <Reveal
            delay={1}
            as="p"
            className="w-full text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
          >
            Si después de los 30 días decidís que Mesanube no es para tu local, no perdiste nada.
          </Reveal>
          <Reveal delay={2} className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <TrialButton>Probá el Plan Básico gratis</TrialButton>
            <SoftButton href="#planes">Probá el Plan Avanzado gratis</SoftButton>
          </Reveal>
          <Reveal
            delay={3}
            as="p"
            className="text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
          >
            ¿Tenés preguntas antes de empezar?{' '}
            <DemoLink tone="dark">Escribinos por WhatsApp →</DemoLink>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
