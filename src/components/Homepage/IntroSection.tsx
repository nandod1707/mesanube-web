'use client'

import React, { useEffect, useRef } from 'react'

export const IntroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const linesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            linesRef.current.forEach((el, i) => {
              if (el) {
                setTimeout(() => {
                  el.style.clipPath = 'inset(0 100% 0 0)'
                }, i * 80)
              }
            })
            if (sectionRef.current) observer.unobserve(sectionRef.current)
          }
        })
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const setLineRef = (el: HTMLDivElement | null, index: number) => {
    if (el) linesRef.current[index] = el
  }

  const introParagraphs = [
    'Mesanube es el sistema de gestión',
    'pensado para el dueño del restó',
    'que quiere dejar de apagar incendios',
    'y empezar a crecer.',
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        padding: 'clamp(4rem, 8vw, 8.571rem) clamp(1rem, 4vw, 3.929rem)',
        background: 'rgb(255, 254, 252)',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left — large wipe-reveal text */}
        <div>
          <div
            style={{
              fontSize: 'clamp(1.6rem, 3.2vw, 3.5rem)',
              fontWeight: 500,
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
              color: 'rgb(36, 52, 29)',
            }}
          >
            {introParagraphs.map((line, i) => (
              <div
                key={i}
                style={{ position: 'relative', overflow: 'hidden', display: 'block' }}
              >
                <span style={{ display: 'block' }}>{line}</span>
                {/* Wipe overlay — starts covering the text, animates to reveal */}
                <div
                  ref={(el) => setLineRef(el, i)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgb(255, 254, 252)',
                    clipPath: 'inset(0 0% 0 0)',
                    transition: `clip-path 0.7s cubic-bezier(0.77, 0, 0.18, 1) ${i * 0.08}s`,
                    pointerEvents: 'none',
                  }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right — tagline + description */}
        <div style={{ paddingTop: 'clamp(0.5rem, 2vw, 2rem)' }}>
          <p
            style={{
              color: 'rgb(92, 125, 79)',
              fontSize: '0.857rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span aria-hidden="true">✾</span>
            Hecho en Argentina, para Argentina
          </p>
          <p
            style={{
              color: 'rgb(73, 87, 67)',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: '1.65',
            }}
          >
            La facturación ARCA no es un add-on ni una integración complicada — está construida
            adentro del sistema desde el día uno. Igual que el resto: comanda, caja, app para mozos
            y reportes. Todo en un lugar, sin necesitar diez apps distintas.
          </p>
        </div>
      </div>
    </section>
  )
}
