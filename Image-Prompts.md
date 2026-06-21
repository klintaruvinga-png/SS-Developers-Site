# SS Developers — Image Prompts & Diagram Specs

**Companion to:** `PRD.md`
**Two deliverable types in this file:**
1. **AI image-generation prompts** — for hand-drawn texture/feel reference, decorative marks, and any exploratory visual generation (Midjourney/DALL·E-style tools).
2. **SVG diagram specs** — precise, code-based specifications for the actual diagrams that ship on the site, since these need to be accurate and editable, not just illustrative.

All prompts assume the locked visual system: **monochrome + signal-green accent, clean light editorial register, mono headers / sans body, hand-drawn diagram style, no stock photography, no real photo of Kudzie, no generic "developer" or "tech" iconography.**

---

## Part 1 — AI Image-Generation Prompts

Use these for mood-boarding, texture reference, or generating starting points that a human (or Claude artifact pass) then cleans up into the final SVGs in Part 2. None of these are meant to ship as-is as final diagrams — the diagrams themselves must be structurally precise per the PRD, which AI image generation alone won't guarantee.

### 1.1 Hand-drawn linework texture reference (general)
```
A single continuous hand-drawn ink line sketch, whiteboard-marker style,
black ink on pure white background, loose but confident linework, no
shading, no color, minimal cross-hatching, technical-diagram energy but
sketched casually as if drawn quickly to explain an idea to a colleague.
No text, no labels. Clean negative space. Style reference: a senior
engineer's whiteboard sketch, not a polished vector illustration.
```
**Use for:** establishing the linework quality/weight reference before building the actual SVG paths by hand or with a vector tool.

### 1.2 SuperFIB architecture diagram — exploratory pass
```
A hand-drawn whiteboard-style system diagram showing four labeled boxes
connected by arrows: "Pine Script Indicator," "PHP / WordPress API,"
"MT5 Expert Advisors," and "React Dashboard." The PHP/WordPress API box
sits centrally with arrows flowing to and from the other three boxes,
showing it as the hub. Black ink linework on white background, sketched
boxes with slightly imperfect edges, simple directional arrows, monospace-
style hand lettering for labels. One small accent of signal green (a
saturated, slightly cool green, like a terminal cursor) used only on the
arrows or a single highlighted box — never as a fill, never decorative.
No icons, no logos, no gradients, no 3D effects. Clean, legible, editorial.
```
**Use for:** initial composition exploration only. Final shipped version is the SVG spec in Section 2.1 — verify topology against actual system architecture before finalizing either version.

### 1.3 Stokvel Society flow diagram — exploratory pass
```
A hand-drawn whiteboard-style flow diagram showing three labeled boxes
in a left-to-right sequence: "Member Contribution," "Stokvel Ledger /
Trust Layer," and "Payout." Simple directional arrows between each box,
black ink linework on white background, same sketched/imperfect-edge
style as a technical whiteboard explanation. Monospace-style hand
lettering for labels. A single small accent of signal green on the
arrows only. No icons, no currency symbols, no generic "fintech" iconography
like coins or graphs. Calm, trustworthy, understated — not a marketing
infographic.
```
**Use for:** initial exploration. Confirm actual node labels with Kudzie (per PRD Section 11, item 3) before treating this as final — labels here are a proposed placeholder structure.

### 1.4 Abstract personal mark / signature (optional, for How I Work or footer)
```
A minimal abstract monogram mark built from simple geometric line
strokes, suggesting initials "S" and "S" without being literal letterforms,
black ink line art on white, monospace-adjacent geometric construction
(straight lines, sharp angles, no curves), no face, no figure, no
silhouette of a person. A single accent line in signal green. Extremely
restrained — should read as a small system glyph, not a logo trying to
be decorative.
```
**Use for:** an optional typographic/abstract personal mark only. Per PRD Section 5.4, treat any figurative-avatar-leaning output from this prompt with caution — if a generation starts resembling a stylized person/avatar rather than an abstract geometric mark, discard it; the "no real photo" decision was explicitly paired with "no avatar substitute" reasoning, not an invitation to generate a cartoon stand-in.

### 1.5 What NOT to generate (explicit negative guidance for any tool used)
Do not generate, and discard if produced:
- Any image resembling a real, identifiable person (including stylized/avatar versions standing in for Kudzie)
- Stock-style "developer at laptop," "team collaborating," or generic tech-worker imagery
- Glowing circuit boards, abstract data-flow particle effects, gradient blobs, or "AI/futuristic" tropes
- Trading-platform visual clichés: candlestick charts, bull/bear iconography, stacks of cash, glowing dollar signs
- Any rendering of actual dashboard UI (no screenshots, sanitized or otherwise, per confirmed launch scope)
- Full-color or multi-accent-color treatments — the monochrome + single signal-green-accent rule applies to every generated asset, not just the coded site

---

## Part 2 — SVG Diagram Specs

