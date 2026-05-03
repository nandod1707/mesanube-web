import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import { SiteFooter } from '@/components/shared/SiteFooter'

export const metadata: Metadata = {
  title: 'Sistema POS para Cafeterías en Argentina. Comanda Digital y Facturación ARCA | Mesanube',
  description:
    'Sistema de gestión para cafeterías argentinas. Comanda digital, carta QR, arqueo de caja y facturación ARCA desde $19.000/mes. Probá 30 días gratis, sin tarjeta.',
}

/* ── Static data ── */

const navItems = [
  { href: '/#problema', label: 'El problema' },
  { href: '/#funciones', label: 'Funciones' },
  { href: '/precios', label: 'Precio' },
  { href: '#contacto', label: 'Empezá' },
]

const resuelve = [
  {
    title: 'Los errores de pedido',
    body: 'Cuando el pedido queda en papel o de memoria, los errores son inevitables. Con Mesanube, cada pedido que tomás va directo al monitor de cocina: en texto, legible, en tiempo real. Sin teléfono descompuesto. Sin "disculpá, era con leche vegetal".',
  },
  {
    title: 'El arqueo que nunca cierra',
    body: 'Cerrar la caja y que los números no cierren es una de las sensaciones más frustrantes del rubro. El arqueo de Mesanube lleva el conteo durante todo el turno: ingresos, egresos, pagos por transferencia. Cuando llegás a fin del día, el número está.',
  },
  {
    title: 'La facturación ARCA',
    body: 'Emitir facturas A, B y C es obligatorio y hay que hacerlo bien. En Mesanube la facturación electrónica va integrada en el mismo sistema donde tomás el pedido y cerrás la mesa. Sin app separada. Sin proceso manual.',
  },
  {
    title: 'La carta que nunca está actualizada',
    body: 'Cambió el precio del café, agregaste un combo nuevo, sacaste el sándwich que no rotaba. Con la carta QR de Mesanube, cambiás el precio en el sistema y en tres segundos todos los clientes ven la versión nueva en su teléfono.',
  },
]

const pasos = [
  {
    n: '8:30',
    title: 'Apertura',
    body: 'Abrís el sistema desde la tablet del mostrador o desde tu celular. El menú ya está cargado, los precios actualizados, los QR listos para el primer cliente.',
  },
  {
    n: '9:00',
    title: 'El primer pico',
    body: 'Llegan los de siempre: café con leche, medialunas, tostados. Cada pedido va desde la pantalla del mostrador directo a la cocina. Sin gritar, sin papelito, sin "¿qué dijo?"',
  },
  {
    n: '13:00',
    title: 'El almuerzo',
    body: 'Las mesas se llenan. Los mozos toman pedidos desde el celular, la cocina recibe todo en orden. La cuenta se arma sola. El cliente paga con tarjeta o efectivo, se registra todo, la factura sale en el momento.',
  },
  {
    n: '23:30',
    title: 'El cierre',
    body: 'Hacés el arqueo desde el sistema: efectivo en caja, transferencias, tarjetas. El total cierra con lo que vendiste. Cerrás sesión y te vas a tu casa sabiendo que los números están.',
  },
]

const funciones = [
  {
    title: 'Comanda desde mostrador',
    body: 'Diseñada para el ritmo de una barra: tocás el producto, sumás la cantidad, enviás. Sin menús complicados ni pasos de más.',
  },
  {
    title: 'Carta QR',
    body: 'Tus clientes escanean el código en la mesa y ven el menú actualizado en su teléfono. Sin que el cliente tenga que bajarse ninguna app.',
  },
  {
    title: 'Arqueo de caja',
    body: 'Seguimiento del efectivo por turno. Diferencias marcadas automáticamente. Historial de cada cierre.',
  },
  {
    title: 'Facturación ARCA nativa',
    body: 'Facturas A, B y C con factura electrónica. Todo desde el mismo sistema.',
  },
  {
    title: 'Reportes del día',
    body: 'Qué productos se vendieron, cuánto entró, por qué medio pagaron. Una pantalla, un vistazo.',
  },
  {
    title: 'App para mozos',
    body: 'Si tu cafetería tiene mesas con servicio, los mozos toman pedidos desde su celular. Los pedidos llegan a cocina al instante. (Plan Avanzado)',
  },
]

const precioItems = [
  'Carta QR',
  'Facturación ARCA',
  'Arqueo de caja',
  'Soporte por WhatsApp incluido',
]

