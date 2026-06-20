import React from 'react'

import { Button } from '@/components/shared/Button'
import { Container } from '@/components/shared/Container'
import { Section } from '@/components/shared/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'

import styles from './ArcaSection.module.css'

export function ArcaSection() {
  return (
    <Section background="cream">
      <Container>
        <div className={styles.relative}>
          {/* Decorative panels */}
          <div aria-hidden="true" className={styles.decorLeft} />
          <div aria-hidden="true" className={styles.decorRight} />

          {/* Foreground card */}
          <div className={`${styles.card} mx-auto`} style={{ maxWidth: 'var(--container-max-narrow)' }}>
            <SectionHeading
              eyebrow="Diferencial Mesanube"
              heading="Facturación electrónica ARCA, ya incluida en tu POS"
              description="En Mesanube no tenés que instalar ninguna app extra para cumplir con ARCA. Emitís facturas A, B y C directamente desde tu POS, con impresión en ticket térmico. Sin complicaciones con el contador."
            />
            <div className="mt-7">
              <Button href="/funciones/facturacion-electronica-arca" variant="primary">
                Ver cómo funciona →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
