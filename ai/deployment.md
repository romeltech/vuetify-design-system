# Deployment & Operations

## Local development

Prerequisites: **Node.js ≥ 18** (built and verified on Node 24) and **npm**.

```bash
npm install       # install dependencies
npm run dev       # Vite dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the built dist/ locally
```

Scripts (from `package.json`):

| Script | Command | Purpose |
| --- | --- | --- |
| `dev` | `vite` | Dev server with HMR (port 5173, set in `vite.config.js`) |
| `build` | `vite build` | Production bundle to `dist/` |
| `preview` | `vite preview` | Preview the production build |

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

## Reusing the preset in another project (the primary "deployment" of this repo)

The portable artifact is three things: `src/plugins/vuetify.js`,
`src/styles/settings.scss`, and the `@fontsource` imports. To adopt in a new
Vuetify 4 app:

1. Scaffold a Vuetify 4 app (`npm create vuetify@latest`, JavaScript).
2. Copy `src/plugins/vuetify.js` and `src/styles/settings.scss`.
3. Point the plugin at the settings file in `vite.config.js`:
   `vuetify({ styles: { configFile: 'src/styles/settings.scss' } })`.
4. In `main.js`, import in order: `vuetify/styles` → `./styles/tailwind.css`
   (optional) → fonts → the vuetify plugin. **The `vuetify/styles` import is
   required** (it pulls in the utility layer via the config file).
5. Install icons/fonts: `@mdi/js`, `@fontsource/roboto`, `@fontsource/roboto-mono`.

See `README.md` for the full recipe.
