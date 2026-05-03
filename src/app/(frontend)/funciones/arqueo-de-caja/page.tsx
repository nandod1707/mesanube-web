import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import { FaqSection } from '@/components/shared/FaqSection'
import { SiteFooter } from '@/components/shared/SiteFooter'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Arqueo de Caja para Restaurantes. Control de Efectivo por Turno | Mesanube',
  description:
    'Arqueo de caja integrado al POS. Controlá efectivo, transferencias y tarjetas por turno. Diferencias marcadas automáticamente. Para restaurantes y cafeterías argentinas.',
}

/* ─────────────────────────────────────────────
   Static data
───────────────────────────────────────────── */
const navItems = [
  { href: '#que-registra', label: 'Qué registra' },
  { href: '#cierre', label: 'Cierre de turno' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Empezá' },
]

type IncomeItem = { label: string }
type ExpenseItem = { label: string }

const incomeItems: IncomeItem[] = [
  { label: 'Ventas en efectivo' },
  { label: 'Ventas con tarjeta (débito y crédito)' },
  { label: 'Ventas por transferencia o QR' },
]

const expenseItems: ExpenseItem[] = [
  { label: 'Retiros de caja (del dueño o encargado)' },
  { label: 'Pagos a proveedores' },
  { label: 'Gastos operativos del turno' },
]

type StepItem = { number: string; title: string; description: string }

const steps: StepItem[] = [
  {
    number: '01',
    title: 'Contás el efectivo en caja',
    description:
      'Al final del turno, contás el dinero físico. Lo ingresás en el sistema.',
  },
  {
    number: '02',
    title: 'El sistema cruza los datos',
    description:
      'Mesanube compara el efectivo que contaste con el total de ventas en efectivo registradas durante el turno, descontando egresos. Si hay diferencia, la muestra.',
  },
  {
    number: '03',
    title: 'Cerrás el turno y guardás el historial',
    description:
      'El cierre queda registrado con fecha, hora, usuario y el detalle completo de ingresos y egresos. Podés consultarlo después desde el panel.',
  },
]

type FaqItem = { q: string; a: string }

const faqItems: FaqItem[] = [
  {
    q: '¿Qué es un arqueo de caja y para qué sirve?',
    a: 'Un arqueo de caja es el proceso de verificar que el dinero físico en caja coincide con las ventas registradas en el sistema. Sirve para detectar errores, faltantes o sobrantes, y para llevar un registro ordenado de lo que entra y sale de caja en cada turno.',
  },
  {
    q: '¿El arqueo incluye los pagos con tarjeta y transferencia?',
    a: 'Sí. El arqueo de Mesanube registra todos los medios de pago: efectivo, tarjeta, transferencia y billeteras digitales. Cada uno aparece por separado en el resumen del turno.',
  },
  {
    q: '¿Se pueden registrar pagos a proveedores desde el sistema?',
    a: 'Sí. Los egresos de caja, incluyendo pagos a proveedores, se registran durante el turno y quedan incluidos en el arqueo.',
  },
  {
    q: '¿Cuántos turnos puedo manejar por día?',
    a: 'Sin límite. Si tenés turno del mediodía y turno de la noche, podés cerrar y abrir un turno nuevo. Cada cierre queda en el historial.',
  },
  {
    q: '¿Quién puede ver el arqueo?',
    a: 'El arqueo solo es visible para roles con permiso de caja: dueño y encargado. Los mozos no tienen acceso.',
  },
  {
    q: '¿El historial de arqueos se guarda?',
    a: 'Sí. Todos los cierres quedan guardados en el sistema. Podés consultar cualquier turno pasado con fecha, monto y detalle de ingresos y egresos.',
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
export default function ArqueoDeCajaPage() {
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
            Funciones, Arqueo de caja
          </p>
          <h1
            className="word-rise mb-6 font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            {'Cerrá el turno con los números que corresponden'.split(' ').map((word, i) => (
              <span key={i} style={{ animationDelay: `${i * 60}ms`, marginRight: '0.22em' }}>
                {word}
              </span>
            ))}
          </h1>
          <p className="mb-8 max-w-[540px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Sin calculadora. Sin cuentas a mano. Sin diferencias que no podés explicar a las 2 de
            la madrugada. El arqueo de Mesanube lleva el control durante todo el turno y te da el
            resumen listo al cierre.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrialButton>Probá 30 días gratis</TrialButton>
            <SoftButton href="#cierre">Ver el cierre de turno</SoftButton>
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-12 w-full">
          <div
            className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
            style={{ aspectRatio: '16/7' }}
          >
            <Image
              src="/figma/hero-mountains.png"
              alt="Arqueo de caja de Mesanube en el panel de administración"
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
                La caja que nunca cierra, y el estrés que genera
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Cerrar el turno y que los números no cierren es una de las sensaciones más
                frustrantes del rubro. Y pasa seguido: el efectivo sobra o falta, no sabés si
                alguien cobró mal, si el cambio se entregó de más, o si simplemente te perdiste un
                pago por transferencia que no registraste.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                En muchos locales, el arqueo es un ritual nocturno de media hora con calculadora,
                papeles y la sensación de que algo se te escapó.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                El arqueo de Mesanube trabaja durante todo el turno, no solo al cierre. Cada pago
                que entra, cada egreso que se registra, va sumando en tiempo real. Cuando llegás al
                cierre, el trabajo ya está hecho.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Qué registra ── */}
        <section
          id="que-registra"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-12">
            <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Qué registra
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Todo lo que entra y sale de caja
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
            <Reveal className="flex flex-col gap-5 border-t border-[#e9e9e9] py-[40px] pr-5 sm:pr-10">
              <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Ingresos
              </p>
              <ul className="flex flex-col gap-3">
                {incomeItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
                  >
                    <span className="mt-[2px] text-[#485c11]" aria-hidden="true">
                      ✓
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal
              delay={1}
              className="flex flex-col gap-5 border-t border-[#e9e9e9] py-[40px] pr-5 sm:pl-10"
            >
              <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Egresos
              </p>
              <ul className="flex flex-col gap-3">
                {expenseItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
                  >
                    <span className="mt-[2px] text-[#485c11]" aria-hidden="true">
                      ✓
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                <strong className="text-black">Al cierre:</strong> el sistema muestra el efectivo
                teórico vs. el efectivo real que contás en caja. La diferencia, si existe, aparece
                marcada. No tenés que hacer el cálculo: ya está hecho.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Cierre de turno ── */}
        <section
          id="cierre"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-12">
            <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Cierre de turno
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Tres pasos, menos de cinco minutos
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

        {/* ── Para el dueño que no siempre está ── */}
        <section className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="flex flex-col gap-6">
              <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Para el dueño que no siempre está
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Control sin estar presente
              </h2>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Si no estás en el local todos los turnos, el arqueo de Mesanube te permite revisar
                el cierre desde tu celular. Ves el historial de cierres, los montos por turno, y si
                hubo diferencias sin tener que preguntarle a nadie.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                No reemplaza la confianza en tu equipo. Pero agrega información donde antes no había
                ninguna.
              </p>
            </Reveal>
            <Reveal
              delay={1}
              className="relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
              style={{ minHeight: '360px' }}
            >
              <Image
                src="/figma/columns.png"
                alt="Historial de arqueos de caja en Mesanube"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
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
                  &ldquo;Antes cerrábamos la caja a las 2 de la mañana y siempre había algo que no
                  cerraba. Ahora en cinco minutos tenemos todo. Y si hay diferencia, el sistema ya
                  te dice dónde mirar.&rdquo;
                </p>
                <footer className="mt-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
                  Claudia M., Bar La Querencia, San Telmo
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
                Cerrá la caja sin estrés. Probalo gratis
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                30 días sin tarjeta de crédito. El arqueo está incluido en todos los planes.
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
