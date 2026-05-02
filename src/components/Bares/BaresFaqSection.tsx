import React from 'react'

import { FaqSection, type FaqItem } from '@/components/shared/FaqSection'

const faqItems: FaqItem[] = [
  {
    q: '¿Cuántos mozos pueden usar la app al mismo tiempo?',
    a: 'Sin límite. Todos pueden trabajar en simultáneo desde sus propios celulares sin interferir entre sí. No hay terminal compartida ni cola de acceso.',
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
  return <FaqSection heading="Lo que más nos preguntan" items={faqItems} />
}
