import { stats } from "@/config/content";
import { Reveal, Stagger, CountUp } from "@/engine/motion";

export default function StatsStrip() {
  return (
    <section className="relative bg-brand-ink px-5 py-14 sm:px-6 lg:px-8">
      <Stagger className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <Reveal key={stat.label} preset="fadeUpItem">
            <div className="rounded-2xl border border-brand-gold/10 bg-brand-charcoal/60 px-5 py-7 text-center">
              <div className="font-display text-3xl font-bold text-brand-gold sm:text-4xl">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-brand-ivory/60">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </Stagger>
    </section>
  );
}
