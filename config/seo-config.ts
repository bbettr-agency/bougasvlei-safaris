// Global + per-page SEO configuration for Bougasvlei Safaris.
// Targets local (Thabazimbi / Limpopo) and international hunting-safari intent.

export const seoConfig = {
  title:
    "Bougasvlei Safaris | Premium Hunting Safaris & Bushveld Lodge in Thabazimbi, Limpopo",
  description:
    "Premium guided hunting safaris and an eco-friendly bushveld lodge in Thabazimbi, Limpopo, South Africa. Rifle & bow trophy hunting across 20+ game species, all-inclusive packages for international hunters, families and corporate guests. Request availability today.",
  keywords: [
    "hunting safaris South Africa",
    "hunting safaris Limpopo",
    "hunting lodge Thabazimbi",
    "game farm Thabazimbi",
    "bushveld lodge Limpopo",
    "South African hunting safari",
    "trophy hunting South Africa",
    "game lodge Thabazimbi",
    "eco-friendly safari lodge South Africa",
    "plains game hunting Limpopo",
    "bow hunting South Africa",
    "Cape buffalo hunting Limpopo",
    "guided hunting safari Thabazimbi",
  ],
  author: "Bougasvlei Safaris",
  robots: "index, follow",
  ogImage: "/og-image.jpg", // TODO: client to supply a 1200×630 branded OG image.
  twitterHandle: "@bougasvlei",
  locale: "en_ZA",
};

// Per-page metadata — keep titles < ~60 chars, descriptions < ~160 where possible.
export const pageSeo = {
  home: {
    title: "Premium Hunting Safaris & Bushveld Lodge in Thabazimbi",
    description:
      "Bougasvlei Safaris — premium guided hunting safaris and an eco-friendly bushveld lodge in Thabazimbi, Limpopo. Trophy hunting, family stays and corporate retreats. Request availability.",
    path: "/",
  },
  about: {
    title: "About Bougasvlei Safaris",
    description:
      "Meet the family behind Bougasvlei Safaris — hosts André & Lida — and discover our eco-friendly bushveld lodge and guided hunting heritage in Thabazimbi, Limpopo, South Africa.",
    path: "/about-us",
  },
  contact: {
    title: "Contact & Request Availability",
    description:
      "Enquire about hunting packages, eco-friendly lodge accommodation, catering and guided safaris in Thabazimbi, Limpopo. WhatsApp us or send an enquiry — we reply within 24 hours on business days.",
    path: "/contact-us",
  },
  hunting: {
    title: "Hunting Safaris in Thabazimbi, Limpopo",
    description:
      "Guided rifle & bow hunting safaris in the malaria-free bushveld of Thabazimbi, Limpopo. Walk-and-stalk trophy hunting across 20+ species for South African and international hunters.",
    path: "/hunting",
  },
  huntingWithUs: {
    title: "Hunting With Us — Packages & What's Included",
    description:
      "How a Bougasvlei hunting safari works — tailor-made packages, all-inclusive daily rates, professional hunters, trophy handling and what to expect on your South African hunting safari.",
    path: "/hunting-with-us",
  },
  gameSpecies: {
    title: "Game Species — Trophy Hunting in Limpopo",
    description:
      "Explore the game species available at Bougasvlei Safaris in Thabazimbi, Limpopo — from Cape Buffalo, Sable and Kudu to Impala, Zebra, Leopard and more across our bushveld game farm.",
    path: "/game-species",
  },
  gallery: {
    title: "Gallery — Lodge, Hunting & Wildlife",
    description:
      "A visual journey through Bougasvlei Safaris — our eco-friendly bushveld lodge, guided hunting safaris, trophy galleries and the wildlife of Thabazimbi, Limpopo, South Africa.",
    path: "/gallery",
  },
} as const;
