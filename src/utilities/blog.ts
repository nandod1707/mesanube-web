// Posts are served under /blog. Every post URL goes through these helpers so the base path lives in one place.
export const BLOG_PATH = '/blog'

export const postPath = (slug: string | null | undefined): string => `${BLOG_PATH}/${slug ?? ''}`

export const blogPagePath = (page: number): string =>
  page <= 1 ? BLOG_PATH : `${BLOG_PATH}/page/${page}`
