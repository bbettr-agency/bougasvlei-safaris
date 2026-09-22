import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { huntingOverview } from "@/config/content";
import { images } from "@/config/images";
import ImageFrame from "@/components/ui/image-frame";
import { Reveal } from "@/engine/motion";

export default function HuntingOverview() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image — breathes (imageReveal). The stat badge stays composed. */}
        <div className="relative">
          <ImageFrame
            settle
            src={images.trophyHunt.src}
            alt={images.trophyHunt.alt}
            label="Hunting safari photo"
            className="aspect-[4/3] w-full shadow-card"
          />
          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-brand-gold/20 bg-brand-ink/90 px-5 py-4 shadow-ink backdrop-blur sm:block">
            <p className="font-display text-2xl font-bold text-brand-gold">20+</p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-brand-ivory/60">
              Game species
            </p>
          </div>
        </div>

        {/* Copy — composed fade-up (one block, never per-paragraph) */}
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
            <span className="h-px w-6 bg-brand-gold/60" />
            {huntingOverview.eyebrow}
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-ivory sm:text-4xl lg:text-[2.6rem]">
            {huntingOverview.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-brand-ivory/70 md:text-lg">
            {huntingOverview.body}
          </p>

          <div className="mt-8 space-y-5">
            {huntingOverview.features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-gold/25 bg-brand-gold/10 text-brand-gold">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-ivory">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-brand-ivory/60">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/hunting"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-sandLight hover:shadow-gold active:translate-y-0 active:scale-[0.98]"
            >
              Explore Hunting Safaris
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/hunting-with-us"
              className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-6 py-3 text-sm font-bold text-brand-gold transition-all duration-200 hover:bg-brand-gold hover:text-brand-ink active:scale-[0.98]"
            >
              Packages &amp; What&apos;s Included
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
