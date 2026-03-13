'use client'

import React, { useEffect, useRef } from 'react'

import styles from './IntroSection.module.css'

const introParagraphs = [
  'Mesanube es el sistema de gestión',
  'pensado para el dueño del restó',
  'que quiere dejar de apagar incendios',
  'y empezar a crecer.',
]

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

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        {/* Left — large wipe-reveal text */}
        <div className={styles.textBlock}>
          {introParagraphs.map((line, i) => (
            <div key={i} className={styles.lineWrapper}>
              <span className={styles.lineText}>{line}</span>
              {/* Wipe overlay — starts covering the text, animates to reveal */}
              <div
                ref={(el) => setLineRef(el, i)}
                className={styles.wipeOverlay}
                // Only the transition-delay is runtime-dynamic — everything else is in CSS
                style={{ transition: `clip-path 0.7s cubic-bezier(0.77, 0, 0.18, 1) ${i * 0.08}s` }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Right — tagline + description */}
        <div className={styles.rightCol}>
          <p className={styles.tagline}>
            <span aria-hidden="true">✾</span>
            Hecho en Argentina, para Argentina
          </p>
          <p className={styles.description}>
            La facturación ARCA no es un add-on ni una integración complicada — está construida
            adentro del sistema desde el día uno. Igual que el resto: comanda, caja, app para mozos
            y reportes. Todo en un lugar, sin necesitar diez apps distintas.
          </p>
        </div>
      </div>
    </section>
  )
}
