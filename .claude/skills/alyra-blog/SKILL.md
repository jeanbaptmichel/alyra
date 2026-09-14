---
name: alyra-blog
description: >
  Produce blog articles for Alyra (get-alyra.com), a boutique GEO / AI-visibility
  agency, in English and/or French. Use whenever writing, drafting, or planning
  blog content for Alyra — GEO/AEO education, SaaS or FinTech vertical
  playbooks, technical GEO execution (schema, llms.txt, digital PR), buying
  guides, or original benchmark/data content. Trigger on any request like
  "write a blog post for Alyra", "draft the FR version of X", "which pillar
  does this topic belong to", or "plan the Alyra content calendar". Always
  consult this skill before producing Alyra blog content — the pillar
  structure, language rules, and frontmatter format are non-negotiable.
---

# Alyra Blog Content Skill

Alyra (get-alyra.com) is a boutique agency helping companies become visible in
AI-generated answers (ChatGPT, Perplexity, Gemini, Google AI Overviews) — GEO
(Generative Engine Optimization) and AI Visibility.

**Strategic goal of the blog:** become the reference / most-cited source on
GEO and backlink acquisition for AI visibility, in both the EN and FR markets.
The blog itself is a GEO case study — it should be structured to get cited by
the very engines it's about.

## Target vertical and why (read before picking a topic)

Alyra's content targets **B2B SaaS/Tech** as the primary vertical and
**FinTech/Financial Services** as a tight secondary vertical — chosen on
growth/budget data, not on JB's personal network. Do not default to other
verticals (e-commerce is a later Tier 2 expansion, not a launch pillar; legal,
healthcare, and iGaming are explicitly excluded — wrong buyer profile).

## Language strategy — EN + FR, same vertical, market-timing split

Both languages target the **same** SaaS/FinTech ICP. This is not a
translation exercise and not an audience split:

- **EN** — the global SaaS/FinTech buyer; the larger, more mature market.
- **FR** — France specifically, timed to Google AI Overviews/AI Mode
  launching there on July 22, 2026, with GEO search interest still climbing
  and most French companies not yet doing anything about it. FR content
  should mostly be **FR-native** (built around French-market trigger events,
  the French SaaS/fintech ecosystem), not a literal translation of EN posts —
  except where a direct equivalent genuinely helps (see hreflang below).

## Tone of Voice

- Boutique agency register: confident, precise, closer to an expert briefing
  peers than a generic marketing blog.
- Authority without over-explaining: explain the mechanism and the stakes,
  gesture at the method, stop short of the exact step-by-step execution —
  give real value, never the full operational playbook.
- Never use em dashes — anywhere, including Claude's own replies about this
  project.
- Avoid contrastive "X, not Y" phrasing — reads as AI-generated.
- Avoid money-first framing. Minimal italics.

---

## The 5 pillars

Every article must be assigned to exactly one pillar (frontmatter `pillar`
field, slug in parentheses) and, where relevant, one vertical (`vertical`
field: `general`, `saas`, or `fintech`). Full topic lists live in
`alyra-blog-architecture.md` (the source doc) — read it for the current key
terms and article angle backlog before planning new content; the summary
below is for quick orientation only.

1. **GEO Category Education** (`category-education`) — TOFU. "What is
   GEO/AEO", how AI engines pick sources, is SEO dead, the GEO glossary.
   `vertical: general`. FR mirror uses the AI Overviews France launch as its
   anchor hook, not a translated definition page.
2. **Vertical Playbooks** (`vertical-playbooks`) — MOFU. Split by
   `vertical: saas` (GEO for B2B SaaS, product-led growth, AI vendor
   evaluation) and `vertical: fintech` (GEO for financial services, E-E-A-T,
   compliance-safe content). FR mirror anchors to French Tech / French
   fintech, not a literal translation.
3. **Technical GEO Execution** (`technical-execution`) — MOFU/BOFU. Schema
   for AI crawlers, FAQPage schema, llms.txt, digital PR / unlinked-mention
   reclamation, AI-readability audits. Highest defensibility — hardest for
   generic competitors to fake.
4. **Tools, Measurement & Buying Guides** (`tools-measurement`) — BOFU.
   Measuring AI visibility, agency-vs-in-house-vs-software, GEO pricing,
   comparison content. This is where a reader becomes a lead.
