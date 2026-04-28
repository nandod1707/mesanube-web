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
    q: '¿Cuántos mozos pueden usar la app al mismo tiempo?',
    a: 'Sin límite. Todos pueden trabajar en simultáneo desde sus propios celulares sin interferir entre sí. No hay terminal compartida ni cola de acceso.',
  },
  {
    q: '¿Las propinas digitales requieren una app para el cliente?',
    a: 'No. La gestión de propinas es interna al sistema: el mozo la registra y se distribuye entre el equipo. El cliente no tiene que hacer nada distinto a lo que hace siempre.',
  },
  {
    q: '¿Puedo ver en tiempo real qué mesa está siendo atendida y cuál no?',
    a: 'Sí. El encargado tiene una vista completa del salón: estado de cada mesa, pedidos activos, tiempo de espera desde el último pedido.',
  },
  {
    q: '¿Funciona con impresora de tickets en la barra?',
    a: 'Sí. Mesanube es compatible con impresoras térmicas estándar (58mm y 80mm) vía Bluetooth o WiFi para imprimir comandas, precuentas y facturas en la barra.',
  },
  {
    q: '¿Cómo funciona la facturación ARCA en un bar con muchos clientes?',
    a: 'El comprobante se emite en el mismo flujo de cierre de cuenta, sin pasos adicionales ni salir a otra app. En ambientes de alta rotación como bares, esto es especialmente importante: facturar no frena la operación.',
  },
]

export function BaresFaqSection() {
  return (
    <Section background="pale-cream">
      <Container size="mid">
        <Reveal>
          <p className="eyebrow mb-3">Preguntas frecuentes</p>
          <h2
            className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-10"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
          >
            Lo que más nos preguntan
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
