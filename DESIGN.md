---
name: "SS Developers Site"
description: "A dark technical portfolio for software where correctness matters"
colors:
  bg: "oklch(0.16 0.02 248)"
  bg-deep: "oklch(0.13 0.02 248)"
  surface: "oklch(0.2 0.025 242 / 0.9)"
  surface-strong: "oklch(0.24 0.03 236 / 0.96)"
  line: "oklch(0.39 0.04 225 / 0.6)"
  text: "oklch(0.95 0.008 210)"
  muted: "oklch(0.76 0.025 220)"
  muted-strong: "oklch(0.86 0.018 215)"
  mint: "oklch(0.8 0.17 162)"
  mint-strong: "oklch(0.72 0.17 162)"
  button-ink: "oklch(0.2 0.02 225)"
  gold: "oklch(0.8 0.11 92)"
  gold-strong: "oklch(0.72 0.12 84)"
  danger: "oklch(0.68 0.17 28)"
typography:
  display:
    fontFamily: "\"Chivo\", \"Arial Narrow\", sans-serif"
    fontSize: "clamp(2.6rem, 4vw, 3.4rem)"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  body:
    fontFamily: "\"Source Sans 3\", \"Segoe UI\", sans-serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.76
  label:
    fontFamily: "\"Source Sans 3\", \"Segoe UI\", sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  button: "5px"
  sm: "1rem"
  md: "1.25rem"
  lg: "1.5rem"
  pill: "999px"
spacing:
  rule: "8px base unit with 4px increments"
  scale:
    step-1: "0.25rem"
    step-2: "0.5rem"
    step-3: "0.75rem"
    step-4: "1rem"
    step-5: "1.25rem"
    step-6: "1.5rem"
    step-7: "1.75rem"
    step-8: "2rem"
    step-9: "2.5rem"
    step-10: "3rem"
    step-12: "4rem"
    step-14: "5rem"
    step-16: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.button-ink}"
    rounded: "{rounded.button}"
    padding: "1rem 1.5625rem"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "{colors.text}"
    rounded: "{rounded.button}"
    padding: "1rem 1.5625rem"
  nav-pill:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1rem"
---

# Design System: SS Developers Site

## 1. Overview

**Creative North Star: "The Midnight Control Room"**

This system is designed to feel like a precise operational surface, not a generic software agency page. The mood is dark, calm, and technical. It signals that the work is serious, the thinking is deliberate, and the person behind the site understands systems that have to stay correct under pressure.

The design rejects startup theater. It does not use a bright white canvas, soft-beige AI minimalism, hand-drawn whimsy, or generic SaaS marketing grammar. It leads with authority, contrast, and evidence. The imagery is atmospheric and technical, but the content stays readable and grounded.

**Key Characteristics:**
- Dense visual atmosphere with restrained mint signal accents
- Heavy display typography balanced by clear long-form reading text
- Rounded surfaces that feel engineered rather than playful
- Dark layered panels instead of white cards on a neutral page
- Evidence-first structure with credibility ahead of persuasion

## 2. Colors

The palette is committed and nocturnal. Mint is the signal color, not the background color. The darker neutrals carry most of the surface area so the green can retain authority.

### Primary

- **Signal Mint** (`oklch(0.8 0.17 162)`): Primary actions, active emphasis, and short high-value highlights.
- **Compressed Mint** (`oklch(0.72 0.17 162)`): Hover state for the primary action and stronger accent moments.

### Secondary

- **Control Gold** (`oklch(0.8 0.11 92)`): Secondary accent for heading emphasis, highlighted links, and warm signal moments.
- **Burnished Gold** (`oklch(0.72 0.12 84)`): Slightly deeper gold used where the accent needs more weight against dark surfaces.
- **Fault Red** (`oklch(0.68 0.17 28)`): Error-state accent and system warning punctuation only.

### Neutral

