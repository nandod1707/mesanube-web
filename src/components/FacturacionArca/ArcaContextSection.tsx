import React from 'react'

import Reveal from '@/components/shared/Reveal'

export function ArcaContextSection() {
  return (
    <Reveal
      as="section"
      id="como-funciona"
      className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Qué es la facturación ARCA
          </p>
          <h2
            className="font-display text-black"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            La obligación fiscal que muchos locales siguen gestionando mal
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            ARCA (Administración Federal de Ingresos Públicos, anteriormente AFIP) es el organismo
            que regula la emisión de comprobantes fiscales electrónicos en Argentina. Todo negocio
            gastronómico está obligado a emitir facturas electrónicas por cada venta: cafetería,
            bar, restaurante, pizzería.
          </p>
          <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            El problema no es la obligación en sí. Es la forma en que la mayoría de los locales la
            cumple: una app separada del POS, un proceso manual que depende de que alguien se
            acuerde, o una integración frágil que se rompe con cada actualización. El resultado es
            un sistema doble donde la factura cuesta diez minutos y tres pantallas distintas.
          </p>
          <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.09px] text-black">
            Mesanube integra la facturación ARCA en el mismo flujo del POS. No hay sistema doble.
            Cuando cerrás una venta, el comprobante sale solo.
          </p>
        </div>
      </div>
    </Reveal>
  )
}
