# Halogen kit · prompts for Claude Cowork

Three prompts. Paste each one into a fresh Claude Cowork session, in order. Between them, Claude shapes the system into a working web app on top of Halogen's tokens.

Bring two files into the session before you start:

- `assets/tokens.css` (the dark-first token layer: ink ramp, accents, type stacks)
- `index.html` (the full Halogen showcase, every component with its CSS inline, both themes)

Both ship inside the kit. Halogen keeps component CSS inline in `index.html`, so when Claude reuses a component it copies the markup and the matching style block together.

---

## Prompt 01 · Scaffold the project

Use this once, at the start of a new project. Claude reads the tokens, sets up a Next.js workspace, and wires Halogen as the base layer.

```
Read the attached `tokens.css` and `index.html`. They define a dark-mode-first design system called Halogen, shaped for high-density creative software.

Scaffold a fresh Next.js 15 (App Router) project with TypeScript and Tailwind. Wire Halogen as follows:

1. Drop `tokens.css` into `app/globals.css` as the bottom imported layer. Preserve the `:root` (dark base) and `[data-theme="light"]` blocks exactly.
2. Configure Tailwind to read the Halogen tokens as its color palette and font families. Use the CSS variable bridge so token edits stay the source of truth.
3. Load Archivo, Inter, and VT323 via `next/font/google`. Expose them as `--t-headline`, `--t-body`, and `--t-display`.
4. Build a small `<Button>`, `<Card>`, `<Input>`, and `<Badge>` component in `components/ui/` that mirror the markup and inline styles seen in `index.html`. Use Tailwind classes that consume the Halogen variables.
5. Dark is the default, no attribute needed. Add a theme toggle that sets `data-theme="light"` on `<html>` and clears it for dark.

Keep the file count minimal. The system carries the look. The code only has to wire it in.
```

---

## Prompt 02 · Generate the first real page

Run this after Prompt 01. Claude turns the system into a working landing page. Replace the bracketed lines with your product before pasting.

```
Using the Halogen system already wired into this project, generate one full landing page at `app/page.tsx`. Page brief:

- Product: [one sentence about what the product does]
- Audience: [who it is for]
- Primary action: [what the user should do on this page]

Page sections:

1. Sticky header with a brand mark and three nav items.
2. Hero with an eyebrow label, a VT323 display headline, a lede paragraph, a lime primary button, and a ghost secondary.
3. Feature grid: three cards, each with an icon slot, a headline, and a two-line description.
4. Promo strip pairing lime + magenta for one time-bound offer.
5. CTA banner with a single lime button and a soft trust line.
6. Footer mirroring Halogen's footer structure.

Constraints:

- Step the ink ramp for surfaces (--ink-050 page, --ink-100 cards). Never use #000.
- Use only Halogen tokens. No raw hex codes, no hardcoded colors.
- Cap accents at two per component. Lime for action, magenta for the promo only.
- Dark theme by default. Light theme must work with data-theme="light".
- All copy in English, no em-dashes, hyphens only.

Return the file complete and runnable.
```

---

## Prompt 03 · Ship the product surface

Run this when you are ready to add real product screens. Claude takes the same system into deeper, denser UI.

```
Using the Halogen system, build the following authenticated product surface at `app/(app)/studio/page.tsx`:

- App shell: left sidebar nav (180px, dense) + main content. Active item gets a lime marker.
- Sidebar groups: Generate, Library, Settings. Eight items total.
- Main content top: a greeting line and a credit strip showing runs remaining.
- A prompt composer panel: large input, model picker, and a lime "Run" button that lights up once there is something to send.
- Below: a results grid of asset tiles (placeholder thumbnails), and a right rail director panel with parameter sliders and a generate button.
- Add a top-right command palette trigger that opens a focused modal with searchable items. Reuse Halogen's command palette and modal patterns from index.html.

Constraints:

- Reuse the `<Button>`, `<Card>`, `<Input>`, `<Badge>` components from Prompt 01. Extract more shared primitives only when they appear twice.
- Strict tokens only. Step the ink ramp for panels; use --line for dividers.
- Keep density high: compact paddings, tight type, information-rich rows.
- Accessible: every interactive element keyboard-reachable, focus rings visible.
- No em-dashes, plain ASCII hyphens only in copy.

Show the result, then list the new components added to `components/ui/`.
```

---

## Tips while working with Claude

- Keep the tokens file open in the session. If Claude drifts toward flat grays or a single surface, paste the ink ramp back as a reminder.
- Switch to light mode early with data-theme="light". If Halogen feels off in light, surface the issue before adding more sections.
- Resist a third accent. Halogen reads as studio-grade because it caps each component at two: lime and magenta carry the load.
- Reserve the glow shadows for one key CTA per view. They stop working as emphasis the moment they decorate everything.

That is the kit. The system carries the work. The prompts just hand it over.
