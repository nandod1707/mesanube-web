import React from 'react'

import Reveal from '@/components/shared/Reveal'

export function ArcaTestimonialSection() {
  return (
    <Reveal
      as="section"
      className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <blockquote className="flex flex-col justify-center gap-6">
          <p
            className="font-display text-black"
            style={{
              fontSize: 'clamp(24px, 3vw, 40px)',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
            }}
          >
            &ldquo;El tema de ARCA siempre me generó ansiedad. Antes tenía que acordarme de subir
            las ventas a la aplicación de AFIP al final del día, y alguna vez se me pasó. Con
            Mesanube cada factura sale en el momento, sin que yo tenga que hacer nada especial.
            Eso solo ya valió el cambio.&rdquo;
          </p>
          <footer className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
            — Roberto S., Restaurante El Fondito, Boedo
          </footer>
        </blockquote>

        <aside className="flex flex-col gap-4 border-l-2 border-[#e9e9e9] pl-8">
          <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Impresión incluida
          </p>
          <h3 className="text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
            Compatible con la impresora que probablemente ya tenés
          </h3>
          <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Mesanube es compatible con impresoras térmicas de ticket estándar (58mm y 80mm). No
            necesitás impresora de oficina, no necesitás tóner. Los comprobantes también se pueden
            enviar por email al cliente, sin imprimir nada.
          </p>
        </aside>
      </div>
    </Reveal>
  )
}
