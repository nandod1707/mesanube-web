import { describe, it, expect } from 'vitest'

import { parseArticleFile, parseImagePath, parseSectionFile } from '@/endpoints/supportSync/validate'

const frontmatter = (fields: Record<string, string | number>) =>
  `---\n${Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')}\n---\n`

const validFields = {
  title: 'Cómo anular una factura',
  slug: 'anular-una-factura',
  section: 'facturacion-arca',
  summary: 'Anulá una factura emitida generando la nota de crédito.',
  updated: '2026-10-05',
  status: 'published',
}

const PATH = 'facturacion-arca/anular-una-factura.md'
const body = 'Intro.\n\n## Pasos\n\n1. Andá a **Ventas**.\n\n![Botón Anular](./images/anular-1.png)\n'

describe('parseArticleFile', () => {
  it('accepts a valid article and lists its images', () => {
    const result = parseArticleFile(PATH, frontmatter(validFields) + body)
    expect(result.ok).toBe(true)
    if (!result.ok) return
    expect(result.article.slug).toBe('anular-una-factura')
    expect(result.article.images).toEqual([{ alt: 'Botón Anular', key: 'facturacion-arca/anular-1.png' }])
  })

  it('reports a missing required field by name', () => {
    const { summary: _s, ...fields } = validFields
    const result = parseArticleFile(PATH, frontmatter(fields) + body)
    expect(result.ok).toBe(false)
    if (result.ok) return
    expect(result.errors.join(' ')).toContain('summary')
  })

  it('rejects a slug that does not match the filename', () => {
    const result = parseArticleFile('facturacion-arca/otro-nombre.md', frontmatter(validFields) + body)
    expect(result.ok).toBe(false)
  })

  it('rejects a section that does not match the folder', () => {
    const result = parseArticleFile('caja/anular-una-factura.md', frontmatter(validFields) + body)
    expect(result.ok).toBe(false)
  })

  it('rejects a summary over 160 characters', () => {
    const result = parseArticleFile(PATH, frontmatter({ ...validFields, summary: 'x'.repeat(161) }) + body)
    expect(result.ok).toBe(false)
  })

  it.each([
    ['raw HTML', '<div>hola</div>'],
    ['a table', '| a | b |'],
    ['an H1', '# Título'],
    ['an H4', '#### Detalle'],
    ['a fenced code block', '```'],
    ['a footnote', 'Texto[^1]'],
    ['an inline image', 'Mirá ![x](./images/a.png) acá'],
    ['an image without alt', '![](./images/a.png)'],
    ['an image outside images/', '![alt](../otra/a.png)'],
  ])('rejects %s with its line number', (_label, line) => {
    const result = parseArticleFile(PATH, frontmatter(validFields) + `Intro.\n\n${line}\n`)
    expect(result.ok).toBe(false)
    if (result.ok) return
    expect(result.errors.join(' ')).toMatch(/línea \d+/)
  })

  it.each([
    ['a javascript: link', '[clic](javascript:alert(1))'],
    ['a relative link', '[otro](otro-articulo)'],
  ])('rejects %s', (_label, line) => {
    expect(parseArticleFile(PATH, frontmatter(validFields) + `${line}\n`).ok).toBe(false)
  })

  it('accepts https, mailto, site and anchor links', () => {
    const body = '[a](https://arca.gob.ar) [b](mailto:soporte@mesanube.ar) [c](/soporte/caja/x) [d](#pasos)\n'
    expect(parseArticleFile(PATH, frontmatter(validFields) + body).ok).toBe(true)
  })

  it.each([
    ['a bad date', { updated: '05/10/2026' }],
    ['an unknown status', { status: 'archived' }],
    ['a non-integer order', { order: 'primero' }],
    ['a seoTitle over 60 characters', { seoTitle: 'x'.repeat(61) }],
    ['a seoDescription over 160 characters', { seoDescription: 'x'.repeat(161) }],
  ])('rejects %s', (_label, override) => {
    expect(parseArticleFile(PATH, frontmatter({ ...validFields, ...override }) + body).ok).toBe(false)
  })

  it('rejects a non-.md file', () => {
    expect(parseArticleFile('facturacion-arca/anular-una-factura.txt', frontmatter(validFields) + body).ok).toBe(false)
  })

  it('allows angle brackets inside inline code', () => {
    const result = parseArticleFile(PATH, frontmatter(validFields) + 'Escribí `<CUIT>` sin guiones.\n')
    expect(result.ok).toBe(true)
  })

  it('rejects a file without frontmatter', () => {
    expect(parseArticleFile(PATH, body).ok).toBe(false)
  })
})

describe('parseSectionFile', () => {
  it('accepts a valid section file', () => {
    const result = parseSectionFile(
      'facturacion-arca/_seccion.md',
      frontmatter({ title: 'Facturación ARCA', slug: 'facturacion-arca', description: 'd', order: 2 }),
    )
    expect(result.ok).toBe(true)
  })

  it('defaults the icon and rejects an unknown one', () => {
    const fields = { title: 'Caja', slug: 'caja', description: 'd', order: 1 }
    const ok = parseSectionFile('caja/_seccion.md', frontmatter(fields))
    expect(ok.ok && ok.section.icon).toBe('libro')
    const custom = parseSectionFile('caja/_seccion.md', frontmatter({ ...fields, icon: 'caja' }))
    expect(custom.ok && custom.section.icon).toBe('caja')
    expect(parseSectionFile('caja/_seccion.md', frontmatter({ ...fields, icon: 'pizza' })).ok).toBe(false)
  })

  it('rejects the reserved "buscar" slug', () => {
    const result = parseSectionFile(
      'buscar/_seccion.md',
      frontmatter({ title: 'Buscar', slug: 'buscar', description: 'd', order: 1 }),
    )
    expect(result.ok).toBe(false)
  })

  it('rejects a section file with another name', () => {
    expect(parseSectionFile('caja/seccion.md', frontmatter({ title: 'Caja', slug: 'caja', description: 'd', order: 1 })).ok).toBe(false)
  })

  it('rejects a slug that does not match the folder', () => {
    const result = parseSectionFile(
      'caja/_seccion.md',
      frontmatter({ title: 'Facturación ARCA', slug: 'facturacion-arca', description: 'd', order: 2 }),
    )
    expect(result.ok).toBe(false)
  })
})

describe('parseImagePath', () => {
  it('maps <section>/images/<file> to its key', () => {
    expect(parseImagePath('caja/images/cierre-1.webp')).toEqual({ ok: true, key: 'caja/cierre-1.webp' })
  })

  it.each(['caja/cierre-1.png', 'caja/images/cierre.gif', 'caja/images/Cierre.png', '../images/a.png'])(
    'rejects %s',
    (path) => {
      expect(parseImagePath(path).ok).toBe(false)
    },
  )
})
