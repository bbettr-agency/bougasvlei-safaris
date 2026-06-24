"use client";

import { useState } from "react";
import { gameSpecies, speciesCategories } from "@/config/game-species";
import SpeciesCard from "@/components/ui/species-card";
import { cn } from "@/utils/cn";

const FILTERS = ["All", ...speciesCategories] as const;

export default function SpeciesGrid() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const filtered =
    active === "All"
      ? gameSpecies
      : gameSpecies.filter((s) => s.category === active);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
              active === filter
                ? "bg-brand-gold text-brand-ink shadow-gold"
                : "border border-brand-gold/25 text-brand-ivory/75 hover:border-brand-gold/50 hover:text-brand-ivory"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {filtered.map((species) => (
          <SpeciesCard key={species.slug} species={species} />
        ))}
      </div>
    </div>
  );
}
