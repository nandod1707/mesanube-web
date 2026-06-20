import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/shared/Button'
import { Container } from '@/components/shared/Container'
import { PLAN_BASIC, PLAN_ADVANCED } from '@/components/shared/PricingCards'
import { Section } from '@/components/shared/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'

import styles from './PricingSection.module.css'

const basicFeatures = ['Pedidos digitales', 'Carta QR', 'Facturación ARCA', 'Arqueo de caja']

const advancedFeatures = [
  'Todo el plan Básico',
  'App para mozos',
  'Monitor de cocina (KDS)',
  'Control de stock',
  'Reportes avanzados',
]

export function PricingSection() {
  return (
    <Section background="cream">
      <Container size="mid">
        <SectionHeading
          eyebrow="Precios"
          heading="Precios transparentes y simples"
          description={`Elegí el plan que se adapta a tu local. Todos incluyen prueba gratuita de ${process.env.NEXT_PUBLIC_TRIAL_PERIOD}.`}
        />

        <div className={`${styles.grid} mt-12`}>
          {/* Básico */}
          <div className={styles.cardLight}>
            <p className="text-[var(--medium-green)] text-[0.857rem] font-medium uppercase tracking-[0.06em] mb-2">
              Básico
            </p>
            <p
              className="text-[var(--dark-green)] font-bold tracking-[-0.02em] leading-none mb-1"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              {PLAN_BASIC.price}
              <span className="text-base font-normal text-[var(--medium-green)]">/mes</span>
            </p>
            <p className="text-[var(--medium-green)] text-[0.857rem] mb-6">
              Perfecto para cafeterías pequeñas
            </p>
            <ul className={styles.featureList}>
              {basicFeatures.map((item) => (
                <li key={item} className={`${styles.featureItem} text-[var(--medium-green)]`}>
                  <span className={styles.checkLight}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/registro" variant="dark" className={`${styles.cardButton} justify-center`}>
              Empezar gratis
            </Button>
          </div>

          {/* Avanzado */}
          <div className={styles.cardDark}>
            <span className={styles.popularBadge}>Más popular</span>
            <p className="text-[rgba(255,247,238,0.7)] text-[0.857rem] font-medium uppercase tracking-[0.06em] mb-2">
              Avanzado
            </p>
            <p
              className="text-[var(--warm-white)] font-bold tracking-[-0.02em] leading-none mb-1"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              {PLAN_ADVANCED.price}
              <span className="text-base font-normal text-[rgba(255,247,238,0.6)]">/mes</span>
            </p>
            <p className="text-[rgba(255,247,238,0.7)] text-[0.857rem] mb-6">
              Para bares y restaurantes
            </p>
            <ul className={styles.featureList}>
              {advancedFeatures.map((item) => (
                <li key={item} className={`${styles.featureItem} text-[var(--warm-white)]`}>
                  <span className={styles.checkDark}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/registro" variant="primary" className={`${styles.cardButton} justify-center`}>
              Empezar gratis
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/precios"
            className="text-[var(--forest-green)] text-[0.9rem] font-medium underline underline-offset-[3px] hover:text-[var(--dark-green)] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--forest-green)] focus-visible:outline-offset-2"
          >
            Ver todos los planes y comparar →
          </Link>
        </div>
      </Container>
    </Section>
  )
}
