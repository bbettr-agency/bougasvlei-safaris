import { Reveal, Stagger } from "@/engine/motion";
import { getSpeciesBySlug } from "@/config/game-species";
import ImageFrame from "@/components/ui/image-frame";
import Cta from "@/components/ui/cta";

// A curated handful for the homepage — begins the field-guide identity.
// Scientific names are objective taxonomy (not marketing copy).
const featured = [
  { slug: "cape-buffalo", latin: "Syncerus caffer" },
  { slug: "sable", latin: "Hippotragus niger" },
  { slug: "cape-kudu", latin: "Tragelaphus strepsiceros" },
  { slug: "giraffe", latin: "Giraffa camelopardalis" },
  { slug: "blue-wildebeest", latin: "Connochaetes taurinus" },
  { slug: "zebra", latin: "Equus quagga" },
]
  .map((f) => ({ ...f, species: getSpeciesBySlug(f.slug) }))
  .filter((f) => f.species);

export default function SpeciesPreview() {
  return (
    <section className="bg-brand-charcoal px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-sand/80">
              The game
            </p>
            <h2 className="mt-6 text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-brand-ivory sm:text-[2.5rem]">
              Twenty-plus species across the property
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-brand-ivory/55">
            From dangerous game to classic plains game — a curated field guide to
            what you can hunt at Bougasvlei.
          </p>
        </div>

        <Stagger className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:gap-x-10">
          {featured.map(({ slug, latin, species }) => (
            <Reveal key={slug} preset="fadeUpItem" className="group">
              <div className="relative aspect-[5/4] overflow-hidden bg-brand-ink/40">
                <ImageFrame
                  rounded="rounded-none"
                  src={species!.image.src}
                  alt={species!.image.alt}
                  label={species!.name}
                  className="h-full w-full"
                  imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 45vw, 30vw"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3 border-t border-brand-ivory/12 pt-3.5">
                <div>
                  <h3 className="text-[1.05rem] font-medium leading-tight text-brand-ivory">
                    {species!.name}
                  </h3>
                  <p className="mt-0.5 text-xs italic text-brand-ivory/45">
                    {latin}
                  </p>
                </div>
                <span className="shrink-0 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brand-sand/70">
                  {species!.category}
                </span>
              </div>
            </Reveal>
          ))}
        </Stagger>

        <div className="mt-14 border-t border-brand-ivory/12 pt-8">
          <Cta href="/game-species" variant="link">
            View all game species
          </Cta>
        </div>
      </div>
    </section>
  );
}
