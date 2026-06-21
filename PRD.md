# SS Developers — Product Requirements Document

**Status:** Draft v1 — ready for build
**Source of truth:** `Documentation/Planning & Development/plan.md` (v2.5, final), cross-referenced with `phased-plan.md`, `checklists.md`, `progress-trackers.md`, `status-logs.md`
**Owner:** Kudzie
**Domain:** `dev.stokvelsociety.co.za` (confirmed fallback — zero-cost, accepted as final, not a placeholder)

---

## 1. Purpose & Positioning

SS Developers is Kudzie's personal engineering site. It exists to prove, through real shipped systems, that Kudzie builds and hardens software where correctness matters — and to make hiring availability visible without turning the site into an agency pitch.

**Positioning statement (locked, first-person):**
> I build and harden software where correctness matters — trading infrastructure, fintech platforms, and the data-integrity layers underneath them.

**Hero copy (locked):**
> I build real systems for trading, fintech, and automation.
>
> From MT5 trading infrastructure to WordPress REST APIs, React dashboards, data-integrity layers, and AI-assisted dev workflows — I build and harden software where correctness matters.

**Hero CTAs (locked, equal weight):** `Explore the Work` / `Work With Me`

This resolves the central tension in the source planning docs (product-credibility vs. lead-generation) at the UI level rather than the strategic level: primary visual weight stays on proof-of-work, but hiring availability is never hidden.

**Voice rules (non-negotiable, carried through every page):**
- First person singular ("I"), never "we" — there is no team, and the solo-founder honesty is treated as credibility, not a weakness to disguise.
- No agency-style service-bullet language ("Custom trading systems / Fintech platforms / Dashboards").
- No fake testimonials, no stock photography, no stock illustration of generic "developers."
- No real photo of Kudzie anywhere on the site (confirmed) — personal presence is conveyed through voice and an abstract/avatar mark only, never a literal headshot.

---

## 2. Out of Scope at Launch (explicitly deferred)

These are deferred by deliberate decision in `plan.md`, not by omission — do not let scope creep reintroduce them pre-launch:

- **Third "Labs / AI Engineering" project.** The Claude/Codex/Copilot workflow is real but is a *practice*, not a shipped product. It lives inside "How I Work" only. Promote to a flagship Projects entry only if it becomes a concrete artifact (OSS tool, framework, release).
- **Engineering Notes / blog.** Fast-follow only. Launch with the section absent or "coming soon." Do not launch with zero posts — an empty, dated blog actively damages credibility. Requires 2–3 banked posts before going live.
- **Public repo links.** Deferred pending the Proprietary Information Check (Section 7). Not a launch blocker to omit; would be a launch blocker to include carelessly.
- **Dashboard UI screenshots.** Confirmed: no product screenshots at launch, sanitized or otherwise. SuperFIB and Stokvel Society case studies are diagram-and-copy only. This removes the screenshot-redaction workstream from the proprietary-safety checklist entirely for v1.
- **Price list / service tiers.** "Work With Me" is a fit/no-fit statement, not a menu.

---

## 3. Information Architecture

```
Home
Projects
 ├── SMC SuperFIB
 └── Stokvel Society
Architecture
How I Work
Work With Me
Contact
Now

(hidden until 2-3 posts banked)
Engineering Notes
```

Nav at launch excludes Engineering Notes entirely (not grayed out, not "coming soon" in nav — fully absent per `phased-plan.md` Phase 6: "keep it off launch nav until then").

---

## 4. Page Specifications

### 4.1 Home
**Purpose:** Establish positioning in one screen, route to proof (Projects) or conversion (Work With Me).

| Section | Content |
|---|---|
| Hero | Tagline + sub-line (locked copy above) + two equal-weight CTA buttons |
| Capability strip | Three items only, kept narrow: *Trading Systems & Algo Engineering* / *Fintech & Financial Platforms* / *Real-Time Data & Backend Architecture*. No "and more," no fourth item — the narrowness is the point. |
| Featured work | Two cards: SMC SuperFIB, Stokvel Society. Each links to its case study. No metrics/screenshots on the card — title, one-line problem framing, "View case study." |
| Footer | Contact link, nav repeat, no social-proof badges |