- **Night Field** (`oklch(0.16 0.02 248)`): Main page background.
- **Lower Deck** (`oklch(0.13 0.02 248)`): Deeper background stop for long-scroll atmosphere.
- **Instrument Surface** (`oklch(0.2 0.025 242 / 0.9)`): Standard panel background.
- **Raised Instrument Surface** (`oklch(0.24 0.03 236 / 0.96)`): Stronger panel treatment when a module needs extra emphasis.
- **Signal Line** (`oklch(0.39 0.04 225 / 0.6)`): Borders, separators, and low-contrast structure.
- **Operator Text** (`oklch(0.95 0.008 210)`): High-contrast primary text.
- **Muted Operator Text** (`oklch(0.76 0.025 220)`): Secondary text and support copy.
- **Support Text Bright** (`oklch(0.86 0.018 215)`): Slightly brighter support copy on complex dark backgrounds.
- **Button Ink** (`oklch(0.2 0.02 225)`): Text on the mint call-to-action.

### Named Rules

**The Signal Discipline Rule.** Mint is not decorative wallpaper. It appears where action, state, or emphasis matters.

**The Dark Surface Rule.** The page lives on dark neutrals. Light panels and white-body layouts are prohibited.

## 3. Typography

**Display Font:** Chivo, Arial Narrow, sans-serif
**Body Font:** Source Sans 3, Segoe UI, sans-serif
**Label/Mono Font:** JetBrains Mono, SFMono-Regular, Consolas, monospace

**Character:** The pairing is direct and industrial. Chivo gives the site a heavy engineered voice. Source Sans 3 keeps the reading rhythm human and open enough for longer technical copy.

### Hierarchy

- **Display** (900, `clamp(2.6rem, 4vw, 3.4rem)`, `0.96`): Used in hero headlines and major section statements. Tight, heavy, and unmistakable, but smaller than the older studio-scale display.
- **Headline** (800, `clamp(2.15rem, 3.8vw, 3.45rem)`, `0.98`): Used for section titles and key transitions in the narrative.
- **Title** (800, `clamp(1.55rem, 2.8vw, 2.35rem)`, `1.04`): Used inside panels, case study entries, and architecture modules.
- **Body** (400, `1.12rem`, `1.76`): Used for paragraphs and explanatory text. Line length stays within readable bounds and breathes a little more on the dark surface.
- **Label** (600, `0.95rem`, `1.4`): Used for intro lines, short metadata, and navigational text.

### Named Rules

**The Weight Contrast Rule.** Headings are allowed to be heavy because the body copy is calm. Never flatten the page into one typographic weight band.

**The No Costume Mono Rule.** Monospace belongs in code, system cues, and console motifs. It does not become the brand voice for general copy.

**The Wide Hero Rule.** On desktop, let the homepage hero headline spread horizontally before stacking it into a tall block. The first move is a wider measure, not a larger font.

## 4. Spacing & Rhythm

The site uses an 8px base spacing system, with all intermediate steps moving in 4px increments. That means the layout can tighten or open up without introducing visual drift. Shared spacing tokens in `src/styles/global.css` are the source of truth; ad hoc values should be treated as defects unless there is a strong optical reason.

### Scale

- **Step 1** (`0.25rem / 4px`): Hairline adjacency, dot offsets, and very tight internal spacing.
- **Step 2** (`0.5rem / 8px`): Small label spacing and compact inline groupings.
- **Step 3** (`0.75rem / 12px`): Tight control padding and small stacked relationships.
- **Step 4** (`1rem / 16px`): Default control padding and standard internal spacing.
- **Step 5** (`1.25rem / 20px`): Medium component padding and compact layout separation.
- **Step 6** (`1.5rem / 24px`): Standard card padding and stronger section internals.
- **Step 8** (`2rem / 32px`) and above: Grid gaps, section spacing, and viewport-scale rhythm.

### Named Rules

**The Shared-Token Rule.** If spacing is reused, it should be a token, not a fresh number.

**The 4px Escape Hatch Rule.** When the default 8px cadence feels too loose or too tight, adjust by 4px, not by arbitrary decimals.

