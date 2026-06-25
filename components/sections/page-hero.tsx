import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { images } from "@/config/images";
import { cn } from "@/utils/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageKey?: keyof typeof images;
  crumb: string;
};

/** Reusable compact hero for inner pages (single H1, breadcrumb, bushveld image). */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  imageKey = "firepit",
  crumb,
}: PageHeroProps) {
  const img = images[imageKey];
  return (
    <section className="relative overflow-hidden bg-brand-ink text-brand-ivory">
      <div className="absolute inset-0">
        {img.src && (
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/95 via-brand-ink/75 to-brand-ink/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-brand-ivory/60"
        >
          <Link href="/" className="transition-colors hover:text-brand-gold">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-brand-gold">{crumb}</span>
        </nav>

        {eyebrow && (
          <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
            <span className="h-px w-6 bg-brand-gold/60" />
            {eyebrow}
          </div>
        )}

        <h1
          className={cn(
            "mt-4 max-w-3xl font-display text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          )}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-brand-ivory/75 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
