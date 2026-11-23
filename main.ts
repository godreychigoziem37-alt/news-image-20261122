// Writes one image summing up the world's news of Sunday 22 November 2026 to /output/entry.png.
// The image is entry.png, built beside this file. The program copies it; it uses no network.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