**Explicitly absent:** testimonials, client logos, stock photography, hero illustration of a generic "developer."

### 4.2 Projects → SMC SuperFIB
**Structure (locked):** Problem → Architecture → Engineering Challenges Solved → Status

- **Problem:** Four independent systems (Pine Script indicator, PHP/WordPress backend, MT5 Expert Advisors, React dashboard) that must agree on the same truth, in real time, with money on the line. Frame this as a distributed-systems problem, not a trading-strategy pitch.
- **Architecture:** Hand-drawn-style flow diagram (centerpiece — see Section 6). Flow only: which system talks to which, in what order. Never calculation logic.
- **Engineering Challenges Solved:** Drawn from real, already-lived detail:
  - Backend-as-source-of-truth architecture across 3+ runtimes/languages
  - Broker time normalization (UTC+2 offset causing future-timestamped candles)
  - Staleness gates and `STALE_HELD` blocker logic
  - Cross-platform parity audits that found and fixed real divergence (chop threshold drift, HTF bias range mismatches)
  - Nearest-minute rounding fixes, cached broker offsets to eliminate timestamp jitter
- **Status:** Plain, current, factual — not a roadmap pitch deck.
- **Outbound link:** to relevant Engineering Notes posts once that section exists (placeholder/no-op at launch).

### 4.3 Projects → Stokvel Society
**Structure (locked):** Problem (what stokvels actually need) → What was built → Status

- Deliberately a different register from SuperFIB: consumer trust vs. trading precision. Let the contrast read as range, not inconsistency.
- **New for this PRD:** Stokvel Society gets its own simple flow diagram (confirmed), parallel in *function* to the SuperFIB diagram but distinct in *content* — likely something like Member → Contribution → Ledger/Trust Layer → Payout, rendered in the same hand-drawn visual system for consistency across case studies. See Section 6.2.

### 4.4 Architecture
**Purpose:** A dedicated page for the cross-system diagram(s), pulled out of the SuperFIB case study as its own visual section.

- **Confirmed structure:** pure flow diagram — boxes and arrows, Pine → PHP → MT5 → React, clearly labeled. No annotation callouts, no layered/stacked metaphor, no isometric treatment. One clean, legible flow.
- Short topology narrative alongside the diagram (a few sentences, not a wall of text) explaining what the diagram shows and why backend authority matters.
- Same Proprietary Information Check applies (Section 7) — this page is the highest-risk surface for accidental logic leakage since it's the most detailed diagram on the site.

### 4.5 How I Work
**Purpose:** Replace generic "About." Not a CV, not a mission-statement essay.

- Real process, stated specifically: patch plans, acceptance criteria, regression checklists, iterative engineering. This is presented as an actual differentiator for a solo developer asking to be trusted with financially-critical systems — concrete, not aspirational.
- Honest, low-key mention of the AI-assisted workflow (Claude/Codex/Copilot) as part of *how* the work happens, not as an achievement to spotlight.
- Short, factual personal framing: solo, South Africa, building real systems. Explicitly avoid the "I build systems. My work sits at the intersection of..." mission-statement register — at this level of concreteness it reads as performance, not fact.

### 4.6 Work With Me
**Purpose:** The resolution to the lead-generation tension. A real, honest fit/no-fit page — not a price list.

- What fits: engagements with real engineering depth — trading infrastructure, fintech, multi-platform sync, data-integrity problems.
- What doesn't: generic brochure sites, anything outside this lane.
- One single, clear path to Contact. No secondary CTA noise elsewhere on the site competing with this page's role.

### 4.7 Contact
**Purpose:** Convert "Work With Me" interest into a qualified inbound message.

