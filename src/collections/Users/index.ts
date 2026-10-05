import type { CollectionConfig } from 'payload'

import { isAdmin, roleOf } from '@/access/roles'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    // The support-sync integration user authenticates by API key only; it never uses the admin panel.
    admin: ({ req: { user } }) => roleOf(user) === 'admin',
    create: isAdmin,
    delete: isAdmin,
    read: isAdmin,
    update: isAdmin,
  },
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'name',
  },
  auth: {
    useAPIKey: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'admin',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Sync de soporte (API)', value: 'support-sync' },
      ],
      admin: {
        description:
          'Sync de soporte: usuario de integración que sube los artículos de soporte por API key. Sin acceso al panel.',
      },
    },
  ],
  timestamps: true,
}
