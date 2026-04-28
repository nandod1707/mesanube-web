'use client'

import React from 'react'

import { Button } from '@/components/shared/Button'
import { TrialButton, DemoButton } from '@/components/shared/CtaButtons'
import { MesanubeLogo } from '@/components/Logo/MesanubeLogo'

import styles from './ArcaHeroSection.module.css'

export function ArcaHeroSection() {
  return (
    <section className={styles.heroOuter}>
      <div className={`clip-squircle ${styles.heroInner}`}>
        {/* Decorative diagonal lines */}
        <svg
          aria-hidden="true"
          className={styles.decorLines}
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-100 600 L500 -50" stroke="white" strokeWidth="1" strokeOpacity="0.08" />
          <path d="M100 700 L700 -50" stroke="white" strokeWidth="1" strokeOpacity="0.06" />
          <path d="M300 800 L900 0" stroke="white" strokeWidth="1" strokeOpacity="0.08" />
          <path d="M600 800 L1200 100" stroke="white" strokeWidth="1" strokeOpacity="0.06" />
          <path d="M900 800 L1400 200" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
        </svg>

        <div className="text-[var(--warm-white)] mb-10">
          <MesanubeLogo size="lg" />
        </div>

        <h1
          className="text-[var(--warm-white)] font-medium leading-none tracking-[-0.02em] text-center mx-auto mb-6"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 8.29rem)', maxWidth: '20ch' }}
        >
          Facturación electrónica ARCA incluida — sin vueltas, sin apps adicionales
        </h1>

        <p
          className="text-[rgba(255,247,238,0.8)] leading-relaxed text-center mx-auto mb-10"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)', maxWidth: '52ch' }}
        >
          Cumplís con ARCA (ex-AFIP) desde el mismo sistema donde tomás el pedido y cerrás la mesa.
          Sin instalar nada más, sin procesos manuales, sin esperar que alguien se acuerde.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <TrialButton>
            Probá 30 días gratis →
          </TrialButton>
          <DemoButton variant="soft">
            Agendá una demo →
          </DemoButton>
        </div>

        <div className={styles.socialProof}>
          <span aria-label="5 estrellas" role="img">
            ⭐⭐⭐⭐⭐
          </span>
          <span>
            &quot;Cada factura sale en el momento, sin que yo tenga que hacer nada especial&quot; —
            Roberto S., Restaurante El Fondito, Boedo
          </span>
        </div>
      </div>
    </section>
  )
}
