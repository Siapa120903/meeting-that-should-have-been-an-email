// The Meeting That Should Have Been an Email — make.fun entry.
// This program's whole job is to write one joke, one line, at most
// 200 characters, to $MAKEFUN_OUTPUT_DIR/entry.txt. It never touches
// the network and never rolls any dice, so the grader's two runs see
// the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "We held a meeting to decide whether the email needed a meeting. " +
  "The email has since filed for a restraining order.";

// The gate only lets a 1..200 character, non-blank, single line through
// to the judge, so check the joke before it is written and refuse to
// ship a line that would score zero.
function render(text: string): string {
  const line = text.replace(/\s+/g, " ").trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("joke must be a single line");
  }
  return line;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), render(JOKE) + "\n", "utf8");
