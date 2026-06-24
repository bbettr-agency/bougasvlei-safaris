// ─────────────────────────────────────────────────────────────────────────────
//  CONTENT — all marketing copy in one place (easy to edit without touching JSX).
// ─────────────────────────────────────────────────────────────────────────────

import {
  Crosshair,
  Home,
  Leaf,
  Users,
  ShieldCheck,
  Lock,
  HeartHandshake,
  Compass,
  Trees,
  Globe2,
  Award,
  PlaneTakeoff,
} from "lucide-react";

// ── Hero (homepage) ───────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Thabazimbi · Limpopo · South Africa",
  headlineLead: "Premium Hunting Safaris &",
  headlineHighlight: "Bushveld Lodge",
  headlineTail: "in the Heart of the Limpopo Bushveld",
  subheadline:
    "Family-hosted, all-inclusive hunting safaris and an eco-friendly bushveld lodge in malaria-free Thabazimbi — crafted for international hunters, families and corporate guests.",
  trustPoints: [
    "20+ game species · rifle & bow hunting",
    "Malaria-free Limpopo bushveld",
    "Eco-friendly, all-inclusive lodge",
    "Hosted personally by André & Lida",
  ],
};

// ── Headline stats strip ──────────────────────────────────────────────────────
export const stats = [
  { value: 20, suffix: "+", label: "Game Species" },
  { value: 100, suffix: "%", label: "Malaria-Free" },
  { value: 24, suffix: "hr", label: "Enquiry Response" },
  { value: 1, suffix: "", label: "Unforgettable Safari", prefix: "#" },
];

// ── Hunting overview (home) ───────────────────────────────────────────────────
export const huntingOverview = {
  eyebrow: "Hunting Safaris",
  title: "World-class trophy hunting in the Limpopo bushveld",
  body: "From plains game to dangerous game, Bougasvlei Safaris offers tailor-made, fair-chase hunting across pristine malaria-free bushveld. Whether you hunt with rifle or bow, our professional hunters put you on quality animals while you enjoy true African hospitality.",
  features: [
    { icon: Crosshair, title: "Rifle & Bow Hunting", text: "Ethical, fair-chase walk-and-stalk safaris tailored to your experience." },
    { icon: Compass, title: "Professional Hunters", text: "Experienced, licensed PHs who know every corner of the property." },
    { icon: Award, title: "Trophy Quality", text: "Carefully managed game and 20+ species to build your dream safari." },
  ],
};

// ── Lodge / accommodation (home) ──────────────────────────────────────────────
export const lodge = {
  eyebrow: "Lodge & Accommodation",
  title: "An eco-friendly bushveld lodge built for comfort",
  body: "Return each evening to a warm, eco-friendly lodge where home-cooked meals, a crackling firepit and the sounds of the bushveld await. Our accommodation blends authentic African character with the comfort that hunters, families and corporate guests expect.",
  features: [
    "All-inclusive catering & home-cooked meals",
    "Eco-friendly, sustainable hospitality",
    "Boma & firepit under the African stars",
    "Private, peaceful bushveld setting",
  ],
};

// ── Why stay at Bougasvlei (family / eco / hospitality / safety / privacy) ─────
export const whyStay = {
  eyebrow: "Why Stay at Bougasvlei Safaris",
  title: "More than accommodation — a true bushveld destination",
  body: "Bougasvlei is a place to slow down, reconnect and experience the wild beauty of the Limpopo bushveld in comfort and safety.",
  pillars: [
    { icon: Users, title: "Family-Friendly", text: "Experiences the whole family can enjoy together, from game drives to bush walks." },
    { icon: Trees, title: "Bushveld Atmosphere", text: "Wake to birdsong and golden light in an authentic, untamed African setting." },
    { icon: Leaf, title: "Eco-Friendly", text: "Sustainable, low-impact hospitality that respects the land and its wildlife." },
    { icon: HeartHandshake, title: "Warm Hospitality", text: "Personally hosted by André & Lida, who treat every guest like family." },
    { icon: ShieldCheck, title: "Safe & Malaria-Free", text: "A secure, malaria-free environment so you can relax with complete peace of mind." },
    { icon: Lock, title: "Privacy & Exclusivity", text: "A private bushveld retreat where your group enjoys space, quiet and exclusivity." },
  ],
};

