"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { navRoutes } from "@/config/routes";
import { cn } from "@/utils/cn";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-brand-gold/15 bg-brand-ink/90 backdrop-blur-md"
          : "bg-gradient-to-b from-brand-ink/70 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        {/* Brand / logo slot */}
        <Link href="/" className="flex items-center gap-3" aria-label="Bougasvlei Safaris home">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-brand-gold/40">
            <Image
              src="/images/logo/Bougasvlei Safari Logo.png"
              alt="Bougasvlei Safaris logo"
              fill
              sizes="44px"
              priority
              className="object-cover"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-brand-ivory">
              Bougasvlei
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold/80">
              Safaris
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navRoutes.map((route) => {
            const active =
              route.href === "/"
                ? pathname === "/"
                : pathname.startsWith(route.href);
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-brand-gold"
                    : "text-brand-ivory/75 hover:text-brand-ivory"
                )}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-ink transition-all hover:bg-brand-sandLight hover:shadow-gold lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          {siteConfig.ctaWhatsApp}
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/30 text-brand-ivory lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-brand-gold/10 bg-brand-ink/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden">
          {navRoutes.map((route) => {
            const active =
              route.href === "/"
                ? pathname === "/"
                : pathname.startsWith(route.href);
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  active
                    ? "bg-brand-gold/10 text-brand-gold"
                    : "text-brand-ivory/80 hover:bg-white/5 hover:text-brand-ivory"
                )}
              >
                {route.label}
              </Link>
            );
          })}
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-gold px-5 py-3.5 text-base font-bold text-brand-ink"
          >
            <MessageCircle className="h-5 w-5" />
            {siteConfig.ctaWhatsApp}
          </a>
        </nav>
      )}
    </header>
  );
}
