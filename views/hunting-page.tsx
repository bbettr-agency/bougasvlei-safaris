import PageHero from "@/components/sections/page-hero";
import HuntingTypes from "@/components/sections/hunting-types";
import WhyInternational from "@/components/sections/why-international";
import SpeciesPreview from "@/components/sections/species-preview";
import AwardsStrip from "@/components/sections/awards-strip";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";

export default function HuntingPage() {
  return (
    <>
      <PageHero
        crumb="Hunting"
        eyebrow="Hunting Safaris"
        title="Hunting Safaris in Thabazimbi, Limpopo"
        subtitle="Guided rifle and bow hunting across the malaria-free bushveld — fair-chase, ethical and tailor-made for South African and international hunters."
        imageKey="heroHunting"
      />
      <HuntingTypes />
      {/* Why International Hunters Choose South Africa — international SEO */}
      <WhyInternational />
      <AwardsStrip tone="light" />
      <SpeciesPreview />
      <Faq tone="dark" />
      <FinalCta />
    </>
  );
}
