import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'

export type Role = 'admin' | 'support-sync'

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
