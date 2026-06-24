// ─────────────────────────────────────────────────────────────────────────────
//  ROUTES — navigation + sitemap source of truth.
//
//  `navRoutes` drive the header/footer nav and app/sitemap.ts. `futureRoutes`
//  document the planned SEO expansion so the architecture is ready: the species
//  data (config/game-species.ts) is already keyed by slug for /animals/[species],
//  and content is modular for /hunting-packages, /accommodation and /game-drives.
//  These are NOT built yet — add app/<route>/page.tsx when ready.
// ─────────────────────────────────────────────────────────────────────────────

export type NavRoute = { label: string; href: string };

export const navRoutes: NavRoute[] = [
  { label: "Home", href: "/" },
  { label: "Hunting", href: "/hunting" },
  { label: "Hunting With Us", href: "/hunting-with-us" },
  { label: "Game Species", href: "/game-species" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

// Routes included in app/sitemap.ts (live, indexable pages).
export const sitemapRoutes: string[] = [
  "/",
  "/hunting",
  "/hunting-with-us",
  "/game-species",
  "/gallery",
  "/about-us",
  "/contact-us",
];

// Planned future routes — architecture is prepared, pages intentionally not built.
export const futureRoutes = {
  speciesDetail: "/animals/[species]", // backed by config/game-species.ts slugs
  huntingPackages: "/hunting-packages",
  accommodation: "/accommodation",
  gameDrives: "/game-drives",
} as const;
