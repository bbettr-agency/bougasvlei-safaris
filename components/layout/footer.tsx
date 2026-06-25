import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { navRoutes } from "@/config/routes";
import AwardLogos from "@/components/ui/award-logos";

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-gold/15 bg-brand-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand + about */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-brand-gold/40">
                <Image
                  src="/images/logo/Bougasvlei Safari Logo.png"
                  alt="Bougasvlei Safaris logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-tight text-brand-ivory">
                  Bougasvlei Safaris
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold/80">
                  Hunting &amp; Bushveld Lodge
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-brand-ivory/60">
              Premium hunting safaris and an eco-friendly bushveld lodge in
              malaria-free {siteConfig.city}, {siteConfig.region}. Tailor-made
              experiences for international hunters, families and corporate guests.
            </p>

            {/* Award logos */}
            <AwardLogos size="sm" className="mt-6 max-w-xs" />
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navRoutes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="text-sm text-brand-ivory/65 transition-colors hover:text-brand-gold"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-brand-ivory/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span>{siteConfig.locationFull}</span>
              </li>
              <li>
                <a
                  href={siteConfig.emailLink}
                  className="flex items-start gap-3 text-brand-ivory/70 transition-colors hover:text-brand-gold"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.hosts.map((host) => (
                <li key={host.name}>
                  <a
                    href={host.phoneLink}
                    className="flex items-start gap-3 text-brand-ivory/70 transition-colors hover:text-brand-gold"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    <span>
                      {host.name} · {host.phone}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              {siteConfig.ctaWhatsApp}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-brand-gold/10 pt-8 text-center text-xs text-brand-ivory/45 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights
            reserved.
          </p>
          <p>
            Premium hunting safaris &amp; bushveld lodge ·{" "}
            {siteConfig.city}, {siteConfig.region}, {siteConfig.country}
          </p>
        </div>

        {/* Bbettr footer credit — subtle, premium, below the copyright line.
            Bbettr Website OS standard (see COMPONENT-LIBRARY/footer-systems.md). */}
        <p className="mt-5 text-center text-[11px] tracking-wide text-brand-ivory/35">
          Website Designed &amp; Developed by{" "}
          <a
            href="https://www.bbettragency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-ivory/55 underline-offset-4 transition-colors hover:text-brand-gold hover:underline"
          >
            Bbettr Agency
          </a>
        </p>
      </div>
    </footer>
  );
}
