import Hero from "@/components/sections/hero";
import StatsStrip from "@/components/sections/stats-strip";
import HuntingOverview from "@/components/sections/hunting-overview";
import LodgeSection from "@/components/sections/lodge-section";
import WhyStay from "@/components/sections/why-stay";
import SpeciesPreview from "@/components/sections/species-preview";
import SeoContent from "@/components/sections/seo-content";
import GalleryPreview from "@/components/sections/gallery-preview";
import WhyBougasvlei from "@/components/sections/why-bougasvlei";
import WhatsAppBand from "@/components/sections/whatsapp-band";
import FinalCta from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with enquiry form + award badges */}
      <Hero />
      {/* 2. Headline stats */}
      <StatsStrip />
      {/* 3. Hunting safaris */}
      <HuntingOverview />
      {/* 4. Lodge accommodation */}
      <LodgeSection />
      {/* Why stay (family / eco / hospitality / safety / privacy) */}
      <WhyStay />
      {/* 5. Game species preview */}
      <SpeciesPreview />
      {/* SEO content section (local + national hunting-safari intent) */}
      <SeoContent />
      {/* 6. Gallery preview */}
      <GalleryPreview />
      {/* 7. Why Bougasvlei Safaris */}
      <WhyBougasvlei />
      {/* 8. WhatsApp CTA */}
      <WhatsAppBand />
      {/* 9. Final enquiry CTA */}
      <FinalCta />
    </>
  );
}
