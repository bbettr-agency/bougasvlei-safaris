// ─────────────────────────────────────────────────────────────────────────────
//  GALLERY — categorized catalog of the client's photography.
//
//  Selected per the IMAGE STRATEGY RULE: reviewed, categorized and curated for
//  variety (near-duplicates trimmed). Filenames are referenced exactly as the
//  client uploaded them (never renamed/moved). Categories drive the filter tabs
//  on the gallery page; `featured` marks the strongest images for the homepage
//  preview. (No "Team/Hosts" category — public/images/team is currently empty.)
// ─────────────────────────────────────────────────────────────────────────────

export type GalleryCategory =
  | "Lodge & Grounds"
  | "Accommodation"
  | "Dining"
  | "Wildlife"
  | "Hunting";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
  featured?: boolean; // shown in the homepage gallery preview
};

const G = "/images/gallery";

export const galleryImages: GalleryImage[] = [
  // ── Lodge & Grounds ─────────────────────────────────────────────────────────
  { src: `${G}/Lodge .png`, category: "Lodge & Grounds", featured: true, alt: "The Bougasvlei Safaris bushveld lodge glowing at dusk with a lit firepit and lounge chairs" },
  { src: `${G}/Lodge 2.png`, category: "Lodge & Grounds", featured: true, alt: "A sundowner gin held beside the firepit at dusk at Bougasvlei Safaris" },
  { src: `${G}/Lodge 3.png`, category: "Lodge & Grounds", alt: "Boma and firepit glowing at sunset on the lodge patio at Bougasvlei Safaris" },
  { src: `${G}/Lodge 4.png`, category: "Lodge & Grounds", alt: "Thatched brick lodge exterior with a crimson-breasted shrike on the lawn at Bougasvlei Safaris" },
  { src: `${G}/Lodge 5.png`, category: "Lodge & Grounds", alt: "Thatched lodge building and paved patio at Bougasvlei Safaris, Thabazimbi" },
  { src: `${G}/Lodge 6.png`, category: "Lodge & Grounds", alt: "Traditional brick firepit on the lodge patio at Bougasvlei Safaris" },
  { src: `${G}/Lodge gate 1.png`, category: "Lodge & Grounds", featured: true, alt: "Branded five-star entrance gate to Bougasvlei Bush Lodge in Thabazimbi, Limpopo" },
  { src: `${G}/Lodge gate .png`, category: "Lodge & Grounds", alt: "Bushveld entrance road and gate to the Bougasvlei Safaris game farm" },

  // ── Accommodation (interiors) ───────────────────────────────────────────────
  { src: `${G}/Lodge living 2.png`, category: "Accommodation", featured: true, alt: "Thatched-roof lounge with chandelier and wooden loft staircase at the Bougasvlei lodge" },
  { src: `${G}/Lodge living room.png`, category: "Accommodation", alt: "Open-plan living and dining area inside the Bougasvlei Safaris lodge" },
  { src: `${G}/Lodge living 3.png`, category: "Accommodation", alt: "Comfortable lounge interior with bushveld-style décor at Bougasvlei Safaris" },
  { src: `${G}/lodge living 7.png`, category: "Accommodation", alt: "Spacious lodge living area at Bougasvlei Safaris, Thabazimbi" },
  { src: `${G}/Lodge living 8.png`, category: "Accommodation", alt: "Warm, characterful lounge inside the Bougasvlei Safaris bushveld lodge" },
  { src: `${G}/Lodge bathroom 3.png`, category: "Accommodation", alt: "Modern walk-in glass shower with wood-feature tiling at the Bougasvlei lodge" },
  { src: `${G}/Lodge Bathroom.png`, category: "Accommodation", alt: "En-suite bathroom at the Bougasvlei Safaris lodge" },
  { src: `${G}/Lodge bathroom 4.png`, category: "Accommodation", alt: "Premium bathroom finishes in the Bougasvlei Safaris accommodation" },

  // ── Dining ──────────────────────────────────────────────────────────────────
  { src: `${G}/Lodge food.png`, category: "Dining", featured: true, alt: "Bush charcuterie platter of biltong, droëwors, nuts and cheese at Bougasvlei Safaris" },
  { src: `${G}/Lodge Food 2.png`, category: "Dining", alt: "Home-cooked South African meal served at the Bougasvlei Safaris lodge" },
  { src: `${G}/Lodge food 4.png`, category: "Dining", alt: "Hearty bushveld dining at Bougasvlei Safaris" },
  { src: `${G}/Lodge food 6.png`, category: "Dining", alt: "Freshly prepared meal at the Bougasvlei Safaris lodge" },
  { src: `${G}/Lodge food 8.png`, category: "Dining", alt: "All-inclusive catering plated at Bougasvlei Safaris" },
  { src: `${G}/Lodge food 9.png`, category: "Dining", alt: "Home-style cooking and hospitality at Bougasvlei Safaris" },

  // ── Wildlife ────────────────────────────────────────────────────────────────
  { src: `${G}/Lodge outdoor 4.png`, category: "Wildlife", featured: true, alt: "Cape buffalo cooling at a waterhole in the bushveld at Bougasvlei Safaris" },
  { src: `${G}/Lodge outdoor 6.png`, category: "Wildlife", alt: "Sable bull with sweeping horns in the bushveld at Bougasvlei Safaris" },
  { src: `${G}/Lodge outdoor 10.png`, category: "Wildlife", alt: "Herd of Cape buffalo in the Limpopo bushveld at Bougasvlei Safaris" },
  { src: `${G}/Lodge outdoor 2.png`, category: "Wildlife", alt: "Giraffe standing among acacias in the green bushveld at Bougasvlei Safaris" },
  { src: `${G}/Lodge outdoor 3.png`, category: "Wildlife", alt: "Two giraffes in the bushveld at the Bougasvlei Safaris game farm" },
  { src: `${G}/Lodge outdoor 9.png`, category: "Wildlife", alt: "Giraffe walking a bushveld track under dramatic clouds at Bougasvlei Safaris" },
  { src: `${G}/Lodge outdoor 5.png`, category: "Wildlife", alt: "Cape buffalo wallowing at a muddy waterhole at Bougasvlei Safaris" },
  { src: `${G}/Lodge outdoor 12.png`, category: "Wildlife", alt: "Impala ram resting in the Limpopo bushveld at Bougasvlei Safaris" },
  { src: `${G}/Lodge outdoor.png`, category: "Wildlife", alt: "Golden wildebeest in the bushveld at the Bougasvlei Safaris game farm" },

  // ── Hunting ─────────────────────────────────────────────────────────────────
  { src: `${G}/Lodge outdoor 13.png`, category: "Hunting", featured: true, alt: "Hunter with a blue wildebeest trophy on a guided safari at Bougasvlei Safaris" },
  { src: `${G}/Lodge outdoor 8.png`, category: "Hunting", alt: "Hunter with a sable trophy and rifle after a fair-chase safari at Bougasvlei Safaris" },
  { src: `${G}/Lodge outdoor 11.png`, category: "Hunting", alt: "Guided night drive across the bushveld under moonlight at Bougasvlei Safaris" },
];

export const galleryCategories: GalleryCategory[] = [
  "Lodge & Grounds",
  "Accommodation",
  "Dining",
  "Wildlife",
  "Hunting",
];

// Strongest images for the homepage preview (premium, emotional, high-conversion).
export const galleryFeatured: GalleryImage[] = galleryImages.filter(
  (i) => i.featured
);
