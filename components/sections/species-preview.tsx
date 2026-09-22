import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { gameSpecies } from "@/config/game-species";
import SectionHeading from "@/components/ui/section-heading";
import SpeciesCard from "@/components/ui/species-card";
import { Reveal, Stagger } from "@/engine/motion";

export default function SpeciesPreview() {
  const preview = gameSpecies.slice(0, 8);
  return (
    <section className="relative bg-brand-ink px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Game Species"
          title="Hunt 20+ species across pristine bushveld"
          body="From dangerous game to classic plains game, build the safari of your dreams with quality, ethically managed animals."
        />

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {preview.map((species) => (
            <Reveal key={species.slug} preset="fadeUpItem">
              <SpeciesCard species={species} />
            </Reveal>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Link
            href="/game-species"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-7 py-3.5 text-sm font-bold text-brand-gold transition-all duration-200 hover:bg-brand-gold hover:text-brand-ink active:scale-[0.98]"
          >
            View All Game Species
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
