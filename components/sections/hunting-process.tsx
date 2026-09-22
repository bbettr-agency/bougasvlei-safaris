import { huntingProcess } from "@/config/content";
import SectionHeading from "@/components/ui/section-heading";
import { Reveal, Stagger } from "@/engine/motion";

export default function HuntingProcess() {
  return (
    <section className="bg-brand-charcoal px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={huntingProcess.eyebrow}
          title={huntingProcess.title}
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {huntingProcess.steps.map((step) => (
            <Reveal key={step.n} preset="fadeUpItem">
              <div className="relative h-full rounded-2xl border border-brand-gold/12 bg-brand-ink/40 p-7">
                <span className="font-display text-4xl font-bold text-brand-gold/30">
                  {step.n}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-brand-ivory">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-brand-ivory/65">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
