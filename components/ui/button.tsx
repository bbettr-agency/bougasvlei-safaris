import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

type ButtonVariant = "gold" | "ivory" | "ghost" | "outline" | "whatsapp";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink";

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm md:text-base",
};

const variants: Record<ButtonVariant, string> = {
  gold: "bg-brand-gold text-brand-ink hover:bg-brand-sandLight hover:shadow-gold",
  ivory: "bg-brand-ivory text-brand-ink hover:bg-brand-bone",
  ghost:
    "bg-white/5 text-brand-ivory backdrop-blur-md border border-white/15 hover:bg-white/10 hover:border-brand-gold/60",
  outline:
    "border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-ink",
  whatsapp:
    "bg-[#25D366] text-white shadow-[0_18px_50px_-20px_rgba(37,211,102,0.7)] hover:brightness-110",
};

export default function Button({
  children,
  href,
  variant = "gold",
  size = "lg",
  className,
  withArrow = false,
  external = false,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
