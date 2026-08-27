# Oxohive

Marketing site for Oxohive — web platforms, mobile apps, CRM/ERP systems, SEO,
and a structured internship programme.

**Live:** https://oxohive.com

---

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| 3D | three.js · @react-three/fiber · @react-three/drei |
| Motion | GSAP + ScrollTrigger · Lenis smooth scroll |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

---

## Design system

The whole site runs on one idea, taken from a reference photograph:

> **a cool, sharp screen sitting inside a warm, soft room**

Warm bands (cream, oak, honey) carry the human content. Dark bands
(near-black, syntax colours) carry the technical proof. Sections alternate
between the two, which gives the page its rhythm.

Dark mode is not an inversion — the *room* becomes evening espresso while the
*screen* tokens stay byte-identical. Same room, later.

### Tokens

Defined once in `app/globals.css` and mapped into Tailwind via `@theme inline`,
so utilities like `bg-ground` and `text-honey` follow the live CSS variables and
respond to theme changes at runtime.

| Token | Light | Role |
|---|---|---|
| `--ground` | `#F3EBDF` | cream page ground |
| `--ink` | `#1D1814` | warm near-black text |
| `--screen` | `#13161B` | the laptop — never changes |
| `--honey` | `#E5A445` | accent, from the lamp |
| `--oak` | `#C6A079` | wood mid-tone |

Syntax colours (`--sx-*`) appear **only** inside dark panels, never on the warm
ground.

### Type

- **Bricolage Grotesque** — display
- **Figtree** — body
- **JetBrains Mono** — eyebrows, data, labels (structural, not decorative)

---

## Structure

```
app/
  layout.tsx            fonts, metadata
  page.tsx              composes the sections
  globals.css           tokens + Tailwind theme
components/
  layout/               Header · Footer · SmoothScroll
  sections/             Hero · Services · Technology · Process
                        Industries · Work · Internship · CTA
  three/
    HiveCanvas.tsx      hero honeycomb field
    SceneFrame.tsx      shared canvas shell for section scenes
    shared.ts           palette + hex geometry factory
    objects/            one scene per section
  ui/                   Button · Eyebrow · Section · SectionHead · Reveal
lib/
  content.ts            ALL site copy, typed
public/hdri/            CC0 environment map
```

**No copy is hardcoded in JSX.** Every string lives in `lib/content.ts`.

---

## The 3D system

One shape — the hexagon, from the name — makes seven different arguments.
Each object's geometry expresses what its section actually says.

| Section | Object | Meaning |
|---|---|---|
| Hero | Honeycomb field | The hive. Cells lift and heat under the cursor |
| Services | Six cells ringing a core | Six services, six sides. Hovering a card raises its cell |
| Technology | A literal stack | Six layers assemble bottom-up on scroll |
| Process | Four nodes on a line | Fills in sequence: Discovery → Design → Development → Deploy |
| Industries | Four hex pillars | A district, not four identical blocks. Hover raises one |
| Internship | Cells orbiting a core | Mentor and learners; they settle into orbit as you scroll |
| CTA | Cells converging | Coming together, which is what the section asks for |

All geometry is **procedural** — generated in code, no model files. Nothing to
download, nothing to license, and it cannot look like stock.

### Performance

- Scenes mount only when near the viewport (`IntersectionObserver`, 220px margin)
- Off-screen scenes drop to `frameloop="never"` — zero GPU cost when not visible
- `prefers-reduced-motion` freezes every scene
- All canvases are `next/dynamic` with `ssr: false`; the page is readable before
  any WebGL loads
- Shared geometry, flat shading, dpr capped at 1.6

---

## Assets

`public/hdri/studio-warm.hdr` — Poly Haven, *Brown Photostudio 01* by
Sergej Majboroda. **CC0**, no attribution required (credited anyway).
See `public/hdri/LICENSE.txt`.

`PROMPTS.txt` holds ready-to-paste prompts for generating the remaining video
and stills, with a credit budget and exact target filenames.

---

## Before launch

Search the codebase for `PLACEHOLDER`. Four things need real values:

1. **Hero rating** — "4.9 average · 200+ reviews" in `lib/content.ts`
2. **Capability bars** — percentages are illustrative
3. **Work projects** — swap for real case studies and figures
4. **Social links** — all currently point at the homepage

Also confirm `hello@oxohive.com` exists.

---

## Deploying to Vercel

The repo is deploy-ready as-is — no `vercel.json` needed, Vercel detects
Next.js automatically.

1. **Import** — vercel.com/new → pick `sheikxm05/oxohive`
2. **Settings** — leave everything at the defaults:
   - Framework: Next.js (auto-detected)
   - Build: `npm run build` · Output: `.next` · Install: `npm install`
   - Node: 20.x or later (pinned via `engines` in `package.json`)
3. **Environment variables** — none required
4. **Deploy**

### Custom domain

After the first deploy: Project → Settings → Domains → add `oxohive.com`.
Vercel will give you either an `A` record (`76.76.21.21`) or a `CNAME`. Add it
at your registrar (the domain is on Porkbun), or hand Porkbun's nameservers
over to Vercel entirely. SSL is issued automatically.

If the production URL ever changes, update `site.url` in `lib/content.ts` —
it feeds `metadataBase`, the canonical tag, `robots.txt` and `sitemap.xml`.

### Verified locally

```
npm run build   ✓  4 routes, all static
npm run start   ✓  / · /robots.txt · /sitemap.xml · /hdri/*  all 200
```
