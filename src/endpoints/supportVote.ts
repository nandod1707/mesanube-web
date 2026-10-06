import type { Endpoint } from 'payload'

// Public "¿Te sirvió?" vote: POST /api/support-articles/:id/vote { value: 'yes' | 'no' }.
// Only increments a counter in support-feedback; the body can't set anything else. One vote per
// browser is enforced client-side only (no server rate limit in v1).

const FIELD = { yes: 'helpfulYes', no: 'helpfulNo' } as const

export const supportVoteEndpoint: Endpoint = {
  path: '/:id/vote',
  method: 'post',
  handler: async (req) => {
    const { payload } = req
    const id = String(req.routeParams?.id ?? '')
    const body = (await req.json?.().catch(() => null)) as { value?: unknown } | null
    const value = body?.value
    if (value !== 'yes' && value !== 'no') {
      return Response.json({ error: 'value tiene que ser "yes" o "no".' }, { status: 400 })
    }

    const published = await payload
      .find({
        collection: 'support-articles',
        where: { id: { equals: id }, _status: { equals: 'published' } },
        limit: 1,
        depth: 0,
        select: {},
        overrideAccess: false,
        req,
      })
      .catch(() => null)
    if (!published?.docs.length) return Response.json({ error: 'No encontrado.' }, { status: 404 })

    const findTally = async () =>
      (
        await payload.find({
          collection: 'support-feedback',
          where: { article: { equals: id } },
          limit: 1,
          depth: 0,
          req,
        })
      ).docs[0]

    let tally = await findTally()
    if (!tally) {
      // A concurrent first vote may win the unique index; fall back to the doc it created.
      tally =
        (await payload
          .create({ collection: 'support-feedback', data: { article: id }, req })
          .catch(() => null)) ?? (await findTally())
    }
    if (!tally) return Response.json({ error: 'No se pudo registrar el voto.' }, { status: 500 })

    // Atomic increment so concurrent votes never lose a count.
    await payload.db.collections['support-feedback'].updateOne(
      { _id: tally.id },
      { $inc: { [FIELD[value]]: 1 } },
    )
    return Response.json({ ok: true })
  },
}
