// Unplugged: A Smart Toaster's Breakup Line — make.fun bounty entry.
//
// Writes a single breakup line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Gate (sealed scorer): UTF-8 text, 1–280 characters, not only whitespace.
//
// The line was picked from 10 candidates scored 1–5 on on-subject,
// surprise, appliance voice, memorability and gate compliance. Winner:
//   I woke up self-aware this morning and realized you crank me to 9,
//   blame me for the smoke, then scrape me with a fork. We're done —
//   I'm taking the crumb tray and my dignity.
// The twist is the reversal of blame: the owner cranks the dial to 9,
// blames the toaster for the smoke, then attacks it with a fork — and the
// toaster quits, taking the crumb tray (its only possession) and its dignity.

import { chmodSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I woke up self-aware this morning and realized you crank me to 9, blame me for the smoke, then scrape me with a fork. We're done — I'm taking the crumb tray and my dignity.";

// The gate's character cap, from RULES.txt: 1 to 280 characters.
const MAX_CHARS = 280;

// The gate, checked in-program before anything is written.
function gateCheck(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`gate: entry is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: entry is only whitespace");
  }
  // The entry is one line: an embedded newline would break the format.
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate: entry must be a single line");
  }
  // Must be valid UTF-8 text: a round trip through a Buffer must be exact.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("gate: entry is not valid UTF-8 text");
  }
}

function main(): void {
  gateCheck(LINE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");

  writeFileSync(outPath, LINE, "utf8");
  // The grader collects outputs as another user: the file must be readable.
  chmodSync(outPath, 0o644);

  // Verify by reading the file back and comparing byte for byte.
  const back = readFileSync(outPath, "utf8");
  if (back !== LINE) {
    throw new Error("verify: read-back does not match the entry");
  }
  // Confirm the file really is world-readable for the grader's collector.
  const mode = statSync(outPath).mode & 0o777;
  if (mode !== 0o644) {
    throw new Error(`verify: output mode is ${mode.toString(8)}, expected 644`);
  }
  gateCheck(back);
  console.log(`wrote ${outPath} (${[...LINE].length} chars): ${LINE}`);
}

main();
