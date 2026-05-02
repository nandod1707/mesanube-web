import Link from 'next/link'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'

const included = [
  'App para mozos sin límite de usuarios',
  'División de cuentas y multimedios de pago',
  'Monitor de cocina (KDS)',
  'Facturación ARCA (facturas A, B y C)',
  'Carta QR actualizable',
  'Arqueo de caja por turno',
  'Reportes completos',
]

export function BaresPricingSection() {
  return (
    <section
      id="precios"
      className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
        <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
          Precio
        </p>
        <h2
          className="w-full font-display text-black"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            lineHeight: 0.9,
            letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
          }}
        >
          Plan Avanzado — para bares que no paran
        </h2>
        <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
          Para bares con múltiples mozos: app para todo el equipo de salón, división de cuentas,
          comanda ágil, facturación ARCA y reportes. Todo incluido.
        </p>
      </Reveal>

      <div className="flex w-full justify-center">
        <Reveal
          delay={1}
          className="relative flex w-full max-w-[28rem] flex-col items-start gap-6 rounded-[20px] border border-[var(--dark-green)] bg-[var(--dark-green)] p-8"
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
              30 días gratis. Sin tarjeta de crédito, sin compromiso.
            </p>
          </div>
          <ul className="flex w-full flex-col gap-3">
            {included.map((item) => (
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
          <TrialButton className="w-full">Empezar gratis →</TrialButton>
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
  )
}