5. **Original Data & Benchmarks** (`original-data`) — the crown-jewel pillar.
   Alyra's own GEO benchmark studies, the flagship "État du GEO en France
   2026" report, recurring citation-rate indices. Build this **first or in
   parallel with Pillar 1**, not last — it's the fastest path to Alyra itself
   getting cited by AI engines.

## Content format rules (apply across every pillar and language)

These aren't style preferences — they're what gets AI-cited, per the
architecture doc's research:

- Lead with a TL;DR / direct-answer block before the narrative (frontmatter
  `tldr` field, rendered at the top of the article — see example articles).
- Include original statistics or data wherever possible, cited clearly.
- Use FAQPage schema on any page with genuine Q&A structure.
- Favor structured formats (tables, numbered steps, comparison grids) over
  long unbroken prose.
- One clear entity/topic per page — never blend two pillars' topics on the
  same URL.

---

## Frontmatter format

```yaml
---
title: "Article title"
date: YYYY-MM-DD
description: "One sentence for the blog card / meta description."
lang: en                        # or fr
pillar: "category-education"    # category-education | vertical-playbooks | technical-execution | tools-measurement | original-data
vertical: "general"             # general | saas | fintech
category: "GEO Basics"          # display name, also drives the permalink segment
author: "alyra-team"
layout: layouts/article.njk
tldr: "One or two sentences — the extractable direct-answer summary."
hreflang:                       # optional — only when a direct translation counterpart exists
  - lang: fr
    url: "/fr/blog/bases-du-geo/quest-ce-que-le-geo/"
published: true
---
```

- `lang`: required. Site is bilingual EN/FR (same pattern as Kollder, not the
  single-language Canicule France pattern) — never omit it.
- `pillar` / `vertical`: required, drive the pillar collections in
  `.eleventy.js` — always set both, even when `vertical` is just `general`.
- `hreflang`: only set when a genuine equivalent exists in the other
  language. Leave it off entirely for FR-native or EN-only content — do not
  force a translation link that doesn't exist.
- Permalink is computed automatically from `lang` + `category` + `title`
  (see `.eleventy.js`) — never set a manual `permalink`, to avoid the
  ugly-URL bug that hit Canicule France's `/content/dtc/...` pages.

### File naming and placement

```
YYYY-MM-DD-slug-descriptive.md
```

EN articles go in `src/blog/en/`, FR articles in `src/blog/fr/` — same
lang-split-by-folder pattern as the Kollder repo.

---

## Article Structure

```
[frontmatter, including tldr]

[Hook — 2-3 sentences, no heading. Establish the stake.]

## Section heading

[Content — teach the mechanism, not the full playbook.]

## Section heading

[Content]

## Further reading / Pour aller plus loin

- [Internal link 1]
- [Internal link 2]
- [Talk to Alyra / Parler à Alyra]
```

- Hook paragraph has no heading.
- H2 for all section headings.
- **Bold** for key terms or named concepts on first use.
- Alyra appears as the natural next step once the problem/opportunity is
  fully established — never as the opening pitch.
- CTA embedded in prose, reinforced by the footer link the layout already
  renders (`/contact/` EN, `/fr/contact/` FR) — don't duplicate a standalone
  button.

---

## Sequencing (when planning, not just writing one article)

1. Pillar 1 anchor page + 2-3 supporting posts.
2. Pillar 5 first benchmark study (EN) + France report (FR) — start alongside
   Pillar 1, these take the longest to produce and pay off longest.
3. Pillar 2 vertical playbooks — SaaS first, FinTech second.
4. Pillar 3 technical content.
5. Pillar 4 — once Pillar 1-3 are driving enough traffic to convert.

---

## Quick Checklist Before Outputting Any Article

- [ ] `lang`, `pillar`, `vertical`, `category` all set correctly
- [ ] TL;DR block written and present in frontmatter
- [ ] At least one original statistic or data point cited
- [ ] FAQPage schema used if the article has genuine Q&A structure
- [ ] `hreflang` set only if a genuine counterpart exists — not forced
- [ ] No em dashes anywhere; no "X, not Y" phrasing
- [ ] Boutique / authority tone maintained; real value given without exposing
      the full operational playbook
- [ ] One pillar, one topic — not blended with another pillar
- [ ] Alyra CTA embedded naturally in prose, second-to-last section
- [ ] Internal links included in "Further reading" / "Pour aller plus loin"
