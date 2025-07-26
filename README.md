# Demo AI assistance + Baseline web features

Demo for my talk at I/O Extended 2025.

Not meant to be exhaustive; use this as starting point to customise to your own needs.

## Requirement

- Node v18.20.8 or v20.3.0, v22.0.0 or higher

Created with Astro minimal starter template (`pnpm create astro -- --template minimal`).

## Installation

1. Fork/clone this repo
2. Run `pnpm i` (or use other package manager)
   - This should populate the `ai-utils/web-features` dir
3. Copy `ai-utils/rules`  
   - Cursor: `cp ai-utils/rules .cursor/rules`
   - Windsurf: `cp ai-utils/rules .windsurf/rules`
   - GitHub Copilot: `cp ai-utils/rules .github/instructions`
   - Copy manually for other IDEs/extensions

## Prompt examples

Check Baseline status by file:

> use rule `@check-baseline` on `@Popover.astro` and `@popover.css`

Ask to find and implement polyfill:

> use rule `@polyfill-baseline` for the Popover API
