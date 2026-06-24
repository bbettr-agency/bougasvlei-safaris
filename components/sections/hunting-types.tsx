import { huntingTypes } from "@/config/content";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function HuntingTypes() {
  return (
    <section className="bg-brand-ink px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={huntingTypes.eyebrow}
          title={huntingTypes.title}
          body={huntingTypes.body}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {huntingTypes.methods.map((method, i) => (
            <Reveal key={method.title} delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-brand-gold/12 bg-brand-charcoal/60 p-8 transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-gold/25 bg-brand-gold/10 text-brand-gold">
                  <method.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-ivory">
                  {method.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-brand-ivory/65">
                  {method.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
