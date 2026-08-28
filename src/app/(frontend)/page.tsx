import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoLink, TrialButton } from '@/components/shared/CtaButtons'
import { CtaLink } from '@/components/shared/CtaLink'
import { FaqSection } from '@/components/shared/FaqSection'
import { JsonLd } from '@/components/shared/JsonLd'
import { buildFaqSchema } from '@/utilities/schema'
import { PricingCards } from '@/components/shared/PricingCards'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { APP_LOGIN_URL, APP_REGISTER_URL } from '@/config/app'
import { PLAN_SMALL, PLAN_MEDIUM } from '@/config/plans'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Mesanube. Sistema POS y Comanda Digital para Restaurantes y Cafeterías',
  description:
    `Sistema de gestión gastronómica para restaurantes, bares, cafeterías. Comanda digital, facturación electrónica ARCA, control de caja y app para mozos. Probá ${TRIAL_PERIOD} gratis, sin tarjeta.`,
}

/* ── Static data ── */

const trustItems = [
  'Facturación electrónica ARCA incluida',
  'Sin costos ocultos',
  'Cancelás cuando querés',
  'Soporte directo por WhatsApp',
]

const businessTypes = [
  {
    name: 'Cafeterías',
    body: 'Pedidos rápidos desde el mostrador, carta QR y ARCA sin vueltas.',
    href: '/para/cafeterias',
    label: 'Sistema para cafeterías',
  },
  {
    name: 'Restaurantes',
    body: 'Control completo de sala y cocina, desde la comanda hasta el cierre.',
    href: '/para/restaurantes',
    label: 'Sistema para restaurantes',
  },
  {
    name: 'Bares',
    body: 'Comanda ágil para múltiples camareros, cuentas por mesa.',
    href: '/para/bares',
    label: 'Sistema para bares',
  },
  {
    name: 'Pizzerías',
    body: 'Delivery, mostrador y salón en un solo sistema, todo conectado.',
    href: '/para/pizzerias',
    label: 'Ver más',
  },
  {
    name: 'Cadenas multilocal',
    body: 'Control centralizado de varias sucursales desde un solo panel.',
    href: '/para/cadenas-multilocal',
    label: 'Ver más',
  },
]

const features = [
  {
    title: 'Comanda digital',
    body: 'Tomá pedidos desde cualquier celular o tablet. Llegan a cocina al instante, sin papelitos escritos a mano, sin gritos, sin pedidos que se pierden.',
    href: '/funciones/comanda-digital',
  },
  {
    title: 'Arqueo de caja',
    body: 'Cerrá el turno con el control exacto del efectivo. Sin calculadora. Sin cuentas a mano. Sin diferencias que no podés explicar.',
    href: '/funciones/arqueo-de-caja',
  },
  {
    title: 'App para mozos',
    body: 'Tus mozos toman pedidos y ven las mesas desde el celular que ya tienen en el bolsillo. Sin hardware nuevo.',
    href: '/funciones/app-para-mozos',
  },
  {
    title: 'Carta QR',
    body: 'Menú digital que tus clientes escanean en la mesa. Lo actualizás desde el sistema y el cambio aparece al instante en cada teléfono.',
    href: '/funciones/carta-qr',
  },
  {
    title: 'Monitor de cocina',
    body: 'Los pedidos llegan a la pantalla de cocina solos, en orden. Sin papelitos voladores, sin comandas perdidas.',
    href: '/funciones/monitor-de-cocina',
  },
  {
    title: 'Reportes',
    body: 'Qué vendiste por día, qué producto se va más, qué medio de pago domina. En un vistazo, no en una planilla de Excel de fin de mes.',
    href: '/funciones/reportes-y-analitica',
  },
]



