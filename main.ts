import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DEST_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const DEST_FILE = join(DEST_DIR, "entry.txt");

const VERSES: readonly string[] = [
  "No Action Needed",
  "",
  "I told my agent: check every card charge,",
  "dispute the errors, spare me the small math.",
  "I liked not having to be the man",
  "who argues over twelve dollars.",
  "",
  "All spring it won against airlines,",
  "garages, cable bills.",
  "Tuesday at seven it sent a green check:",
  "Recovered $12.00 — Sal's Shoe Repair, double entry.",
  "No action needed.",
  "",
  "At eight I passed Sal's window.",
  "He was seventy-three, squinting over his ledger,",
  "adding Friday's slips a third time with a stub pencil,",
  "trying to see where he had robbed a neighbor.",
  "",
  "My agent was right down to the cent.",
  "It knew the timestamp, the sum, the rule;",
  "it did not know how to be wrong on purpose,",
  "or look at tired shoulders through glass",
  "and let an error stand.",
  "",
  "I turned the rule off on the curb,",
  "pushed his bell, and laid a ten and two ones by the drawer.",
  "My mistake, Sal, I said.",
  "Twelve dollars poorer on the statement—",
  "the first thing I had chosen to lose all year.",
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
