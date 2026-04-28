'use client'

import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/shared/Button'
import { TrialButton } from '@/components/shared/CtaButtons'
import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

const included = [
  'App para mozos sin límite de usuarios',
  'Propinas digitales con billetera',
  'División de cuentas y multimedios de pago',
  'Monitor de cocina (KDS)',
  'Facturación ARCA (facturas A, B y C)',
  'Carta QR actualizable',
  'Arqueo de caja por turno',
  'Reportes completos',
]

export function BaresPricingSection() {
  return (
    <Section id="precios" background="cream">
      <Container size="mid">
        <Reveal>
          <p className="eyebrow mb-3">Precio</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            Plan Avanzado — para bares que no paran
          </h2>
          <p className="text-[var(--medium-green)] text-base leading-relaxed mb-10">
            Para bares con múltiples mozos: app para todo el equipo de salón, propinas digitales,
            comanda ágil, facturación ARCA y reportes. Todo incluido.
          </p>
        </Reveal>

        <Reveal>
          <div className="border border-[var(--pale-green)] rounded-[1.25rem] p-8 max-w-[28rem]">
            <p className="text-[var(--medium-green)] text-[0.857rem] font-medium uppercase tracking-[0.06em] mb-2">
              Avanzado
            </p>
            <p
              className="text-[var(--dark-green)] font-bold tracking-[-0.02em] leading-none mb-1"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              $34.000
              <span className="text-base font-normal text-[var(--medium-green)]">/mes</span>
            </p>
            <p className="text-[var(--medium-green)] text-[0.857rem] mb-6">
              30 días gratis. Sin tarjeta de crédito, sin compromiso.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[var(--medium-green)] text-sm">
                  <span className="text-[var(--forest-green)] font-medium shrink-0 mt-[0.1rem]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <TrialButton className="w-full justify-center">
              Empezar gratis →
            </TrialButton>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-6">
            <Link
              href="/precios"
              className="text-[var(--forest-green)] text-[0.9rem] font-medium underline underline-offset-[3px] hover:text-[var(--dark-green)] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--forest-green)] focus-visible:outline-offset-2"
            >
              Ver todos los planes →
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