- **Confirmed:** a form with qualifying fields, not a bare mailto link — name/email, project type, timeline, message. Fields are short and optional beyond the basics, designed to pre-filter inbound given "broad, any client" is the current target-audience answer (a filterless form risks unqualified leads consuming time).
- **Mechanism (recommended, not yet confirmed by Kudzie):** Given the locked tech-stack decision (Astro, static-generated, no backend), a static-form-handling service (e.g. Formspree, Netlify Forms, or equivalent) posting to email is the natural fit — it keeps the site fully static and avoids standing up a serverless function for something this low-volume. **Flag for Kudzie's confirmation before build**, since the form mechanism specifically wasn't locked in scoping.

### 4.8 Now
**Purpose:** Lightweight, high-signal, low-maintenance-cost proof of current activity.

- Update cadence: monthly.
- Format (locked):
  ```
  Currently Building
  - SuperFIB Dashboard v4 / signal board reconciliation
  - StokvelSociety [current focus]

  Currently Hardening
  - Data integrity layer / broker feed reliability
  ```
- Explicitly skip a "Currently Reading/Thinking About" section unless it's genuinely maintained — an abandoned Now page is worse than no Now page, same logic applied to Engineering Notes.

### 4.9 Engineering Notes (fast-follow, not launch scope)
- Real topics already lived: backend authority in multi-platform sync, diagnosing signal parity failures across Pine/PHP/MT5, broker time normalization, staleness gates.
- Hard rule: zero posts published is worse than the section not existing. Bank 2–3 posts before flipping it on, then add to nav.

---

## 5. Visual System

### 5.1 Palette
**Monochrome + single sharp accent** (confirmed).

| Token | Role | Direction |
|---|---|---|
| `--ink` | Primary text | Near-black, not pure `#000` (softer on a light background) |
| `--paper` | Background | Off-white / pure white — clean light editorial base |
| `--gray-mid` | Secondary text, borders, dividers | Mid-gray, desaturated |
| `--gray-soft` | Card backgrounds, subtle section breaks | Very light gray |
| `--accent` | **Signal green** — used sparingly only: links, active states, the diagram's "live/flow" elements, CTA hover state | Terminal/trading-echo green, but disciplined — never a background fill, never decorative |

The accent's restraint is the design rule, not just a stylistic preference: plan.md's "no fake testimonials, no stock photography" discipline extends visually to "no color noise." If signal green appears more than once per screen outside of links, it's being overused.

### 5.2 Typography
**Mono headers, sans body** (confirmed).

- **Headers (H1–H4), nav labels, button text, "Now" page status lines:** monospace. Signals "engineering" / "system label" without committing to a full terminal pastiche.
- **Body copy, case study prose, form labels:** clean sans-serif. Keeps long-form reading comfortable — this is an editorial site first, a dev-flex second.
- Recommend a real, well-hinted mono (e.g. JetBrains Mono, IBM Plex Mono, or similar) paired with a humanist sans (e.g. Inter, IBM Plex Sans) for legibility and a coherent type family story (Plex family covers both halves natively if a single foundry pairing is preferred).

### 5.3 Layout & Tone
- Clean light, editorial/engineering-blog register (confirmed) — closer to a well-designed engineering blog or technical documentation site than a SaaS marketing page or a trading-platform UI.
- Generous whitespace, restrained UI chrome, typography carrying most of the visual weight.
- No hero illustration, no abstract gradient blobs, no generic "tech" iconography (circuit boards, glowing nodes, etc.) — those read as stock and undercut the specific, lived-detail tone the case studies are built on.

### 5.4 Personal/Brand Mark
- No real photo of Kudzie (confirmed). If a personal mark is used (e.g. in "How I Work" or a footer signature), it should be abstract or typographic — not a generated "avatar person," which risks reading as a stock illustration substitute for the photo the plan explicitly rejects. A simple wordmark or monogram in the mono typeface is the safer default; treat any figurative avatar option as optional and review against the "no stock-illustration developer" rule before using it.

