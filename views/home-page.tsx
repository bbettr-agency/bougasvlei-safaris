import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import HuntingOverview from "@/components/sections/hunting-overview";
import LodgeSection from "@/components/sections/lodge-section";
import WhyBougasvlei from "@/components/sections/why-bougasvlei";
import GalleryPreview from "@/components/sections/gallery-preview";
import SpeciesPreview from "@/components/sections/species-preview";
import SeoContent from "@/components/sections/seo-content";
import FinalCta from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      {/* Cinematic, land-first hero */}
      <Hero />
      {/* Editorial positioning + the estate in numbers */}
      <Intro />
      {/* What we offer — hunting (photographic) then the lodge (hospitality) */}
      <HuntingOverview />
      <LodgeSection />
      {/* Why Bougasvlei — consolidated editorial rows */}
      <WhyBougasvlei />
      {/* Bougasvlei in photographs */}
      <GalleryPreview />
      {/* The game — field-guide teaser */}
      <SpeciesPreview />
      {/* Region prose (SEO) */}
      <SeoContent />
      {/* Closing — the single enquiry path */}
      <FinalCta />
    </>
  );
}
