'use client'

import React from 'react'

import { Button } from '@/components/shared/Button'
import { TrialButton, DemoButton } from '@/components/shared/CtaButtons'
import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'

import styles from './BaresCtaSection.module.css'

export function BaresCtaSection() {
  return (
    <section id="contacto" className={styles.section}>
      <Container size="narrow">
        <Reveal>
          <h2
            className="text-[var(--warm-white)] font-medium leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            Tu bar se merece un sistema a su altura. Probalo gratis
          </h2>
          <p className="text-[rgba(255,247,238,0.75)] text-base leading-[1.6] mb-10">
            Sin tarjeta de crédito. Sin permanencia. Si querés ver cómo funciona en un bar antes de
            empezar, agendá una demo y te lo mostramos en vivo.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <TrialButton>
              Empezá tu prueba gratuita →
            </TrialButton>
            <DemoButton variant="soft">
              Agendá una demo de 20 minutos →
            </DemoButton>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
