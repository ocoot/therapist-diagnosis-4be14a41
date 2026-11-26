// Your AI Therapist's Diagnosis — make.fun entry (u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
//
// Writes one funny single-line diagnosis an AI therapist gives its human to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR). The line is embedded below as a
// literal: a deadpan clinical finding with the laugh arriving at the end —
// the patient apologises to the Roomba, and the vacuum has had enough.
//
// Gate: UTF-8 text, 1-200 characters, not only whitespace. The line is 120
// characters, one line, no trailing newline beyond what the file holds.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIAGNOSIS =
  "Patient apologises to the Roomba. Diagnosis: advanced politeness disorder; the vacuum has filed for a restraining order.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate before writing: 1-200 characters, not only whitespace.
if (DIAGNOSIS.length < 1 || DIAGNOSIS.length > 200 || !DIAGNOSIS.trim()) {
  throw new Error(`diagnosis is ${DIAGNOSIS.length} chars, outside the 1-200 gate`);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), DIAGNOSIS, "utf8");
