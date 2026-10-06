import type { CollectionConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { isAdminOrSupportSync } from '@/access/roles'
import { revalidateSupport, revalidateSupportDelete } from './hooks/revalidateSupport'
import {
  DEFAULT_SECTION_ICON,
  SUPPORT_ADMIN_GROUP,
  SUPPORT_SECTION_ICONS,
  supportSectionSlugField,
} from './shared'

export const SupportSections: CollectionConfig<'support-sections'> = {
  slug: 'support-sections',
  labels: { singular: 'Sección de soporte', plural: 'Secciones de soporte' },
  access: {
    create: isAdminOrSupportSync,
    delete: isAdminOrSupportSync,
    read: anyone,
    update: isAdminOrSupportSync,
  },
  defaultSort: 'order',
  admin: {
    group: SUPPORT_ADMIN_GROUP,
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'order'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    supportSectionSlugField,
    { name: 'description', type: 'textarea', required: true },
    {
      name: 'icon',
      type: 'select',
      defaultValue: DEFAULT_SECTION_ICON,
      options: SUPPORT_SECTION_ICONS.map((icon) => ({ label: icon, value: icon })),
      admin: { position: 'sidebar', description: 'Ícono de la tarjeta en la portada de /soporte.' },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 100,
      admin: { position: 'sidebar', description: 'Posición en la portada de /soporte (1 = primera).' },
    },
  ],
  hooks: {
    afterChange: [revalidateSupport],
    afterDelete: [revalidateSupportDelete],
  },
}
