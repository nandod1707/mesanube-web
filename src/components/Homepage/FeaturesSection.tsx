import Link from 'next/link'
import React from 'react'

import { Container } from '@/components/shared/Container'
import { Section } from '@/components/shared/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'

import styles from './FeaturesSection.module.css'

type Feature = {
  icon: string
  title: string
  description: string
  href: string
}

const features: Feature[] = [
  {
    icon: '🖥️',
    title: 'Comanda digital',
    description: 'Tomá pedidos desde cualquier dispositivo, enviá directo a cocina',
    href: '/funciones/comanda-digital',
  },
  {
    icon: '📊',
    title: 'Arqueo de caja',
    description: 'Cerrá cada turno con control total del efectivo',
    href: '/funciones/arqueo-de-caja',
  },
  {
    icon: '📱',
    title: 'App para mozos',
    description: 'Pedidos y cuentas desde el celular del mozo',
    href: '/funciones/app-para-mozos',
  },
  {
    icon: '📋',
    title: 'Carta QR',
    description: 'Menú digital que tus clientes escanean en la mesa',
    href: '/funciones/carta-qr',
  },
  {
    icon: '🍳',
    title: 'Monitor de cocina',
    description: 'Los pedidos llegan solos, sin papel ni gritos',
    href: '/funciones/monitor-de-cocina',
  },
  {
    icon: '📈',
    title: 'Reportes',
    description: 'Vendido por día, producto, turno y medio de pago',
    href: '/funciones/reportes-y-analitica',
  },
]

export function FeaturesSection() {
  return (
    <Section background="pale-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] gap-12">
          {/* Left sticky panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              eyebrow="Funciones"
              heading="Todo lo que necesitás para gestionar tu local"
              description="Desde que abrís hasta que cerrás la caja, Mesanube te cubre."
            />
            <div className="mt-6">
              <Link
                href="/funciones"
                className={styles.arrowButton}
                aria-label="Ver todas las funciones"
              >
                →
              </Link>
            </div>
          </div>

          {/* Right scrolling cards */}
          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <Link key={feature.href} href={feature.href} className={styles.featureCard}>
                <span
                  className="text-[1.5rem] shrink-0 leading-none mt-[0.1rem]"
                  aria-hidden="true"
                >
                  {feature.icon}
                </span>
                <div>
                  <h3 className="text-[var(--dark-green)] text-base font-medium mb-[0.3rem]">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--medium-green)] text-[0.9rem] leading-[1.4] m-0">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
