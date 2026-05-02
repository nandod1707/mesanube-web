import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import { FaqSection } from '@/components/shared/FaqSection'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'App para Mozos en Argentina — Pedidos desde la mesa | Mesanube',
  description:
    'App para mozos que permite tomar pedidos desde cualquier celular o tablet. Para restaurantes argentinos.',
}

/* ─────────────────────────────────────────────
   Static data
───────────────────────────────────────────── */
const navItems = [
  { href: '/#funciones', label: 'Funciones' },
  { href: '/#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Empezá' },
]

type FeatureCard = { title: string; description: string }

const featureCards: FeatureCard[] = [
  {
    title: 'Tomar pedidos por mesa',
    description:
      'El mozo abre su mesa, selecciona los productos, agrega modificaciones o notas, y envía. El pedido aparece en el monitor de cocina al instante.',
  },
  {
    title: 'Agregar ítems a una comanda',
    description:
      'Si la mesa pide algo más, el mozo lo suma a la comanda existente. Sin abrir una nueva, sin complicaciones.',
  },
  {
    title: 'Ver el estado de sus mesas',
    description:
      'En la pantalla principal, el mozo ve qué mesas están abiertas, qué tienen pedido, qué está tardando.',
  },
  {
    title: 'Sacar la precuenta',
    description:
      'El mozo la genera desde la app. El detalle está completo, con ítems, precios e impuestos. Sin ir al mostrador.',
  },
  {
    title: 'Gestionar el cobro',
    description:
      'La cuenta se cobra en efectivo, tarjeta, transferencia o en combinación. Si la mesa quiere pagar por separado, el sistema divide la cuenta.',
  }
]

type RoleCard = { role: string; description: string }

const roleCards: RoleCard[] = [
  {
    role: 'Mozo',
    description:
      'Ve sus mesas y sus pedidos. No cierra mesa ni ve los datos de caja.',
  },
  {
    role: 'Encargado',
    description:
      'Ve todo el salón: todas las mesas, todos los pedidos activos, puede abrir y cerrar la caja y hacer retiros. Puede intervenir en cualquier mesa.',
  },
  {
    role: 'Dueño',
    description:
      'Acceso completo: sala, caja, reportes, configuración. Desde cualquier dispositivo, incluso fuera del local.',
  },
]

type FaqItem = { q: string; a: string }

