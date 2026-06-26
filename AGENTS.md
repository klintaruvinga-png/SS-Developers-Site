# Agent Instructions for SS Developers

## Purpose
This repository is a static Astro portfolio site for a solo engineering practice focused on trading systems, fintech, and data integrity. AI agents should treat it as a content-first static website with minimal runtime behavior.

## Quick start
- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Build for production: `npm run build`
- Preview production build manually if needed: `npx http-server dist`

## Key facts
- Framework: Astro + Tailwind + React integration
- Output: static site generation only (`astro build`)
- No server-side backend code is present in this repo
- Contact form uses Formspree and requires the `FORMSPREE_ENDPOINT` environment variable

## Important files
- `astro.config.mjs` — Astro runtime configuration, build format, site URL
- `tailwind.config.cjs` — Tailwind content paths and theme extensions
- `src/layouts/BaseLayout.astro` — shared page structure, global CSS, navigation, footer, and `DogCursor`
- `src/pages/*.astro` — page content for Home, Projects, Architecture, How I Work, Work With Me, Contact, Now, and project case study pages
- `src/components/ContactForm.astro` — static contact form implementation
- `src/components/DogCursor.astro` — interactive cursor component currently included globally
- `src/components/Diagram.astro` and `src/lib/diagramData.ts` — diagram rendering and data
- `src/styles/global.css` — global styling and CSS variable definitions

## Conventions and expectations
- Use first-person, honest solo-engineer tone: the site is about one person, not a studio.
- Avoid generic agency language, fake testimonials, and stock imagery.
- Emphasize real systems engineering, architecture, and credible case study narrative.
- Keep diagrams and visuals focused on flow/topology; do not expose proprietary formulas or sensitive logic.
- Preserve the site’s minimal design language and restrained accent usage.
- Follow an 8px base spacing system with 4px increments. Prefer the shared spacing tokens in `src/styles/global.css` over one-off spacing values.
- Do not add runtime backend dependencies or server-side features unless explicitly required by the project vision.
- Treat the homepage hero as an image-led proof surface, not a split marketing block: text rides on the left-side negative space and the technical artifact stays visible on the right.
- When adjusting the homepage hero image, avoid over-zooming. Keep enough of the tablet and stand visible that the image still reads as a real object, not an abstract crop.
- On desktop and other wide screens, prefer widening the hero text measure before letting the headline stack into too many short lines.
- Personality should stay slightly austere and controlled. Avoid hype, breathless “premium” language, and friendly-studio warmth that makes the site sound less exact.

## Documentation references
- `PRD.md` — project vision, positioning, launch scope, and diagram safety rules
- `Documentation/Planning & Development/plan.md` — site structure, tone, page goals, and content priorities
- `Documentation/Planning & Development/phased-plan.md` — development phases and launch checklist
- `Documentation/Planning & Development/checklists.md` — quality and release criteria
- `Image-Prompts.md` — guidance for diagrams and visual style

## Notes for agents
- There is no dedicated test suite configured in `package.json`.
- `lighthouse` and `http-server` appear present for manual audits and previewing production output.
- The production build is static; changes should be validated via `astro build` and browser preview.
- If modifying contact behavior, preserve the static form approach and the environment-based Formspree endpoint.
- If a design change introduces a stronger visual decision, write the durable rationale back into `AGENTS.md`, `DESIGN.md`, or `.impeccable/design.json` so the next pass preserves it instead of rediscovering it.

---

## Suggested next customization
Consider creating a specialized skill or prompt for reviewing content and UI changes against the site’s tone and architecture goals, especially when working on `Projects`, `Architecture`, and `How I Work` pages.
