import { describe, it, expect } from 'vitest'

import { parseArticleFile, parseSectionFile } from '@/endpoints/supportSync/validate'

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

  it('rejects a slug that does not match the folder', () => {
    const result = parseSectionFile(
      'caja/_seccion.md',
      frontmatter({ title: 'Facturación ARCA', slug: 'facturacion-arca', description: 'd', order: 2 }),
    )
    expect(result.ok).toBe(false)
  })
})
