import type { Category, Post } from '@/payload-types'

const dateFormat = new Intl.DateTimeFormat('es-AR', { dateStyle: 'long', timeZone: 'UTC' })

export const formatPostDate = (iso: string): string => dateFormat.format(new Date(iso))

/** Category titles of a post, skipping unpopulated references. */
export const categoryTitles = (categories: Post['categories']): string[] =>
  (categories ?? [])
    .filter((c): c is Category => typeof c === 'object' && c !== null && Boolean(c.title))
    .map((c) => c.title)

/** "Ana", "Ana y Juan", "Ana, Juan y Pedro". */
export const formatAuthorNames = (authors: Post['populatedAuthors']): string => {
  const names = (authors ?? []).map((a) => a?.name).filter((n): n is string => Boolean(n))
  if (names.length <= 1) return names[0] ?? ''
  return `${names.slice(0, -1).join(', ')} y ${names[names.length - 1]}`
}
