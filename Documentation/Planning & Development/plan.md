# SS Developers — Site Plan (Final, v2.5)

## Status of this document
This is the fourth and final pass, synthesizing: an initial agency-style plan,
a peer critique arguing for pure product-ecosystem framing, a synthesis that
held the Option A/B tension open rather than resolving it ("genuinely
unsure"), and two competing final plans (Plan 1: stronger positioning
language, "hybrid systems engineering studio" framing, dedicated-domain
recommendation; Plan 2: stronger structural resolution of the lead-gen
question via a first-class but undisguised "Work With Me" page) plus a
verdict on those two that this document adopts as final: **Plan 2's
structure, Plan 1's positioning language, with a slightly stronger but still
non-aggressive lead path.**

The underlying tension (product-credibility vs. client-lead-generation) was
never resolved with certainty about runway or near-term income need. This
plan doesn't pretend that's settled. It resolves the *site design* question
without requiring that answer: prove capability first through real systems,
make hiring availability unmistakable but undemanding. If runway turns out to
be tight, promote "Work With Me" further (e.g. into the hero). If product
traction becomes the actual priority, it can recede again. The structure
supports either without a rebuild.

---

## Positioning

**Not:** "We make websites, hire us." (generic agency)
**Not:** "Pure product showcase, contact us if you can find a way." (hides
availability)
**Actually:** A solo engineer who builds and hardens real,
financially-critical systems — algorithmic trading infrastructure, fintech
for community savings — and is open to select engagements that match that
depth. One person, not a studio, but the positioning language can still be
premium and specific without claiming a team that doesn't exist.

Working self-description (first person, not "we" — there's no team, and
pretending otherwise undercuts the solo-founder credibility that's actually
an asset here):
> I build and harden software where correctness matters — trading
> infrastructure, fintech platforms, and the data-integrity layers underneath
> them.

Hero direction (adopted from the v2.5 synthesis):
> **I build real systems for trading, fintech, and automation.**
>
> From MT5 trading infrastructure to WordPress REST APIs, React dashboards,
> data-integrity layers, and AI-assisted dev workflows — I build and harden
> software where correctness matters.

Hero buttons:
```
Explore the Work        Work With Me
```
One proves, one converts. Neither shouts. This directly resolves the
Option A/B tension at the UI level: the primary visual weight stays on the
work, but availability for hire is never hidden or implied-only.

---

## The Core Asset: The Parity Story

This is the single strongest piece of content on the entire site and should be
treated as such — not a feature bullet, a full case study with diagrams.

The story is not "I built a dashboard." It's:

> Four independent systems — a Pine Script indicator, a PHP/WordPress
> backend, MT5 Expert Advisors, and a React dashboard — that must agree on
> the same truth, in real time, with money on the line.

That's a senior distributed-systems problem wearing a trading-system
costume. Real, lived details to draw on (already true, not invented for
marketing):
- Backend-as-source-of-truth architecture across 3+ runtimes/languages
- Broker time normalization (UTC+2 offset causing future-timestamped candles)
- Staleness gates and `STALE_HELD` blocker logic
- Cross-platform parity audits finding real divergence (chop threshold drift,
  HTF bias range mismatches) and fixing them
- Nearest-minute rounding fixes, cached broker offsets to kill jitter

This is what separates the site from every "I built a todo app" portfolio.
Lean on it hard, in both the SuperFIB case study and in Engineering Notes.

---

## Sitemap

```
Home

Projects
 ├── SMC SuperFIB
 └── Stokvel Society

Engineering Notes        (fast-follow, not launch-blocking — see below)

Architecture

Now

How I Work               (replaces "About" — see below)

Work With Me             (replaces "Services" — see below)

Contact
```

Two deliberate choices carried through every revision to this point:
1. **No third flagship "AI Engineering / Labs" project at launch.** The
   Claude/Codex/Copilot workflow is genuinely interesting but is a *practice*,
   not a shipped product. Inflating it to a peer of SuperFIB and Stokvel
   Society dilutes the two things with real proof behind them. It lives
   inside "How I Work" instead. Promote it to its own Projects entry later
   if it becomes something concrete (an OSS tool, a framework, a release).
2. **"Work With Me" stays as a real, first-class page — and now also has a
   hero-level entry point.** Earlier drafts kept it present but understated
   (nav-only, no hero button) on the theory that runway might allow the site
   to compound for months before producing client work. That assumption was
   never confirmed. The final synthesis resolves this by giving "Work With
   Me" a second, equal-weight hero button alongside "Explore the Work" —
   visible without being a hard sell, present without dominating.

---

## Page-by-page

### Home
- Hero: tagline + two equal-weight buttons — "Explore the Work" / "Work With
  Me" (see Positioning above) — this is the final resolution of the
  lead-generation question; not a hard sell, not hidden either
- Capability strip (kept narrow, not "we do everything"): Trading Systems &
  Algo Engineering / Fintech & Financial Platforms / Real-Time Data &
  Backend Architecture
- Featured work: SuperFIB + Stokvel Society cards → case studies
- No fake testimonials, no stock photography, first person throughout
  ("I," not "we" — there's no team, and the solo-founder honesty is part of
  the credibility, not a weakness to hide)

