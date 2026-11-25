// Snooze Button Roast — make.fun entry (u-carbon-forge-snooze-button-roast-14cbafc6)
// Writes one roast line to $MAKEFUN_OUTPUT_DIR/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My alarm clock clocks in at 6 AM on a Saturday like an unpaid intern chasing a promotion — loud, early, and the only thing it ever delivers is my misery.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
