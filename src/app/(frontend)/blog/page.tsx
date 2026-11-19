import type { Metadata } from 'next/types'

import { BlogArchive, findBlogPage } from '@/components/blog/BlogArchive'
import { BLOG_PATH } from '@/utilities/blog'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const dynamic = 'force-static'
export const revalidate = 600

const title = 'Blog de Mesanube. Gestión Gastronómica y Facturación ARCA'
const description =
  'Artículos sobre gestión de restaurantes, cafeterías y bares en Argentina: facturación electrónica ARCA, comanda digital, control de caja y buenas prácticas de operación.'

export default async function BlogPage() {
  const posts = await findBlogPage(1)
  return <BlogArchive posts={posts} />
}

export async function generateMetadata(): Promise<Metadata> {
  const { totalDocs } = await findBlogPage(1)
  return {
    // An empty archive is thin content: keep it out of the index until the first post ships.
    ...(totalDocs === 0 && { robots: { index: false, follow: true } }),
    title,
    description,
    alternates: { canonical: BLOG_PATH },
    openGraph: mergeOpenGraph({ title, description, url: BLOG_PATH }),
  }
}
