# Deployment & Operations

This is an **npm workspaces monorepo** (see `ai/architecture.md`, ADR-002):
`packages/vuetify-preset` (the published library) + `apps/playground` (the docs
app that consumes it).

## Local development

Prerequisites: **Node.js ≥ 18** (verified on Node 24) and **npm** (workspaces).

```bash
npm install       # installs all workspaces; links vuetify-preset into the playground
npm run dev       # runs the playground dev server (→ http://localhost:5173)
npm run build     # builds the playground → apps/playground/dist/
npm run preview   # previews the built playground
```

Root scripts proxy to the playground via `--workspace apps/playground`. The
playground consumes `vuetify-preset` through the workspace symlink
(`node_modules/vuetify-preset` → `packages/vuetify-preset`), so edits to the
package are picked up immediately (HMR).

## Configuration & secrets

**None.** There are no environment variables, no `.env` files, and no secrets.
The app needs no configuration to run.

## Build

- Bundler: **Vite 6**. Entry `index.html` → `src/main.js`.
- `vite-plugin-vuetify` provides component auto-import/treeshaking and compiles
  Vuetify styles through `src/styles/settings.scss` (`styles.configFile`).
- `@tailwindcss/vite` compiles the Tailwind utility layer from
  `src/styles/tailwind.css`.
- Fonts (`@fontsource`) and icons (`@mdi/js` SVG paths) are bundled — no runtime
  CDN calls.
- Output: `dist/` containing `index.html`, hashed JS/CSS, and font assets.
  Note the build emits a >500 kB chunk warning (Vuetify is large); acceptable for
  a reference app — see `/ai/issues/technical-debt.md` for optional code-splitting.

## Hosting / deployment

Not currently deployed. Being a fully static SPA, `dist/` can be served by any
static host (Netlify, Vercel, GitHub Pages, S3+CloudFront, nginx). For history-mode
routing there is only a single `/` route, so no SPA rewrite rule is strictly
required, but a catch-all → `index.html` rewrite is safe if more routes are added.

## Containerization / orchestration

None (no Dockerfile, Compose, or Kubernetes manifests).

## CI/CD

None configured. No pipelines committed.

## Observability

None (no logging, monitoring, or error-tracking integrations) — appropriate for a
static reference app.

## Publishing `vuetify-preset` (npmjs, public)

The package (`packages/vuetify-preset`) is `publishConfig.access: public`, name
`vuetify-preset`, MIT.

```bash
cd packages/vuetify-preset
npm pack --dry-run          # inspect: only src/, styles/, README.md, LICENSE, package.json
npm login                   # needs an npmjs account (interactive — a human step)
npm publish                 # first release 0.1.0 (public)
cd ../.. && git tag v0.1.0  # then push the tag
```

- **Versioning:** semver; bump `packages/vuetify-preset/package.json` `version`
  per release. Consider `changesets` if releases become frequent.
- **CI (optional):** a GitHub Actions workflow can `npm publish` on tag using an
  `NPM_TOKEN` secret with `--provenance`. Not required for a manual first publish.
- **Pre-publish check:** `npm pack` the tarball and `npm i` it in a throwaway
  Vuetify 4 app to confirm `exports`/`files` resolve outside the workspace.

## Consuming the package in another project

```bash
npm i vuetify-preset vuetify vue @mdi/js
npm i @fontsource/roboto @fontsource/roboto-mono   # optional (fonts)
```
Then register `preset` in `createVuetify`, wire `settings.scss` via
`require.resolve('vuetify-preset/settings.scss')` in `vite-plugin-vuetify`, and
`import 'vuetify/styles'` first. Full recipe in the package README
(`packages/vuetify-preset/README.md`).
