import type { CollectionConfig } from 'payload'

import { isAdmin, isAdminOrEditor, isAdminOrSelf } from '@/access/roles'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    // The support-sync integration user authenticates by API key only; it never uses the admin panel.
    // Editors use the panel too; the support-sync user stays API-only.
    admin: isAdminOrEditor,
    create: isAdmin,
    delete: isAdmin,
    read: isAdminOrSelf,
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
      // Required with no default: an API-key user created without picking a role must not silently
      // become a full admin. Accounts created before roles existed have no value and still read as
      // admin (see roleOf).
      required: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Sync de soporte (API)', value: 'support-sync' },
      ],
      admin: {
        description:
          'Editor: gestiona el blog (posts, páginas, categorías y media); no toca usuarios, header/footer, redirects ni formularios. Sync de soporte: usuario de integración que sube los artículos de soporte por API key. Sin acceso al panel.',
      },
    },
  ],
  timestamps: true,
}
