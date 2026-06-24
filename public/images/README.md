# Image assets — upload guide

> When the client's images arrive, follow the Bbettr Website OS **Image Strategy
> Rule** (`../../CORE-SYSTEM/06-VISUAL-DIRECTION.md`): review & categorize →
> pick the strongest hero for conversion → optimize/compress → SEO filenames +
> alt text → replace placeholders & assign to the right sections → verify
> desktop/mobile → build, lint, commit, push. Never place images in upload order.


Drop the client's licensed photography into these folders, then update the
matching `src` path in **`config/images.ts`** (scenery/lodge/hunting), the
species `image.src` in **`config/game-species.ts`**, or the award `image` in
**`config/awards.ts`**. The site updates everywhere automatically.

Until a real file is provided, the UI shows a premium labelled placeholder, so
the layout never breaks.

| Folder       | What goes here                                              | Suggested size        |
| ------------ | ----------------------------------------------------------- | --------------------- |
| `logo/`      | Bougasvlei Safaris logo (transparent PNG/SVG) + favicon     | ≥ 512px, transparent  |
| `awards/`    | Award / accreditation badge images (PHASA, SCI, etc.)       | 200×200, transparent  |
| `hero/`      | Wide hero / banner photos (lodge at sunset, bushveld)       | 2000×1200, landscape  |
| `lodge/`     | Lodge exterior, interiors, firepit, dining, rooms           | 1600×1066, landscape  |
| `hunting/`   | Hunting action, walk-and-stalk, trophies, PHs               | 1600×1066             |
| `wildlife/`  | Per-species wildlife / trophy photos                        | 1200×900              |
| `gallery/`   | Any additional gallery imagery                              | mixed                 |
| `team/`      | André, Lida & staff portraits                               | 1200×900              |

## How to replace a placeholder

1. Add the file, e.g. `public/images/hero/lodge-sunset.jpg`.
2. In `config/images.ts`, set the asset `src` to `"/images/hero/lodge-sunset.jpg"`.
3. (Optional) remove the Unsplash URL — local images load faster and need no
   `next.config.js` remote pattern.

## Awards (central control)

All award badges are driven by `config/awards.ts`. Upload the badge image, then
set its `image` field to the path (e.g. `"/images/awards/phasa.png"`). Every
badge across the hero, about, contact, footer and hunting pages updates at once.

## Logo

Replace the temporary "BS" monogram in `components/layout/header.tsx` and
`components/layout/footer.tsx` once the logo file is supplied, and add a branded
1200×630 `og-image.jpg` to `/public` for social sharing (referenced in
`config/seo-config.ts`).