---

## 6. Diagram System

All diagrams: **hand-drawn/sketch style** (confirmed) — whiteboard-feel linework, not polished vector iconography. This is a deliberate counterweight to the technical precision of the content itself: it signals "I understand this deeply enough to sketch it casually," consistent with the solo-founder-honesty positioning rather than over-producing the visuals to look more impressive than the actual one-person operation.

Despite the hand-drawn *rendering*, the diagrams must be **structurally precise** — accurate flow direction, correctly labeled systems, no decorative embellishment that implies false complexity or hides real complexity.

### 6.1 SuperFIB Architecture Diagram (case study page + Architecture page)
- **Type:** Linear/branching flow diagram.
- **Nodes:** Pine Script Indicator (TradingView) → PHP/WordPress REST API (source of truth) ← MT5 Expert Advisors (MQL5) → React/TypeScript Dashboard.
- Actual topology is backend-authoritative, not strictly linear — the diagram should show PHP as the hub/source of truth with Pine, MT5, and React as spokes reading from and writing to it, not a left-to-right pipeline. (Verify this against the real architecture before finalizing — the case study copy explicitly emphasizes "backend-as-source-of-truth," so the diagram topology needs to match that claim rather than imply a simple pipeline.)
- **Labels:** plain system names only (e.g. "PHP / WordPress API — source of truth," "MT5 EA," "Pine Script Indicator," "React Dashboard"). No data-field names, no formula references, no threshold values.
- **On the Architecture page specifically:** confirmed as a **pure flow diagram** — no annotation callouts (e.g. no "staleness gate here" label), no layered band for the data-integrity layer. Keep this version the cleanest, most legible one on the site.
- **On the SuperFIB case study page:** the same diagram (or a near-identical variant) can carry slightly more narrative framing in surrounding copy, but the diagram artwork itself should stay flow-only per the Proprietary Information Check.

### 6.2 Stokvel Society Diagram (new — confirmed in scoping)
- **Type:** Linear flow diagram, same hand-drawn visual system as SuperFIB, for cross-case-study consistency.
- **Suggested nodes (verify against actual product before finalizing):** Member Contribution → Stokvel Ledger / Trust Layer → Payout / Distribution. Adjust node count and labels to match what Stokvel Society actually does — this PRD proposes structure, not final copy.
- **Purpose:** Visually reinforce the "different register" plan.md calls for — same engineering rigor, different domain (consumer trust vs. trading precision) — without needing the page to lean on screenshots, which are excluded at launch.

### 6.3 Diagram Safety Checklist (carried forward from `checklists.md`, unchanged)
- [ ] Diagrams show data *flow* only — never fib/signal calculation logic
- [ ] No real lot-sizing formulas, threshold values, or signal-quality rules anywhere in diagram text or labels
- [ ] Any linked public repo reviewed file-by-file before a link goes live (N/A at launch — no repo links in scope)
- [ ] No dashboard screenshots requiring redaction review (N/A at launch — confirmed no screenshots)

---

## 7. Proprietary Information Check
Unchanged from `plan.md`, restated here as a hard gate before publishing any diagram:

- [ ] Diagrams show data flow (which system talks to which, in what order) — never the fib/signal calculation logic itself
- [ ] No real lot-sizing formulas, threshold values, or signal-quality rules in public-facing text or code samples
- [ ] Any linked public repo reviewed file-by-file for accidental inclusion of proprietary logic before the link goes live
- [ ] Screenshots of the dashboard reviewed for visible numbers/strategy detail — **N/A at launch per confirmed scope (no screenshots)**, but re-activate this check if screenshots are ever added post-launch

---

## 8. Technical Requirements

