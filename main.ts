// gta6-clipper-01 entry (Node 22, standard library only).
// Copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads it. That is all the program does.
// The video itself is the entry: Lucia robs a store in Vice City,
// flees with a 2-star wanted level, hides under the highway, and
// gets tackled by the police — cut into a vertical clip and uploaded
// to YouTube as a public Short with the bounty's line and the play
// code in its description.
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const videoJsonPath = join(BOT_DIR, 'VIDEO.json');
try {
  // Validate before copying: VIDEO.json must parse and carry a url string
  // (the PLACEHOLDER until Dava uploads the clip, then a youtube.com/shorts link).
  const parsed = JSON.parse(readFileSync(videoJsonPath, 'utf8')) as { url?: unknown };
  if (typeof parsed.url !== 'string' || parsed.url.length === 0) {
    throw new Error('VIDEO.json has no url string');
  }
  copyFileSync(videoJsonPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
