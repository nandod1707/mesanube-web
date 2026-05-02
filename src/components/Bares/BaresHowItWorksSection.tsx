import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

type Step = {
  num: string
  time: string
  title: string
  body: string
}

const steps: Step[] = [
  {
    num: '01',
    time: 'Antes de abrir',
    title: 'El menú listo en dos minutos',
    body: 'Cargás el menú de la noche. Si hay especiales del día, los sumás en dos minutos. Los QR ya están activos en las mesas.',
  },
  {
    num: '02',
    time: 'Durante el servicio',
    title: 'Cada mozo trabaja desde su celular',
    body: 'Toma el pedido, lo manda a la barra o a la cocina según corresponda, ve el estado de sus mesas, saca la precuenta cuando la piden. El encargado ve el panorama completo del salón en su pantalla.',
  },
  {
    num: '03',
    time: 'Al pagar',
    title: 'Cuenta lista, factura emitida',
    body: 'La cuenta está lista. Se divide si es necesario. La factura con ARCA sale en el momento, sin pasar por otra app.',
  },
  {
    num: '04',
    time: 'Al cierre',
    title: 'Los números del día en pantalla',
    body: 'El arqueo está armado con el detalle de todo lo que entró y salió. Sin calculadora, sin reconstruir nada de memoria.',
  },
]

export function BaresHowItWorksSection() {
  return (
    <Section background="cream">
      <Container>
        <Reveal>
          <p className="eyebrow mb-3">Paso a paso</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-12"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            Cómo funciona en tu bar — del primer cliente hasta el último pedido
          </h2>
        </Reveal>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <Reveal key={step.num}>
              <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[5rem_1fr] gap-6 border-t border-[var(--pale-green)] pt-10 pb-10">
                <span
                  className="text-[var(--muted-green)] font-medium leading-none select-none"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <div>
                  <p className="eyebrow mb-2">{step.time}</p>
                  <h3
                    className="text-[var(--dark-green)] font-medium leading-[1.15] tracking-[-0.01em] mb-3"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[var(--medium-green)] text-base leading-relaxed">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
