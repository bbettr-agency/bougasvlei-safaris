import Image from "next/image";

import { Reveal, heroStack } from "@/engine/motion";
import { siteConfig } from "@/config/site-config";
import { hero } from "@/config/content";
import { images } from "@/config/images";
import { awards } from "@/config/awards";
import Cta from "@/components/ui/cta";

// Editorial hero ladder. H1 is the LCP — painted immediately, never faded.
const seq = heroStack();

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-brand-ink text-brand-ivory"
    >
      {/* Full-bleed photography — the land carries the hero. Scale-only settle. */}
      <div className="absolute inset-0">
        {images.heroHome.src && (
          <Reveal eager preset="imageReveal" as="div" className="absolute inset-0">
            <Image
              src={images.heroHome.src}
              alt={images.heroHome.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_40%]"
            />
          </Reveal>
        )}
        {/* One directional scrim, weighted to the bottom where the type sits. */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/45 to-brand-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 sm:px-8 sm:pb-20 lg:pb-24">
        {/* Place */}
        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-sand">
          {hero.eyebrow}
        </div>

        {/* Headline — the LCP. Manrope medium, generous, balanced wrapping. */}
        <h1
          {...seq.lcp}
          className="mt-5 max-w-[16ch] font-medium leading-[1.03] tracking-[-0.02em] text-[2.6rem] sm:text-6xl lg:text-[4.5rem]"
        >
          Hunting safaris &amp; a bushveld lodge in the heart of Limpopo
        </h1>

        <Reveal {...seq.step(0)}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-ivory/75 sm:text-lg">
            {hero.subheadline}
          </p>
        </Reveal>

        {/* Actions — one primary, WhatsApp as a quiet second path */}
        <Reveal {...seq.step(1)}>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Cta href="#enquire" variant="primary" arrow>
              {siteConfig.cta}
            </Cta>
            <Cta href={siteConfig.whatsappLink} external variant="link">
              Message us on WhatsApp
            </Cta>
          </div>
        </Reveal>

        {/* Quiet credentials — a single line, not badges */}
        <Reveal {...seq.step(2)}>
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-brand-ivory/12 pt-6 text-[0.78rem] text-brand-ivory/55">
            <span className="text-brand-ivory/40">Accredited</span>
            {awards.map((a, i) => (
              <span key={a.id} className="flex items-center gap-3">
                {i > 0 && <span className="text-brand-ivory/25">·</span>}
                {a.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
