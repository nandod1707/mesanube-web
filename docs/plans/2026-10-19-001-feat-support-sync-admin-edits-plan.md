---
title: Support sync keeps admin edits - Plan
date: 2026-10-19
type: feat
execution: code
---

# Support sync keeps admin edits - Plan

## Goal

Edits made to support articles in the Payload admin must not be overwritten by the POS repo sync. The site marks admin edits, refuses to overwrite them (`409`), and exports them back as Markdown so the POS repo can pull them before editing. The POS side (pull command, Claude Code hooks, `409` handling) is in the POS repo: `docs/plans/2026-10-19-001-feat-support-docs-admin-edits-plan.md`. This repo ships first.

## Context

- `support-articles` stores `content` (Lexical), hidden `sourceMarkdown`, `plainText` and `contentHash`. `src/collections/Support/SupportArticles.ts`.
- `syncArticle` (`src/endpoints/supportSync/sync.ts:143`) skips on equal `contentHash`, otherwise overwrites. Markdown to Lexical in `src/endpoints/supportSync/markdown.ts`; images are split out as upload nodes because the upload feature has no Markdown transformer.
- The editor features (`src/collections/Support/editor.ts`) mirror the guidelines' Markdown subset.
- Article frontmatter: `id`, `title`, `slug`, `section`, `summary`, `order?`, `updated`, `status`, `seoTitle?`, `seoDescription?` (`src/endpoints/supportSync/validate.ts`).

## Key technical decisions

- **KTD1. `editedInAdmin` checkbox, hidden, default false.** A `beforeChange` hook on `support-articles` sets it `true` on every save, unless `req.context.supportSync` is set, in which case the sync controls it. Covers draft saves too: an unpublished admin draft is still the latest text.
- **KTD2. The sync endpoint sets `req.context.supportSync = true`** on its `payload.create` / `payload.update` calls (via the existing `asUser(req)` spread or alongside it).
- **KTD3. `409` on overwrite of a flagged article.** In `syncArticle`, when `current.editedInAdmin` and the incoming file differs from `exportArticle(current)`: return `{ path, status: 'conflict', id, errors: ['Este artículo se editó en el admin. Traé esa versión al repo (yarn support-docs:pull <path>) y volvé a mergear.'] }`, mapped to HTTP `409` in `index.ts`. When the incoming file equals the export (the pull round-trip), save as usual and set `editedInAdmin: false`. The equal-hash `unchanged` shortcut must not clear the flag.
- **KTD4. `exportArticle(doc)` builds the full `.md`.** Frontmatter from fields in the order the POS writer uses (`id` first), `status` from `_status`, then the body from `convertLexicalToMarkdown` with the same `supportEditorFeatures`. Upload nodes are cut out first and rendered as `![alt](./images/<file>)` alone on their line, using the `support-media` `key` (`<section>/<file>`); this is the inverse of `segment()` in `markdown.ts`. The path is `<section slug>/<slug>.md`.
- **KTD5. Export endpoint.** `GET /api/support-sync/articles/admin-edits?ids=a,b`: same auth as the sync (`isAdminOrSupportSync`). Returns `{ articles: [{ id, path, content }] }` for flagged articles among `ids`, or all flagged without `ids`. Reads with `draft: true` so a pending admin draft is what is exported.
- **KTD6. The export must pass the POS validator.** It is checked here with this repo's `validate.ts` (`parseArticleFile`), which mirrors the POS rules.

## Implementation units

### U1. Flag and hook

**Files:** `src/collections/Support/SupportArticles.ts`, `src/collections/Support/hooks/markAdminEdit.ts` (new), migration if the DB adapter needs one, regenerate `src/payload-types.ts`.

**Tests** (`tests/int/support-collections.int.spec.ts`): admin `update` sets the flag; sync `PUT` leaves it false. The first must be seen failing (hook not registered).

### U2. Export

**Files:** `src/endpoints/supportSync/export.ts` (new), `src/endpoints/supportSync/markdown.ts` (shared image key helpers if any).

**Tests** (`tests/int/support-sync.int.spec.ts`): **round-trip gate**: for every article file in a fixture copy of the POS `docs/publishable/` (copy the current synced articles into `tests/int/fixtures/publishable/`), `PUT` then `exportArticle` returns the same file byte-for-byte, or the differences are normalized on both sides in a documented way. Images: an article with an image exports the same image line. Exported files pass `parseArticleFile`.

### U3. `409` and round-trip clear

**Files:** `src/endpoints/supportSync/sync.ts`, `src/endpoints/supportSync/index.ts`.

**Tests:** admin edit then repo `PUT` with a different file returns `409` and leaves `content` as the admin left it (seen failing against the current overwrite); `PUT` of the exported file returns `200` and clears the flag; `PUT` of an unchanged file on a flagged article returns `unchanged` and keeps the flag.

### U4. Export endpoint

**Files:** `src/endpoints/supportSync/index.ts`.

**Tests:** `401` without key; with `ids` returns only flagged ones; without `ids` returns all flagged; drafts exported (KTD5).

### U5. Contract docs

**Files:** `docs/support-sync-api.md`: add the `409` row, the export endpoint, and replace "Edits made in the admin are overwritten the next time that file changes in the repo."

## Risks

- **Converter drift** between `convertMarkdownToLexical` and `convertLexicalToMarkdown` (quotes joined by `joinQuoteLines`, list markers, emphasis markers). The U2 round-trip gate decides; if a construct cannot round-trip, normalize the export to the repo's canonical form and document it in `docs/support-article-guidelines.md`.
- **Existing admin edits made before the flag exists** are invisible to it. After deploy, compare `sourceMarkdown` against the export for every article once and flag the ones that differ (one-off script, run by hand).
