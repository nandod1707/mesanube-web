import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

import styles from './BaresTestimonialSection.module.css'

export function BaresTestimonialSection() {
  return (
    <Section background="cream">
      <Container>
        <Reveal>
          <div className={styles.inner}>
            {/* Decorative quote mark */}
            <div className={styles.quoteBlock}>
              <blockquote className={styles.quote}>
                <p className="text-[var(--dark-green)] font-medium leading-[1.4] tracking-[-0.01em] mb-6"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}>
                  &ldquo;Tenemos seis mozos los fines de semana. Antes teníamos una sola tablet y
                  era un caos: uno esperaba que el otro terminara. Ahora cada uno trabaja desde su
                  celular y los pedidos llegan todos a la barra en orden. Mejoró todo: el servicio,
                  el tiempo de espera, y hasta las propinas porque la gente nota que funciona
                  bien.&rdquo;
                </p>
                <footer className="text-[var(--forest-green)] text-[0.857rem] font-medium tracking-[0.04em] uppercase">
                  Juliana M. — Bar El Patio, Chacarita
                </footer>
              </blockquote>
            </div>

            {/* Decorative support callout */}
            <div className={styles.supportBlock}>
              <p className="eyebrow mb-3">Soporte real</p>
              <h3
                className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-4"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
              >
                No hay peor momento para que algo falle que el viernes con el bar lleno
              </h3>
              <p className="text-[var(--medium-green)] text-base leading-relaxed">
                Con Mesanube sabés que si algo sale mal y escribís por WhatsApp, te responde el
                equipo que conoce el sistema de adentro. Sin call center, sin bot, sin &quot;esperá
                al próximo turno disponible&quot;. Gente del rubro que entiende lo que significa
                tener el bar lleno y el sistema parado.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
