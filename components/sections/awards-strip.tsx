import { awards } from "@/config/awards";
import AwardBadge from "@/components/ui/award-badge";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/utils/cn";

type AwardsStripProps = {
  tone?: "light" | "dark";
  heading?: string;
  className?: string;
};

/**
 * Subtle, premium award/trust badges. Reused across hero trust area, about,
 * contact, footer and hunting pages. Driven by config/awards.ts.
 */
export default function AwardsStrip({
  tone = "dark",
  heading = "Trusted & Recognised",
  className,
}: AwardsStripProps) {
  const dark = tone === "dark";
  return (
    <section
      className={cn(
        "border-y px-5 py-10 sm:px-6 lg:px-8",
        dark
          ? "border-brand-gold/10 bg-brand-charcoal"
          : "border-brand-charcoal/10 bg-brand-bone",
        className
      )}
    >
      <Reveal className="mx-auto max-w-7xl">
        <p
          className={cn(
            "text-center text-[11px] font-semibold uppercase tracking-[0.22em]",
            dark ? "text-brand-gold/80" : "text-brand-bronze"
          )}
        >
          {heading}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {awards.map((award) => (
            <AwardBadge key={award.id} award={award} tone={tone} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
