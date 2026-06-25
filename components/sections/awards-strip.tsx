import AwardLogos from "@/components/ui/award-logos";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/utils/cn";

type AwardsStripProps = {
  tone?: "light" | "dark";
  heading?: string;
  className?: string;
};

/**
 * Subtle, premium award logos. Reused across about, contact and hunting pages.
 * Driven by config/awards.ts and the shared <AwardLogos> presentation so sizing
 * is identical everywhere the awards appear.
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
        "border-y px-5 py-12 sm:px-6 lg:px-8",
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
        <AwardLogos size="md" className="mx-auto mt-6 max-w-xl" />
      </Reveal>
    </section>
  );
}
