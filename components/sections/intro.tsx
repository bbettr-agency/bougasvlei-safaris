import { Reveal, CountUp } from "@/engine/motion";

const facts = [
  { value: 20, suffix: "+", label: "Game species" },
  { value: 100, suffix: "%", label: "Malaria-free" },
  { value: 24, suffix: "hr", label: "Enquiry reply" },
];

export default function Intro() {
  return (
    <section className="bg-brand-ink px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-brand-sand/80">
            The estate
          </p>
          <Reveal>
            <p className="mt-7 max-w-[26ch] text-[1.7rem] font-medium leading-[1.28] tracking-[-0.01em] text-brand-ivory sm:max-w-[30ch] sm:text-[2rem] lg:text-[2.5rem]">
              A working game farm and an eco-friendly bushveld lodge under one
              roof — where fair-chase hunting and the quiet warmth of a
              family-hosted estate meet in malaria-free Thabazimbi.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="lg:col-span-4 lg:pt-3">
          <dl className="border-t border-brand-ivory/12">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex items-baseline justify-between border-b border-brand-ivory/12 py-5"
              >
                <dt className="text-sm text-brand-ivory/55">{f.label}</dt>
                <dd className="nums text-[1.6rem] font-medium leading-none text-brand-ivory">
                  <CountUp value={f.value} suffix={f.suffix} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm leading-relaxed text-brand-ivory/50">
            Hosted personally by André &amp; Lida, welcoming hunters, families
            and corporate guests from across South Africa and abroad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
