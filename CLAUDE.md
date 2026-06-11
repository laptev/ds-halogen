# Halogen — Design System Guide for AI Agents

> v0.4 · dark-mode-first, high-density creative software UI · AI-first design systems by Alex Laptev

Read this file before generating any UI with Halogen. It tells you where the truth lives and how to apply it.

## What Halogen is

A near-black studio system for dense creative tooling: image/video generators, model tools, asset managers — many capabilities on one screen. Surfaces step through a 10-step cool **ink** ramp (`--ink-000…900`); `--ink-050` is the floor — never pure black. Two display accents: **lime** `#D6FF3A` (primary / CTA / success) and **magenta** `#FF2D7A` (promo / alert), plus semantic `--cyan`, `--azure`, `--plum`. Pixel-terminal display font for headings. Dark is the base scope; light mode ships via `[data-theme="light"]`.

## File map

| File | Role |
|---|---|
| `assets/tokens.css` | Single source of truth: ink ramp, line colors, accents, type stacks (`--t-display/headline/body/mono`), radii, shadows incl. glows — both themes. |
| `index.html` | Self-contained showcase: markup + all component CSS inline + JS in one file. Foundations, Components, Patterns, Motion. Copy markup **and** the matching inline CSS blocks from here. |

## How to wire Halogen into a project

1. Import `assets/tokens.css` as the bottom layer of your global CSS. Preserve the `:root` and `[data-theme="light"]` blocks exactly.
2. Dark is the default — no attribute needed. Light = set `data-theme="light"` on `<html>`.
3. Component styles live **inline in `index.html`** (there is no separate components.css). Find the component in the showcase, extract its CSS block into your project, keep every `var(--…)` reference intact.
4. Headings use the pixel-terminal display stack (`--t-display`); body and UI text use `--t-body`; data/code use `--t-mono`.

## Token rules

- Build surfaces by stepping the ink ramp (`--ink-050` page floor → `--ink-100/150` panels → `--ink-200+` raised). Never flat single-surface screens, never `#000`.
- Borders and dividers: `--line`, `--line-strong`, `--line-bright` — not raw grays.
- **Max two accents per component.** Lime = action/success. Magenta = promo/alert. Cyan/azure/plum only as semantic support.
- Glow shadows (`--shadow-glow-lime`, `--shadow-glow-magenta`) are reserved for key CTAs and promo moments — not decoration.
- Never hardcode hex; if a value isn't a token, it doesn't ship.

## Do / Don't

- Do keep density high: compact paddings, tight type, information-rich rows.
- Do verify light mode early — flip the attribute before adding sections.
- Don't import warm neutrals or soft SaaS styling — Halogen is cool, precise, studio-grade.
- Don't mix Halogen with other systems' tokens or components.
- UI copy voice: precise, engineering, studio-cool. Short sentences, concrete claims.
