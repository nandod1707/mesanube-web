import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

export function BaresContextSection() {
  return (
    <Section id="problema" background="cream">
      <Container size="mid">
        <Reveal>
          <p className="eyebrow mb-3">El bar tiene sus propias reglas</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            Rápido, múltiples mozos, propinas, cuentas que se dividen
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-[var(--medium-green)] text-base leading-relaxed mb-4">
            El bar es uno de los ambientes más exigentes para un sistema de gestión. No es un
            restaurante con servicio tranquilo: es una máquina de pedidos continuos, varios mozos
            trabajando en simultáneo, cuentas que se pagan de a partes, y propinas que hay que
            distribuir de alguna forma transparente al final de la noche.
          </p>
          <p className="text-[var(--medium-green)] text-base leading-relaxed">
            Encima está la presión de ARCA: facturar en el momento, sin que el proceso frene la
            operación ni genere una cola en la barra. Los sistemas genéricos no están pensados para
            ese ritmo. Mesanube sí.
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
