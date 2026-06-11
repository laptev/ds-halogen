#!/usr/bin/env node
/**
 * Halogen design system installer.
 *
 *   npx laptev/ds-halogen init [project-dir]
 *
 * Copies the system into <project>/design_systems/halogen/ and registers it
 * in the project's root CLAUDE.md (inside a marker-fenced block, idempotent).
 */
"use strict";

const fs = require("fs");
const path = require("path");

const NAME = "halogen"; // target folder: design_systems/halogen
const REPO = "laptev/ds-halogen";
// Universal payload contract: same list in every ds-* repo;
// items missing from a given system are skipped automatically.
const PAYLOAD = ["CLAUDE.md", "index.html", "prompts.md", "assets", "examples"];
const INDEX_LINE =
  "- `design_systems/halogen/` — **Halogen**: dark-mode-first, high-density UI for creative software. " +
  "Read `design_systems/halogen/CLAUDE.md` before building UI with it.";

const START = "<!-- design-systems:start -->";
const END = "<!-- design-systems:end -->";
const BLOCK_HEADER =
  "## Design systems\n\n" +
  "Design systems live in `design_systems/`. When building UI, pick one and follow its `CLAUDE.md`:\n";

const [, , cmd, dirArg] = process.argv;
if (cmd !== "init") {
  console.log(`Usage: npx ${REPO} init [project-dir]`);
  process.exit(cmd ? 1 : 0);
}

const projectRoot = path.resolve(dirArg || ".");
const pkgRoot = path.join(__dirname, "..");
const target = path.join(projectRoot, "design_systems", NAME);

fs.mkdirSync(target, { recursive: true });
for (const item of PAYLOAD) {
  const from = path.join(pkgRoot, item);
  if (!fs.existsSync(from)) continue;
  fs.cpSync(from, path.join(target, item), { recursive: true, force: true });
}

// Register in root CLAUDE.md inside the marker block. Never touches other text.
const claudeMd = path.join(projectRoot, "CLAUDE.md");
let text = fs.existsSync(claudeMd) ? fs.readFileSync(claudeMd, "utf8") : "";

if (text.includes(START) && text.includes(END)) {
  if (!text.includes(INDEX_LINE)) {
    text = text.replace(END, `${INDEX_LINE}\n${END}`);
  }
} else {
  const block = `${START}\n${BLOCK_HEADER}\n${INDEX_LINE}\n${END}\n`;
  text = text ? `${text.replace(/\s*$/, "")}\n\n${block}` : block;
}
fs.writeFileSync(claudeMd, text);

const rel = path.relative(process.cwd(), target) || ".";
console.log(`✔ Halogen installed into ${rel}`);
console.log("✔ Registered in CLAUDE.md");
console.log("\nNext: open this project in Claude (Cowork or Claude Code) and try:");
console.log('  "Using the Halogen system in design_systems/halogen, build a generation dashboard for ..."');
