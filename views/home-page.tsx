import Hero from "@/components/sections/hero";
import AwardsStrip from "@/components/sections/awards-strip";
import StatsStrip from "@/components/sections/stats-strip";
import HuntingOverview from "@/components/sections/hunting-overview";
import LodgeSection from "@/components/sections/lodge-section";
import WhyStay from "@/components/sections/why-stay";
import SpeciesPreview from "@/components/sections/species-preview";
import GalleryPreview from "@/components/sections/gallery-preview";
import WhyBougasvlei from "@/components/sections/why-bougasvlei";
import Reviews from "@/components/sections/reviews";
import WhatsAppBand from "@/components/sections/whatsapp-band";
import FinalCta from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with enquiry form */}
      <Hero />
      {/* 2. Trust badges / awards */}
      <AwardsStrip tone="dark" />
      <StatsStrip />
      {/* 3. Hunting safaris */}
      <HuntingOverview />
      {/* 4. Lodge accommodation */}
      <LodgeSection />
      {/* Why stay (family / eco / hospitality / safety / privacy) */}
      <WhyStay />
      {/* 5. Game species preview */}
      <SpeciesPreview />
      {/* 6. Gallery preview */}
      <GalleryPreview />
      {/* 7. Why Bougasvlei Safaris */}
      <WhyBougasvlei />
      {/* 8. Facebook reviews */}
      <Reviews />
      {/* 9. WhatsApp CTA */}
      <WhatsAppBand />
      {/* 10. Final enquiry CTA */}
      <FinalCta />
    </>
  );
}
