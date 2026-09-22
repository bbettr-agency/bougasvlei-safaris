"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { useScrollPast, THRESHOLD } from "@/engine/motion";
import { navRoutes } from "@/config/routes";
import Cta from "@/components/ui/cta";
import { cn } from "@/utils/cn";

const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export default function Header() {
  const pathname = usePathname();
  const scrolled = useScrollPast(THRESHOLD.header); // rAF-throttled, single listener
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        // Animate colour / shadow / blur only — never height or padding.
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-brand-ivory/10 bg-brand-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-brand-ink/60 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        {/* Brand / logo slot */}
        <Link href="/" className="flex items-center gap-3" aria-label="Bougasvlei Safaris home">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-brand-ivory/25">
            <Image
              src="/images/logo/Bougasvlei Safari Logo.png"
              alt="Bougasvlei Safaris logo"
              fill
              sizes="40px"
              priority
              className="object-cover"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[1.05rem] font-semibold tracking-[-0.01em] text-brand-ivory">
              Bougasvlei
            </span>
            <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-brand-sand/70">
              Safaris
            </span>
          </span>
        </Link>

        {/* Desktop nav — wipe-in gold underline on hover + active */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navRoutes.map((route) => {
            const active = isActive(route.href, pathname);
            return (
              <Link
                key={route.href}
                href={route.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-3.5 py-2 text-[0.9rem] font-medium transition-colors",
                  "after:absolute after:inset-x-3.5 after:bottom-1 after:h-px after:origin-left after:bg-brand-gold after:transition-transform after:duration-300 hover:after:scale-x-100",
                  active
                    ? "text-brand-ivory after:scale-x-100"
                    : "text-brand-ivory/65 hover:text-brand-ivory after:scale-x-0"
                )}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA — quiet ghost, not a gold pill */}
        <Cta href="/contact-us" variant="ghost" className="hidden lg:inline-flex">
          Enquire
        </Cta>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-ivory/20 text-brand-ivory transition-transform duration-200 active:scale-95 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu — always mounted so it animates open AND closed. Transform +
          opacity only (never height); reduced motion collapses the transition. */}
      <nav
        aria-hidden={!open}
        className={cn(
          "absolute inset-x-0 top-full origin-top border-t border-brand-ivory/10 bg-brand-ink/95 px-5 pb-6 pt-2 backdrop-blur-md transition-all duration-300 ease-out lg:hidden",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        {navRoutes.map((route, i) => {
          const active = isActive(route.href, pathname);
          return (
            <Link
              key={route.href}
              href={route.href}
              tabIndex={open ? undefined : -1}
              aria-current={active ? "page" : undefined}
              style={{ transitionDelay: open ? `${60 + i * 35}ms` : "0ms" }}
              className={cn(
                "block border-b border-brand-ivory/8 px-1 py-3.5 text-[1.05rem] font-medium transition-all duration-300",
                open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
                active ? "text-brand-gold" : "text-brand-ivory/80 hover:text-brand-ivory"
              )}
            >
              {route.label}
            </Link>
          );
        })}
        <Link
          href="/contact-us"
          tabIndex={open ? undefined : -1}
          className="mt-5 flex items-center justify-center rounded-md bg-brand-gold px-5 py-3.5 text-sm font-semibold text-brand-ink transition-transform duration-200 active:scale-[0.98]"
        >
          Enquire
        </Link>
      </nav>
    </header>
  );
}