const faqItems: FaqItem[] = [
  {
    q: '¿Qué es una app para mozos y cómo funciona?',
    a: 'Una app para mozos es una aplicación móvil que permite al personal de salón tomar pedidos, emitir cuentas desde su celular. En Mesanube se sincroniza en tiempo real con el monitor de cocina y con el sistema de caja, sin terminales adicionales.',
  },
  {
    q: '¿Cuántos mozos pueden usar la app en simultáneo?',
    a: 'Sin límite. Todos pueden trabajar al mismo tiempo desde sus propios celulares sin interferencia. Sin licencias adicionales por usuario.',
  },
  {
    q: '¿Los mozos tienen que crearse una cuenta?',
    a: 'El encargado o dueño crea los usuarios desde el panel de administración. El mozo recibe sus datos de acceso y entra con usuario y contraseña. No se descarga ninguna app de tienda: accede desde el navegador del celular.',
  },
  {
    q: '¿Qué pasa si un mozo se va del local?',
    a: 'El dueño puede desactivar ese usuario y crear el nuevo en cualquier momento desde la configuración. Sin llamar a soporte, sin esperar.',
  },
  {
    q: '¿La app necesita internet para funcionar?',
    a: 'Sí, necesita conectividad para sincronizar los pedidos. Si se corta la conexión, los pedidos se sincronizan cuando vuelve. Para un servicio continuo recomendamos WiFi estable en el salón.',
  },
  {
    q: '¿Cuánto tiempo lleva capacitar a un mozo nuevo?',
    a: 'En promedio, 20 minutos. La interfaz está pensada para que la aprenda el mozo solo durante el primer turno, sin capacitación formal.',
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
export default function AppParaMozosPage() {
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
        <PrimaryButton href="#contacto">Probá gratis</PrimaryButton>
      </nav>

      {/* ── Hero ── */}
      <header className="w-full max-w-[1500px] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
        <Reveal>
          <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
            Funciones — App para mozos
          </p>
          <h1
            className="word-rise font-display text-black mb-6"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            {'La app para mozos que simplifica el servicio'.split(' ').map((word, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 60}ms`, marginRight: '0.22em' }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f] max-w-[520px] mb-8">
            Tus mozos trabajan con el celular que ya tienen en el bolsillo. Toman pedidos, ven las
            cuentas y cierran las mesas, sin terminales ni hardware nuevo.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="#contacto">Incluida en el Plan Avanzado — Probá gratis</PrimaryButton>
            <SoftButton href="#funciones">Ver funciones</SoftButton>
          </div>
        </Reveal>

        {/* Hero image block */}
        <Reveal delay={1} className="mt-12 w-full">
          <div className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]" style={{ aspectRatio: '16/7' }}>
            <Image
              src="/figma/hero-mountains.png"
              alt="App para mozos de Mesanube en acción"
              fill
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">

        {/* ── Por qué importa ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
                El problema
              </p>
              <h2
                className="font-display text-black mb-0"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                El cuello de botella más común en la sala
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Hay un patrón que se repite en casi todos los restaurantes y bares sin sistema: una
                o dos tablets compartidas para tomar pedidos, y cuando se llena el salón los mozos
                se forman para usarlas. Mientras uno usa la terminal, los otros esperan. Y mientras
                esperan, los clientes esperan.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                La app de mozos de Mesanube elimina ese cuello de botella. Cada mozo trabaja desde
                su propio celular, en simultáneo. No hay fila. No hay espera.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Funciones ── */}
        <section
          id="funciones"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-12">
            <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
              Qué puede hacer cada mozo
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Todo el flujo del servicio en una sola pantalla
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card, i) => (
              <Reveal
                key={card.title}
                delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
                className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <div>
                  <h3 className="text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Reseñas en Google ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
                Reseñas en Google
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                El momento correcto para pedir una reseña
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                ¿Cuándo es el momento ideal para pedirle a un cliente una reseña en Google? Justo
                después de una experiencia positiva. Y pocos momentos son más positivos que cuando
                la cuenta acaba de cerrarse y el cliente quedó conforme con el servicio.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                La app de Mesanube sugiere al mozo, en ese momento exacto, invitar al cliente a
                dejar una reseña. No es una notificación automática intrusiva: es una sugerencia
                para el mozo. Los locales que usan esta función de forma consistente ven un
                crecimiento real en sus reseñas de Google, lo que impacta directamente en cómo los
                encuentra la gente que busca dónde comer en la zona.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Roles y permisos ── */}
        <section className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
          <Reveal className="mb-12">
            <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
              Roles y permisos
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Cada uno ve lo que necesita ver
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
            {roleCards.map((card, i) => (
              <Reveal
                key={card.role}
                delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
                className="flex flex-col items-start gap-4 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] uppercase">
                  {card.role}
                </p>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {card.description}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Compatibilidad ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
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
                Sin hardware adicional
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                La app funciona en cualquier Android o iOS. Sin tablets especiales, sin terminales
                de punto de venta. Si tu equipo tiene celulares, ya tenés el hardware.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  'Cualquier celular Android (versión 8+)',
                  'iPhone (iOS 14+)',
                  'Tablets Android e iPad',
                  'Impresoras térmicas de 58mm o 80mm vía Bluetooth o WiFi',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
                  >
                    <span className="mt-[2px] text-[#485c11]" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* ── Testimonio ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]" style={{ aspectRatio: '550/624' }}>
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
                  &ldquo;Mis mozos aprendieron a usar la app en veinte minutos. La primera noche que la usamos ya se notó la diferencia: los pedidos llegaban a la cocina antes de que el mozo volviera de la mesa.&rdquo;
                </p>
                <footer className="mt-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
                  — Patricia L., Restaurante La Esquina, Flores
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
            <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-4 uppercase">
              Incluida en el Plan Avanzado
            </p>
            <p
              className="font-display text-black mb-2"
              style={{ fontSize: 'clamp(36px, 5.5vw, 60px)', lineHeight: 0.9, letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)' }}
            >
              $34.000
              <span className="text-[#6f6f6f]" style={{ fontSize: '0.5em', letterSpacing: '-0.5px' }}>/mes</span>
            </p>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f] mb-6">
              App para mozos, monitor de cocina, control de stock, recetas, facturación ARCA y
              reportes completos. Sin módulos adicionales, sin límite de usuarios.
            </p>
            <ul className="flex flex-col gap-2 mb-8 text-left">
              {[
                'Sin límite de mozos simultáneos',
                'Solicitud de reseñas en Google',
                'Roles y permisos por usuario',
                'Soporte directo por WhatsApp',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
                >
                  <span className="text-[#485c11]" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <PrimaryButton href="#contacto" className="w-full justify-center">
              Empezá tu prueba gratuita
            </PrimaryButton>
            <p className="mt-3 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
              30 días gratis. Sin tarjeta de crédito.
            </p>
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
              <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
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
                Probá la app para mozos de Mesanube
              </h2>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Incluida en el Plan Avanzado. 30 días gratis, sin tarjeta de crédito. Si querés
                ver la app en acción antes de empezar, agendá una demo.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrialButton>Empezá tu prueba gratuita</TrialButton>
                <DemoButton>Agendá una demo</DemoButton>
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
            <Link href="#funciones" className="hover:text-[#485c11] transition-colors duration-150">
              Funciones
            </Link>
            <Link href="#contacto" className="hover:text-[#485c11] transition-colors duration-150">
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
