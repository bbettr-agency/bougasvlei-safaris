# Bougasvlei Safaris — Project Status

**Status:** ✅ Production Ready
**Domain:** https://www.bougasvleisafaris.com
**Repository:** https://github.com/bbettr-agency/bougasvlei-safaris (branch `main`)
**Latest commit:** `576a8ae262c0b5c92fd492b441a5d656e21207e8`
**Last updated:** 2026-06-25

Premium, SEO-focused, mobile-first website for Bougasvlei Safaris — hunting
safaris and an eco-friendly bushveld lodge in Thabazimbi, Limpopo, South Africa.
Built on the Bbettr Website OS stack.

---

## Technologies

- **Next.js 14.2.35** (App Router) · **React 18** · **TypeScript** (strict)
- **Tailwind CSS** (custom African-luxury design system: charcoal / sand / ivory /
  bronze / gold; Playfair Display + DM Sans)
- **framer-motion** (scroll reveals, hero motion) · **lucide-react** (icons)
- **next/image** for image optimization (AVIF/WebP, responsive, lazy)
- Forms are GoHighLevel-ready (currently compose a pre-filled WhatsApp enquiry)
- Hosting target: **Vercel** · Code storage: **GitHub**

## Pages (7)

`/` · `/hunting` · `/hunting-with-us` · `/game-species` · `/gallery` ·
`/about-us` · `/contact-us`

## SEO implemented

- Per-page `<title>` + meta description; global keywords; `metadataBase` + canonical
- OpenGraph + Twitter cards; `/og-image.jpg` (1200×630); `locale: en_ZA`
- JSON-LD: **LodgingBusiness**, **TouristAttraction**, **FAQPage**, **WebSite**,
  **BreadcrumbList** (inner pages). No `aggregateRating` until real reviews exist.
- `app/sitemap.ts` (all 7 routes) · `app/robots.ts` · `app/icon.svg`
- One `<h1>` per page; semantic H2/H3; descriptive alt text on every image;
  clean lowercase-hyphenated slugs; internal linking throughout

## Image strategy (completed)

- Client photo library lives in `public/images/**` (originals never renamed/moved)
- Selected per the Bbettr Website OS Image Strategy Rule (reviewed → categorized →
  conversion-picked → optimized → SEO alt → placed → verified)
- `next/image` delivers AVIF/WebP, responsive `srcset`, and lazy-loading
  (above-the-fold heroes use `priority`)
- 20 game-species illustrations (SVG, served unoptimized straight from `/public`)
- 3 transparent award logos via shared `<AwardLogos>` (object-contain, no crop),
  consistent in hero / footer / trust strips
- Gallery: categorized catalog (`config/gallery.ts`) with filter tabs + 7 featured

## Quality gates (all passing)

- `npm run build` ✅ (13 static routes prerendered, ~146 kB first-load JS)
- `npm run lint` ✅ (no warnings/errors) · `npx tsc --noEmit` ✅ (no type errors)
- No console errors/warnings · No broken images/links · No dead code/unused files
- Web Vitals (dev): **LCP ~0.4 s**, **CLS ~0.002**

## Remaining client items (non-blocking)

- **Host photos** — André & Lida currently shown as premium monogram avatars
  (drop photos into `public/images/team/` and restore portraits in
  `components/sections/about-hosts.tsx`).
- **Reviews** — a testimonials section was intentionally omitted (no fabricated
  reviews). Re-add once real Facebook reviews are supplied (then add
  `aggregateRating` in `lib/schema.ts`).
- **GoHighLevel form** — paste the GHL embed in `components/forms/enquiry-form.tsx`
  (marked `GHL FORM EMBED PLACEHOLDER`).
- **Hero photography** — both hero images are licensed Unsplash placeholders, kept
  per the client's request; swap for client hero photos in `config/images.ts`
  (`heroHome`, `heroHunting`) when available.
- **OG image** — a branded 1200×630 `og-image.jpg` was generated from the entrance
  gate photo; replace with a bespoke branded image if desired.

## Deployment status

Code is production-ready and pushed to `origin/main`. Deploy via Vercel
(connect the GitHub repo for auto-deploys on push, set the production domain
`www.bougasvleisafaris.com`, and enable HTTPS). Run a production Lighthouse pass
on the live URL to capture final field scores.
