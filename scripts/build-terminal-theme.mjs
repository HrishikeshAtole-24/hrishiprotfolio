/* Regenerates public/themes/terminal.css from the legacy stylesheets.
   Run after editing styles/globals.css or styles/portfolio.css:
       npm run build:terminal-theme
   Those two files are no longer imported by _app.js — the terminal
   theme loads this bundle via a <link> tag instead. */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sources = ['styles/globals.css', 'styles/portfolio.css'];
const out = resolve(root, 'public/themes/terminal.css');

const header =
  '/* AUTO-BUNDLED legacy stylesheet for the "terminal" theme.\n' +
  '   Source of truth: ' + sources.join(' + ') + '\n' +
  '   Regenerate with: npm run build:terminal-theme\n' +
  '   Loaded only when ACTIVE === "terminal" in config/theme.js */\n\n';

const body = sources
  .map((f) => `/* ===== ${f} ===== */\n${readFileSync(resolve(root, f), 'utf8')}\n\n`)
  .join('');

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, header + body, 'utf8');
console.log(`terminal.css written (${(header + body).length} bytes)`);
