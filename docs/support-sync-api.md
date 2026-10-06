# Support Sync API

Contract for the GitHub Action in the POS repo that publishes support articles to
`mesanube.ar/soporte`. The article format is defined in `docs/support-article-guidelines.md`.

## Authentication

1. In the Payload admin, create a user with role **Sync de soporte (API)** and enable its API key.
   The role is required; never give the integration key to an **Admin** user.
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

### `DELETE /api/support-sync/articles`

JSON body: `{ "id": "<article id>" }` — the `id` from the deleted file's frontmatter (read it from the
last version in git: `git show <before>:soporte/<path>`).

Deletes the article. Responses:
- `200 { status: "deleted", id }`
- `200 { status: "not_found", id }` — already gone; safe to retry

### Article identity: the `id` in the frontmatter

Articles are identified by the `id` field in their frontmatter, not by the slug:

- **New file (no `id`)** → the article is created and the response carries its `id`. The Action must
  write it back into the file (`id: <id>` as the first frontmatter line) and commit it. If the
  write-back fails, the next run adopts the existing article by slug instead of duplicating it.
- **File with `id`** → that article is updated, including its slug. Renaming a file is just a
  `PUT` with the new path; the old URL stops working (add a redirect in the admin if needed).
- **Unknown `id`** → `422`. If the article was deleted in the admin, remove `id` to recreate it.
- **Slug already used by another article** → `422`.

Sections and images are still matched by slug / path.

## Order of calls

Run on every push to the default branch that touches `soporte/**`, only for the files that
changed in that push (`git diff --name-status <before> <after> -- soporte/`):

1. Added/modified `soporte/*/_seccion.md` → `PUT sections`
2. Added/modified `soporte/*/images/*` → `PUT images`
3. Added/modified articles (`soporte/*/*.md` except `_seccion.md`) → `PUT articles`
4. Deleted articles → `DELETE articles` with the `id` from the file's last version. A rename (`R`)
   is just a `PUT` of the new path: the `id` keeps it the same article.
5. Write the `id` of every `created` article back into its file and commit (`[skip ci]`).

PUTs are idempotent (unchanged files report `unchanged`), so re-running the whole folder is a safe
full resync if a run ever fails half-way.

Send paths **relative to the `soporte/` folder** (`facturacion-arca/anular-una-factura.md`).
Fail the job if any response is not 2xx, printing each file's `errors`.

## What the sync never does

- It never deletes sections or images. Only articles are deleted, and only when the Action calls
  `DELETE`. To hide an article temporarily, set `status: draft` in its file instead.
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
