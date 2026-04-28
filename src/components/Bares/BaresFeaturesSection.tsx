import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

type Feature = {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '📱',
    title: 'App para mozos (múltiples en simultáneo)',
    description:
      'Sin límite de usuarios. Cada mozo desde su celular, independiente. Los pedidos llegan consolidados a la barra y cocina.',
  },
  {
    icon: '💰',
    title: 'Propinas digitales con billetera',
    description:
      'Registro transparente por mozo. Sin efectivo que se pierde, sin conflictos al cierre.',
  },
  {
    icon: '÷',
    title: 'División de cuentas',
    description:
      'Por ítem, por monto, por porcentaje. Combinación de medios de pago en una misma mesa.',
  },
  {
    icon: '🧾',
    title: 'Facturación ARCA',
    description:
      'Factura A, B y C en el momento, desde el mismo sistema donde tomaste el pedido.',
  },
  {
    icon: '🖥️',
    title: 'Monitor de cocina',
    description:
      'Los pedidos de cocina llegan a la pantalla en tiempo real. Los tragos que van a la barra quedan en la app del mozo.',
  },
  {
    icon: '📋',
    title: 'Carta QR',
    description:
      'Los clientes ven el menú en su celular. Actualizás los precios y los especiales del día en segundos.',
  },
  {
    icon: '💳',
    title: 'Arqueo multimedios',
    description:
      'Efectivo, tarjeta, transferencia, billeteras: cada uno separado durante todo el turno, resumen al cierre.',
  },
  {
    icon: '⭐',
    title: 'Reseñas en Google',
    description:
      'Después de registrar la propina, la app sugiere al mozo pedirle al cliente una reseña en Google. Impacto directo en tu visibilidad online.',
  },
]

export function BaresFeaturesSection() {
  return (
    <Section background="pale-cream">
      <Container>
        <Reveal>
          <p className="eyebrow mb-3">Funciones</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-12"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            Funciones clave para bares
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((f, i) => (
            <Reveal key={f.title}>
              <div className="flex flex-col items-start gap-3 border-t border-[var(--pale-green)] py-10 pr-5">
                <span className="text-[1.5rem] leading-none" aria-hidden="true">
                  {f.icon}
                </span>
                <h3 className="text-[var(--dark-green)] text-base font-medium leading-[1.2]">
                  {f.title}
                </h3>
                <p className="text-[var(--medium-green)] text-[0.9rem] leading-[1.5] m-0">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
