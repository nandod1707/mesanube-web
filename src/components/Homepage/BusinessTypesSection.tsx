import Link from 'next/link'
import React from 'react'

import { Container } from '@/components/shared/Container'
import { Section } from '@/components/shared/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'

import styles from './BusinessTypesSection.module.css'

type BusinessType = {
  emoji: string
  name: string
  tagline: string
  href: string
}

const businessTypes: BusinessType[] = [
  {
    emoji: '☕',
    name: 'Cafeterías',
    tagline: 'Pedidos rápidos, carta QR y ARCA sin vueltas',
    href: '/para/cafeterias',
  },
  {
    emoji: '🍕',
    name: 'Pizzerías',
    tagline: 'Delivery, mostrador y salón en un solo sistema',
    href: '/para/pizzerias',
  },
  {
    emoji: '🍷',
    name: 'Bares',
    tagline: 'Comanda ágil para múltiples mozos y mesas',
    href: '/para/bares',
  },
  {
    emoji: '🥩',
    name: 'Parrillas y restaurantes',
    tagline: 'Control completo de sala y cocina',
    href: '/para/parrillas',
  },
  {
    emoji: '🏢',
    name: 'Cadenas multilocal',
    tagline: 'Control centralizado de múltiples sucursales',
    href: '/para/cadenas-multilocal',
  },
]

export function BusinessTypesSection() {
  return (
    <Section background="cream">
      <Container>
        <SectionHeading
          eyebrow="Tipos de negocio"
          heading="Pensado para cada tipo de negocio gastronómico"
          description="Mesanube se adapta al ritmo de tu local, sea una cafetería con 3 mesas o una cadena con varios locales."
        />

        <div className={`${styles.cardGrid} mt-[3.214rem]`}>
          {businessTypes.map((type) => (
            <Link key={type.href} href={type.href} className={styles.card}>
              <span className="text-[2rem] block mb-3" aria-hidden="true">
                {type.emoji}
              </span>
              <h3 className="text-[var(--dark-green)] text-base font-medium mb-1.5">
                {type.name}
              </h3>
              <p className="text-[var(--medium-green)] text-[0.857rem] leading-[1.4] m-0">
                {type.tagline}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
