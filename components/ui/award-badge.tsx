import Image from "next/image";
import { Award as AwardIcon } from "lucide-react";
import type { Award } from "@/config/awards";
import { cn } from "@/utils/cn";

type AwardBadgeProps = {
  award: Award;
  /** light = on dark backgrounds, dark = on ivory backgrounds */
  tone?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
};

/**
 * Small, premium, subtle award/trust badge. Driven entirely by config/awards.ts —
 * once an image path is set there, every badge across the site updates. Until then
 * it renders a tasteful labelled placeholder (never oversized).
 */
export default function AwardBadge({
  award,
  tone = "light",
  size = "md",
  className,
}: AwardBadgeProps) {
  const dim = size === "sm" ? 44 : 56;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl border px-3.5 py-2.5 backdrop-blur transition-colors",
        tone === "light"
          ? "border-brand-gold/20 bg-white/5 hover:border-brand-gold/40"
          : "border-brand-bronze/20 bg-brand-charcoal/[0.03] hover:border-brand-bronze/40",
        className
      )}
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden rounded-full",
          tone === "light" ? "bg-brand-gold/10" : "bg-brand-bronze/10"
        )}
        style={{ width: dim, height: dim }}
      >
        {award.image ? (
          <Image
            src={award.image}
            alt={award.name}
            width={dim}
            height={dim}
            className="h-full w-full object-contain"
          />
        ) : (
          <AwardIcon
            className={cn(
              "h-5 w-5",
              tone === "light" ? "text-brand-gold/70" : "text-brand-bronze/70"
            )}
          />
        )}
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.16em]",
            tone === "light" ? "text-brand-sand/80" : "text-brand-bronze"
          )}
        >
          {award.image ? "Award" : "Award slot"}
        </span>
        <span
          className={cn(
            "text-xs font-bold",
            tone === "light" ? "text-brand-ivory/90" : "text-brand-charcoal"
          )}
        >
          {award.label}
        </span>
      </span>
    </div>
  );
}
