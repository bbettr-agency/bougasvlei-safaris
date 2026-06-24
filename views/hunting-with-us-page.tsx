import PageHero from "@/components/sections/page-hero";
import HuntingProcess from "@/components/sections/hunting-process";
import HuntingIncludes from "@/components/sections/hunting-includes";
import HuntingTypes from "@/components/sections/hunting-types";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";

export default function HuntingWithUsPage() {
  return (
    <>
      <PageHero
        crumb="Hunting With Us"
        eyebrow="Packages & Experience"
        title="Hunting With Us"
        subtitle="Tailor-made, all-inclusive safari packages with professional hunters, comfortable lodging and full trophy handling — here's exactly how it works."
        imageKey="huntingWalk"
      />
      <HuntingProcess />
      <HuntingIncludes />
      <HuntingTypes />
      <Faq tone="dark" />
      <FinalCta />
    </>
  );
}
