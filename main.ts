import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My smart fridge now announces my midnight snacks out loud — last night it said 'third helping' in front of my date, and I have never felt so betrayed by an appliance with a light inside.";

if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`entry joke must be 1-280 characters, got ${JOKE.length}`);
}

// The entry is a single line: the joke, plus a trailing newline.
// Output goes only to $MAKEFUN_OUTPUT_DIR (default /output) — never
// into this script's own directory, which is read-only under the grader.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