// ── Why Bougasvlei (differentiators) ──────────────────────────────────────────
export const whyBougasvlei = {
  eyebrow: "Why Bougasvlei Safaris",
  title: "An African safari experience that stays with you",
  reasons: [
    { icon: Home, title: "Family-Run & Personally Hosted", text: "You're never just a booking. André & Lida host every guest personally for a genuine, authentic experience." },
    { icon: Globe2, title: "Built for International & Local Guests", text: "Seamless travel logistics and hospitality that international hunters, families and corporate groups can trust." },
    { icon: Crosshair, title: "Quality Hunting, Ethically Managed", text: "Fair-chase hunting across well-managed bushveld with 20+ species and strong trophy quality." },
    { icon: Leaf, title: "Eco-Friendly Bushveld Lodge", text: "Sustainable hospitality in a malaria-free private reserve — comfort without compromising the wild." },
  ],
};

// ── Why international hunters choose South Africa (hunting page) ───────────────
export const whyInternational = {
  eyebrow: "For International Hunters",
  title: "Why international hunters choose South Africa",
  body: "South Africa is the world's premier hunting destination — and the Limpopo bushveld around Thabazimbi is its beating heart. Here's why hunters travel from across the globe to safari with us.",
  points: [
    { icon: Award, title: "Unmatched Species Diversity", text: "More huntable species than anywhere else in Africa — build a multi-trophy safari in a single trip." },
    { icon: ShieldCheck, title: "Malaria-Free & Safe", text: "The Limpopo bushveld is malaria-free, making it ideal for hunters travelling with family." },
    { icon: PlaneTakeoff, title: "Easy to Reach", text: "A short drive from OR Tambo International — we assist with logistics, transfers and trophy export." },
    { icon: Globe2, title: "Exceptional Value", text: "World-class, all-inclusive safaris at outstanding value compared to other international destinations." },
  ],
};

// ── Facebook / guest reviews ──────────────────────────────────────────────────
// NOTE: replace with the client's real Facebook reviews before launch. No
// aggregate rating is published as schema until verified reviews are supplied.
export const reviews = {
  eyebrow: "Guest Reviews",
  title: "Loved by hunters & families alike",
  note: "Reviews shared from our Facebook community. Replace with verified client reviews before launch.",
  items: [
    { name: "Guest review", location: "Facebook", text: "Placeholder review — André and Lida made our stay unforgettable. The hunting was excellent and the hospitality even better. We'll be back!", rating: 5 },
    { name: "Guest review", location: "Facebook", text: "Placeholder review — a beautiful, peaceful lodge in pristine bushveld. Perfect for our family. Highly recommended.", rating: 5 },
    { name: "Guest review", location: "Facebook", text: "Placeholder review — professional, ethical hunting and superb trophies. One of the best safaris we've experienced in Africa.", rating: 5 },
  ],
};

// ── FAQs (used on relevant pages + FAQ schema) ────────────────────────────────
export const faqs = [
  {
    question: "Where is Bougasvlei Safaris located?",
    answer:
      "We are located in Thabazimbi, in the malaria-free bushveld of the Limpopo province, South Africa — within comfortable driving distance of OR Tambo International Airport. We assist international guests with transfers and travel logistics.",
  },
  {
    question: "Is the area malaria-free?",
    answer:
      "Yes. The Thabazimbi region of Limpopo is a malaria-free area, which makes it an ideal and safe destination for hunters travelling with their families.",
  },
  {
    question: "What game species can I hunt?",
    answer:
      "We offer 20+ species, from plains game such as Kudu, Impala, Zebra, Eland and Blue Wildebeest to specialty and dangerous game including Sable, Cape Buffalo and Leopard. View our game species page for the full list.",
  },
  {
    question: "Do you cater to non-hunters and families?",
    answer:
      "Absolutely. Bougasvlei is a family-friendly destination. Non-hunting guests can enjoy game drives, the bushveld atmosphere, eco-friendly lodge accommodation and our hospitality while others hunt.",
  },
  {
    question: "What is included in a hunting package?",
    answer:
      "Our tailor-made packages are all-inclusive — covering accommodation, catering, professional hunter, field preparation of trophies and use of hunting vehicles. Contact us for a personalised quote based on your species list and dates.",
  },
  {
    question: "How do I book or check availability?",
    answer:
      "The fastest way is to WhatsApp us or complete the enquiry form on our contact page. We typically reply within 24 hours on business days.",
  },
];

