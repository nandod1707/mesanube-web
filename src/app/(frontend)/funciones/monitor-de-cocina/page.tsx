import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Monitor de Cocina (KDS) para Restaurantes — Pedidos en Pantalla en Tiempo Real | Mesanube',
  description:
    'Monitor de cocina integrado al POS. Los pedidos llegan en tiempo real a la pantalla de cocina, el cocinero los marca como listos y el mozo lo sabe al instante. Para restaurantes argentinos.',
}

/* ─────────────────────────────────────────────
   Static data
───────────────────────────────────────────── */
const navItems = [
  { href: '#problema', label: 'El problema' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Empezá' },
]

type Step = { number: string; title: string; description: string }

const steps: Step[] = [
  {
    number: '01',
    title: 'El mozo toma el pedido',
    description:
      'Desde su celular, selecciona los productos y toca "Enviar". El pedido parte.',
  },
  {
    number: '02',
    title: 'Llega al monitor al instante',
    description:
      'En la pantalla de la cocina aparece el pedido: número de mesa, productos, modificaciones, hora de entrada. En texto claro, sin ambigüedad.',
  },
  {
    number: '03',
    title: 'El cocinero trabaja en orden',
    description:
      'Los pedidos se muestran por orden de llegada. Si hay varios activos, el cocinero los ve todos en pantalla y trabaja de acuerdo a la prioridad.',
  },
  {
    number: '04',
    title: 'Marca "listo" desde el monitor',
    description:
      'Cuando el pedido está preparado, el cocinero lo marca desde la propia pantalla de cocina. No grita. No busca al mozo. Lo marca y sigue.',
  },
  {
    number: '05',
    title: 'El mozo sabe que el pedido está',
    description:
      'La app del mozo le muestra que su pedido está listo. Va a buscar los platos en el momento correcto, sin dar vueltas en vano.',
  },
]

type FaqItem = { q: string; a: string }

const faqItems: FaqItem[] = [
  {
    q: '¿Qué es un monitor de cocina (KDS) y para qué sirve?',
    a: 'Un monitor de cocina, también conocido como KDS (Kitchen Display System), es una pantalla en la cocina que muestra los pedidos en tiempo real. Reemplaza las comandas en papel: el pedido llega en digital, el cocinero lo trabaja y lo marca como listo desde la pantalla. Elimina la comunicación verbal y el riesgo de perder o malinterpretar una comanda.',
  },
  {
    q: '¿El monitor de cocina necesita hardware especial?',
    a: 'No. Funciona en cualquier tablet o celular. Una tablet Android básica montada en la cocina es suficiente.',
  },
  {
    q: '¿El cocinero puede marcar el pedido como "listo" desde el monitor?',
    a: 'Sí. Esa es la función principal del monitor: el cocinero toca el pedido para marcarlo como listo y el mozo recibe la notificación en su app.',
  },
  {
    q: '¿Los pedidos aparecen en orden de llegada?',
    a: 'Sí. Los pedidos se muestran en la pantalla de cocina ordenados por hora de entrada. Si el encargado necesita cambiar una prioridad, puede hacerlo desde el panel.',
  },
  {
    q: '¿Qué pasa si la cocina no tiene buena conexión a internet?',
    a: 'El monitor necesita conectividad para recibir los pedidos en tiempo real. Recomendamos WiFi estable en el área de cocina. Si el local es grande, un repetidor de señal resuelve el problema.',
  },
  {
    q: '¿Está incluido en todos los planes?',
    a: 'El monitor de cocina está incluido en el Plan Avanzado ($34.000/mes). El Plan Básico no lo incluye porque está pensado para locales sin cocina separada.',
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
export default function MonitorDeCocinaPage() {
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
            Funciones — Monitor de cocina
          </p>
          <h1
            className="word-rise mb-6 font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            {'Monitor de cocina — los pedidos en pantalla, en orden, en tiempo real'.split(' ').map(
              (word, i) => (
                <span key={i} style={{ animationDelay: `${i * 60}ms`, marginRight: '0.22em' }}>
                  {word}
                </span>
              ),
            )}
          </h1>
          <p className="mb-8 max-w-[520px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            El cocinero no espera el papelito. El mozo no tiene que gritar. Los pedidos llegan solos
            a la pantalla de cocina en el momento en que se toman. Y cuando el plato está listo, el
            cocinero lo marca desde la pantalla.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrialButton>Incluido en el Plan Avanzado — Probá gratis</TrialButton>
            <SoftButton href="#como-funciona">Ver cómo funciona</SoftButton>
          </div>
        </Reveal>

        {/* Hero image block */}
        <Reveal delay={1} className="mt-12 w-full">
          <div
            className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
            style={{ aspectRatio: '16/7' }}
          >
            <Image
              src="/figma/hero-mountains.png"
              alt="Monitor de cocina de Mesanube mostrando pedidos en tiempo real"
              fill
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </header>

      <main className="flex w-full flex-col items-start">
        {/* ── El problema ── */}
        <Reveal
          as="section"
          id="problema"
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
                Lo que pasa cuando la comunicación entre sala y cocina falla
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Papelitos que se pierden. Pedidos que se gritan de una punta a la otra del local. El
                mozo que pasa la comanda a mano y la cocina que no puede leer la letra. El orden de
                los pedidos que se confunde cuando llegan todos juntos.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                El monitor de cocina elimina esos puntos de falla. No es un lujo para restaurantes
                grandes: es la solución a un problema que cualquier local con cocina separada conoce
                bien.
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
              Del celular del mozo a la pantalla de cocina
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal
                key={step.number}
                delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
                className="flex flex-col items-start gap-4 border-t border-[#e9e9e9] pt-[40px] pb-[40px] pr-5"
              >
                <p
                  className="font-display text-[#929292]"
                  style={{ fontSize: 'clamp(56px, 6vw, 80px)', lineHeight: 1 }}
                >
                  {step.number}
                </p>
                <p className="font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                  {step.title}
                </p>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Sin hardware especial ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Compatibilidad
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Sin hardware especial
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                El monitor de cocina funciona en cualquier tablet o celular. Una tablet económica
                montada en la pared de la cocina es suficiente. No necesitás un monitor industrial
                ni nada específico: cualquier dispositivo con pantalla y navegador sirve.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Si ya tenés una tablet vieja que no usás, ya tenés el hardware.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  'Tablet Android (cualquier marca y modelo reciente)',
                  'iPad o iPhone',
                  'Cualquier celular con navegador actualizado',
                  'Sin instalación de app: funciona desde el navegador',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
                  >
                    <span className="mt-[2px] text-[#485c11]" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* ── Imagen feature ── */}
        <section className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="flex flex-col gap-6">
              <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Integración total
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Sala y cocina sincronizadas en tiempo real
              </h2>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                El monitor de cocina no es una pantalla independiente: es parte del sistema. Cuando
                el mozo modifica un pedido, el monitor se actualiza solo. Cuando la cocina marca un
                ítem como listo, la app del mozo lo refleja al instante.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                No hay nada que configurar manualmente para que los datos estén sincronizados. Es
                automático desde el primer pedido.
              </p>
            </Reveal>
            <Reveal
              delay={1}
              className="relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
              style={{ minHeight: '360px' }}
            >
              <Image
                src="/figma/columns.png"
                alt="Integración sala y cocina en Mesanube"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* ── Testimonial ── */}
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
                    lineHeight: 1.1,
                    letterSpacing: '-0.5px',
                  }}
                >
                  &ldquo;Antes mi cocinero y yo nos pasábamos el turno entero gritándonos los
                  pedidos. Con el monitor, cada uno sabe lo que tiene que hacer sin decir una
                  palabra.&rdquo;
                </p>
                <footer className="mt-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
                  — Sebastián M., Restaurante El Rincón, Villa Crespo
                </footer>
              </blockquote>
            </div>
          </div>
        </Reveal>

        {/* ── Precio ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="mx-auto max-w-[600px] rounded-[20px] border border-[#e9e9e9] p-8 text-center">
            <p className="mb-4 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Incluido en el Plan Avanzado
            </p>
            <p
              className="mb-2 font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              $34.000
              <span className="text-[#6f6f6f]" style={{ fontSize: '0.5em', letterSpacing: '-0.5px' }}>
                /mes
              </span>
            </p>
            <p className="mb-6 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Monitor de cocina, app para mozos, control de stock, recetas, facturación ARCA y
              reportes completos. Sin módulos adicionales.
            </p>
            <ul className="mb-8 flex flex-col gap-2 text-left">
              {[
                'Pedidos en tiempo real a la pantalla de cocina',
                'Marcado de pedidos listo desde el monitor',
                'Notificación al mozo cuando el pedido está',
                'Sin hardware especial — cualquier tablet sirve',
                'Soporte directo por WhatsApp',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
                >
                  <span className="text-[#485c11]" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <TrialButton className="w-full">Empezá tu prueba gratuita</TrialButton>
            <p className="mt-3 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
              30 días gratis. Sin tarjeta de crédito.
            </p>
          </div>
        </Reveal>

        {/* ── FAQ ── */}
        <section
          id="faq"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-10">
            <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Preguntas frecuentes
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Lo que nos preguntan seguido
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {faqItems.map((item) => (
              <Reveal key={item.q} className="border-t border-[#e9e9e9] py-5">
                <p className="text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                  {item.q}
                </p>
                <p className="mt-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {item.a}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

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
                Conectá tu sala con tu cocina — probalo gratis
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Plan Avanzado. 30 días sin tarjeta de crédito. Si querés ver el monitor de cocina
                en acción antes de empezar, agendá una demo.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrialButton>Empezá tu prueba gratuita</TrialButton>
                <DemoButton>Agendá una demo</DemoButton>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <PrimaryButton href="/precios">Ver todos los planes</PrimaryButton>
                <SoftButton href="/funciones">Ver todas las funciones</SoftButton>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      {/* ── Footer ── */}
      <footer className="flex w-full max-w-[1500px] flex-col items-start justify-end gap-[50px] border-t border-[#e9e9e9] pt-10 pb-5 sm:gap-[80px]">
        <nav
          aria-label="Navegación del pie de página"
          className="flex h-10 w-full items-center justify-between"
        >
          <div className="flex items-center gap-5 text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black sm:gap-[27px]">
            <Link
              href="#como-funciona"
              className="transition-colors duration-150 hover:text-[#485c11]"
            >
              Cómo funciona
            </Link>
            <Link href="#faq" className="transition-colors duration-150 hover:text-[#485c11]">
              Preguntas
            </Link>
            <Link href="#contacto" className="transition-colors duration-150 hover:text-[#485c11]">
              Empezá
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
