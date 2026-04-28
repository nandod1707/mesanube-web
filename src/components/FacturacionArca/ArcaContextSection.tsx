import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

export function ArcaContextSection() {
  return (
    <Section id="como-funciona" background="cream">
      <Container size="mid">
        <Reveal>
          <p className="eyebrow mb-3">Qué es la facturación ARCA</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            La obligación fiscal que muchos locales siguen gestionando mal
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-[var(--medium-green)] text-base leading-relaxed mb-4">
            ARCA (Administración Federal de Ingresos Públicos, anteriormente AFIP) es el organismo
            que regula la emisión de comprobantes fiscales electrónicos en Argentina. Todo negocio
            gastronómico está obligado a emitir facturas electrónicas por cada venta: cafetería,
            bar, restaurante, pizzería.
          </p>
          <p className="text-[var(--medium-green)] text-base leading-relaxed mb-4">
            El problema no es la obligación en sí. Es la forma en que la mayoría de los locales la
            cumple: una app separada del POS, un proceso manual que depende de que alguien se
            acuerde, o una integración frágil que se rompe con cada actualización. El resultado es
            un sistema doble donde la factura cuesta diez minutos y tres pantallas distintas.
          </p>
          <p className="text-[var(--dark-green)] text-base leading-relaxed font-medium">
            Mesanube integra la facturación ARCA en el mismo flujo del POS. No hay sistema doble.
            Cuando cerrás una venta, el comprobante sale solo.
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
