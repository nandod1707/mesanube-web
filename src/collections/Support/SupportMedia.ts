import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

import { anyone } from '@/access/anyone'
import { isAdminOrSupportSync } from '@/access/roles'
import { SUPPORT_ADMIN_GROUP, SUPPORT_IMAGE_TYPES } from './shared'

const dirname = path.dirname(fileURLToPath(import.meta.url))

// Screenshots for support articles. Kept apart from `media` so the sync user never touches blog
// images. `key` (<section>/<filename>) is the sync identity; `sha256` lets re-syncs skip unchanged files.
export const SupportMedia: CollectionConfig<'support-media'> = {
  slug: 'support-media',
  labels: { singular: 'Imagen de soporte', plural: 'Imágenes de soporte' },
  access: {
    create: isAdminOrSupportSync,
    delete: isAdminOrSupportSync,
    read: anyone,
    update: isAdminOrSupportSync,
  },
  admin: {
    group: SUPPORT_ADMIN_GROUP,
    useAsTitle: 'key',
    defaultColumns: ['filename', 'key', 'updatedAt'],
  },
  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: '<seccion>/<archivo>, tal como está en el repo del POS.' },
    },
    { name: 'alt', type: 'text' },
    { name: 'sha256', type: 'text', index: true, admin: { readOnly: true } },
  ],
  upload: {
    staticDir: path.resolve(dirname, '../../../public/support-media'),
    mimeTypes: [...new Set(Object.values(SUPPORT_IMAGE_TYPES))],
    adminThumbnail: 'thumbnail',
    imageSizes: [{ name: 'thumbnail', width: 300 }],
  },
}
