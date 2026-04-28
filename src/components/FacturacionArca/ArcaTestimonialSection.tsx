import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

import styles from './ArcaTestimonialSection.module.css'

export function ArcaTestimonialSection() {
  return (
    <Section background="cream">
      <Container size="mid">
        <Reveal>
          <div className={styles.inner}>
            <blockquote className={styles.quote}>
              <p
                className="text-[var(--dark-green)] font-medium leading-[1.4] tracking-[-0.01em] mb-6"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}
              >
                &ldquo;El tema de ARCA siempre me generó ansiedad. Antes tenía que acordarme de
                subir las ventas a la aplicación de AFIP al final del día, y alguna vez se me pasó.
                Con Mesanube cada factura sale en el momento, sin que yo tenga que hacer nada
                especial. Eso solo ya valió el cambio.&rdquo;
              </p>
              <footer className="text-[var(--forest-green)] text-[0.857rem] font-medium tracking-[0.04em] uppercase">
                Roberto S. — Restaurante El Fondito, Boedo
              </footer>
            </blockquote>

            <aside className={styles.aside}>
              <p className="eyebrow mb-3">Impresión incluida</p>
              <p className="text-[var(--dark-green)] text-base font-medium leading-[1.3] mb-3">
                Compatible con la impresora que probablemente ya tenés
              </p>
              <p className="text-[var(--medium-green)] text-base leading-relaxed">
                Mesanube es compatible con impresoras térmicas de ticket estándar (58mm y 80mm). No
                necesitás impresora de oficina, no necesitás tóner. Los comprobantes también se
                pueden enviar por email al cliente, sin imprimir nada.
              </p>
            </aside>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
