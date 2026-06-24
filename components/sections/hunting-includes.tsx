import { Check, X } from "lucide-react";

import { huntingIncludes } from "@/config/content";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function HuntingIncludes() {
  return (
    <section className="bg-brand-ivory px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          light={false}
          eyebrow={huntingIncludes.eyebrow}
          title={huntingIncludes.title}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-brand-bronze/20 bg-white p-8 shadow-cardLight">
              <h3 className="font-display text-xl font-bold text-brand-charcoal">
                Included
              </h3>
              <ul className="mt-5 space-y-3.5">
                {huntingIncludes.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-bronze/15 text-brand-bronze">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-6 text-brand-charcoal/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-brand-charcoal/10 bg-brand-bone p-8">
              <h3 className="font-display text-xl font-bold text-brand-charcoal">
                Not included
              </h3>
              <ul className="mt-5 space-y-3.5">
                {huntingIncludes.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-charcoal/10 text-brand-charcoal/60">
                      <X className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-6 text-brand-charcoal/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-white p-4 text-xs leading-6 text-brand-charcoal/70">
                {huntingIncludes.note}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
