'use client'

import React from 'react'

import { Button } from '@/components/shared/Button'
import { Container } from '@/components/shared/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'

import styles from './ComingSoonSection.module.css'

export function ComingSoonSection() {
  return (
    <section className={styles.section}>
      {/* Decorative image placeholders */}
      <div aria-hidden="true" className={`clip-squircle ${styles.decorLeft}`} />
      <div aria-hidden="true" className={`clip-squircle ${styles.decorRight}`} />

      <Container size="narrow" className="relative z-[1]">
        {/* Rotating badge */}
        <div className={`${styles.badge} animate-rotate`} aria-hidden="true">
          <svg viewBox="0 0 100 100" width="5.79rem" height="5.79rem" style={{ borderRadius: '50%' }}>
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text
              fontSize="10.5"
              fill="rgb(255, 190, 13)"
              fontFamily="DM Sans, sans-serif"
              fontWeight="500"
              letterSpacing="1.5"
            >
              <textPath href="#circle">COMING SOON · COMING SOON · </textPath>
            </text>
          </svg>
        </div>

        <SectionHeading
          eyebrow="Próximamente"
          heading="El primer POS argentino que hace que tus clientes vuelvan solos"
          description="Estamos construyendo el primer módulo de fidelización con gamificación para restaurantes argentinos. Puntos, recompensas y desafíos, todo integrado con tu POS."
          align="center"
        />

        <div className="mt-8">
          <Button href="/funciones/fidelizacion" variant="dark">
            Quiero acceso anticipado →
          </Button>
        </div>
      </Container>
    </section>
  )
}