These are the specifications for the diagrams that actually ship on the site. Written as structural specs (not finished SVG code) so they can be built directly as hand-coded/hand-drawn-styled SVGs, or used as a precise brief for whoever executes the linework — keeping the "hand-drawn look, structurally precise content" balance the PRD calls for.

### Shared diagram system rules
- **Stroke:** consistent weight throughout (e.g. 2.5–3px at 1x), slightly irregular/organic path (achievable via a hand-drawn SVG filter, a traced sketch, or a library like rough.js) rather than perfectly straight CSS borders.
- **Color:** `--ink` (near-black) for all linework and labels by default. `--accent` (signal green) reserved for: (a) one element being actively explained in surrounding copy, or (b) directional arrows only, never both at once on the same diagram — pick one accent role per diagram and stay consistent.
- **Background:** transparent or `--paper` (matches page background) — no diagram "card" or boxed-in container that breaks the whiteboard feel.
- **Labels:** mono typeface, set in `--ink`, sized for legibility at the diagram's rendered size — never smaller than body-text-minus-one-step.
- **No drop shadows, no gradients, no rounded-corner soft-UI box styling** — these pull the diagram back toward "SaaS product illustration" and away from the intended whiteboard register.
- **Alt text requirement (accessibility, per PRD 8.4):** every diagram needs a full text-equivalent description of the flow for screen readers, written in plain language — not just "architecture diagram."

### 2.1 SuperFIB Architecture Diagram

**Used on:** Architecture page (clean version, no annotations) and SMC SuperFIB case study page (same diagram, may sit alongside more narrative copy).

**Topology — confirm before final build (flagged in PRD 6.1 / 11.4):**
- **Proposed:** hub-and-spoke, not linear pipeline. `PHP / WordPress API` sits centered, labeled as the authority/source of truth. Three other nodes — `Pine Script Indicator`, `MT5 Expert Advisors`, `React Dashboard` — surround it, each connected by a bidirectional or clearly-directional arrow showing read/write relationship to the hub.
- **Verify against real system:** if any node only ever reads (never writes) or vice versa, arrows should be single-direction, not bidirectional by default — accuracy here matters because the surrounding copy explicitly claims "backend-as-source-of-truth," and the diagram is the visual proof of that claim.

**Nodes (4 total):**
1. `Pine Script Indicator` — TradingView-side
2. `PHP / WordPress API` — center/hub, labeled distinctly (e.g. bolder outline or a small "source of truth" sub-label) to visually reinforce its authority role
3. `MT5 Expert Advisors` — MQL5-side
4. `React Dashboard` — frontend

**Arrows:** label direction only where it adds clarity (e.g. "writes" / "reads") — keep labels sparse; over-labeling arrows undercuts the whiteboard simplicity.

**Variant for Architecture page:** identical structure, zero supplementary annotation, zero callouts — the cleanest, most legible version on the site per the confirmed "pure flow diagram" decision.

**Variant for SuperFIB case study page:** same artwork; surrounding prose (not the SVG itself) can carry more narrative framing (staleness gates, parity audits, etc.) without the diagram graphic needing to change.

### 2.2 Stokvel Society Flow Diagram

**Used on:** Stokvel Society case study page only.

**Topology:** simple linear flow, left to right (or top to bottom on mobile — see responsive note below).

**Nodes (proposed, pending Kudzie confirmation per PRD 11.3):**
1. `Member Contribution`
2. `Stokvel Ledger / Trust Layer`
3. `Payout / Distribution`

Adjust node count, order, and labels once validated against the actual Stokvel Society product flow — this structure is a reasonable placeholder based on what a stokvel fundamentally does (members contribute → funds are tracked/held in trust → funds are distributed), not a confirmed technical spec.

**Visual relationship to SuperFIB diagram:** same hand-drawn linework system, same stroke weight, same single-accent-color rule — intentionally consistent so a visitor moving between the two case studies recognizes "this is the same person's diagram style" without the content being repetitive.

**Responsive behavior (both diagrams):**
- Desktop: horizontal flow as specified.
- Mobile: stack vertically, arrows rotate to point downward. Maintain label legibility — do not shrink mono labels below a readable minimum; reduce diagram width/scale instead, or simplify to fewer visible labels if needed at very small viewports (with full detail preserved in the alt text).

### 2.3 Build approach recommendation
Given the "hand-drawn but structurally precise" requirement, two practical paths:

1. **Traced sketch:** hand-draw the diagram on paper or a tablet following the node/arrow spec above, scan/export, trace into clean SVG paths. Most authentic to the "whiteboard" feel; more manual effort.
2. **Programmatic hand-drawn style:** build the diagram as a standard structured SVG (precise boxes/arrows) and apply a hand-drawn rendering library (e.g. rough.js or an SVG filter approximating sketch linework) to get organic-looking strokes from precise underlying geometry. Faster to iterate, easier to keep accurate if the architecture changes, and easier to maintain inside an Astro component.

Recommendation: **option 2** — it keeps the diagrams editable as the systems evolve (a real risk here, since SuperFIB's architecture is actively under development per the working-memory history of this project) without needing to re-draw by hand every time a node or flow direction changes.
