import type { Species } from "@/config/game-species";
import ImageFrame from "@/components/ui/image-frame";

export default function SpeciesCard({ species }: { species: Species }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-brand-gold/12 bg-brand-charcoal/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/35 hover:shadow-card">
      <div className="relative">
        <ImageFrame
          src={species.image.src}
          alt={species.image.alt}
          label={species.name}
          rounded="rounded-none"
          className="aspect-[4/3] w-full"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-ink/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-gold backdrop-blur">
          {species.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-brand-ivory">
          {species.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-brand-ivory/60">
          {species.summary}
        </p>
      </div>
    </div>
  );
}
