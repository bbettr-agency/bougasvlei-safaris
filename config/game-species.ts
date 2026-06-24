// ─────────────────────────────────────────────────────────────────────────────
//  GAME SPECIES — single source of truth.
//
//  Each species is keyed by `slug` so a future dynamic route /animals/[species]
//  can be added with zero data migration (see lib/routes.ts → futureRoutes).
//  Card images default to a premium labelled placeholder; when the client uploads
//  real trophy/wildlife photos to /public/images/wildlife/, set `image.src` to the
//  local path and it updates the grid + any future species page automatically.
// ─────────────────────────────────────────────────────────────────────────────

export type SpeciesCategory =
  | "Plains Game"
  | "Big Game"
  | "Predator"
  | "Specialty";

export type Species = {
  slug: string;
  name: string;
  category: SpeciesCategory;
  summary: string;
  image: { src: string | null; alt: string };
};

const ph = (name: string, alt: string): Species["image"] => ({
  src: null,
  alt,
});

export const gameSpecies: Species[] = [
  {
    slug: "cape-buffalo",
    name: "Cape Buffalo",
    category: "Big Game",
    summary:
      "One of Africa's most sought-after dangerous-game trophies — hunted on foot for an unforgettable, adrenaline-charged safari.",
    image: ph("Cape Buffalo", "Cape Buffalo bull in the Limpopo bushveld at Bougasvlei Safaris"),
  },
  {
    slug: "leopard",
    name: "Leopard",
    category: "Predator",
    summary:
      "An elusive, prized big cat of the bushveld, hunted under permit with experienced professional hunters.",
    image: ph("Leopard", "Leopard in the Thabazimbi bushveld"),
  },
  {
    slug: "sable",
    name: "Sable",
    category: "Specialty",
    summary:
      "Regarded by many as the most regal antelope in Africa — a striking trophy with sweeping scimitar horns.",
    image: ph("Sable", "Sable antelope bull with sweeping horns in Limpopo"),
  },
  {
    slug: "cape-kudu",
    name: "Cape Kudu",
    category: "Plains Game",
    summary:
      "The 'grey ghost' of the bushveld — magnificent spiralled horns make this a classic walk-and-stalk trophy.",
    image: ph("Cape Kudu", "Cape Kudu bull with spiral horns in the bushveld"),
  },
  {
    slug: "eland",
    name: "Eland",
    category: "Plains Game",
    summary:
      "The largest antelope in Africa — a heavyweight trophy that rewards patient, fair-chase hunting.",
    image: ph("Eland", "Eland bull, the largest African antelope, in Limpopo"),
  },
  {
    slug: "giraffe",
    name: "Giraffe",
    category: "Specialty",
    summary:
      "A truly unique African specialty hunt, taken on foot across the open bushveld.",
    image: ph("Giraffe", "Giraffe in the Thabazimbi bushveld"),
  },
  {
    slug: "blue-wildebeest",
    name: "Blue Wildebeest",
    category: "Plains Game",
    summary:
      "The 'poor man's buffalo' — tough, abundant and a rewarding spot-and-stalk plains-game trophy.",
    image: ph("Blue Wildebeest", "Blue Wildebeest in the Limpopo bushveld"),
  },
  {
    slug: "zebra",
    name: "Zebra",
    category: "Plains Game",
    summary:
      "A beautiful, hardy plains-game trophy prized for its striking hide and challenging stalk.",
    image: ph("Zebra", "Burchell's zebra in the bushveld near Thabazimbi"),
  },
  {
    slug: "waterbuck",
    name: "Waterbuck",
    category: "Plains Game",
    summary:
      "A large, handsome antelope with impressive forward-curving horns, found near water across the property.",
    image: ph("Waterbuck", "Waterbuck bull near water in the Limpopo bushveld"),
  },
  {
    slug: "impala",
    name: "Impala",
    category: "Plains Game",
    summary:
      "The quintessential African antelope — graceful, plentiful and an ideal first plains-game trophy.",
    image: ph("Impala", "Impala ram in the Thabazimbi bushveld"),
  },
  {
    slug: "black-impala",
    name: "Black Impala",
    category: "Specialty",
    summary:
      "A rare colour variant of the common impala and a distinctive specialty trophy.",
    image: ph("Black Impala", "Black Impala, a rare colour variant, in Limpopo"),
  },
  {
    slug: "blesbuck",
    name: "Blesbuck",
    category: "Plains Game",
    summary:
      "A distinctive blaze-faced antelope of the open plains — a fast, fair-chase trophy.",
    image: ph("Blesbuck", "Blesbuck with white blaze in the bushveld"),
  },
  {
    slug: "bushbuck",
    name: "Bushbuck",
    category: "Plains Game",
    summary:
      "A secretive, beautiful antelope of the riverine thickets — a true bushveld hunting challenge.",
    image: ph("Bushbuck", "Bushbuck in riverine bush near Thabazimbi"),
  },
  {
    slug: "reedbuck",
    name: "Reedbuck",
    category: "Plains Game",
    summary:
      "A graceful grassland antelope, hunted in the early morning and late afternoon for the best opportunities.",
    image: ph("Reedbuck", "Reedbuck in Limpopo grassland"),
  },
  {
    slug: "warthog",
    name: "Warthog",
    category: "Plains Game",
    summary:
      "A characterful and exciting trophy — old boars with worn ivory tusks are a true bushveld prize.",
    image: ph("Warthog", "Warthog boar with tusks in the bushveld"),
  },
  {
    slug: "duiker",
    name: "Duiker",
    category: "Plains Game",
    summary:
      "One of the bushveld's smallest antelope — a rewarding addition to any plains-game safari.",
    image: ph("Duiker", "Common duiker in the Thabazimbi bushveld"),
  },
  {
    slug: "ostrich",
    name: "Ostrich",
    category: "Specialty",
    summary:
      "The world's largest bird makes for a unique and surprisingly challenging African hunt.",
    image: ph("Ostrich", "Ostrich in the open Limpopo bushveld"),
  },
  {
    slug: "brown-hyena",
    name: "Brown Hyena",
    category: "Predator",
    summary:
      "A rare, nocturnal predator of the bushveld and a prized specialty trophy for the dedicated hunter.",
    image: ph("Brown Hyena", "Brown Hyena, a rare bushveld predator, in Limpopo"),
  },
  {
    slug: "jackal",
    name: "Jackal",
    category: "Predator",
    summary:
      "A cunning bushveld predator, often hunted by call — an exciting addition to a safari.",
    image: ph("Jackal", "Black-backed jackal in the Thabazimbi bushveld"),
  },
  {
    slug: "caracal",
    name: "Caracal",
    category: "Predator",
    summary:
      "An elusive, powerful small cat — one of the most challenging predator trophies in the bushveld.",
    image: ph("Caracal", "Caracal, an elusive bushveld cat, in Limpopo"),
  },
];

export const speciesCategories: SpeciesCategory[] = [
  "Plains Game",
  "Big Game",
  "Predator",
  "Specialty",
];

export const getSpeciesBySlug = (slug: string) =>
  gameSpecies.find((s) => s.slug === slug);
