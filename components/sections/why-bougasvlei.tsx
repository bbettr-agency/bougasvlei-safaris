import { whyBougasvlei } from "@/config/content";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function WhyBougasvlei() {
  return (
    <section className="relative overflow-hidden bg-brand-ink px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="absolute inset-0 bg-sand-glow" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={whyBougasvlei.eyebrow}
          title={whyBougasvlei.title}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {whyBougasvlei.reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 2) * 0.08}>
              <div className="flex h-full items-start gap-5 rounded-2xl border border-brand-gold/12 bg-brand-charcoal/60 p-7 transition-colors hover:border-brand-gold/30">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-gold/25 bg-brand-gold/10 text-brand-gold">
                  <reason.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-ivory">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brand-ivory/65">
                    {reason.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
