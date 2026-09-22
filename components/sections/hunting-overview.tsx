import { Reveal } from "@/engine/motion";
import { huntingOverview } from "@/config/content";
import { images } from "@/config/images";
import ImageFrame from "@/components/ui/image-frame";
import Cta from "@/components/ui/cta";

export default function HuntingOverview() {
  return (
    <section className="grid bg-brand-charcoal lg:grid-cols-2">
      {/* Photograph bleeds to the edge — the material, not a framed card */}
      <div className="relative min-h-[58vh] lg:min-h-[44rem]">
        <ImageFrame
          settle
          rounded="rounded-none"
          src={images.trophyHunt.src}
          alt={images.trophyHunt.alt}
          label="Hunting safari photograph"
          className="h-full w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <p className="absolute bottom-5 left-6 text-xs text-brand-ivory/60">
          A guided trophy safari in the Thabazimbi bushveld
        </p>
      </div>

      {/* Copy — generous space, no cards */}
      <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
        <Reveal className="max-w-md">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-sand/80">
            Hunting
          </p>
          <h2 className="mt-6 text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-brand-ivory sm:text-[2.5rem]">
            World-class trophy hunting across pristine bushveld
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-ivory/70">
            {huntingOverview.body}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-brand-ivory/55">
            Rifle &amp; bow · Walk-and-stalk · Professional hunters · Plains &amp;
            dangerous game
          </p>
          <div className="mt-8">
            <Cta href="/hunting" variant="link">
              Explore the hunting
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
