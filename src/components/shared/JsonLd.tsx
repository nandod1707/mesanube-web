import React from 'react'

type JsonLdProps = {
  data: Record<string, unknown>
}

/** Renders a schema.org object as an `application/ld+json` script tag. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
       
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
