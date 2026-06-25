import PageHero from "@/components/sections/page-hero";
import AboutStory from "@/components/sections/about-story";
import AboutHosts from "@/components/sections/about-hosts";
import WhyStay from "@/components/sections/why-stay";
import StatsStrip from "@/components/sections/stats-strip";
import AwardsStrip from "@/components/sections/awards-strip";
import FinalCta from "@/components/sections/final-cta";

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About Us"
        title="About Bougasvlei Safaris"
        subtitle="A family-run hunting and eco-friendly lodge destination in the malaria-free bushveld of Thabazimbi, Limpopo, South Africa."
        imageKey="buffaloHerd"
      />
      <AboutStory />
      <StatsStrip />
      <AboutHosts />
      <WhyStay />
      <AwardsStrip tone="dark" />
      <FinalCta />
    </>
  );
}
