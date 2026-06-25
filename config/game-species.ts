// ─────────────────────────────────────────────────────────────────────────────
//  GAME SPECIES — single source of truth.
//
//  Each species is keyed by `slug` so a future dynamic route /animals/[species]
//  can be added with zero data migration (see lib/routes.ts → futureRoutes).
//  Card images are the client's species illustrations in /public/images/wildlife
//  (matched to each animal by filename). Caracal has no supplied image yet, so it
//  falls back to a premium labelled placeholder until one is added.
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

// Client wildlife illustration (filename preserved exactly — never renamed/moved).
const wild = (file: string, alt: string): Species["image"] => ({
  src: `/images/wildlife/${file}`,
  alt,
});

// No supplied image yet → labelled placeholder.
const ph = (alt: string): Species["image"] => ({ src: null, alt });

export const gameSpecies: Species[] = [
  {
    slug: "cape-buffalo",
    name: "Cape Buffalo",
    category: "Big Game",
    summary:
      "One of Africa's most sought-after dangerous-game trophies — hunted on foot for an unforgettable, adrenaline-charged safari.",
    image: wild("Buffalo, Cape (1).svg", "Cape Buffalo illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "leopard",
    name: "Leopard",
    category: "Predator",
    summary:
      "An elusive, prized big cat of the bushveld, hunted under permit with experienced professional hunters.",
    image: wild("lewaparfd (1).svg", "Leopard illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "sable",
    name: "Sable",
    category: "Specialty",
    summary:
      "Regarded by many as the most regal antelope in Africa — a striking trophy with sweeping scimitar horns.",
    image: wild("sable (1).svg", "Sable antelope illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "cape-kudu",
    name: "Cape Kudu",
    category: "Plains Game",
    summary:
      "The 'grey ghost' of the bushveld — magnificent spiralled horns make this a classic walk-and-stalk trophy.",
    image: wild("Kudu (1).svg", "Cape Kudu illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "eland",
    name: "Eland",
    category: "Plains Game",
    summary:
      "The largest antelope in Africa — a heavyweight trophy that rewards patient, fair-chase hunting.",
    image: wild("Eland (1).svg", "Eland illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "giraffe",
    name: "Giraffe",
    category: "Specialty",
    summary:
      "A truly unique African specialty hunt, taken on foot across the open bushveld.",
    image: wild("Giraffe (1).svg", "Giraffe illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "blue-wildebeest",
    name: "Blue Wildebeest",
    category: "Plains Game",
    summary:
      "The 'poor man's buffalo' — tough, abundant and a rewarding spot-and-stalk plains-game trophy.",
    image: wild("Wildebees, Blue (1).svg", "Blue Wildebeest illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "zebra",
    name: "Zebra",
    category: "Plains Game",
    summary:
      "A beautiful, hardy plains-game trophy prized for its striking hide and challenging stalk.",
    image: wild("zebra (1).svg", "Burchell's zebra illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "waterbuck",
    name: "Waterbuck",
    category: "Plains Game",
    summary:
      "A large, handsome antelope with impressive forward-curving horns, found near water across the property.",
    image: wild("Waterbuck (1).svg", "Waterbuck illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "impala",
    name: "Impala",
    category: "Plains Game",
    summary:
      "The quintessential African antelope — graceful, plentiful and an ideal first plains-game trophy.",
    image: wild("Impala (1).svg", "Impala illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "black-impala",
    name: "Black Impala",
    category: "Specialty",
    summary:
      "A rare colour variant of the common impala and a distinctive specialty trophy.",
    image: wild("Impala (2).svg", "Black Impala illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "blesbuck",
    name: "Blesbuck",
    category: "Plains Game",
    summary:
      "A distinctive blaze-faced antelope of the open plains — a fast, fair-chase trophy.",
    image: wild("Blesbuck (1).svg", "Blesbuck illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "bushbuck",
    name: "Bushbuck",
    category: "Plains Game",
    summary:
      "A secretive, beautiful antelope of the riverine thickets — a true bushveld hunting challenge.",
    image: wild("Bushbuck (1).svg", "Bushbuck illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "reedbuck",
    name: "Reedbuck",
    category: "Plains Game",
    summary:
      "A graceful grassland antelope, hunted in the early morning and late afternoon for the best opportunities.",
    image: wild("Reedbuck (1).svg", "Reedbuck illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "warthog",
    name: "Warthog",
    category: "Plains Game",
    summary:
      "A characterful and exciting trophy — old boars with worn ivory tusks are a true bushveld prize.",
    image: wild("Warthog (1).svg", "Warthog illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "duiker",
    name: "Duiker",
    category: "Plains Game",
    summary:
      "One of the bushveld's smallest antelope — a rewarding addition to any plains-game safari.",
    image: wild("Duiker (1).svg", "Duiker illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "ostrich",
    name: "Ostrich",
    category: "Specialty",
    summary:
      "The world's largest bird makes for a unique and surprisingly challenging African hunt.",
    image: wild("Ostrich (1).svg", "Ostrich illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "brown-hyena",
    name: "Brown Hyena",
    category: "Predator",
    summary:
      "A rare, nocturnal predator of the bushveld and a prized specialty trophy for the dedicated hunter.",
    image: wild("hyena (1).svg", "Brown Hyena illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "jackal",
    name: "Jackal",
    category: "Predator",
    summary:
      "A cunning bushveld predator, often hunted by call — an exciting addition to a safari.",
    image: wild("jackal (1).svg", "Black-backed jackal illustration — Bougasvlei Safaris game species"),
  },
  {
    slug: "caracal",
    name: "Caracal",
    category: "Predator",
    summary:
      "An elusive, powerful small cat — one of the most challenging predator trophies in the bushveld.",
    image: ph("Caracal — Bougasvlei Safaris game species (photo to be added)"),
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