## 5. Elevation

Depth comes from dark layering, subtle borders, and strong shadow containment. The system is not flat, but it is also not glossy. Panels feel seated into the page like technical instruments, not floating marketing cards.

### Shadow Vocabulary

- **Panel Shadow** (`0 24px 64px rgba(0, 0, 0, 0.34)`): Used for major surfaces, feature panels, and dropdowns.
- **Action Shadow** (`0 16px 36px rgba(0, 0, 0, 0.18)`): Used for the primary button and other compressed interactive highlights.

### Named Rules

**The Dark Depth Rule.** Elevation is expressed through darkness and controlled shadow weight, not through bright glows or frosted glass effects.

## 6. Components

### Buttons

- **Shape:** Primary and secondary actions use a tighter `5px` corner radius with wider horizontal padding. Pill treatment is reserved for nav chips and small status surfaces.
- **Primary:** Mint fill with dark ink text, bold display-family weight, and soft lift on hover.
- **Hover / Focus:** The mint deepens and the button lifts slightly. Motion is short and direct.
- **Secondary:** Transparent dark surface with a faint border and no fake depth tricks.

### Navigation

- **Desktop:** Compact text links with a pill active state and a clear mint action on the right.
- **Mobile:** Summary-triggered menu panel. Never rely on hidden horizontal overflow as the only way to reach links.
- **Brand lockup:** A compact mark image that reads clearly in the sticky nav without turning the header into a logo showcase.

### Panels and Cards

- **Corner Style:** Moderately rounded (`1.5rem`) for larger surfaces and slightly tighter (`1.15rem`) for smaller controls.
- **Background:** Dark layered neutrals with faint top-down highlight and thin cool borders.
- **Internal Padding:** Tight enough to feel compact, never cramped.

### Inputs / Fields

- **Style:** Dark field backgrounds, subtle borders, and strong text contrast.
- **Focus:** Border sharpened with a mint focus ring.
- **Tone:** Inputs should feel operational and serious, not playful or consumer-app soft.

### Hero Visual

- **Role:** A single atmospheric system surface that supports the headline without overpowering it.
- **Treatment:** Use a wide technical render with left-side negative space for overlaid copy, a restrained dark scrim, and a crop that keeps enough of the device and stand visible to read as a real artifact rather than an abstract texture.
- **Homepage bias:** The strongest home hero image should feel like a photographed product surface or technical object, not stock “developer” imagery and not a zoomed-in glow field.

### Heading Emphasis

- **Section titles and project titles:** Use the gold accent as an underline where the heading needs extra weight or a clearer anchor in the scan path.
- **Role:** The gold underline marks emphasis without turning the page into a second mint system.

## 7. Do's and Don'ts

### Do:

- **Do** keep the site in a committed dark palette where mint acts as a signal, not a wash.
- **Do** use first-person language that sounds like one careful engineer, not a team or a studio.
- **Do** lead with proof of work, architecture, and system reasoning before broad service claims.
- **Do** preserve strong contrast across headings, body text, and form controls.
- **Do** keep diagrams focused on topology and flow, not proprietary logic.
- **Do** preserve left-side negative space and visible device detail in the homepage hero when swapping or reframing the hero image.

### Don't:

- **Don't** use generic web-agency language, fake team framing, or bloated service menus.
- **Don't** use stock developer imagery, fake testimonials, or SaaS-style marketing tropes that overpower the work itself.
- **Don't** expose proprietary trading logic, formulas, thresholds, or anything that turns architecture storytelling into strategy leakage.
- **Don't** bring back hand-drawn mascots, sketch filters, or whimsical cursor treatments. (The current signal-based cursor treatment with mint accent is permitted as it reinforces the technical control room aesthetic and respects user motion preferences.)
- **Don't** use gradient text, decorative side stripes, glassmorphism-by-default, or repeated tracked section eyebrows.
- **Don't** crop the homepage hero so tightly that the technical object turns into an unrecognizable abstract panel.
