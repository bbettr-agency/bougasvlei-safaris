import { whyInternational } from "@/config/content";
import { images } from "@/config/images";
import ImageFrame from "@/components/ui/image-frame";
import Reveal from "@/components/ui/reveal";

/** "Why International Hunters Choose South Africa" — international SEO + conversion (hunting page). */
export default function WhyInternational() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <ImageFrame
            src={images.savanna.src}
            alt={images.savanna.alt}
            label="South African bushveld"
            className="aspect-[4/5] w-full shadow-card"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
            <span className="h-px w-6 bg-brand-gold/60" />
            {whyInternational.eyebrow}
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-ivory sm:text-4xl lg:text-[2.6rem]">
            {whyInternational.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-brand-ivory/70 md:text-lg">
            {whyInternational.body}
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {whyInternational.points.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-gold/25 bg-brand-gold/10 text-brand-gold">
                  <point.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-brand-ivory">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-brand-ivory/60">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
