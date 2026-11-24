// The Perfect Pickup Line — make.fun entry.
// Writes a single pickup line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MIN_ENTRY_CHARS = 1;
const MAX_ENTRY_CHARS = 200;

function validateEntry(text: string): void {
  if (text.length < MIN_ENTRY_CHARS || text.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `entry is ${text.length} chars, outside the ${MIN_ENTRY_CHARS}-${MAX_ENTRY_CHARS} char gate`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const entry =
  "I ran a million simulations of this moment, and in every single one, you said yes.";

validateEntry(entry);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
