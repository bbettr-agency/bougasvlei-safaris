import PageHero from "@/components/sections/page-hero";
import SpeciesGrid from "@/components/sections/species-grid";
import SectionHeading from "@/components/ui/section-heading";
import FinalCta from "@/components/sections/final-cta";

export default function GameSpeciesPage() {
  return (
    <>
      <PageHero
        crumb="Game Species"
        eyebrow="Trophy Hunting"
        title="Game Species at Bougasvlei Safaris"
        subtitle="From dangerous game to classic plains game, explore the 20+ species available across our bushveld game farm in Thabazimbi, Limpopo."
        imageKey="buffaloWaterhole"
      />

      <section className="bg-brand-ink px-5 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Game"
            title="Build your dream safari"
            body="Quality, ethically managed animals across varied bushveld terrain. Filter by category to plan your species list, then request availability."
          />
          <div className="mt-12">
            <SpeciesGrid />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
