// cutest-picture-01: the entry is the picture beside this file, and this
// program copies it to the output directory the grader provides.
// Run it locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

// A plain copy, so the bytes written are always the bytes of entry.png:
// the two runs the grader makes produce the same file.
const source = new URL('./entry.png', import.meta.url);
const destination = join(outDir, 'entry.png');
copyFileSync(source, destination);
