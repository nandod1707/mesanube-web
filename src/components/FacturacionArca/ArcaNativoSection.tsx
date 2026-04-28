import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

export function ArcaNativoSection() {
  return (
    <Section background="pale-cream">
      <Container size="mid">
        <Reveal>
          <p className="eyebrow mb-3">Nativo, no conectado</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            La diferencia entre &ldquo;compatible&rdquo; y &ldquo;nativo&rdquo;
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-t border-[var(--pale-green)] pt-8">
              <h3 className="text-[var(--muted-green)] text-base font-medium mb-3">
                Compatible con ARCA
              </h3>
              <p className="text-[var(--medium-green)] text-base leading-relaxed">
                Muchas veces significa que hay una integración entre dos sistemas que puede romperse
                con una actualización. La factura implica salir a otra app, un proceso manual, o
                esperar que la sincronización funcione.
              </p>
            </div>

            <div className="border-t-2 border-[var(--forest-green)] pt-8">
              <h3 className="text-[var(--dark-green)] text-base font-medium mb-3">
                Facturación ARCA nativa en Mesanube
              </h3>
              <p className="text-[var(--medium-green)] text-base leading-relaxed">
                La facturación es parte del POS desde su arquitectura. No hay dos sistemas, hay uno
                solo. Cuando cerrás una mesa o una venta en mostrador, la emisión del comprobante
                electrónico es parte del mismo flujo. En dos toques. Sin salir a otra pantalla.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
