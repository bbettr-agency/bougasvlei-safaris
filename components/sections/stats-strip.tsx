import { stats } from "@/config/content";
import CountUp from "@/components/ui/count-up";
import Reveal from "@/components/ui/reveal";

export default function StatsStrip() {
  return (
    <section className="relative bg-brand-ink px-5 py-14 sm:px-6 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-brand-gold/10 bg-brand-charcoal/60 px-5 py-7 text-center"
          >
            <div className="font-display text-3xl font-bold text-brand-gold sm:text-4xl">
              <CountUp
                end={stat.value}
                prefix={stat.prefix ?? ""}
                suffix={stat.suffix ?? ""}
              />
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-brand-ivory/60">
              {stat.label}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
