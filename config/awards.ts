// ─────────────────────────────────────────────────────────────────────────────
//  CENTRAL AWARDS & TRUST CONFIG — single source of truth for every badge.
//
//  Award images are uploaded later to /public/images/awards/. Drop the file in,
//  set `image` to its path below, and the badge updates EVERYWHERE on the site
//  automatically (hero, about, contact, footer, hunting pages) via <AwardBadge>.
//
//  Until an image exists, leave `image` as null — the component renders a
//  premium labelled placeholder slot of the correct size.
// ─────────────────────────────────────────────────────────────────────────────

export type Award = {
  id: string;
  name: string; // accessible label / alt text
  label: string; // short display label on the placeholder slot
  image: string | null; // e.g. "/images/awards/phasa.png" once uploaded
};

export const awards: Award[] = [
  { id: "award-1", name: "Bougasvlei Safaris award", label: "Award 1", image: null },
  { id: "award-2", name: "Bougasvlei Safaris award", label: "Award 2", image: null },
  { id: "award-3", name: "Bougasvlei Safaris award", label: "Award 3", image: null },
  { id: "award-4", name: "Bougasvlei Safaris award", label: "Award 4", image: null },
];

// Text-based trust signals shown alongside award badges (no image required).
export type TrustBadge = {
  id: string;
  label: string;
  sublabel?: string;
};

export const trustBadges: TrustBadge[] = [
  { id: "malaria-free", label: "Malaria-Free Bushveld", sublabel: "Thabazimbi, Limpopo" },
  { id: "all-inclusive", label: "All-Inclusive Safaris", sublabel: "Tailor-made packages" },
  { id: "eco-friendly", label: "Eco-Friendly Lodge", sublabel: "Sustainable hospitality" },
  { id: "family-run", label: "Family-Run & Hosted", sublabel: "André & Lida" },
];
