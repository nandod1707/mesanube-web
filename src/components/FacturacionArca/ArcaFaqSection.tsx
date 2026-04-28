import React from 'react'

import { Container } from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { Section } from '@/components/shared/Section'

type FaqItem = {
  q: string
  a: string
}

const faqItems: FaqItem[] = [
  {
    q: '¿Qué es ARCA y cómo afecta a los restaurantes en Argentina?',
    a: 'ARCA (antes AFIP) es el organismo tributario argentino que exige la emisión de comprobantes electrónicos en cada venta. Para restaurantes, cafeterías y bares, esto significa que cada consumición debe generar una factura B, A o C según la condición del cliente. En Mesanube, este proceso está integrado en el POS, no requiere una app aparte.',
  },
  {
    q: '¿Qué diferencia hay entre AFIP y ARCA?',
    a: 'ARCA es el nuevo nombre de AFIP desde 2024. La normativa de facturación electrónica y los sistemas de emisión de comprobantes son los mismos, solo cambió el nombre del organismo. En Mesanube la documentación y el sistema usan el nombre actual (ARCA), pero si buscaste "facturación AFIP para restaurantes", llegaste al lugar correcto.',
  },
  {
    q: '¿Qué pasa si soy monotributista?',
    a: 'Podés emitir facturas C desde Mesanube. El sistema detecta tu condición tributaria cuando configurás los datos fiscales y te muestra los tipos de comprobante disponibles.',
  },
  {
    q: '¿Necesito que mi contador configure algo?',
    a: 'La vinculación con ARCA la podés hacer vos solo siguiendo el paso a paso. Si preferís que lo haga tu contador, también puede. En cualquier caso, el soporte de Mesanube está disponible para acompañarte en ese proceso.',
  },
  {
    q: '¿Qué pasa si ARCA tiene un problema técnico?',
    a: 'ARCA tiene sus propias caídas ocasionales, independientemente del sistema que uses. En esos casos, el comprobante queda en estado pendiente y se emite automáticamente cuando el servicio de ARCA vuelve. La venta ya se registró, no perdés nada.',
  },
  {
    q: '¿Las facturas se guardan en el sistema?',
    a: 'Sí. Todos los comprobantes emitidos quedan en el historial de Mesanube. Podés consultar cualquier factura por fecha, por número de comprobante, o por CUIT del cliente.',
  },
  {
    q: '¿Tiene algún costo adicional la facturación ARCA?',
    a: 'No. Está incluida en todos los planes de Mesanube, desde el Plan Básico ($19.000/mes). Sin módulo de facturación separado, sin costo por comprobante.',
  },
  {
    q: '¿Funciona si cambia la normativa de ARCA?',
    a: 'Las actualizaciones de normativa ARCA se reflejan en el sistema. Es responsabilidad de Mesanube mantener la compatibilidad, no la tuya.',
  },
]

export function ArcaFaqSection() {
  return (
    <Section id="faq" background="cream">
      <Container size="mid">
        <Reveal>
          <p className="eyebrow mb-3">Preguntas frecuentes</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-10"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            Todo lo que necesitás saber sobre ARCA y Mesanube
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {faqItems.map((item, i) => (
            <Reveal key={item.q}>
              <div className="border-t border-[var(--pale-green)] py-5">
                <h3 className="text-[var(--dark-green)] text-base font-medium mb-2">{item.q}</h3>
                <p className="text-[var(--medium-green)] text-base leading-relaxed">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
