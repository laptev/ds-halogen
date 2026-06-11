# Halogen

AI-first design system. Dark-mode-first, high-density UI for creative software — image/video generators, model tools, asset managers. Shaped for fast MVP vibe coding: an AI agent reads the tokens and the guide, then builds on-system screens without drifting.

Near-black ink surface ramp (never pure black), two display accents: **lime** `#D6FF3A` (action) + **magenta** `#FF2D7A` (promo), pixel-terminal display type. Dark base, light via one attribute.

**Live preview:** https://alexlaptev.com/design_systems/halogen/

## Install into a Claude project

From your project folder (Claude Cowork or Claude Code):

```
npx laptev/ds-halogen init
```

This copies the system into `design_systems/halogen/` and registers it in your project's root `CLAUDE.md`, so Claude picks it up automatically. Re-running is safe. Requires Node 18+ and git.

Manual alternative: download this repo and copy `CLAUDE.md`, `index.html`, `assets/` into `design_systems/halogen/` in your project.

## What you get

- `assets/tokens.css` — the single source of truth: ink ramp, accents, type stacks, radii, glow shadows, both themes
- `index.html` — self-contained living showcase: every component with its CSS and JS inline (open it in a browser)
- `CLAUDE.md` — the agent guide: file map, wiring steps, token rules, do/don't

## Use it

Open the project in Claude and say:

> Using the Halogen system in `design_systems/halogen`, build a generation dashboard for [your product].

Halogen pairs well with [Ember](https://github.com/laptev/ds-ember) — same install pattern, both land in `design_systems/` side by side.
