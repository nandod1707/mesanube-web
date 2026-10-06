import type { Field } from 'payload'

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

// Slugs are the sync identity (folder/file names in the POS repo), so they are entered explicitly,
// never auto-generated from the title.
export const supportSlugField: Field = {
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: {
    position: 'sidebar',
    description: 'Identidad del sync. No cambiarlo: cambia la URL y crea un documento nuevo.',
  },
  validate: (value: string | null | undefined) =>
    (value && SLUG_PATTERN.test(value)) ||
    'Usá minúsculas, números y guiones (ej. anular-una-factura).',
}

export const SUPPORT_ADMIN_GROUP = 'Soporte'