### Projects → SMC SuperFIB
Structure: Problem → Architecture → Engineering Challenges Solved → Status
- Architecture diagram as the visual centerpiece (flow-level only — see
  Proprietary Information Check below)
- The parity story gets full treatment here
- Link out to Engineering Notes posts that go deeper on specific problems

### Projects → Stokvel Society
Structure: Problem (what stokvels actually need) → What was built → Status
- The fintech-for-community-trust angle is a genuinely different register
  from SuperFIB (consumer trust vs. trading precision) — let that contrast
  show; it's part of what proves range

### Engineering Notes (fast-follow — do not launch-block on this)
Real topics already lived, not invented:
- Why backend authority matters in multi-platform sync
- Diagnosing signal parity failures across Pine/PHP/MT5
- Broker time normalization and why "current time" is harder than it sounds
- Staleness gates: how to know when data is too old to trust
Constraint: ship with zero posts is worse than not having the section.
Launch with the section absent or as "coming soon," write 2-3 posts, then
turn it on. A dated, empty blog actively hurts credibility.

### Architecture
A dedicated page for the cross-system diagrams — pull these out of the
SuperFIB case study into their own visual section if there's enough
material (Pine→PHP→MT5→React flow, signal pipeline, data integrity layer).
Diagrams should show *flow and topology*, never proprietary calculation
logic. See checklist below.

### Now
Lightweight, low-cost, high-signal. Update monthly.
```
Currently Building
- SuperFIB Dashboard v4 / signal board reconciliation
- StokvelSociety [current focus]

Currently Hardening
- Data integrity layer / broker feed reliability
```
Skip "Currently Reading/Thinking About" unless that's genuinely true and
maintained — an abandoned Now page is worse than no Now page, same logic
as the blog.

### How I Work (replaces generic "About")
Not a CV. Not a mission-statement essay either — keep it concrete.
- Real process: patch plans, acceptance criteria, regression checklists,
  iterative engineering — this is an actual differentiator for a solo dev
  asking to be trusted with financially-critical work, so make it specific
  rather than aspirational
- Honest mention of AI-assisted workflow (Claude/Codex/Copilot) as part of
  *how* you work, not as a flagship achievement — this is the right home
  for that material per the "no third flagship" decision above
- Short, factual personal framing (solo, South Africa, building real
  systems) — skip the "I build systems. My work sits at the intersection
  of..." mission-statement register; it reads as performance rather than
  fact when this concrete

### Work With Me (replaces "Services")
This is the resolution to the Option A/B tension. Framed honestly:
- Not a price list, not "Custom trading systems / Fintech platforms /
  Dashboards" agency bullets — that's the exact tone peer feedback
  correctly flagged as undercutting the product story
- Instead: a short, honest statement of what kinds of engagements make
  sense (systems with real engineering depth — trading infrastructure,
  fintech, multi-platform sync, data integrity problems), and what doesn't
  (generic brochure sites, anything outside this lane)
- One clear path to Contact from this page — no hard CTA noise elsewhere
  on the site

### Contact
Simple. Form or email. Optional short qualifying fields (project type,
timeline) if Kudzie wants to pre-filter inbound — useful given "broad, any
client" was the earlier answer on target audience, which without a filter
risks unqualified leads eating time.

---

## Proprietary Information Check (do before publishing any diagram or repo link)
The earlier draft suggested showing public repos "even if core logic
remains proprietary." Treat this as a checklist, not a vibe:
- [ ] Diagrams show data *flow* (which system talks to which, in what
      order) — never the fib/signal *calculation* logic itself
- [ ] No real lot-sizing formulas, threshold values, or signal-quality
      rules in public-facing text or code samples
- [ ] Any linked public repo reviewed file-by-file for accidental inclusion
      of proprietary logic before the link goes live
- [ ] Screenshots of the dashboard reviewed for visible numbers/strategy
      detail that shouldn't be public

---

## Tech Stack

**Astro**, static-generated.
- Marketing/portfolio site: needs speed, SEO, low hosting cost — not
  client-side interactivity
- React islands droppable in later if a live demo widget ever makes sense
- Deploys cleanly to Vercel/Netlify/Cloudflare Pages, free tier sufficient
- Fully decoupled from the production SuperFIB/StokvelSociety stacks — no
  risk of marketing-site work touching live trading systems

## Domain
**Recommendation: a dedicated domain, not a stokvelsociety.co.za subdomain.**
Adopted from Plan 1, and consistent with everything else in this plan — if
the site's whole premise is "real engineering credibility across multiple
products," a Stokvel-branded URL undercuts that the moment a visitor arrives
via the SuperFIB case study. Candidates in the `ssdevelopers.*` /
`ssdevs.*` family (e.g. `ssdevelopers.dev`). `dev.stokvelsociety.co.za`
remains the zero-cost fallback if budget is the binding constraint, but it's
a real downgrade to the positioning, not a neutral choice — worth the small
spend if at all possible.

---

## Launch Scope vs. Fast-Follow

**Launch with:**
Home, Projects (SuperFIB + Stokvel Society case studies), Architecture,
How I Work, Work With Me, Contact, Now (even if minimal)

**Fast-follow, not launch-blocking:**
Engineering Notes (needs 2-3 posts banked before it goes live)

**Deliberately deferred, not in scope yet:**
Third "Labs/AI Engineering" project, open-source/public repo section
(pending the proprietary-info review above)
