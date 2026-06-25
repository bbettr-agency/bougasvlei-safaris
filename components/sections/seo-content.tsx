import Link from "next/link";
import { Check, ArrowRight, CalendarCheck } from "lucide-react";

import { seoSection } from "@/config/content";
import { images } from "@/config/images";
import ImageFrame from "@/components/ui/image-frame";
import Reveal from "@/components/ui/reveal";

/**
 * Homepage SEO content section. Targets local + national hunting-safari intent
 * (Thabazimbi / Limpopo / South Africa) while reading naturally for visitors.
 * Placed after the hunting/lodge sections, before the gallery preview.
 */
export default function SeoContent() {
  return (
    <section className="relative overflow-hidden bg-brand-ink px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="absolute inset-0 bg-sand-glow" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Copy */}
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
            <span className="h-px w-6 bg-brand-gold/60" />
            {seoSection.eyebrow}
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-ivory sm:text-4xl lg:text-[2.6rem]">
            {seoSection.title}
          </h2>

          <div className="mt-5 space-y-4">
            {seoSection.paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-7 text-brand-ivory/70">
                {para}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {seoSection.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-6 text-brand-ivory/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Internal links */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {seoSection.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 px-4 py-2.5 text-sm font-semibold text-brand-ivory/85 transition-all hover:border-brand-gold hover:text-brand-gold"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          {/* Strong CTA */}
          <div className="mt-8">
            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-gold px-7 py-4 text-base font-bold text-brand-ink shadow-gold transition-all duration-300 hover:bg-brand-sandLight"
            >
              <CalendarCheck className="h-5 w-5" />
              Request Availability
            </Link>
          </div>
        </Reveal>

        {/* Image */}
        <Reveal delay={0.1}>
          <div className="relative">
            <ImageFrame
              src={images.sable.src}
              alt="Sable bull in the bushveld at the Bougasvlei Safaris game farm in Thabazimbi, Limpopo"
              label="Bushveld wildlife"
              className="aspect-[4/5] w-full shadow-card"
            />
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-brand-gold/20 bg-brand-charcoal/90 px-5 py-4 shadow-ink backdrop-blur sm:block">
              <p className="font-display text-lg font-bold text-brand-gold">
                Thabazimbi · Limpopo
              </p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-brand-ivory/60">
                Hunting &amp; bushveld lodge
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
