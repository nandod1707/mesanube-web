import type { CollectionConfig } from 'payload'

import {
  MetaDescriptionField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { isAdminOrSupportSync } from '@/access/roles'
import { supportEditor } from './editor'
import { revalidateSupport, revalidateSupportDelete } from './hooks/revalidateSupport'
import { SUPPORT_ADMIN_GROUP, supportSlugField } from './shared'

const readOnlySidebar = { position: 'sidebar' as const, readOnly: true }

export const SupportArticles: CollectionConfig<'support-articles'> = {
  slug: 'support-articles',
  labels: { singular: 'Artículo de soporte', plural: 'Artículos de soporte' },
  access: {
    create: isAdminOrSupportSync,
    delete: isAdminOrSupportSync,
    read: authenticatedOrPublished,
    update: isAdminOrSupportSync,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    summary: true,
    section: true,
  },
  admin: {
    group: SUPPORT_ADMIN_GROUP,
    useAsTitle: 'title',
    defaultColumns: ['title', 'section', 'helpfulYes', 'helpfulNo', 'updated'],
    description:
      'Estos artículos se sincronizan desde el repo del POS. Una edición hecha acá se pisa en el próximo sync: corregí el archivo .md en el repo.',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contenido',
          fields: [
            { name: 'summary', type: 'textarea', required: true, maxLength: 160 },
            { name: 'content', type: 'richText', editor: supportEditor, required: true },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({ titlePath: 'meta.title', descriptionPath: 'meta.description' }),
            MetaTitleField({ hasGenerateFn: false }),
            MetaDescriptionField({}),
            PreviewField({ titlePath: 'meta.title', descriptionPath: 'meta.description' }),
          ],
        },
      ],
    },
    supportSlugField,
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'support-sections',
      required: true,
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar', description: 'Orden dentro de la sección. Vacío = al final.' },
    },
    {
      name: 'updated',
      type: 'date',
      required: true,
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
    },
    { name: 'helpfulYes', label: '¿Te sirvió? Sí', type: 'number', defaultValue: 0, admin: readOnlySidebar },
    { name: 'helpfulNo', label: '¿Te sirvió? No', type: 'number', defaultValue: 0, admin: readOnlySidebar },
    // Sync bookkeeping: the original Markdown, its plain text for search, and a hash so unchanged
    // re-syncs are skipped.
    { name: 'sourceMarkdown', type: 'textarea', admin: { hidden: true } },
    { name: 'plainText', type: 'textarea', admin: { hidden: true } },
    { name: 'contentHash', type: 'text', admin: { hidden: true } },
  ],
  hooks: {
    afterChange: [revalidateSupport],
    afterDelete: [revalidateSupportDelete],
  },
  versions: {
    drafts: true,
    maxPerDoc: 20,
  },
}
