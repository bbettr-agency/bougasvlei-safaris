import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "ghost" | "link" | "whatsapp";
type Tone = "dark" | "light"; // surface the CTA sits on

type CtaProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  tone?: Tone;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  arrow?: boolean;
  ariaLabel?: string;
};

/**
 * The Bougasvlei action language. One restrained primary, a hairline ghost, and
 * an editorial text link — so most secondary actions become links, not more
 * pills. Low radius, medium/semibold weight, quiet tactile press.
 */
export default function Cta({
  children,
  href,
  variant = "primary",
  tone = "dark",
  external = false,
  onClick,
  type = "button",
  className,
  arrow = false,
  ariaLabel,
}: CtaProps) {
  const base =
    "group inline-flex items-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 focus-visible:ring-offset-2";
  const offset = tone === "dark" ? "focus-visible:ring-offset-brand-ink" : "focus-visible:ring-offset-brand-ivory";

  const styles: Record<Variant, string> = {
    primary:
      "justify-center rounded-md bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-ink hover:-translate-y-0.5 hover:bg-brand-sandLight active:translate-y-0 active:scale-[0.98]",
    ghost: cn(
      "justify-center rounded-md border px-6 py-3.5 text-sm font-medium active:scale-[0.98]",
      tone === "dark"
        ? "border-brand-ivory/25 text-brand-ivory hover:border-brand-ivory/45 hover:bg-brand-ivory/5"
        : "border-brand-charcoal/25 text-brand-charcoal hover:border-brand-charcoal/45 hover:bg-brand-charcoal/[0.04]"
    ),
    whatsapp:
      "justify-center rounded-md bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:scale-[0.98]",
    link: cn(
      "text-sm font-medium",
      tone === "dark"
        ? "text-brand-ivory hover:text-brand-gold"
        : "text-brand-charcoal hover:text-brand-bronze"
    ),
  };

  const underline =
    variant === "link" ? (
      <span
        aria-hidden
        className={cn(
          "ml-0.5 h-px w-6 origin-left transition-all duration-300 group-hover:w-9",
          tone === "dark" ? "bg-brand-gold" : "bg-brand-bronze"
        )}
      />
    ) : null;

  const content = (
    <>
      <span>{children}</span>
      {variant === "link" ? (
        underline
      ) : arrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </>
  );

  const cls = cn(base, offset, styles[variant], className);

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
        {content}
      </a>
    ) : (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
