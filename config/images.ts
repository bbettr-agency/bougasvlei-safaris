// ─────────────────────────────────────────────────────────────────────────────
//  IMAGE MAP — client photography (permanent asset library in /public/images).
//
//  Selected per the Bbettr Website OS IMAGE STRATEGY RULE: reviewed, categorized
//  and chosen for trust, storytelling and conversion (not upload order). The two
//  hero images remain on Unsplash because the client asked to KEEP the current
//  heroes; everything else uses the client's own photos.
//
//  Originals are never renamed/moved. next/image handles web optimization,
//  compression and responsive variants at runtime. <ImageFrame> degrades to a
//  premium labelled placeholder if any src is missing.
// ─────────────────────────────────────────────────────────────────────────────

const U = (id: string, w = 1400, q = 70) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export type ImageAsset = { src: string | null; alt: string };

export const images = {
  // ── Heroes — KEEP current (client instruction) ──────────────────────────────
  heroHome: {
    src: U("1516426122078-c23e76319801", 2000),
    alt: "Bushveld at sunrise in the malaria-free hunting region of Thabazimbi, Limpopo",
  },
  heroHunting: {
    src: U("1456926631375-92c8ce872def", 1600),
    alt: "Guided trophy hunting safari in the South African bushveld",
  },

  // ── Wildlife & bushveld (client) ────────────────────────────────────────────
  buffaloWaterhole: {
    src: "/images/gallery/Lodge outdoor 4.png",
    alt: "Cape buffalo at a waterhole in the bushveld at Bougasvlei Safaris, Thabazimbi",
  },
  buffaloHerd: {
    src: "/images/gallery/Lodge outdoor 10.png",
    alt: "Herd of Cape buffalo in the Limpopo bushveld at Bougasvlei Safaris",
  },
  giraffe: {
    src: "/images/gallery/Lodge outdoor 2.png",
    alt: "Giraffe standing in the green bushveld at Bougasvlei Safaris, Thabazimbi",
  },
  sable: {
    src: "/images/gallery/Lodge outdoor 6.png",
    alt: "Sable bull with sweeping horns in the bushveld at Bougasvlei Safaris",
  },
  trophyHunt: {
    src: "/images/gallery/Lodge outdoor 13.png",
    alt: "Hunter with a blue wildebeest trophy on a guided safari at Bougasvlei Safaris",
  },

  // ── Lodge & hospitality (client) ────────────────────────────────────────────
  firepit: {
    src: "/images/lodge/Lodge 3.png",
    alt: "Boma and firepit glowing at sunset at the Bougasvlei Safaris bushveld lodge",
  },
  diningTable: {
    src: "/images/lodge/Lodge living room.png",
    alt: "Dining table set for guests inside the Bougasvlei Safaris lodge",
  },
  platter: {
    src: "/images/gallery/Lodge food.png",
    alt: "Bush platter and home-cooked catering at Bougasvlei Safaris",
  },
  gate: {
    src: "/images/gallery/Lodge gate 1.png",
    alt: "Entrance gate to the Bougasvlei Safaris bushveld lodge and game farm",
  },
  living: {
    src: "/images/lodge/lodge living 7.png",
    alt: "Comfortable living area at the Bougasvlei Safaris bushveld lodge",
  },
  lodgeOutdoor: {
    src: "/images/gallery/Lodge outdoor 5.png",
    alt: "The bushveld grounds surrounding the Bougasvlei Safaris lodge",
  },
} as const;

export type ImageKey = keyof typeof images;

export { U as unsplash };
