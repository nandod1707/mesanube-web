import React from 'react'

import Reveal from '@/components/shared/Reveal'

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
]

export function ArcaTiposComprobanteSection() {
  return (
    <section
      id="tipos"
      className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <Reveal className="mb-10 lg:pr-[400px]">
        <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
          Comprobantes
        </p>
        <h2
          className="mb-5 font-display text-black"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            lineHeight: 0.9,
            letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
          }}
        >
          Cada transacción tiene su documento
        </h2>
        <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
          Mesanube está preparado para emitir estos tipos de comprobante.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {comprobantes.map((c, i) => (
          <Reveal
            key={c.tipo}
            delay={(i % 3) as 0 | 1 | 2}
            className="flex flex-col items-start gap-4 border-t border-[#e9e9e9] py-10 pr-5"
          >
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--dark-green)] text-sm font-bold leading-none text-[var(--warm-white)]"
              aria-hidden="true"
            >
              {c.tipo}
            </span>
            <div>
              <h3 className="mb-2 text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                {c.label}
              </h3>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                {c.description}
              </p>
              {c.nota ? (
                <p className="mt-3 text-[14px] italic leading-[1.4] tracking-[-0.09px] text-[#929292]">
                  {c.nota}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
