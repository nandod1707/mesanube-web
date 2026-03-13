import React from 'react'

import { MesanubeLogo } from '@/components/Logo/MesanubeLogo'
import { Button } from '@/components/shared/Button'

import styles from './HeroSection.module.css'

export function HeroSection() {
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

        {/* Logo */}
        <div className="text-[var(--warm-white)] mb-10">
          <MesanubeLogo size="lg" />
        </div>

        {/* H1 */}
        <h1
          className="text-[var(--warm-white)] font-medium leading-none tracking-[-0.02em] text-center mx-auto mb-6"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 8.29rem)', maxWidth: '16ch' }}
        >
          El POS que organiza tu restaurante y te ayuda a ganar más
        </h1>

        {/* Subtitle */}
        <p
          className="text-[rgba(255,247,238,0.8)] leading-relaxed text-center mx-auto mb-10"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)', maxWidth: '52ch' }}
        >
          Comanda digital, facturación ARCA y control de caja — diseñado para bares, cafeterías y
          restaurantes argentinos.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Button href="/registro" variant="primary">
            Probá 30 días gratis →
          </Button>
          <Button href="/demo" variant="ghost">
            Agendá una demo →
          </Button>
        </div>

        {/* Social proof */}
        <div className={styles.socialProof}>
          <span aria-label="5 estrellas" role="img">⭐⭐⭐⭐⭐</span>
          <span>
            &quot;No pensé que iba a ser tan fácil&quot; — María G., Cafetería La Calma, Palermo
          </span>
        </div>
      </div>
    </section>
  )
}
