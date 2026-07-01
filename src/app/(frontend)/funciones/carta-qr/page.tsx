import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import { FaqSection } from '@/components/shared/FaqSection'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { PLAN_BASIC } from '@/config/plans'
import { HeroHeading } from '@/components/shared/HeroHeading'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Carta QR para Restaurantes y Cafeterías. Menú Digital que se Actualiza Solo | Mesanube',
  description:
    'Carta QR integrada al sistema POS. Tus clientes escanean y ven el menú en tiempo real desde su teléfono. Sin imprimir cartas, sin precios desactualizados. Para locales argentinos.',
}

/* ─────────────────────────────────────────────
   Static data
───────────────────────────────────────────── */
const navItems = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#donde-usar', label: 'Dónde usarlo' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Empezá' },
]

type StepItem = { number: string; title: string; description: string }

const steps: StepItem[] = [
  {
    number: '01',
    title: 'El cliente escanea el QR',
    description:
      'Con la cámara del teléfono, como hace con cualquier código QR. No necesita bajarse ninguna app, no necesita tener cuenta en ningún lado.',
  },
  {
    number: '02',
    title: 'Ve el menú en su teléfono',
    description:
      'El menú aparece organizado por categorías: entradas, principales, bebidas, postres. Con fotos si las subiste, con descripción si la escribiste.',
  },
  {
    number: '03',
    title: 'El menú es siempre el actual',
    description:
      'No hay versión desactualizada. El QR muestra exactamente el mismo menú que tiene cargado tu sistema en ese momento.',
  },
]

type UsageItem = { title: string; description: string }

const usageItems: UsageItem[] = [
  {
    title: 'En cada mesa',
    description: 'Sticker o portacartas en la superficie de la mesa. El cliente lo escanea antes de llamar al mozo.',
  },
  {
    title: 'En el mostrador',
    description: 'Para que el cliente decida qué pedir antes de llegar a la caja. Reduce el tiempo de atención.',
  },
  {
    title: 'En la entrada',
    description: 'Para ver el menú antes de sentarse. Ideal para locales con lista de espera.',
  },
  {
    title: 'Por redes o WhatsApp',
    description: 'El QR es una URL única de tu local. Podés compartirla donde quieras como menú digital.',
  },
]

type FaqItem = { q: string; a: string }

const faqItems: FaqItem[] = [
  {
    q: '¿Qué es una carta QR y cómo funciona en un restaurante?',
    a: 'Una carta QR es un menú digital que los clientes acceden escaneando un código con la cámara del teléfono. No requieren descargar ninguna app. En Mesanube, la carta QR está sincronizada con el sistema POS: cuando cambiás algo en el menú interno, el QR se actualiza automáticamente.',
  },
  {
    q: '¿El cliente necesita bajarse alguna app para ver la carta?',
    a: 'No. Cualquier teléfono moderno puede escanear el QR con la cámara nativa. El menú se abre en el navegador, sin apps, sin cuentas.',
  },
  {
    q: '¿Cómo actualizo la carta?',
    a: 'Cambiás el precio, el nombre o la descripción del producto en el sistema de Mesanube, como lo hacés normalmente. El QR refleja el cambio al instante. No hay proceso separado para "actualizar la carta QR".',
  },
  {
    q: '¿Puedo poner fotos en el menú?',
    a: 'Sí. Podés subir una imagen por producto. Las fotos aparecen en la vista del cliente en el QR.',
  },
  {
    q: '¿El cliente puede hacer el pedido desde el QR?',
    a: 'Hoy la carta QR es solo de consulta. El pedido lo toma el mozo desde la app o el encargado desde el mostrador. Próximamente vamos a habilitar que el cliente pueda pedir desde la carta. Si querés ser de los primeros, anotate en la sección de acceso anticipado.',
  },
  {
    q: '¿Cuántas cartas QR puedo tener?',
    a: 'Cada local tiene su QR único. Si tenés varias sucursales, cada una tiene el suyo.',
  },
  {
    q: '¿La carta QR tiene costo adicional?',
    a: `No. Está incluida en todos los planes de Mesanube, desde el Plan ${PLAN_BASIC.name}.`,
  },
]

/* ─────────────────────────────────────────────
   Shared button components
───────────────────────────────────────────── */
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

