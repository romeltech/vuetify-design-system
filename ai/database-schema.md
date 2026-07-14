# Database & Data Stores

**Not applicable — this project has no database or persistent data store.**

There is no relational database, document store, key-value store, search index,
cache layer, or blob storage. The app is a static, client-only Vue SPA.

## Where "data" lives instead

The only structured data is design-system tokens defined as plain JavaScript in
[`src/data/tokens.js`](../src/data/tokens.js). These are compile-time constants,
not runtime records:

| Export | Shape | Purpose |
| --- | --- | --- |
| `ramps` | `[{ name, note, steps: [{ s, hex, key }] }]` | Primary + secondary tonal ramps (50–900) |
| `semantic` | `[{ name, light, onLight, ratioLight, dark, ratioDark, note }]` | Success/Info/Warning/Error + WCAG ratios |
| `roles` | `[{ key, light, dark, role }]` | Theme role tokens (background, surface, primary, …) |
| `typeScale` | `[{ cls, legacy, spec, size, w, lh, ls, sample }]` | MD3 type scale + v3 legacy mapping |
| `spacing` | `[{ n, px }]` | 4px spacing scale (0–16) |
| `elevations` | `[{ n, dp, shadow }]` | MD3 elevation levels 0–5 |
| `radii` | `[{ cls, v, css }]` | Border-radius tokens |
| `breakpoints` | `[{ name, range, device }]` | v4 breakpoint thresholds |
| `sections` | `[{ id, label }]` | In-page navigation model |

The authoritative color/theme values are also encoded in the Vuetify theme
config in [`src/plugins/vuetify.js`](../src/plugins/vuetify.js) (`theme.themes.light`
/ `.dark` colors). `tokens.js` and the theme config are intentionally kept in
sync with the reference spec (`reference/v1/…`).

No migrations, seeds, indexes, or constraints exist or are needed.