const faq = [
  {
    q: '¿Qué sistema POS es mejor para una cafetería pequeña en Argentina?',
    a: 'Para cafeterías de 1 a 10 empleados en Argentina, lo más importante es que el sistema incluya facturación ARCA sin módulo adicional, funcione en hardware que ya tenés (tablet, celular o computadora), y tenga soporte local. Mesanube cumple los tres criterios desde el Plan Básico a $19.000/mes.',
  },
  {
    q: '¿Necesito hardware especial para usar una comanda digital en mi cafetería?',
    a: 'No. Mesanube funciona en cualquier tablet o celular Android o iOS. Si ya tenés una tablet en el mostrador, ya tenés el hardware necesario. Para imprimir tickets, es compatible con impresoras térmicas estándar de 58mm y 80mm.',
  },
  {
    q: '¿Cuánto tiempo lleva poner en marcha el sistema en una cafetería?',
    a: 'El mismo día que decidís empezar podés estar tomando pedidos con Mesanube. La carga del menú para una cafetería estándar lleva menos de una hora. El soporte acompaña el proceso si necesitás ayuda.',
  },
  {
    q: '¿La facturación ARCA tiene costo adicional?',
    a: 'No. Está incluida en el Plan Básico desde $19.000/mes. Sin módulo de facturación separado, sin costo por comprobante.',
  },
  {
    q: '¿Funciona si soy monotributista?',
    a: 'Sí. Mesanube emite facturas C para monotributistas, además de A y B para responsables inscriptos. El sistema detecta tu condición cuando configurás los datos fiscales.',
  },
  {
    q: '¿Puedo cancelar cuando quiero?',
    a: 'Sí. Sin permanencia mínima, sin cargos de cancelación, sin formularios. Si decidís que no es para vos, cancelás y listo.',
  },
  {
    q: '¿El soporte tiene algún costo adicional?',
    a: 'No. El soporte por WhatsApp está incluido en todos los planes. Sin niveles ni ticketing: te responde el equipo de Mesanube directo.',
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

export default function CafeteriasPage() {
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
            Para cafeterías
          </p>
          <h1
            className="word-rise w-full font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            <span>El sistema que tu cafetería necesita, con ARCA incluida.</span>
          </h1>
          <p className="max-w-[52ch] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            ¿Todavía tomás pedidos en papel y cerrás la caja con calculadora? Hay una mejor forma,
            y no cuesta lo que creés.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <TrialButton>Probá gratis 30 días</TrialButton>
            <p className="text-[13px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Sin tarjeta de crédito. Sin permanencia.
            </p>
          </div>
        </div>

        <Reveal className="zoom-wrap relative h-[220px] w-full overflow-hidden rounded-[20px] sm:h-[320px] lg:h-[420px] lg:rounded-[30px]">
          <Image
            src="/figma/hero-mountains.png"
            alt="Cafetería organizada con Mesanube"
            fill
            sizes="(max-width: 1024px) 100vw, 1500px"
            className="object-cover"
            priority
          />
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* El problema */}
        <section
          id="problema"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              El problema que conocemos bien
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              La cafetería que funciona bien tiene sus propios problemas.
            </p>
          </Reveal>
          <Reveal
            delay={1}
            className="flex w-full flex-col items-start gap-5 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f] lg:pr-[400px]"
          >
            <p>
              Llega el pico del mediodía. Tres mesas pidiendo al mismo tiempo, la chica del
              mostrador anotando en papel, el pedido que va a la cocina equivocado, y el cliente que
              se impacienta. Al final del día, cuando querés cerrar caja, el efectivo no cierra con
              lo que vendiste y no sabés de dónde viene la diferencia.
            </p>
            <p>
              No es que algo esté mal en tu local. Es que las herramientas que estás usando no
              estaban pensadas para esto.
            </p>
            <p>
              Los grandes sistemas ignoran a las cafeterías chicas: les parecen &ldquo;demasiado chicas&rdquo;.
              Los sistemas simples no cumplen con ARCA ni tienen control real de caja. Mesanube
              existe exactamente para ese espacio en el medio.
            </p>
          </Reveal>
        </section>

        {/* Qué resuelve */}
        <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Qué resuelve Mesanube
            </h2>
            <p
              className="w-full font-display text-black lg:pr-[400px]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Los cuatro dolores de cabeza que desaparecen.
            </p>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-4">
            {resuelve.map((item, i) => (
              <Reveal
                key={item.title}
                delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <div className="flex w-full flex-col items-start gap-5">
                  <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                    {item.title}
                  </p>
                  <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Cómo es un día */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[50px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:gap-[80px] sm:pt-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              De la apertura al cierre.
            </p>
            <TrialButton variant="soft">Empezá gratis</TrialButton>
          </Reveal>
          <div className="grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((s, i) => (
              <Reveal
                key={s.n}
                delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                aria-label={`Paso ${i + 1} de 4`}
                className="flex flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[40px] pr-[30px] pb-5 sm:gap-[60px] sm:pt-[60px]"
              >
                <p
                  className="w-full leading-none text-[#929292]"
                  style={{
                    fontSize: 'clamp(36px, 4vw, 56px)',
                    letterSpacing: 'clamp(-1px, -0.2vw, -2px)',
                  }}
                >
                  {s.n}
                </p>
                <div className="flex w-full flex-col items-start gap-5">
                  <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                    {s.title}
                  </p>
                  <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Funciones */}
        <section
          id="funciones"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px] sm:pb-[60px] lg:pr-[400px]">
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
              Lo que realmente usás.
            </p>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {funciones.map((f, i) => (
              <Reveal
                key={f.title}
                delay={Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-4 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                  {f.title}
                </p>
                <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal
            delay={1}
            className="zoom-wrap relative mt-[40px] h-[260px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:h-[500px] lg:rounded-[30px]"
          >
            <Image
              src="/figma/columns.png"
              alt="Panel de funciones de Mesanube para cafeterías"
              fill
              sizes="(max-width: 1024px) 100vw, 1500px"
              className="object-cover"
            />
          </Reveal>
        </section>

        {/* Testimonio */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-6 pb-[80px] lg:flex-row lg:items-stretch lg:gap-5 lg:pb-[120px]">
          <Reveal className="zoom-wrap relative w-full overflow-hidden rounded-[20px] lg:w-1/2 lg:flex-[1_0_0] lg:rounded-[30px]">
            <div className="relative aspect-[550/624] w-full">
              <Image
                src="/figma/sphere.png"
                alt="Cafetería con Mesanube"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            delay={1}
            as="section"
            aria-label="Testimonio de una clienta de Mesanube"
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
              &ldquo;Antes cerraba el turno con calculadora y siempre me faltaban o me sobraban
              unos pesos que no sabía de dónde venían. Con Mesanube el arqueo me lleva tres minutos
              y siempre cierra. No sé cómo estuve tanto tiempo sin esto.&rdquo;
            </p>
            <div className="flex w-full flex-col items-start gap-2 leading-[1.4]">
              <p className="text-[18px] tracking-[-0.09px] text-black">Claudia V.</p>
              <p className="font-mono text-[14px] tracking-[-0.14px] text-[#485c11]">
                Dueña, Cafetería Ocho y Medio, Villa Crespo
              </p>
            </div>
          </Reveal>
        </section>

        {/* Precio */}
        <section
          id="precios"
          className="flex w-full max-w-[1500px] flex-col items-center gap-10 border-t border-[#e9e9e9] px-6 py-[80px] sm:px-24 sm:py-[120px] lg:px-[300px]"
        >
          <Reveal className="flex w-full flex-col items-center gap-[30px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Precio
            </h2>
            <p
              className="w-full text-center font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              $19.000 por mes.
            </p>
            <p className="w-full text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Para ponerlo en perspectiva: es menos de lo que perdés con un pedido equivocado por
              semana durante un año, o con una diferencia de caja que no podés explicar.
            </p>
          </Reveal>

          <Reveal
            delay={1}
            className="w-full rounded-[20px] border border-[#e9e9e9] p-8"
          >
            <p className="mb-2 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Plan Básico
            </p>
            <p
              className="mb-1 font-display leading-none text-black"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-2px' }}
            >
              $19.000
              <span className="text-[18px] font-normal tracking-normal text-[#6f6f6f]">/mes</span>
            </p>
            <p className="mb-6 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Para cafeterías y locales con mostrador
            </p>
            <ul className="mb-8 flex flex-col gap-3">
              {precioItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[18px] leading-[1.4] tracking-[-0.09px] text-black"
                >
                  <span className="font-mono text-[#485c11]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <TrialButton className="w-full">
                30 días gratis, sin tarjeta de crédito
              </TrialButton>
              <Link
                href="/precios"
                className="text-center text-[14px] leading-[1.4] tracking-[-0.09px] text-[#485c11] underline underline-offset-4 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#485c11] focus-visible:outline-offset-2"
              >
                Ver todos los planes →
              </Link>
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Preguntas frecuentes
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Lo que más nos preguntan.
            </p>
          </Reveal>
          <div className="w-full">
            {faq.map((item, i) => (
              <Reveal
                key={i}
                delay={(Math.min(i, 3) + 1) as 1 | 2 | 3 | 4}
                as="article"
                className="flex w-full flex-col gap-2 border-t border-[#e9e9e9] py-5 lg:pr-[400px]"
              >
                <p className="text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                  {item.q}
                </p>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {item.a}
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
            as="p"
            className="w-full text-center font-display text-black"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            Probá Mesanube en tu cafetería. 30 días gratis.
          </Reveal>
          <Reveal
            delay={1}
            as="p"
            className="w-full text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
          >
            Sin tarjeta de crédito. Sin permanencia. Si tenés alguna duda antes de empezar,
            escribinos por WhatsApp.
          </Reveal>
          <Reveal delay={2} className="flex w-full flex-col items-center gap-4">
            <TrialButton className="w-full">
              Empezá tu prueba gratuita
            </TrialButton>
            <DemoButton>Agendá una demo de 20 minutos</DemoButton>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
