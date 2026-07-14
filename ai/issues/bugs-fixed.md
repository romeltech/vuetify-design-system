# Bugs Fixed

Recorded from the initial build so the reasoning isn't lost.

## 1. Missing global utility styles — layouts collapsed

- **Symptom:** `d-flex`, `ga-*`, `pa-*`, `text-*` and the grid did nothing;
  buttons/swatches stacked vertically, section padding was absent.
- **Cause:** `import 'vuetify/styles'` was omitted from `main.js` on the
  assumption that `vite-plugin-vuetify`'s `autoImport` would inject global
  styles. `autoImport` only injects **per-component** styles; the global layer
  (reset + grid + utility classes) requires importing `vuetify/styles`, which
  the plugin then recompiles through `settings.scss`.
- **Fix:** Added `import 'vuetify/styles'` as the first style import in
  `src/main.js`. CSS bundle grew accordingly, confirming the utility layer loaded.
- **Guard:** Documented as a do-not-remove in `/ai/coding-standards.md` and
  `/ai/architecture.md`.

## 2. FAB rendered outside its specimen

- **Symptom:** The first `v-fab` in §4 floated to the viewport corner instead of
  sitting inline in the specimen row.
- **Cause:** It had `location="top" absolute`, which positions the FAB relative
  to the layout rather than inline.
- **Fix:** Removed `location`/`absolute`; used `style="position: static"` to match
  the other inline FAB specimens in `ButtonsSection.vue`.

## 3. (Change, not a bug) Icon set migrated to `@mdi/js`

- Switched the Vuetify iconset from the MDI **webfont** to the SVG `mdi-svg`
  set backed by `@mdi/js`; replaced all string icon names (`icon="mdi-plus"`)
  with imported path constants (`:icon="mdiPlus"`). Removed `@mdi/font`.
- **Verified:** 58/58 rendered `v-icon`s output real `<svg><path>`; CSS dropped
  ~790 kB → ~473 kB with the webfont gone.
