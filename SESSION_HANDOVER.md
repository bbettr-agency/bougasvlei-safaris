# Bougasvlei Safaris — Session Handover

**Status:** ✅ Production Ready · **Branch:** `main` · **Commit:** `576a8ae262c0b5c92fd492b441a5d656e21207e8`
**Repo:** https://github.com/bbettr-agency/bougasvlei-safaris

This document hands the project off for future maintenance. See `PROJECT_STATUS.md`
for the high-level status and `README.md` for setup/run instructions.

---

## What was completed

1. **Full site build** — 7-page premium hunting-safari + bushveld-lodge website on
   the Bbettr Website OS stack (Next.js 14, TS, Tailwind, framer-motion, lucide).
2. **Hero** with above-the-fold enquiry form (Full Name, Email, Phone, Interested
   In, Preferred Dates, Message → "Request Availability"), dual CTAs, and the 3
   award logos in one row (desktop + mobile).
3. **Conversion** — sticky mobile CTA bar (WhatsApp + Request Availability, single
   line), floating WhatsApp, multiple CTAs per page, omnichannel contact.
4. **Game species** — 20 species, slug-keyed for a future `/animals/[species]`,
   filterable grid; client illustrations matched by filename.
5. **Gallery** — categorized catalog with filter tabs (Lodge & Grounds /
   Accommodation / Dining / Wildlife / Hunting), 34 curated images; homepage shows
   the 7 strongest featured.
6. **Client imagery wired** — logo, 3 transparent award logos, lodge/wildlife/
   hunting photography, species illustrations (Image Strategy Rule followed).
7. **SEO** — per-page metadata, canonical, OG/Twitter, JSON-LD schema, sitemap,
   robots, single H1/page, descriptive alt, internal linking.
8. **Footer** — Bbettr footer credit ("Website Designed & Developed by Bbettr
   Agency", new tab, `rel="noopener noreferrer"`).
9. **Final QA pass** (this session) — see below.

## Final QA pass — changes made

- **Removed placeholder content:** deleted the fabricated "Placeholder review"
  testimonials section (no fake reviews shipped); fixed the stale gallery subtitle;
  replaced the empty team photo frames with premium monogram avatars.
- **Removed dead code / unused files:** `components/layout/section-container.tsx`,
  `components/ui/button.tsx`, `components/sections/reviews.tsx`,
  `components/ui/award-badge.tsx` (already), the `trustBadges` config, unused
  `images.ts` keys/types.
- **SEO/perf:** generated `public/og-image.jpg` (1200×630) so OG no longer 404s;
  added AVIF/WebP to `next.config.js` image formats.
- **Verified:** build, lint, `tsc --noEmit`, schema, sitemap, robots, canonical,
  no console errors, LCP ~0.4 s, CLS ~0.002, no real broken images (5 flagged were
  the dev optimizer slowly generating 1920px variants — all 200), responsive at
  mobile / tablet / desktop.

## Architecture / where things live

- `app/<route>/page.tsx` — thin route wrappers (metadata + breadcrumb schema) →
  render a view from `views/`.
- `components/sections|layout|ui|forms` — reusable, composed by views.
- `config/` is the **single source of truth**: `site-config`, `seo-config`,
  `content`, `game-species`, `gallery`, `awards`, `images`, `routes`.
- `lib/` — `metadata.ts` (`createMetadata`) and `schema.ts` (JSON-LD).
- `public/images/**` — client asset library (do **not** rename/move originals).

## Future SEO expansion (architecture ready, pages not built)

`/animals/[species]` (species already slug-keyed) · `/hunting-packages` ·
`/accommodation` · `/game-drives`. See `config/routes.ts → futureRoutes`.

## Remaining client items

Host photos · real Facebook reviews · GoHighLevel form embed · optional client
hero photos (currently Unsplash, kept per client). Details in `PROJECT_STATUS.md`.

## Maintenance notes

- **Adding/replacing images:** drop files into the right `public/images/<folder>/`,
  then update the path in `config/images.ts` / `config/awards.ts` /
  `config/game-species.ts` / `config/gallery.ts`. SVGs serve unoptimized;
  photos go through `next/image`. Filenames may contain spaces/commas — reference
  them exactly. `<ImageFrame>` falls back to a labelled placeholder if a src is missing.
- **Running:** `npm install` → `npm run dev` (port 3000) / `npm run build` / `npm run lint`.
- **Forms:** to go live, replace the front-end form with the GHL embed (marked in
  `components/forms/enquiry-form.tsx`); it currently composes a WhatsApp enquiry.
- **Reviews/schema:** only add `aggregateRating` to `lib/schema.ts` once real
  reviews exist — never fabricate review data.