function SoftButton({
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
      className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-[#e9e9e9] bg-white px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black transition-[border-color,background-color] duration-200 hover:border-[#485c11] hover:bg-[#f7faf0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#485c11] focus-visible:outline-offset-2 ${className}`}
    >
      {children}
    </Link>
  )
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function CartaQrPage() {
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
          <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Funciones, Carta QR
          </p>
          <HeroHeading text="El menú que siempre está actualizado" className="mb-6" />
          <p className="mb-8 max-w-[520px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Tu cliente escanea el código en la mesa y ve el menú en tiempo real, en su teléfono. Sin
            cartas impresas que desactualizar, sin precios tachados a mano, sin que nadie se tenga
            que acordar de cambiar nada.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrialButton>Probá {process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis</TrialButton>
            <SoftButton href="#como-funciona">Ver cómo funciona</SoftButton>
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-12 w-full">
          <div
            className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
            style={{ aspectRatio: '16/7' }}
          >
            <Image
              src="/figma/hero-mountains.png"
              alt="Carta QR de Mesanube siendo escaneada en una mesa de restaurante"
              fill
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">

        {/* ── El problema ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                El problema
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                La carta desactualizada es inevitable. Hasta que no lo es.
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Si cambiás precios y tenés cartas impresas, hay tres opciones: reimprimir todo
                (caro, lento), tachar y escribir a mano (poco prolijo), o dejar el precio viejo y
                corregirlo en el momento (incómodo para todos).
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Ninguna de las tres funciona bien.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                La carta QR de Mesanube está vinculada al menú interno del sistema. Cuando cambiás
                el precio del café con leche, el cambio aparece en el QR en segundos. Sin imprimir
                nada, sin avisarle a nadie.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Cómo funciona ── */}
        <section
          id="como-funciona"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-12">
            <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Cómo funciona
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Un código. Cualquier teléfono. Sin apps.
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <Reveal
                key={step.number}
                delay={(i + 1) as 1 | 2 | 3}
                className="grid grid-cols-1 gap-4 border-t border-[#e9e9e9] pt-[40px] pb-[40px] sm:grid-cols-[120px_1fr] lg:grid-cols-[180px_1fr]"
              >
                <p
                  className="font-display leading-none text-[#929292]"
                  style={{ fontSize: 'clamp(56px, 6vw, 80px)' }}
                >
                  {step.number}
                </p>
                <div className="flex flex-col gap-3">
                  <p className="font-display text-[18px] leading-[1.4] tracking-[-0.09px] text-black">
                    {step.title}
                  </p>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Dónde poner el QR ── */}
        <section
          id="donde-usar"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-12">
            <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Dónde usarlo
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              No hay una sola forma de usarlo
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {usageItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(Math.min(i, 3) + 1) as 1 | 2 | 3 | 4}
                className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <div>
                  <h3 className="mb-2 text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                    {item.title}
                  </h3>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Próximamente ── */}
        <section className="w-full max-w-[1500px] pb-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-center gap-8 rounded-[20px] bg-[#dfecc6] px-6 py-[80px] text-center sm:px-12 sm:py-[120px] lg:px-[240px]">
            <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Próximamente
            </p>
            <h2
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Pedidos directamente desde la carta
            </h2>
            <p className="w-full max-w-[540px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Hoy la carta QR es solo para ver el menú. Próximamente el cliente va a poder hacer el
              pedido directamente desde la carta, sin necesidad del mozo para ese paso.
            </p>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-black">
              Si te interesa ser de los primeros locales en tener acceso cuando esté disponible,
              anotate.
            </p>
            <TrialButton variant="soft">Quiero acceso anticipado →</TrialButton>
          </Reveal>
        </section>

        {/* ── Testimonio ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div
              className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
              style={{ aspectRatio: '550/624' }}
            >
              <Image
                src="/figma/sphere.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <blockquote>
                <p
                  className="font-display text-black"
                  style={{
                    fontSize: 'clamp(24px, 3vw, 40px)',
                    lineHeight: 1,
                    letterSpacing: 'clamp(-0.8px, -0.2vw, -1.6px)',
                  }}
                >
                  &ldquo;Cambiamos los precios tres veces en los últimos meses. Antes significaba
                  reimprimir 40 cartas. Ahora es un cambio en el sistema y en dos minutos el QR ya
                  tiene el precio nuevo.&rdquo;
                </p>
                <footer className="mt-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
                  Martina V., Cafetería Rincón Verde, Palermo
                </footer>
              </blockquote>
            </div>
          </div>
        </Reveal>

        {/* ── FAQ ── */}
        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />

        {/* ── CTA final ── */}
        <Reveal
          as="section"
          id="contacto"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Empezá hoy
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Menú digital actualizado en tiempo real. Probalo gratis
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                {process.env.NEXT_PUBLIC_TRIAL_PERIOD} sin tarjeta de crédito. La carta QR está incluida en todos los planes.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrialButton>Empezá tu prueba gratuita</TrialButton>
                <DemoButton>Agendá una demo</DemoButton>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  )
}
