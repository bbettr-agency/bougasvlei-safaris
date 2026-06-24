import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { lodge } from "@/config/content";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site-config";
import ImageFrame from "@/components/ui/image-frame";
import Reveal from "@/components/ui/reveal";

export default function LodgeSection() {
  return (
    <section className="relative overflow-hidden bg-brand-ivory px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy (first on desktop) */}
        <Reveal className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-bronze">
            <span className="h-px w-6 bg-brand-bronze/60" />
            {lodge.eyebrow}
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-charcoal sm:text-4xl lg:text-[2.6rem]">
            {lodge.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-brand-charcoal/70 md:text-lg">
            {lodge.body}
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {lodge.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-bronze/15 text-brand-bronze">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-6 text-brand-charcoal/80">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-6 py-3 text-sm font-bold text-brand-ivory transition-all hover:bg-brand-bronze"
            >
              Enquire About the Lodge
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/25 px-6 py-3 text-sm font-bold text-brand-charcoal transition-all hover:border-brand-bronze hover:text-brand-bronze"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>

        {/* Images */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <ImageFrame
              src={images.lodgeExterior.src}
              alt={images.lodgeExterior.alt}
              label="Lodge exterior"
              className="col-span-2 aspect-[16/10] w-full shadow-cardLight"
            />
            <ImageFrame
              src={images.lodgeFirepit.src}
              alt={images.lodgeFirepit.alt}
              label="Firepit / boma"
              className="aspect-square w-full shadow-cardLight"
            />
            <ImageFrame
              src={images.dining.src}
              alt={images.dining.alt}
              label="Bush dining"
              className="aspect-square w-full shadow-cardLight"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