const faqs = [
  {
    q: '¿Qué es un sistema POS para restaurantes?',
    a: 'Un sistema POS (punto de venta) para restaurantes es el software que unifica la toma de pedidos, la emisión de facturas, el control de caja y los reportes de venta en un solo lugar. Mesanube es un POS diseñado específicamente para el mercado gastronómico, con facturación electrónica ARCA incluida.',
  },
  {
    q: '¿Mesanube es compatible con ARCA (ex-AFIP)?',
    a: 'Sí. La facturación electrónica ARCA está incluida en todos los planes, sin módulo adicional, sin app separada. Emitís facturas A, B y C directamente desde el POS.',
  },
  {
    q: '¿Cuánto cuesta un sistema de gestión para gastronomía?',
    a: `Mesanube arranca desde ${PLAN_SMALL.price}/mes para cafeterías y locales de mostrador (Plan ${PLAN_SMALL.name}) y ${PLAN_MEDIUM.price}/mes para bares y restaurantes con salón (Plan ${PLAN_MEDIUM.name}). Los primeros ${TRIAL_PERIOD} son gratis, sin ingresar tu tarjeta.`,
  },
  {
    q: '¿Necesito comprar hardware especial para usar Mesanube?',
    a: 'No. Mesanube funciona en cualquier tablet o celular Android o iOS, o computadora con Windows que ya tengas. Si necesitás imprimir tickets, es compatible con impresoras térmicas estándar.',
  },
  {
    q: '¿Cuál es la diferencia entre Mesanube y otros sistemas como Fudo o Maxirest?',
    a: 'Mesanube incluye facturación electrónica ARCA y app para mozos sin cobrar módulos por separado. Está hecho en Argentina para locales de entre 1 y 10 empleados, con soporte directo del equipo que desarrolla el producto.',
  },
]

