'use client'

import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/shared/Button'
import { TrialButton } from '@/components/shared/CtaButtons'
import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

const basicFeatures = [
  'Facturación ARCA nativa (A, B y C)',
  'Comanda digital',
  'Carta QR',
  'Arqueo de caja',
]

const advancedFeatures = [
  'Todo lo del Plan Básico',
  'App para mozos (sin límite de usuarios)',
  'Monitor de cocina (KDS)',
  'Control de stock',
  'Propinas digitales',
  'Reportes avanzados',
]

export function ArcaPricingSection() {
  return (
    <Section background="pale-cream">
      <Container size="mid">
        <Reveal>
          <p className="eyebrow mb-3">Precios</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            La facturación ARCA está incluida en todos los planes
          </h2>
          <p className="text-[var(--medium-green)] text-base leading-relaxed mb-10">
            Sin módulo de facturación separado. Sin costo por comprobante. Sin sorpresas.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Básico */}
            <div className="border border-[var(--pale-green)] rounded-[1.25rem] p-8">
              <p className="text-[var(--medium-green)] text-[0.857rem] font-medium uppercase tracking-[0.06em] mb-2">
                Básico
              </p>
              <p
                className="text-[var(--dark-green)] font-bold tracking-[-0.02em] leading-none mb-1"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                $19.000
                <span className="text-base font-normal text-[var(--medium-green)]">/mes</span>
              </p>
              <p className="text-[var(--medium-green)] text-[0.857rem] mb-6">
                Para cafeterías y mostrador
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {basicFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[var(--medium-green)] text-sm">
                    <span className="text-[var(--forest-green)] font-medium shrink-0 mt-[0.1rem]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <TrialButton className="w-full justify-center">
                Empezar gratis
              </TrialButton>
            </div>

            {/* Avanzado */}
            <div className="border border-[var(--dark-green)] rounded-[1.25rem] p-8 bg-[var(--dark-green)]">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[rgba(255,247,238,0.7)] text-[0.857rem] font-medium uppercase tracking-[0.06em]">
                  Avanzado
                </p>
                <span className="text-[var(--yellow)] text-[0.75rem] font-medium uppercase tracking-[0.06em]">
                  Más popular
                </span>
              </div>
              <p
                className="text-[var(--warm-white)] font-bold tracking-[-0.02em] leading-none mb-1"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                $34.000
                <span className="text-base font-normal text-[rgba(255,247,238,0.6)]">/mes</span>
              </p>
              <p className="text-[rgba(255,247,238,0.7)] text-[0.857rem] mb-6">
                Para bares y restaurantes
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {advancedFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[var(--warm-white)] text-sm">
                    <span className="text-[var(--yellow)] font-medium shrink-0 mt-[0.1rem]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <TrialButton className="w-full justify-center">
                Empezar gratis
              </TrialButton>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <Link
              href="/precios"
              className="text-[var(--forest-green)] text-[0.9rem] font-medium underline underline-offset-[3px] hover:text-[var(--dark-green)] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--forest-green)] focus-visible:outline-offset-2"
            >
              Ver todos los planes y comparar →
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
