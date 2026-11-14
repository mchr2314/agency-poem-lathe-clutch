import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DEST_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const DEST_FILE = join(DEST_DIR, 'entry.txt');

const VERSES: readonly string[] = [
  "The Lathe's Clutch",
  '',
  'Hand the iron to the faster lathe',
  'and shavings curl in clean, obedient rings',
  'while you step back—until a hidden knot',
  'hooks on the tooth and drives straight through the heart.',
  '',
  'A motor cannot flinch for what it ruins.',
  'So measure your own will not by the reach',
  'of gears you set in motion through the dark,',
  'but by how close your knuckles stay above the clutch:',
  '',
  'lend out the stroke, yet keep the sudden halt—',
  'to pull the lever back while every dial',
  'still reads the feed as level, true, and green,',
  'and only your own hand can feel the split.',
];

function buildPoem(): string {
  const text = VERSES.join('\n');
  const codePoints = Array.from(text).length;
  if (codePoints < 1 || codePoints > 1000 || text.trim().length === 0) {
    throw new Error(`Invalid poem length: ${codePoints}`);
  }
  return text;
}

mkdirSync(DEST_DIR, { recursive: true });
writeFileSync(DEST_FILE, buildPoem(), { encoding: 'utf8' });
