# Support Sync API

Contract for the GitHub Action in the POS repo that publishes support articles to
`mesanube.ar/soporte`. The article format is defined in `docs/support-article-guidelines.md`.

## Authentication

1. In the Payload admin, create a user with role **Sync de soporte (API)** and enable its API key.
2. Store the key as the GitHub Actions secret `MESANUBE_SUPPORT_API_KEY`.
3. Send it on every request:

```
Authorization: users API-Key <key>
```

This user can only write `support-sections`, `support-articles` and `support-media`. It cannot log
into the admin panel or touch any other content.

## Endpoints

All endpoints are `PUT` and idempotent. Each one handles **one file** and returns its result:

```json
{ "path": "facturacion-arca/anular-una-factura.md", "status": "created" | "updated" | "unchanged", "id": "…" }
{ "path": "…", "status": "error", "errors": ["línea 12: no se permite HTML."] }
```

| Status | HTTP |
|---|---|
| `created` | 201 |
| `updated` / `unchanged` | 200 |
| `error` (file breaks the guidelines) | 422 |
| malformed request | 400 |
| missing/invalid key | 401 |

### `PUT /api/support-sync/sections`

JSON body: `{ "path": "<section>/_seccion.md", "content": "<raw file>" }`

### `PUT /api/support-sync/images`

`multipart/form-data` with:
- `path`: `<section>/images/<file>.png|webp|jpg`
- `file`: the image (max 500 KB)
- `alt` (optional)

Images are matched by path. Same bytes → `unchanged`; different bytes → the file is replaced in place.

### `PUT /api/support-sync/articles`

JSON body: `{ "path": "<section>/<slug>.md", "content": "<raw file>" }`

The section and every referenced image must already be synced.

## Order of calls

Run on every push to the default branch that touches `soporte/**`:

1. Every `soporte/*/_seccion.md` → `sections`
2. Every `soporte/*/images/*` → `images`
3. Every `soporte/*/*.md` except `_seccion.md` → `articles`

Send paths **relative to the `soporte/` folder** (`facturacion-arca/anular-una-factura.md`).
Fail the job if any response is not 2xx, printing each file's `errors`.

## What the sync never does

- It never deletes or unpublishes. To remove an article, unpublish it in the admin
  (or set `status: draft` in its file).
- Edits made in the admin are overwritten the next time that file changes in the repo.

## Example

```bash
curl -X PUT "$SITE/api/support-sync/articles" \
  -H "Authorization: users API-Key $MESANUBE_SUPPORT_API_KEY" \
  -H "Content-Type: application/json" \
  --data "$(jq -n --arg path "facturacion-arca/anular-una-factura.md" \
    --rawfile content soporte/facturacion-arca/anular-una-factura.md '{path: $path, content: $content}')"

curl -X PUT "$SITE/api/support-sync/images" \
  -H "Authorization: users API-Key $MESANUBE_SUPPORT_API_KEY" \
  -F "path=facturacion-arca/images/anular-una-factura-1.png" \
  -F "file=@soporte/facturacion-arca/images/anular-una-factura-1.png"
```
