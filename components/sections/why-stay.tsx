import { whyStay } from "@/config/content";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

/** "Why Stay at Bougasvlei Safaris" — family, atmosphere, eco, hospitality, safety, privacy. */
export default function WhyStay() {
  return (
    <section className="relative bg-brand-bone px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          light={false}
          eyebrow={whyStay.eyebrow}
          title={whyStay.title}
          body={whyStay.body}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyStay.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 3) * 0.07}>
              <div className="flex h-full flex-col rounded-2xl border border-brand-charcoal/10 bg-white p-7 shadow-cardLight transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-bronze/10 text-brand-bronze">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-brand-charcoal/65">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
