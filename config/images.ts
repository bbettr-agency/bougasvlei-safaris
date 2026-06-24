// ─────────────────────────────────────────────────────────────────────────────
//  IMAGE MAP — temporary Unsplash bushveld/wildlife imagery for a premium feel.
//
//  ⚠️ PLACEHOLDER PHOTOGRAPHY. These Unsplash URLs are licensed for editorial
//  preview only. Replace each with the client's own licensed photos by dropping
//  files into /public/images/<folder>/ and swapping the `src` to a local path
//  (e.g. "/images/hero/lodge-sunset.jpg"). See public/images/README.md.
//
//  <ImageFrame> degrades gracefully: if any URL fails to load it shows a premium
//  labelled placeholder, so the layout never breaks.
// ─────────────────────────────────────────────────────────────────────────────

const U = (id: string, w = 1400, q = 70) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export type ImageAsset = { src: string | null; alt: string };

export const images = {
  // ── Hero / atmospheric scenery ──────────────────────────────────────────────
  heroBushveld: {
    src: U("1516426122078-c23e76319801", 2000),
    alt: "Zebra grazing in the golden Limpopo bushveld at sunrise near Thabazimbi",
  },
  bushveldSunset: {
    src: U("1547471080-7cc2caa01a7e", 1600),
    alt: "Acacia trees silhouetted against an African bushveld sunset in Limpopo",
  },
  savanna: {
    src: U("1534177616072-ef7dc120449d", 1600),
    alt: "Open African savanna landscape in the malaria-free Limpopo bushveld",
  },

  // ── Lodge / accommodation ───────────────────────────────────────────────────
  lodgeExterior: {
    src: U("1571896349842-33c89424de2d", 1600),
    alt: "Eco-friendly bushveld safari lodge exterior at Bougasvlei Safaris",
  },
  lodgeInterior: {
    src: U("1582719478250-c89cae4dc85b", 1600),
    alt: "Warm, premium safari lodge interior with natural bushveld textures",
  },
  lodgeFirepit: {
    src: U("1504280390367-361c6d9f38f4", 1600),
    alt: "Evening firepit and boma under the African stars at the bushveld lodge",
  },
  dining: {
    src: U("1414235077428-338989a2e8c0", 1600),
    alt: "Authentic South African bush dining and catering at the safari lodge",
  },

  // ── Hunting ─────────────────────────────────────────────────────────────────
  huntingWalk: {
    src: U("1444464666168-49d633b86797", 1600),
    alt: "Professional hunter walk-and-stalk safari through the Limpopo bushveld",
  },
  huntingRifle: {
    src: U("1551845041-63e8e76836ea", 1600),
    alt: "Rifle hunting safari in the malaria-free bushveld of Thabazimbi",
  },
  huntingTrophy: {
    src: U("1456926631375-92c8ce872def", 1600),
    alt: "Guided trophy hunting safari in the South African bushveld",
  },

  // ── Family / experiences ────────────────────────────────────────────────────
  gameDrive: {
    src: U("1523805009345-7448845a9e53", 1600),
    alt: "Open safari vehicle game drive through the Limpopo bushveld",
  },
  family: {
    src: U("1518709268805-4e9042af9f23", 1600),
    alt: "Family enjoying an African bushveld safari experience",
  },
} as const;

// Wildlife pool for species cards — temporary stand-ins for the client's own
// trophy / wildlife photography (swap per species in config/game-species.ts).
export const wildlife = {
  zebra: U("1526137844-c5b1b1e8c5b9"),
} as const;

export { U as unsplash };
