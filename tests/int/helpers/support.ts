import type { Payload } from 'payload'

// Support hooks call Next's revalidatePath, which only works inside a Next request.
export const noRevalidate = { disableRevalidate: true }

export const resetSupport = async (payload: Payload) => {
  for (const collection of ['support-feedback', 'support-articles', 'support-sections', 'support-media'] as const) {
    await payload.delete({ collection, where: { id: { exists: true } }, context: noRevalidate })
  }
}

export const lexicalParagraph = (text: string) => ({
  root: {
    type: 'root',
    format: '' as const,
    indent: 0,
    version: 1,
    direction: 'ltr' as const,
    children: [
      {
        type: 'paragraph',
        format: '' as const,
        indent: 0,
        version: 1,
        direction: 'ltr' as const,
        textFormat: 0,
        children: [{ type: 'text', text, format: 0, detail: 0, mode: 'normal', style: '', version: 1 }],
      },
    ],
  },
})
