import type { Field } from 'payload'

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

// Static routes under /soporte that a section slug must not shadow.
export const RESERVED_SECTION_SLUGS = ['buscar']

// Single source for which screenshots the support center accepts.
export const SUPPORT_IMAGE_TYPES = {
  png: 'image/png',
  webp: 'image/webp',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
} as const
export const SUPPORT_IMAGE_MAX_BYTES = 500 * 1024
// Matches an image file name: lowercase, then one of the accepted extensions.
export const SUPPORT_IMAGE_FILE = `[a-z0-9][a-z0-9._-]*\\.(?:${Object.keys(SUPPORT_IMAGE_TYPES).join('|')})`

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

export const supportSectionSlugField: Field = {
  ...supportSlugField,
  validate: (value: string | null | undefined) => {
    if (value && RESERVED_SECTION_SLUGS.includes(value)) {
      return `"${value}" está reservado para una página de /soporte; elegí otro slug.`
    }
    return (value && SLUG_PATTERN.test(value)) || 'Usá minúsculas, números y guiones (ej. caja).'
  },
} as Field

export const SUPPORT_ADMIN_GROUP = 'Soporte'

// Lowercased, accent-free text so "credito" finds "crédito". Used for the stored search text and
// for the query.
export const normalizeForSearch = (text: string) =>
  text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
