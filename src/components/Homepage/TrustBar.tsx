import React from 'react'

import styles from './TrustBar.module.css'

const trustItems = [
  'Facturación ARCA incluida',
  'Sin costos ocultos',
  'Cancelá cuando querés',
  'Soporte por WhatsApp',
]

export function TrustBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {trustItems.map((item) => (
          <span key={item} className={styles.item}>
            <span className={styles.checkIcon} aria-hidden="true">✓</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
