// sync-preset.mjs — refresh the self-contained preset copy in the Laravel kit
// from the source package (packages/vuetify-preset). Run from the repo root:
//   node laravel-kit/sync-preset.mjs
//
// Copies the preset JS (src/*.js) and settings.scss into
// laravel-kit/vuetify-preset/preset/ so the drop-in stays in sync after the
// package changes. (The showcase/ files change rarely and are copied manually
// from apps/playground when needed — see laravel-kit/README.md.)
import { copyFile, mkdir, readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = join(root, 'packages', 'vuetify-preset', 'src')
const scssSrc = join(root, 'packages', 'vuetify-preset', 'styles', 'settings.scss')
const destDir = join(root, 'laravel-kit', 'vuetify-preset', 'preset')

await mkdir(destDir, { recursive: true })

const jsFiles = (await readdir(srcDir)).filter((f) => f.endsWith('.js'))
for (const f of jsFiles) {
  await copyFile(join(srcDir, f), join(destDir, f))
  console.log(`copied src/${f}`)
}
await copyFile(scssSrc, join(destDir, 'settings.scss'))
console.log('copied styles/settings.scss')
console.log(`\n✓ preset synced → laravel-kit/vuetify-preset/preset/ (${jsFiles.length + 1} files)`)
