'use client'

import { useRowLabel } from '@payloadcms/ui'

/** Shows the question as the collapsed row title in the admin. */
export const FaqRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ question?: string }>()
  return <span>{data?.question || `Pregunta ${(rowNumber ?? 0) + 1}`}</span>
}