// ── Hunting page: methods ─────────────────────────────────────────────────────
export const huntingTypes = {
  eyebrow: "How You Hunt",
  title: "Rifle, bow & walk-and-stalk safaris",
  body: "Every safari is tailored to your experience and preferences. Our professional hunters guide you on foot through the bushveld for an ethical, authentic and fair-chase experience.",
  methods: [
    { icon: Crosshair, title: "Rifle Hunting", text: "Classic spot-and-stalk rifle safaris for plains and dangerous game across varied bushveld terrain." },
    { icon: Compass, title: "Bow Hunting", text: "Purpose-built hides and blinds at waterholes, plus challenging spot-and-stalk archery opportunities." },
    { icon: Trees, title: "Walk & Stalk", text: "Traditional, on-foot fair-chase hunting — the most rewarding and immersive way to experience the bush." },
  ],
};

// ── Hunting-with-us: process + inclusions ─────────────────────────────────────
export const huntingProcess = {
  eyebrow: "How It Works",
  title: "Your Bougasvlei safari, step by step",
  steps: [
    { n: "01", title: "Enquire & Plan", text: "Tell us your species, dates and group size. We craft a tailor-made package and quote." },
    { n: "02", title: "Confirm & Prepare", text: "Secure your dates. We assist with travel logistics, transfers and rifle/permit guidance." },
    { n: "03", title: "Arrive & Hunt", text: "Settle into the lodge and head out with your professional hunter across the bushveld." },
    { n: "04", title: "Trophies & Memories", text: "We handle field preparation and dip-and-pack logistics for your trophies and export." },
  ],
};

export const huntingIncludes = {
  eyebrow: "All-Inclusive",
  title: "What's included in your package",
  included: [
    "Comfortable, eco-friendly lodge accommodation",
    "All meals, home-cooked catering & beverages",
    "Professional hunter & experienced trackers",
    "Daily use of a 4×4 hunting vehicle",
    "Field preparation of trophies",
    "Skinning, salting & trophy handling",
    "Daily lodge servicing & hospitality",
    "Guidance on permits, travel & logistics",
  ],
  excluded: [
    "Trophy fees (per species, on request)",
    "Dip, pack & shipping of trophies",
    "Rifle hire & ammunition (available)",
    "Travel & transfers to the lodge",
    "Gratuities for staff",
  ],
  note: "Packages are tailor-made to your species list, group size and dates — contact us for a personalised, transparent quote.",
};

// ── About page ────────────────────────────────────────────────────────────────
export const about = {
  eyebrow: "Our Story",
  title: "A family passion for the Limpopo bushveld",
  body: [
    "Bougasvlei Safaris is a family-run hunting and lodge destination set in the malaria-free bushveld of Thabazimbi, in South Africa's Limpopo province. What began as a love for the wild has grown into a premium safari experience welcoming hunters, families and corporate guests from across South Africa and around the world.",
    "We believe a great safari is about more than the hunt. It's the warmth of being hosted personally, the comfort of an eco-friendly lodge, home-cooked meals around the fire, and the timeless beauty of the African bushveld. Every detail is designed so you can simply relax, hunt and reconnect.",
  ],
  hosts: {
    eyebrow: "Your Hosts",
    title: "Meet André & Lida",
    body: "André and Lida personally host every guest, bringing deep local knowledge, genuine hospitality and a commitment to ethical, well-managed hunting and sustainable hospitality.",
  },
};

// ── Final CTA band ────────────────────────────────────────────────────────────
export const finalCta = {
  title: "Ready to plan your Bougasvlei safari?",
  body: "Tell us your preferred dates, species and group size — we'll craft a tailor-made hunting or lodge experience and reply within 24 hours.",
};
