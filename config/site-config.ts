// ─────────────────────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH — business details, contact channels & lead capture.
//
//  Bougasvlei Safaris — premium hunting safaris & eco-friendly bushveld lodge in
//  Thabazimbi, Limpopo, South Africa. Update real photography, award images and
//  the GoHighLevel form embed before launch (see public/images/README.md).
// ─────────────────────────────────────────────────────────────────────────────

// WhatsApp numbers — digits only, international format, no "+" or spaces.
const whatsappNumber = "27836324352"; // André (primary enquiry line)

// Pre-filled WhatsApp message — primes a high-intent enquiry conversation.
const whatsappMessage =
  "Hi Bougasvlei Safaris, I'd like to enquire about availability for a hunting safari / lodge stay. Could you share more details?";

const buildWaLink = (number: string, message: string) =>
  `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const siteConfig = {
  // ── Identity ────────────────────────────────────────────────────────────────
  businessName: "Bougasvlei Safaris",
  shortName: "Bougasvlei",
  tagline:
    "Premium hunting safaris and an eco-friendly bushveld lodge in the malaria-free heart of Thabazimbi, Limpopo.",
  description:
    "Bougasvlei Safaris offers premium guided hunting safaris, trophy hunting and an eco-friendly bushveld lodge in Thabazimbi, Limpopo, South Africa. Tailor-made packages for international hunters, families and corporate guests — rifle and bow hunting across 20+ game species, all-inclusive hospitality and authentic African luxury.",

  // ── Hosts ────────────────────────────────────────────────────────────────────
  hosts: [
    { name: "André", phone: "+27 83 632 4352", phoneLink: "tel:+27836324352", whatsapp: "27836324352" },
    { name: "Lida", phone: "+27 83 640 2070", phoneLink: "tel:+27836402070", whatsapp: "27836402070" },
  ],

  // ── Contact channels ─────────────────────────────────────────────────────────
  email: "info@bougasvlei.co.za",
  emailLink: "mailto:info@bougasvlei.co.za",

  // Primary host phone (André) — used for top-level call CTAs.
  phone: "+27 83 632 4352",
  phoneDisplay: "+27 83 632 4352",
  phoneLink: "tel:+27836324352",

  whatsappNumber,
  whatsappMessage,
  whatsappDisplay: "+27 83 632 4352",
  whatsappLink: buildWaLink(whatsappNumber, whatsappMessage),

  // Per-host WhatsApp links (used on contact page).
  whatsappAndre: buildWaLink("27836324352", whatsappMessage),
  whatsappLida: buildWaLink("27836402070", whatsappMessage),

  // ── Location ─────────────────────────────────────────────────────────────────
  city: "Thabazimbi",
  region: "Limpopo",
  country: "South Africa",
  locationFull: "Thabazimbi, Limpopo, South Africa",
  serviceArea: "Welcoming hunters & guests from across South Africa and worldwide",
  // Google Maps directions link (town-level until exact farm pin is supplied).
  mapLink: "https://www.google.com/maps/search/?api=1&query=Thabazimbi%2C%20Limpopo%2C%20South%20Africa",
  mapEmbed:
    "https://www.google.com/maps?q=Thabazimbi,Limpopo,South%20Africa&output=embed",

  website: "https://www.bougasvleisafaris.com",
  replyTime: "We typically reply within 24 hours on business days.",

  // ── Calls to action (copy) ───────────────────────────────────────────────────
  cta: "Request Availability",
  ctaShort: "Request Availability",
  ctaWhatsApp: "WhatsApp Us",
  ctaCall: "Call Us",

  // ── Lead capture ─────────────────────────────────────────────────────────────
  // The enquiry forms are styled front-end placeholders (no backend) prepared for a
  // GoHighLevel embed. Wire submission inside components/forms/enquiry-form.tsx.
};

export type Host = (typeof siteConfig.hosts)[number];
