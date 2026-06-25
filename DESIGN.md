---
name: "SS Developers Site"
description: "Brand‑focused informative landing site"
colors:
  green: "#00c875" # Mint (primary)
  green-dim: "#00a860" # Darker Mint (hover state)
  green-pale: "#e6f9f2" # Light Mint (badge background)
  accent-red: "#ff5f57" # Coral
  accent-yellow: "#febc2e" # Goldenrod
  accent-green: "#28c840" # Lime
  ink: "#111111" # Ink
  ink-2: "#111111" # Ink (button text)
  ink-3: "#6b7280" # Slate (softer tone)
  paper: "#ffffff" # Paper
  gray-mid: "#6b7280" # Slate
  gray-soft: "#f2f2ef" # Soft Gray
  silver: "#e2e2de" # Silver
  accent: "#73777f" # Stone
rounded:
  sm: "1.5rem"
radius: "1.5rem"
ease: "cubic-bezier(0.4, 0, 0.2, 1)"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
typography:
  display:
    fontFamily: "'Space Grotesk', sans-serif"
    fontWeight: 700
    fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)"
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontWeight: 400
    fontSize: "1rem"
    lineHeight: 1.5
---

# Design System: SS Developers Site

## 1. Overview

**Creative North Star:** "The Reliable Beacon"

A confident, trustworthy, and steady visual language that guides visitors through clear information hierarchy. The design balances bold accent greens with restrained neutrals, delivering an approachable yet professional feel. **Do not** fall into generic SaaS‑metric layouts, gradient text, or side‑stripe borders greater than 1px.

### Key Characteristics:
- **Tactile and Confident** components with solid shapes and clear hierarchy.
- High contrast (≥4.5:1) body text on a clean white background.
- Subtle elevation via a single soft shadow.
- Motion limited to purposeful hover lifts and a pulse animation on badge dots.

## 2. Colors

A focused palette anchored by **Mint** (primary) with supporting accents and neutrals.

### Primary
- **Mint** (`#00c875`): Used for primary actions, links, and key highlights.

### Accents
- **Coral** (`#ff5f57`): Calls to attention, error states.
- **Goldenrod** (`#febc2e`): Highlights, secondary emphasis.
- **Lime** (`#28c840`): Minor accent, complementary to Mint.

### Neutrals
- **Ink** (`#111111`): Primary text color.
- **Paper** (`#ffffff`): Base background.
- **Slate** (`#6b7280`): Secondary text, muted UI elements.
- **Soft Gray** (`#f2f2ef`): Background subtleties, card surfaces.
- **Silver** (`#e2e2de`): Border and selection highlight.
- **Stone** (`#73777f`): Additional neutral for disabled states.

## 3. Typography

### Display
- **Font:** Space Grotesk (sans‑serif)
- **Weight:** 700 (Bold)
- **Size:** `clamp(2.2rem, 4.5vw, 3.4rem)`
- **Line‑height:** 1.12
- **Letter‑spacing:** -0.03em
- **Usage:** Hero headings, major section titles.

### Body
- **Font:** Inter (system‑stack fallback)
- **Weight:** 400 (Regular)
- **Size:** 1rem (16px)
- **Line‑height:** 1.5
- **Usage:** Paragraphs, supporting copy, form labels.

## 4. Elevation

A single subtle shadow provides depth without overwhelming flat design.

### Shadow Vocabulary
- **Default shadow:** `0 24px 60px rgba(17, 17, 17, 0.08)` – applied to elevated cards and the code‑window component.

## 5. Components

### Buttons
- **Primary (`.btn-primary`):**
  - Background: Mint (`var(--green)`).
  - Text: Ink‑2 (`var(--ink-2)`).
  - Border‑radius: 8px.
  - Hover: Darker Mint (`var(--green-dim)`) with upward translate (‑2px).
  - Padding: 14px × 28px.
- **Secondary (`.btn-secondary`):**
  - Background: Transparent.
  - Text: Ink‑2.
  - Border: 1.5px solid Silver.
  - Hover: Border‑color upgrades to Slate, lifts ‑2px.

### Hero Badge (`.hero-badge`)
- Background: `var(--green-pale)` (light mint).
- Text: `var(--green-dim)`.
- Border: 1px solid matching background.
- Rounded pill shape (`border-radius: 100px`).
- Includes a pulsing dot (`.hero-badge-dot`) with `animation: pulse 2s ease‑in‑out infinite`.

### Hero Section (`.hero` & `.hero-inner`)
- Layout: two‑column grid, gap 48px, centered content.
- Hero heading uses the Display typeface with clamp sizing.
- Sub‑heading (`.hero-sub`) uses body text with `var(--ink-3)` for a softer tone.

### Code Window (`.code-window`)
- Dark background `#0d1117` with rounded corners (14px) and dual‑layer shadow.
- Monospaced font stack, small size (0.78rem).
- Positioned absolute within the hero visual.

### Misc
- Global radius token (`--radius: 1.5rem`) informs any future rounded components.
- Ease token (`--ease`) drives all transition timings.

## 6. Do's and Don'ts

### Do:
- **Do** use Mint as the primary accent for calls‑to‑action.
- **Do** maintain ≥4.5:1 contrast for all body text against Paper.
- **Do** apply the default shadow only to elevated cards and the code window.
- **Do** keep motion purposeful: hover lifts, pulse on badge dot, no gratuitous animations.

### Don't:
- **Don't** use side‑stripe borders greater than 1 px as decorative accents.
- **Don't** apply gradient text or glass‑morphism effects.
- **Don't** overflow headings on narrow viewports; clamp values already guard against this.
- **Don't** repeat identical card grids without a functional reason.
- **Don't** employ uppercase tracked eyebrows on every section.

---

*This DESIGN.md follows the Google Stitch specification and can be consumed by the `.impeccable/design.json` side‑car for live preview tooling.*