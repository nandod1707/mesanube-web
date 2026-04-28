import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

type Step = {
  num: string
  title: string
  body: string
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Configurás tu CUIT y datos fiscales en el sistema',
    body: 'Los datos van una sola vez, en la pantalla de configuración. Nombre del negocio, CUIT, condición ante ARCA.',
  },
  {
    num: '02',
    title: 'Vinculás Mesanube con tu cuenta de ARCA',
    body: 'El proceso usa el sistema de delegación oficial de ARCA, el mismo que usaría tu contador. No le das la contraseña de ARCA a nadie: le das permiso a Mesanube para emitir en tu nombre.',
  },
  {
    num: '03',
    title: 'Probás con una factura de prueba',
    body: 'Antes de abrir, emitís un comprobante de prueba para verificar que todo funciona. Si algo no está bien, soporte te ayuda a resolverlo en el momento.',
  },
  {
    num: '04',
    title: 'Empezás a facturar desde el primer pedido',
    body: 'A partir de ahí, cada venta tiene su comprobante disponible. Cerrás la venta, elegís el tipo de comprobante, y el ticket sale impreso o se manda por email al cliente.',
  },
]

export function ArcaPasoAPasoSection() {
  return (
    <Section background="cream">
      <Container>
        <Reveal>
          <p className="eyebrow mb-3">Configuración</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-3"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            Conectar Mesanube con ARCA lleva menos de 15 minutos
          </h2>
          <p className="text-[var(--medium-green)] text-base leading-relaxed mb-12">
            Paso a paso, sin depender de tu contador para empezar.
          </p>
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
