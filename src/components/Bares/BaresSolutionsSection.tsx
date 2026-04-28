import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

type Solution = {
  title: string
  body: React.ReactNode
}

const solutions: Solution[] = [
  {
    title: 'Comandas simultáneas de múltiples mozos',
    body: (
      <>
        Cada mozo trabaja desde su celular. Los pedidos llegan a la barra y a la cocina en tiempo
        real, en orden, sin que nadie espere que el otro mozo libere la terminal.{' '}
        <br className="hidden sm:block" />
        No hay cuello de botella. No hay &quot;esperá que estoy usando la comanda&quot;. Cada uno
        trabaja independiente y el sistema consolida todo.
      </>
    ),
  },
  {
    title: 'Las propinas que siempre generan conflicto',
    body: (
      <>
        En los bares la propina es parte del sueldo emocional del equipo. Y si no hay un sistema
        claro, la distribución genera tensión. Mesanube tiene billetera digital para propinas: cada
        propina queda registrada, asociada al mozo, visible para el encargado. Sin discusiones, sin
        efectivo que desaparece.
      </>
    ),
  },
  {
    title: 'Las cuentas que se dividen',
    body: (
      <>
        Una mesa de ocho personas que quieren pagar por separado. Un grupo que paga parte en
        efectivo y parte en tarjeta. Son situaciones normales en cualquier bar. En Mesanube podés
        dividir la cuenta, asignar ítems a cada comensal y combinar medios de pago, sin retrabajo
        ni malabarismo.
      </>
    ),
  },
  {
    title: 'El cierre de caja que refleja la realidad',
    body: (
      <>
        Los bares manejan más medios de pago que los restaurantes: efectivo, tarjeta,
        transferencia, billeteras digitales. El arqueo de Mesanube los registra todos por separado
        durante todo el turno. Al cierre, el resumen ya está armado.
      </>
    ),
  },
]

export function BaresSolutionsSection() {
  return (
    <Section id="funciones" background="pale-cream">
      <Container>
        <Reveal>
          <p className="eyebrow mb-3">Velocidad sin caos</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-12"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            Qué resuelve Mesanube en tu bar
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {solutions.map((s, i) => (
            <Reveal key={s.title}>
              <div className="flex flex-col items-start gap-4 border-t border-[var(--pale-green)] py-10 pr-5">
                <h3
                  className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.01em]"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}
                >
                  {s.title}
                </h3>
                <p className="text-[var(--medium-green)] text-base leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
