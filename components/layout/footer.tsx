import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site-config";
import { navRoutes } from "@/config/routes";
import AwardLogos from "@/components/ui/award-logos";
import Cta from "@/components/ui/cta";

const overline = "text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-brand-sand/70";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-ivory">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Closing line — the end of the story */}
        <div className="flex flex-col gap-8 border-t border-brand-ivory/10 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-24">
          <p className="max-w-2xl text-[1.7rem] font-medium leading-[1.15] tracking-[-0.02em] text-brand-ivory sm:text-[2.3rem]">
            The bushveld is waiting — plan your Bougasvlei safari.
          </p>
          <Cta href="/contact-us" variant="link">
            Start an enquiry
          </Cta>
        </div>

        {/* Details */}
        <div className="grid gap-14 border-t border-brand-ivory/10 py-16 lg:grid-cols-[1.4fr_0.9fr_1.1fr]">
          {/* Identity + accreditation */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-brand-ivory/20">
                <Image
                  src="/images/logo/Bougasvlei Safari Logo.png"
                  alt="Bougasvlei Safaris logo"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[1.1rem] font-semibold tracking-[-0.01em]">
                  Bougasvlei Safaris
                </span>
                <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-brand-sand/70">
                  Hunting &amp; Bushveld Lodge
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-ivory/55">
              Family-run hunting safaris and an eco-friendly bushveld lodge in
              malaria-free {siteConfig.city}, {siteConfig.region}.
            </p>
            <div className="mt-8">
              <p className={overline}>Accredited</p>
              <AwardLogos size="sm" className="mt-3 max-w-[15rem]" />
            </div>
          </div>

          {/* Explore */}
          <nav>
            <p className={overline}>Explore</p>
            <ul className="mt-5 space-y-3">
              {navRoutes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="text-sm text-brand-ivory/65 transition-colors hover:text-brand-ivory"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact — typography, not icon chips */}
          <div>
            <p className={overline}>Contact</p>
            <div className="mt-5 space-y-3 text-sm">
              <a
                href={siteConfig.emailLink}
                className="block text-brand-ivory/70 transition-colors hover:text-brand-ivory"
              >
                {siteConfig.email}
              </a>
              {siteConfig.hosts.map((host) => (
                <a
                  key={host.name}
                  href={host.phoneLink}
                  className="block text-brand-ivory/70 transition-colors hover:text-brand-ivory"
                >
                  {host.name} · {host.phone}
                </a>
              ))}
              <p className="pt-1 text-brand-ivory/50">{siteConfig.locationFull}</p>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-1 text-brand-ivory/70 underline-offset-4 transition-colors hover:text-brand-gold hover:underline"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Legal + credit */}
        <div className="flex flex-col gap-2 border-t border-brand-ivory/10 py-8 text-xs text-brand-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights
            reserved.
          </p>
          <p>
            Website Designed &amp; Developed by{" "}
            <a
              href="https://www.bbettragency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-ivory/55 underline-offset-4 transition-colors hover:text-brand-gold hover:underline"
            >
              Bbettr Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
