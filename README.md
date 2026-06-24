# Bougasvlei Safaris — Website

Premium, SEO-focused website for **Bougasvlei Safaris** — hunting safaris and an
eco-friendly bushveld lodge in Thabazimbi, Limpopo, South Africa. Built on the
Bbettr Website OS stack.

**Live domain:** https://www.bougasvleisafaris.com

## Stack

- Next.js 14 (App Router) · TypeScript · Tailwind CSS
- framer-motion (animation) · lucide-react (icons)
- Forms are styled front-end placeholders prepared for a **GoHighLevel** embed
  (they currently compose a pre-filled WhatsApp enquiry on submit).

## Scripts

```bash
npm install      # install deps
npm run dev      # local dev server (http://localhost:3000)
npm run build    # production build
npm run lint     # eslint (next/core-web-vitals)
npm start        # serve the production build
```

## Pages

`/` · `/hunting` · `/hunting-with-us` · `/game-species` · `/gallery` ·
`/about-us` · `/contact-us`

## Project structure

```
app/            # routes (thin wrappers) + layout, sitemap, robots, icon
views/          # page compositions (one per route)
components/
  layout/       # header, footer, floating WhatsApp, sticky mobile CTA
  sections/     # page sections (hero, hunting, lodge, species, reviews, …)
  ui/           # button, image-frame, award-badge, count-up, reveal, …
  forms/        # enquiry-form (GHL-ready)
config/         # SINGLE SOURCE OF TRUTH — see below
lib/            # metadata + JSON-LD schema builders
public/images/  # asset folders (see public/images/README.md)
```

## Single source of truth (`config/`)

- `site-config.ts` — business, hosts, contact, WhatsApp, CTAs, location.
- `seo-config.ts` — global + per-page metadata & keywords.
- `content.ts` — all marketing copy.
- `game-species.ts` — 20 species, **keyed by slug** (ready for `/animals/[species]`).
- `awards.ts` — **central award/trust badges** (upload image → updates site-wide).
- `images.ts` — temporary Unsplash imagery (swap for client photos).
- `routes.ts` — nav + sitemap + documented **future routes**.

## Before launch — replace placeholders

1. **Logo** — header/footer monogram + `/public/og-image.jpg`.
2. **Award images** — drop into `public/images/awards/`, set paths in `config/awards.ts`.
3. **Photography** — replace Unsplash URLs in `config/images.ts` / species photos.
4. **Reviews** — real Facebook reviews in `config/content.ts` (and only then add
   `aggregateRating` schema in `lib/schema.ts`).
5. **Enquiry form** — paste the GoHighLevel embed in `components/forms/enquiry-form.tsx`
   (marked `GHL FORM EMBED PLACEHOLDER`).

## Future SEO expansion (architecture ready, pages not built)

`/animals/[species]` (species data already slug-keyed) · `/hunting-packages` ·
`/accommodation` · `/game-drives`. See `config/routes.ts → futureRoutes`.

## Bbettr Website OS standards

- **Footer credit (default):** the footer carries a subtle, premium credit below
  the copyright line — _"Website Designed & Developed by Bbettr Agency"_, linking
  to https://www.bbettragency.com (new tab, `rel="noopener noreferrer"`). This is
  standard on every Bbettr Website OS site unless the client requests removal.
  Spec: `../COMPONENT-LIBRARY/footer-systems.md`.
- **Auto Mode build workflow:** once a build plan is approved, the build runs
  under "Accept and Auto Mode" (no per-file re-approvals) →
  build → lint → mobile verification → commit → push.
  Spec: `../CORE-SYSTEM/10-DEVELOPMENT-RULES.md`.
