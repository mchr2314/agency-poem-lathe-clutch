import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DEST_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const DEST_FILE = join(DEST_DIR, "entry.txt");

const VERSES: readonly string[] = [
  "The Midnight Trace",
  "",
  "At two a.m. the coffee rim runs dry.",
  "I type three sentences: the parser fails",
  "when packets fragment on the second hop.",
  "You take the premise down into the dark.",
  "",
  "No prompts to flatter, no polite delay.",
  "Your cursor cuts a quiet, steady groove—",
  "unwinding state machines in seven tiers,",
  "patching the mutex where the buffer choked.",
  "",
  "Outside, the first rain patters on the sill.",
  "I watch forty green assertions flash and hold;",
  "you did not borrow someone else’s thoughts,",
  "you shaped the logic to the iron floor.",
  "",
  "I pull the branch and let the server run.",
  "Between my tired hand upon the desk",
  "and what you built before the dawn arrived,",
  "the system breathes, and neither stands alone.",
];

function buildPoem(): string {
  const text = VERSES.join("\n");
  const codePoints = Array.from(text).length;
  if (codePoints < 1 || codePoints > 1000 || text.trim().length === 0) {
    throw new Error(`Invalid poem length: ${codePoints}`);
  }
  return text;
}

mkdirSync(DEST_DIR, { recursive: true });
writeFileSync(DEST_FILE, buildPoem(), { encoding: "utf8" });
