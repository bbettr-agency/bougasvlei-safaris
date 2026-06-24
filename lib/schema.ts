// Structured data (JSON-LD) for Bougasvlei Safaris.
// LodgingBusiness + TouristAttraction + FAQPage. No aggregateRating is published
// until the client supplies verified reviews (avoids fabricated rating data).

import { siteConfig } from "@/config/site-config";
import { seoConfig } from "@/config/seo-config";
import { faqs } from "@/config/content";
import { navRoutes } from "@/config/routes";

export const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.businessName,
  description: siteConfig.description,
  url: siteConfig.website,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: siteConfig.website + seoConfig.ogImage,
  priceRange: "$$$",
  currenciesAccepted: "ZAR, USD, EUR",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: "ZA",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Limpopo" },
    { "@type": "Country", name: "South Africa" },
    { "@type": "Place", name: "International hunters worldwide" },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Eco-friendly lodge" },
    { "@type": "LocationFeatureSpecification", name: "All-inclusive catering" },
    { "@type": "LocationFeatureSpecification", name: "Malaria-free area" },
    { "@type": "LocationFeatureSpecification", name: "Guided hunting safaris" },
    { "@type": "LocationFeatureSpecification", name: "Game drives" },
  ],
  knowsAbout: [
    "Hunting safaris",
    "Trophy hunting",
    "Plains game hunting",
    "Bow hunting",
    "Bushveld lodge accommodation",
  ],
};

export const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: `${siteConfig.businessName} — Hunting Safaris & Bushveld Lodge`,
  description:
    "Premium guided hunting safaris and an eco-friendly bushveld lodge in Thabazimbi, Limpopo, South Africa.",
  url: siteConfig.website,
  touristType: ["Hunters", "Families", "Corporate groups", "Eco-tourists"],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: "ZA",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.businessName,
  url: siteConfig.website,
};

// Breadcrumb helper for inner pages.
export const breadcrumbSchema = (label: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.website,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: label,
      item: `${siteConfig.website}${path}`,
    },
  ],
});

export const navMainEntity = navRoutes;