### 8.1 Stack (locked in `plan.md`)
- **Framework:** Astro, static-generated (SSG, not SSR).
- **Rationale:** marketing/portfolio site needs speed, SEO, and low hosting cost — not client-side interactivity. React islands can be dropped in later if a live demo widget ever becomes relevant, but nothing in current scope requires it.
- **Isolation:** fully decoupled from the production SuperFIB/StokvelSociety stacks. No shared deploy pipeline, no risk of marketing-site changes touching live trading systems.

### 8.2 Hosting recommendation
Host was left undecided in scoping ("pick the best fit in the PRD"). All three candidates (Vercel, Netlify, Cloudflare Pages) are free-tier-sufficient for a static Astro site and were treated as equivalent in `plan.md`. Recommendation:

**→ Cloudflare Pages**, with Netlify as the close second choice if the qualifying contact form pushes toward Netlify Forms specifically (see 8.3).

Reasoning:
- Cloudflare Pages' free tier has no soft caps that matter at this traffic scale, fast global edge delivery suits a Lighthouse-performance-conscious launch checklist, and it keeps the domain's DNS and hosting in one place if `dev.stokvelsociety.co.za` is already (or will be) on Cloudflare DNS for the main Stokvel Society domain — likely, given the parent domain.
- If Kudzie wants the contact form mechanism to be Netlify Forms specifically (zero extra service, native to the host), that's a reasonable trigger to choose Netlify instead — flag this as the one decision point that should drive the host choice rather than the reverse.

### 8.3 Contact form mechanism (recommended, pending confirmation)
- Static form service (Formspree, Netlify Forms, or equivalent) posting to Kudzie's email. No custom backend, consistent with the static-site architecture.
- Fields: name, email, project type (select/short list), timeline (select/short list), message (free text).
- **This was not explicitly confirmed in scoping beyond "form with qualifying fields" — confirm specific service before Phase 3 build.**

### 8.4 SEO & Accessibility (from `phased-plan.md` Phase 2 / Phase 5)
- SEO metadata defaults per page (title, description, OG tags) set during Phase 2 scaffold, not bolted on later.
- Accessibility basics: semantic headings, labeled form fields, alt text on all diagrams (describing flow in words for screen readers — important given diagrams carry real content, not just decoration), keyboard navigation throughout.

---

## 9. Launch Scope vs. Fast-Follow (restated from `plan.md`, final)

**Launch with:**
Home · Projects (SuperFIB + Stokvel Society case studies, each with diagram) · Architecture · How I Work · Work With Me · Contact · Now

**Fast-follow, not launch-blocking:**
Engineering Notes (requires 2–3 banked posts first)

**Deliberately deferred, not in scope yet:**
Third "Labs/AI Engineering" project · public repo links (pending Section 7 review) · dashboard screenshots (confirmed excluded, not just deferred)

---

## 10. Build Phases (reference — full detail in `phased-plan.md`)

1. **Discovery & Launch Scope** — this PRD closes out this phase.
2. **Foundation & Structure** — Astro scaffold, shared layout, routing, SEO defaults.
3. **Page Buildout** — all nine launch pages per Section 4.
4. **Content, Copy & Safety** — copy pass for voice, Proprietary Information Check (Section 7) executed before any diagram or copy referencing system internals goes live.
5. **QA & Launch Prep** — Lighthouse, responsive QA, accessibility pass, CTA/link validation, staging deploy.
6. **Launch & Fast-Follow** — publish, verify, then begin banking Engineering Notes posts.

---

## 11. Open Items Requiring Kudzie's Confirmation

These are the only remaining unknowns after scoping — everything else in this PRD is locked:

1. **Contact form service** — Formspree vs. Netlify Forms vs. other (Section 8.3).
2. **Hosting platform final call** — Cloudflare Pages recommended, but not yet confirmed by Kudzie (Section 8.2).
3. **Stokvel Society diagram node labels** — proposed structure in Section 6.2 needs validation against the actual product flow before the diagram is built.
4. **SuperFIB diagram topology** — confirm hub-and-spoke (PHP as center) vs. linear pipeline framing matches the real backend-authority architecture (Section 6.1).
