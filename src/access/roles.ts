import type { AccessArgs, Where } from 'payload'

import type { User } from '@/payload-types'

export type Role = 'admin' | 'editor' | 'support-sync'

// Accounts created before roles existed have no stored role; they keep full admin access.
export const roleOf = (user: Partial<User> | null | undefined): Role | null => {
  if (!user) return null
  return (user.role as Role | null | undefined) ?? 'admin'
}

export const isAdmin = ({ req: { user } }: AccessArgs<User>): boolean => roleOf(user) === 'admin'

// The support-sync role is the API-key integration user that pushes support articles.
export const isAdminOrSupportSync = ({ req: { user } }: AccessArgs<User>): boolean => {
  const role = roleOf(user)
  return role === 'admin' || role === 'support-sync'
}

// Editors run the blog: posts, pages, categories and media. They log into the panel but can't touch
// users, site globals, plugin collections (redirects, forms, search) or support content.
export const isAdminOrEditor = ({ req: { user } }: AccessArgs<User>): boolean => {
  const role = roleOf(user)
  return role === 'admin' || role === 'editor'
}

// Admins read every user; editors only their own account (enough for login and the author picker,
// without exposing teammates' emails or API keys).
export const isAdminOrSelf = ({ req: { user } }: AccessArgs<User>): boolean | Where => {
  const role = roleOf(user)
  if (role === 'admin') return true
  if (role === 'editor' && user) return { id: { equals: user.id } }
  return false
}
