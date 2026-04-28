import React from 'react'

import Reveal from '@/components/shared/Reveal'

export function ArcaNativoSection() {
  return (
    <section className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
      <Reveal className="mb-10 lg:mb-12 lg:pr-[400px]">
        <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
          Nativo, no conectado
        </p>
        <h2
          className="font-display text-black"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            lineHeight: 0.9,
            letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
          }}
        >
          La diferencia entre &ldquo;compatible&rdquo; y &ldquo;nativo&rdquo;
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
        <Reveal className="border-t border-[#e9e9e9] pt-8">
          <h3 className="mb-3 text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-[#929292]">
            Compatible con ARCA
          </h3>
          <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Muchas veces significa que hay una integración entre dos sistemas que puede romperse
            con una actualización. La factura implica salir a otra app, un proceso manual, o
            esperar que la sincronización funcione.
          </p>
        </Reveal>

        <Reveal delay={1} className="border-t-2 border-[#485c11] pt-8">
          <h3 className="mb-3 text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
            Facturación ARCA nativa en Mesanube
          </h3>
          <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            La facturación es parte del POS desde su arquitectura. No hay dos sistemas, hay uno
            solo. Cuando cerrás una mesa o una venta en mostrador, la emisión del comprobante
            electrónico es parte del mismo flujo. En dos toques. Sin salir a otra pantalla.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
