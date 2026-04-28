import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

type Comprobante = {
  tipo: string
  label: string
  description: string
  nota?: string
}

const comprobantes: Comprobante[] = [
  {
    tipo: 'B',
    label: 'Factura B',
    description:
      'Para consumidores finales. La más común en el día a día de un restaurante o cafetería.',
  },
  {
    tipo: 'A',
    label: 'Factura A',
    description:
      'Para clientes con CUIT que necesitan discriminar el IVA. Para empresas que comen en tu local.',
  },
  {
    tipo: 'C',
    label: 'Factura C',
    description:
      'Para emisores monotributistas. Si tu local está bajo el régimen simplificado, emitís facturas C.',
  },
  {
    tipo: 'T',
    label: 'Ticket fiscal',
    description:
      'Para la operación rápida de mostrador, cuando el cliente no pide factura. Válido fiscalmente, no requiere datos del comprador.',
  },
  {
    tipo: 'X',
    label: 'Ticket X (remito)',
    description:
      'Para entregas o situaciones donde el comprobante definitivo se emite después.',
    nota: '¿No sabés qué tipo de comprobante usar? Consultá con tu contador o escribinos al soporte.',
  },
]

export function ArcaTiposComprobanteSection() {
  return (
    <Section id="tipos" background="pale-cream">
      <Container>
        <Reveal>
          <p className="eyebrow mb-3">Comprobantes</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-3"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            Tipos de comprobante — cada transacción tiene su documento
          </h2>
          <p className="text-[var(--medium-green)] text-base leading-relaxed mb-12">
            Mesanube está preparado para todos los escenarios fiscales argentinos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {comprobantes.map((c, i) => (
            <Reveal key={c.tipo}>
              <div className="flex flex-col items-start gap-4 border-t border-[var(--pale-green)] py-10 pr-5">
                {/* Badge */}
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--dark-green)] text-[var(--warm-white)] text-sm font-bold leading-none shrink-0"
                  aria-hidden="true"
                >
                  {c.tipo}
                </span>
                <div>
                  <h3 className="text-[var(--dark-green)] text-base font-medium mb-2">{c.label}</h3>
                  <p className="text-[var(--medium-green)] text-[0.9rem] leading-[1.5]">
                    {c.description}
                  </p>
                  {c.nota && (
                    <p className="text-[var(--muted-green)] text-[0.857rem] leading-[1.4] mt-3 italic">
                      {c.nota}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
