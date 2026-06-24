import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  light?: boolean; // light = for dark backgrounds (ivory text)
  className?: string;
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  light = true,
  className,
  as = "h2",
}: SectionHeadingProps) {
  const Title = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]",
            light ? "text-brand-gold" : "text-brand-bronze"
          )}
        >
          <span className="h-px w-6 bg-brand-gold/60" />
          {eyebrow}
        </div>
      )}
      <Title
        className={cn(
          "mt-4 font-display font-bold leading-[1.1] tracking-tight",
          as === "h1"
            ? "text-[2rem] sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-[2.75rem]",
          light ? "text-brand-ivory" : "text-brand-charcoal"
        )}
      >
        {title}
      </Title>
      {body && (
        <p
          className={cn(
            "mt-5 text-base leading-7 md:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "",
            light ? "text-brand-ivory/70" : "text-brand-charcoal/70"
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