/* ── Page ── */

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />

      {/* Top nav */}
      <nav className="flex w-full max-w-[1500px] items-center justify-between pt-5 pb-10 sm:pt-5 sm:pb-20">
        <Link
          href="/"
          className="text-[26px] leading-[1.2] tracking-[-1.2px] text-[var(--heading)] sm:text-[30px] sm:tracking-[-1.5px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          mesanube
        </Link>
        {/* Hidden on mobile — these CTAs live inside the FloatingNav hamburger menu there. */}
        <div className="hidden items-center gap-3 lg:flex">
          <CtaLink href={APP_LOGIN_URL} variant="outline">
            Ingresar
          </CtaLink>
          <CtaLink href={APP_REGISTER_URL} variant="primary">
            Creá tu cuenta
          </CtaLink>
        </div>
      </nav>

      {/* Hero */}
      <ShowcaseHero
        heading={['El sistema de gestión para gastronomía', 'más simple que vas a usar.']}
        subtitle="Tomá pedidos, controlá la caja, y organizá tu local. Diseñado para bares, cafeterías y restaurantes. Sin costos ocultos, y sin permanencia mínima."
        background={{ src: '/photos/cafeteria-barista-moliendo.jpg', alt: 'Barista preparando café con Mesanube' }}
        note={
          <>
            <em>&ldquo;No pensé que iba a ser tan fácil.&rdquo;</em> - Minuto Café, Caballito
          </>
        }
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* Trust bar */}
        <section
          id="que-es"
          aria-label="Indicadores de confianza"
          className="flex w-full max-w-[1500px] flex-wrap items-center justify-start gap-x-[30px] gap-y-[12px] border-t border-[var(--divider)] py-[50px] sm:justify-center"
        >
          {trustItems.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-[16px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]"
            >
              <span className="font-bold text-[var(--olive)]" aria-hidden="true">
                ✓
              </span>
              {item}
            </span>
          ))}
        </section>

        {/* ¿Qué es Mesanube? */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[var(--divider)] pb-[80px] pt-[60px] sm:gap-[50px] sm:pt-[80px] lg:flex-row lg:items-start lg:gap-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:w-1/2 lg:gap-10">
            <h2
              className="w-full font-display text-[var(--heading)]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Un sistema de gestión gastronómica hecho para locales como el tuyo
            </h2>
          </Reveal>
          <Reveal
            delay={1}
            className="flex w-full flex-col items-start gap-6 lg:w-1/2 lg:pt-2"
          >
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              Mesanube es el POS que usan cafeterías, bares y restaurantes argentinos para tomar
              pedidos sin anotar nada a mano, emitir facturas ARCA y cerrar la caja sin diferencias. Funciona en
              cualquier tablet o celular, o computadora con Windows. No necesitás hardware especial.
            </p>
          </Reveal>
        </section>

        {/* ¿Para qué tipo de local? */}
        <section
          id="funciones"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <div className="flex w-full flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[40px] sm:gap-[50px] sm:pt-[80px] sm:pb-[60px]">
            <Reveal className="flex w-full flex-col items-start gap-[30px] sm:gap-[50px] lg:pr-[400px]">
              <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
                Tipos de negocio
              </h2>
              <p
                className="w-full font-display text-[var(--heading)]"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Pensado para cada tipo de negocio gastronómico
              </p>
              <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                Mesanube se adapta al ritmo de tu local, ya sea una cafetería con tres mesas o un
                restaurante con veinte.
              </p>
            </Reveal>

            <div className="grid w-full grid-cols-1 gap-x-[20px] gap-y-[20px] pt-[20px] sm:grid-cols-2 sm:pt-[40px] lg:grid-cols-3">
              {businessTypes.map((bt, i) => (
                <Reveal
                  key={bt.href}
                  delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                  as="article"
                  className="flex flex-col items-start gap-4 border-t border-[var(--divider)] py-[40px] pr-5"
                >
                  <p className="w-full text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-[var(--heading)]">
                    {bt.name}
                  </p>
                  <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                    {bt.body}
                  </p>
                  <Link
                    href={bt.href}
                    className="text-[13px] font-bold leading-[1.4] tracking-[-0.14px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-[var(--heading)]"
                  >
                    {bt.label} →
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ARCA diferencial */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] pb-[80px] lg:flex-row lg:items-start lg:gap-[20px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-[1_0_0] flex-col items-start gap-10 border-t border-[var(--divider)] pt-[60px] pb-[40px] lg:pb-[80px]">
            <div className="flex w-full flex-col items-start gap-[30px] lg:gap-10 lg:pr-[80px]">
              <h2
                className="w-full font-display text-[var(--heading)]"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Facturación electrónica ARCA incluida en todos los planes
              </h2>
              <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                En Mesanube no tenés que instalar ninguna app extra para cumplir con ARCA. Emitís facturas A, B y C directamente desde tu cuenta, con impresión desde cualquier comandera con ticket térmico.
              </p>
              <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                Sin controladores fiscales, sin entrar al facturador, ni tener que llenar precios a mano.
              </p>
            </div>
            <Link
              href="/funciones/facturacion-electronica-arca"
              className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-[var(--heading)]"
            >
              Ver cómo funciona la facturación electrónica ARCA →
            </Link>
          </Reveal>

          <Reveal
            delay={1}
            className="zoom-wrap relative w-full flex-[1_0_0] overflow-hidden rounded-[20px] lg:rounded-[30px]"
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:h-[711px]">
              <Image
                src="/api/media/file/las-tres-gracias-1.webp"
                alt="Estructura clara y ordenada del sistema Mesanube"
                fill
                sizes="(max-width: 1024px) 100vw, 740px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/[0.06]" />
            </div>
          </Reveal>
        </section>

        {/* Features */}
        <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
          <div className="flex w-full flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[40px] sm:gap-[50px] sm:pt-[80px] sm:pb-[60px]">
            <Reveal className="flex w-full flex-col items-start gap-[30px] sm:gap-[50px] lg:pr-[400px]">
              <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
                Funciones
              </h2>
              <p
                className="w-full font-display text-[var(--heading)]"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Todo lo que necesitás para gestionar tu local
              </p>
              <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                Desde que levantás la persiana hasta que cerrás la caja, Mesanube te cubre.
              </p>
            </Reveal>

            <div className="grid w-full grid-cols-1 gap-x-[20px] gap-y-[20px] pt-[20px] sm:grid-cols-2 sm:pt-[40px] lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal
                  key={f.href}
                  delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                  as="article"
                  className="flex flex-col items-start gap-6 border-t border-[var(--divider)] py-[40px] pr-5"
                >
                  <div className="flex w-full flex-col items-start gap-5">
                    <p className="w-full text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-[var(--heading)]">
                      {f.title}
                    </p>
                    <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                      {f.body}
                    </p>
                  </div>
                  <Link
                    href={f.href}
                    className="text-[13px] font-bold leading-[1.4] tracking-[-0.14px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-[var(--heading)]"
                  >
                    Ver cómo funciona →
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section
          aria-label="Testimonio de un cliente de Mesanube"
          className="flex w-full max-w-[1500px] flex-col items-start gap-6 pb-[80px] lg:flex-row lg:items-stretch lg:gap-5 lg:pb-[120px]"
        >
          <Reveal className="zoom-wrap relative w-full overflow-hidden rounded-[20px] lg:w-1/2 lg:flex-[1_0_0] lg:rounded-[30px]">
            <div className="relative aspect-[550/624] w-full">
              <Image
                src="/api/media/file/coffee-times.webp"
                alt="Bar con Mesanube implementado"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            delay={1}
            className="flex w-full flex-[1_0_0] flex-col items-start justify-center gap-8 border-t border-[var(--divider)] pt-8 sm:gap-[50px] lg:w-1/2 lg:pl-[50px] lg:pt-0"
          >
            <p
              className="w-full font-display text-[var(--heading)]"
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                lineHeight: 1,
                letterSpacing: 'clamp(-0.8px, -0.2vw, -1.6px)',
              }}
            >
              &ldquo;Es tan fácil de usar que las cajeras casi no necesitaron capacitación, les mostré cómo se usa y a los 10 minutos ya lo manejaban sin problemas.&rdquo;
            </p>
            <div className="flex w-full flex-col items-start gap-2 leading-[1.4]">
              <p className="text-[18px] tracking-[-0.09px] text-[var(--heading)]">Stan</p>
              <p className="font-mono text-[14px] tracking-[-0.14px] text-[var(--olive)]">
                Coffee Times, Caballito
              </p>
            </div>
          </Reveal>
        </section>

        {/* Pricing */}
        <PricingCards
          eyebrow="Precios"
          heading="Precios transparentes, sin letra chica"
          description={`Todos los planes incluyen ${TRIAL_PERIOD} de prueba gratuita. Sin tarjeta de crédito para empezar.`}
          allPlansLinkText="Ver todos los planes →"
        />

        {/* FAQ */}
        <JsonLd data={buildFaqSchema(faqs)} />
        <FaqSection heading="Preguntas frecuentes" eyebrow={null} items={faqs} />
        {/* CTA final */}
        <section
          id="contacto"
          className="flex w-full max-w-[1500px] flex-col items-center gap-10 border-t border-[var(--divider)] px-6 py-[80px] sm:px-24 sm:py-[120px] lg:px-[300px]"
        >
          <Reveal
            as="h2"
            className="w-full text-center font-display text-[var(--heading)]"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            ¿Listo para que ningún pedido se vuelva a perder?
          </Reveal>
          <Reveal
            delay={1}
            as="p"
            className="w-full text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]"
          >
            Probá Mesanube gratis por {TRIAL_PERIOD}. Sin tarjeta de crédito. Sin permanencia mínima.
          </Reveal>
          <Reveal delay={2} className="flex w-full flex-col items-center gap-4">
            <TrialButton className="w-full">
              Empezá tu prueba gratuita
            </TrialButton>
            <DemoLink tone="muted">O agendá una demo personalizada →</DemoLink>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
