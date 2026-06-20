import React from 'react'

import { Button } from '@/components/shared/Button'
import { Container } from '@/components/shared/Container'

import styles from './CtaFinalSection.module.css'

export function CtaFinalSection() {
  return (
    <section className={styles.section}>
      <Container size="narrow">
        <h2
          className="text-[var(--warm-white)] font-medium leading-[1.1] tracking-[-0.02em] mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
        >
          ¿Listo para que ningún pedido se vuelva a perder?
        </h2>

        <p className="text-[rgba(255,247,238,0.75)] text-base leading-[1.6] mb-10">
          Probá Mesanube gratis por {process.env.NEXT_PUBLIC_TRIAL_PERIOD}. Sin tarjeta de crédito. Sin permanencia. Sin
          complicaciones.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/registro" variant="primary">
            Empezá tu prueba gratuita →
          </Button>
          <Button href="/demo" variant="ghost">
            O agendá una demo de 20 minutos →
          </Button>
        </div>
      </Container>
    </section>
  )
}
