import type { CollectionConfig } from 'payload'

import { isAdmin } from '@/access/roles'
import { SUPPORT_ADMIN_GROUP } from './shared'

// "¿Te sirvió?" tallies, one document per article. Kept out of support-articles so publishing a
// version (sync or admin) can never overwrite the counts with a stale snapshot. Only the public vote
// endpoint writes here, with an atomic increment.
export const SupportFeedback: CollectionConfig<'support-feedback'> = {
  slug: 'support-feedback',
  labels: { singular: 'Voto de soporte', plural: '¿Te sirvió? (votos)' },
  access: {
    create: () => false,
    delete: isAdmin,
    read: isAdmin,
    update: () => false,
  },
  admin: {
    group: SUPPORT_ADMIN_GROUP,
    useAsTitle: 'article',
    defaultColumns: ['article', 'helpfulYes', 'helpfulNo', 'updatedAt'],
  },
  defaultSort: '-helpfulNo',
  fields: [
    {
      name: 'article',
      type: 'relationship',
      relationTo: 'support-articles',
      required: true,
      unique: true,
      index: true,
    },
    { name: 'helpfulYes', label: 'Sí', type: 'number', defaultValue: 0, admin: { readOnly: true } },
    { name: 'helpfulNo', label: 'No', type: 'number', defaultValue: 0, admin: { readOnly: true } },
  ],
  timestamps: true,
}
