import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoLink, TrialButton } from '@/components/shared/CtaButtons'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Mesanube — Sistema POS y Comanda Digital para Restaurantes y Cafeterías en Argentina',
  description:
    'Sistema de gestión gastronómica para restaurantes argentinos. Comanda digital, facturación ARCA, control de caja y app para mozos. Probá 30 días gratis, sin tarjeta.',
}

/* ── Static data ── */

const navItems = [
  { href: '#que-es', label: '¿Qué es?' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#precios', label: 'Precios' },
  { href: '#contacto', label: 'Empezá' },
]

const trustItems = [
  'Facturación ARCA incluida',
  '100% hecho en Argentina',
  'Sin costos ocultos',
  'Cancelás cuando querés',
  'Soporte directo por WhatsApp',
]

const businessTypes = [
  {
    name: 'Cafeterías',
    body: 'Pedidos rápidos desde mostrador, carta QR y ARCA sin vueltas.',
    href: '/para/cafeterias',
    label: 'Sistema POS para cafeterías',
  },
  {
    name: 'Restaurantes',
    body: 'Control completo de sala y cocina, desde la comanda hasta el cierre.',
    href: '/para/restaurantes',
    label: 'Sistema para restaurantes',
  },
  {
    name: 'Bares',
    body: 'Comanda ágil para múltiples mozos, cuentas por mesa y propinas digitales.',
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
    name: 'Dark kitchens',
    body: 'Pedidos sin salón, con monitor de cocina en tiempo real.',
    href: '/#funciones',
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
    icon: '/figma/icon-cable.svg',
    title: 'Comanda digital',
    body: 'Tomá pedidos desde cualquier celular o tablet. Llegan a cocina al instante, sin papel, sin gritos, sin pedidos que se pierden.',
    href: '/funciones/comanda-digital',
  },
  {
    icon: '/figma/icon-chart.svg',
    title: 'Arqueo de caja',
    body: 'Cerrá el turno con el control exacto del efectivo. Sin calculadora. Sin cuentas a mano. Sin diferencias que no podés explicar.',
    href: '/funciones/arqueo-de-caja',
  },
  {
    icon: '/figma/icon-account.svg',
    title: 'App para mozos',
    body: 'Tus mozos toman pedidos, ven las cuentas y cobran propinas desde el celular que ya tienen en el bolsillo. Sin hardware nuevo.',
    href: '/funciones/app-para-mozos',
  },
  {
    icon: '/figma/icon-check.svg',
    title: 'Carta QR',
    body: 'Menú digital que tus clientes escanean en la mesa. Lo actualizás desde el sistema y el cambio aparece al instante en cada teléfono.',
    href: '/funciones/carta-qr',
  },
  {
    icon: '/figma/icon-earth.svg',
    title: 'Monitor de cocina',
    body: 'Los pedidos llegan a la pantalla de cocina solos, en orden. Sin papelitos volanderos, sin comandas perdidas.',
    href: '/funciones/monitor-de-cocina',
  },
  {
    icon: '/figma/icon-chart.svg',
    title: 'Reportes',
    body: 'Qué vendiste por día, qué producto se va más, qué medio de pago domina. En un vistazo, no en una planilla de Excel de fin de mes.',
    href: '/funciones/reportes-y-analitica',
  },
]

const basicFeatures = [
  'Comanda digital',
  'Carta QR',
  'Facturación ARCA',
  'Arqueo de caja',
]

const advancedFeatures = [
  'Todo el plan Básico',
  'App para mozos',
  'Monitor de cocina',
  'Control de stock',
  'Recetas',
]

const faqs = [
  {
    q: '¿Qué es un sistema POS para restaurantes?',
    a: 'Un sistema POS (punto de venta) para restaurantes es el software que unifica la toma de pedidos, la emisión de facturas, el control de caja y los reportes de venta en un solo lugar. Mesanube es un POS diseñado específicamente para el mercado gastronómico argentino, con facturación ARCA incluida.',
  },
  {
    q: '¿Mesanube es compatible con ARCA (ex-AFIP)?',
    a: 'Sí. La facturación electrónica ARCA está incluida en todos los planes, sin módulo adicional, sin app separada. Emitís facturas A, B y C directamente desde el POS.',
  },
  {
    q: '¿Cuánto cuesta un sistema de gestión para restaurantes en Argentina?',
    a: 'Mesanube arranca desde $19.000/mes para cafeterías y locales de mostrador (Plan Básico) y $34.000/mes para bares y restaurantes con salón (Plan Avanzado). Los primeros 30 días son gratis, sin tarjeta de crédito.',
  },
  {
    q: '¿Necesito comprar hardware especial para usar Mesanube?',
    a: 'No. Mesanube funciona en cualquier tablet o celular Android o iOS que ya tengas. Si necesitás imprimir tickets, es compatible con impresoras térmicas estándar.',
  },
  {
    q: '¿Cuál es la diferencia entre Mesanube y otros sistemas como Fudo o Maxirest?',
    a: 'Mesanube incluye facturación ARCA y app para mozos en el plan base, sin cobrar módulos por separado. A diferencia de sistemas pensados para otros mercados o para grandes cadenas, Mesanube está hecho en Argentina para locales de entre 1 y 10 empleados, con soporte directo del equipo que desarrolla el producto.',
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

/* ── Page ── */

export default function HomePage() {
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
      <header className="flex w-full max-w-[1500px] flex-col items-start gap-[80px] overflow-clip sm:gap-[160px] lg:gap-[240px]">
        <div className="flex w-full flex-col items-center gap-8">
          <h1
            className="word-rise w-full text-center font-display text-black"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 1.1,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            <span>Sistema POS y comanda digital para restaurantes y cafeterías en Argentina.</span>
          </h1>

          <p className="w-full max-w-[600px] text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Organizá tu local, cumplí con ARCA y controlá la caja. Diseñado para bares, cafeterías
            y restaurantes argentinos. Sin costos ocultos. Sin permanencia mínima.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <TrialButton>Probá 30 días gratis</TrialButton>
            <DemoLink tone="dark">Agendá una demo →</DemoLink>
          </div>

          {/* Social proof */}
          <p className="text-center text-[13px] leading-[1.4] tracking-[-0.09px] text-[#929292]">
            <em>
              &ldquo;No pensé que iba a ser tan fácil — ni tuve que llamar a nadie, empecé sola y
              en una hora ya estaba tomando pedidos.&rdquo;
            </em>{' '}
            — María G., Cafetería La Calma, Palermo
          </p>
        </div>

        <Reveal className="relative w-full">
          <div className="relative h-[220px] w-full overflow-visible rounded-[20px] bg-[#8e9c78] sm:h-[280px] sm:rounded-[24px] lg:h-[362px] lg:rounded-[30px]">
            <div
              aria-label="Vista previa del panel de Mesanube mostrando comandas, mesas y reportes"
              className="ipad-float absolute left-1/2 top-1/2 w-[88%] max-w-[907px] overflow-hidden rounded-[14px] border-x-2 border-t-2 border-white/50 bg-black shadow-[0_-4px_20px_rgba(0,0,0,0.1)] sm:rounded-[18px] lg:rounded-[24px]"
              style={{ aspectRatio: '907 / 644' }}
            >
              <div className="absolute inset-[2%_2%_0_2%] overflow-hidden rounded-[10px] sm:rounded-[14px] lg:rounded-[16px]">
                <Image
                  src="/figma/inner-screen.png"
                  alt="Panel de control de Mesanube"
                  fill
                  sizes="(max-width: 1024px) 90vw, 870px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Reveal>
      </header>

      <main className="flex w-full flex-col items-start">
        {/* Trust bar */}
        <section
          id="que-es"
          aria-label="Indicadores de confianza"
          className="flex w-full max-w-[1500px] flex-wrap items-center justify-start gap-x-[30px] gap-y-[12px] border-t border-[#e9e9e9] py-[50px] sm:justify-center"
        >
          {trustItems.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
            >
              <span className="font-bold text-[#485c11]" aria-hidden="true">
                ✓
              </span>
              {item}
            </span>
          ))}
        </section>

        {/* ¿Qué es Mesanube? */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pb-[80px] pt-[60px] sm:gap-[50px] sm:pt-[80px] lg:flex-row lg:items-start lg:gap-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:w-1/2 lg:gap-10">
            <h2
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Un sistema de gestión gastronómica hecho para locales argentinos
            </h2>
          </Reveal>
          <Reveal
            delay={1}
            className="flex w-full flex-col items-start gap-6 lg:w-1/2 lg:pt-2"
          >
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Mesanube es el POS que usan cafeterías, bares y restaurantes argentinos para tomar
              pedidos sin papel, emitir facturas ARCA y cerrar la caja sin diferencias. Funciona en
              cualquier tablet o celular. No necesitás hardware especial. Más de cientos de locales
              en Argentina ya lo usan.
            </p>
          </Reveal>
        </section>

        {/* ¿Para qué tipo de local? */}
        <section
          id="funciones"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <div className="flex w-full flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:gap-[50px] sm:pt-[80px] sm:pb-[60px]">
            <Reveal className="flex w-full flex-col items-start gap-[30px] sm:gap-[50px] lg:pr-[400px]">
              <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Tipos de negocio
              </h2>
              <p
                className="w-full font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Pensado para cada tipo de negocio gastronómico
              </p>
              <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Mesanube se adapta al ritmo de tu local, ya sea una cafetería con tres mesas o un
                restaurante con veinte cubiertos.
              </p>
            </Reveal>

            <div className="grid w-full grid-cols-1 gap-x-[20px] gap-y-[20px] pt-[20px] sm:grid-cols-2 sm:pt-[40px] lg:grid-cols-3">
              {businessTypes.map((bt, i) => (
                <Reveal
                  key={bt.href}
                  delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                  as="article"
                  className="flex flex-col items-start gap-4 border-t border-[#e9e9e9] py-[40px] pr-5"
                >
                  <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                    {bt.name}
                  </p>
                  <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {bt.body}
                  </p>
                  <Link
                    href={bt.href}
                    className="text-[13px] font-bold leading-[1.4] tracking-[-0.14px] text-[#485c11] underline underline-offset-2 transition-colors hover:text-black"
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
          <Reveal className="flex w-full flex-[1_0_0] flex-col items-start gap-10 border-t border-[#e9e9e9] pt-[60px] pb-[40px] lg:pb-[80px]">
            <div className="flex w-full flex-col items-start gap-[30px] lg:gap-10 lg:pr-[80px]">
              <h2
                className="w-full font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Facturación electrónica ARCA — incluida en todos los planes
              </h2>
              <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                En Mesanube no tenés que instalar ninguna app extra para cumplir con ARCA
                (ex-AFIP). Emitís facturas A, B y C directamente desde tu POS, con impresión en
                ticket térmico. Sin tener que llamar al contador para cada operación.
              </p>
              <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Sin procesos manuales. Sin aplicaciones que se actualizan cuando peor viene.
              </p>
              <p className="w-full text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                Es nativo. Viene incluido. Funciona.
              </p>
            </div>
            <Link
              href="/funciones/facturacion-electronica-arca"
              className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[#485c11] underline underline-offset-2 transition-colors hover:text-black"
            >
              Ver cómo funciona la facturación ARCA →
            </Link>
          </Reveal>

          <Reveal
            delay={1}
            className="zoom-wrap relative w-full flex-[1_0_0] overflow-hidden rounded-[20px] lg:rounded-[30px]"
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:h-[711px]">
              <Image
                src="/figma/columns.png"
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
          <div className="flex w-full flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:gap-[50px] sm:pt-[80px] sm:pb-[60px]">
            <Reveal className="flex w-full flex-col items-start gap-[30px] sm:gap-[50px] lg:pr-[400px]">
              <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Funciones
              </h2>
              <p
                className="w-full font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Todo lo que necesitás para gestionar tu local
              </p>
              <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Desde que abrís hasta que cerrás la caja, Mesanube te cubre.
              </p>
            </Reveal>

            <div className="grid w-full grid-cols-1 gap-x-[20px] gap-y-[20px] pt-[20px] sm:grid-cols-2 sm:pt-[40px] lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal
                  key={f.href}
                  delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                  as="article"
                  className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
                >
                  <div className="relative size-6">
                    <Image src={f.icon} alt="" fill sizes="24px" />
                  </div>
                  <div className="flex w-full flex-col items-start gap-5">
                    <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                      {f.title}
                    </p>
                    <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                      {f.body}
                    </p>
                  </div>
                  <Link
                    href={f.href}
                    className="text-[13px] font-bold leading-[1.4] tracking-[-0.14px] text-[#485c11] underline underline-offset-2 transition-colors hover:text-black"
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
                src="/figma/sphere.png"
                alt="Bar con Mesanube implementado"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            delay={1}
            className="flex w-full flex-[1_0_0] flex-col items-start justify-center gap-8 border-t border-[#e9e9e9] pt-8 sm:gap-[50px] lg:w-1/2 lg:pl-[50px] lg:pt-0"
          >
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                lineHeight: 1,
                letterSpacing: 'clamp(-0.8px, -0.2vw, -1.6px)',
              }}
            >
              &ldquo;Tuve un problema un lunes a la mañana antes de abrir. Escribí por WhatsApp y
              en diez minutos lo tenía resuelto, y me respondió alguien que sabía exactamente qué
              hacer.&rdquo;
            </p>
            <div className="flex w-full flex-col items-start gap-2 leading-[1.4]">
              <p className="text-[18px] tracking-[-0.09px] text-black">Diego F.</p>
              <p className="font-mono text-[14px] tracking-[-0.14px] text-[#485c11]">
                Bar Belgrano, Almagro
              </p>
            </div>
          </Reveal>
        </section>

        {/* Coming soon */}
        <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-center gap-8 rounded-[20px] bg-[#dfecc6] px-6 py-[80px] text-center sm:px-12 sm:py-[120px] lg:px-[240px]">
            <h2
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Pronto: el primer POS argentino que hace que tus clientes vuelvan solos
            </h2>
            <p className="w-full max-w-[540px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Estamos construyendo el primer módulo de fidelización con gamificación para
              restaurantes argentinos. Puntos, recompensas, desafíos, todo integrado con tu POS.
              Tus clientes no tienen que bajarse ninguna app.
            </p>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-black">
              Los locales que ya usan Mesanube tienen acceso anticipado.
            </p>
            <SoftButton href="/funciones/fidelizacion">Quiero acceso anticipado →</SoftButton>
          </Reveal>
        </section>

        {/* Pricing */}
        <section
          id="precios"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Precios
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Precios transparentes — sin letra chica
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
              className="flex flex-1 flex-col items-start gap-6 rounded-[20px] border border-[#e9e9e9] p-8"
            >
              <div>
                <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                  Básico
                </p>
                <p
                  className="mt-2 font-display leading-none tracking-[-0.02em] text-black"
                  style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                >
                  $19.000
                  <span className="text-[16px] font-sans font-normal text-[#6f6f6f]">/mes</span>
                </p>
                <p className="mt-2 text-[14px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  Para cafeterías y locales con mostrador.
                </p>
              </div>
              <ul className="flex w-full flex-col gap-3">
                {basicFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-black"
                  >
                    <span className="font-bold text-[#485c11]" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <TrialButton className="w-full">
                Empezar gratis
              </TrialButton>
            </Reveal>

            {/* Plan Avanzado */}
            <Reveal
              delay={2}
              className="relative flex flex-1 flex-col items-start gap-6 rounded-[20px] border border-[#e9e9e9] bg-black p-8"
            >
              <span className="absolute right-6 top-6 rounded-full bg-[#dfecc6] px-3 py-1 font-mono text-[11px] font-bold tracking-[-0.14px] text-black">
                Más popular
              </span>
              <div>
                <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#dfecc6]">
                  Avanzado
                </p>
                <p
                  className="mt-2 font-display leading-none tracking-[-0.02em] text-white"
                  style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                >
                  $34.000
                  <span className="text-[16px] font-sans font-normal text-white/60">/mes</span>
                </p>
                <p className="mt-2 text-[14px] leading-[1.4] tracking-[-0.09px] text-white/70">
                  Para bares y restaurantes con salón.
                </p>
              </div>
              <ul className="flex w-full flex-col gap-3">
                {advancedFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-white"
                  >
                    <span className="font-bold text-[#dfecc6]" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <TrialButton className="w-full">
                Empezar gratis
              </TrialButton>
            </Reveal>
          </div>

          <div className="flex w-full justify-center">
            <Link
              href="/precios"
              className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[#485c11] underline underline-offset-2 transition-colors hover:text-black"
            >
              Ver todos los planes →
            </Link>
          </div>
        </section>

        {/* FAQ */}
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
              Preguntas frecuentes
            </h2>
          </Reveal>

          <div className="flex w-full flex-col">
            {faqs.map((faq, i) => (
              <Reveal
                key={i}
                delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                className="flex w-full flex-col items-start gap-3 border-t border-[#e9e9e9] py-6"
              >
                <p className="w-full text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                  {faq.q}
                </p>
                <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {faq.a}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

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
            ¿Listo para dejar el papel atrás?
          </Reveal>
          <Reveal
            delay={1}
            as="p"
            className="w-full text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
          >
            Probá Mesanube gratis por 30 días. Sin tarjeta de crédito. Sin permanencia.
          </Reveal>
          <Reveal delay={2} className="flex w-full flex-col items-center gap-4">
            <TrialButton className="w-full">
              Empezá tu prueba gratuita
            </TrialButton>
            <DemoLink tone="muted">O agendá una demo personalizada →</DemoLink>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex w-full max-w-[1500px] flex-col items-start justify-end gap-[50px] border-t border-[#e9e9e9] pt-10 pb-5 sm:gap-[80px]">
        <nav className="flex h-10 w-full items-center justify-between" aria-label="Footer">
          <div className="flex items-center gap-5 text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black sm:gap-[27px]">
            <Link href="/#funciones" className="transition-colors hover:text-[#485c11]">
              Funciones
            </Link>
            <Link href="/precios" className="transition-colors hover:text-[#485c11]">
              Precios
            </Link>
            <Link href="#" className="transition-colors hover:text-[#485c11]">
              Soporte
            </Link>
          </div>
        </nav>
        <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-end sm:gap-10">
          <Link
            href="/"
            className="text-[22px] leading-[1.2] tracking-[-1px] text-black sm:text-[28px]"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
          >
            mesanube
          </Link>
          <div className="flex flex-1 items-center gap-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            <p>© Mesanube.</p>
            <p>2026</p>
          </div>
          <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}
