import type { CollectionConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { isAdminOrSupportSync } from '@/access/roles'
import { revalidateSupport, revalidateSupportDelete } from './hooks/revalidateSupport'
import { SUPPORT_ADMIN_GROUP, supportSectionSlugField } from './shared'

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
