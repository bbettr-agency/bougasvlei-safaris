import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

import { finalCta } from "@/config/content";
import { siteConfig } from "@/config/site-config";
import { images } from "@/config/images";
import EnquiryForm from "@/components/forms/enquiry-form";
import Reveal from "@/components/ui/reveal";

type FinalCtaProps = {
  id?: string;
};

export default function FinalCta({ id = "enquire" }: FinalCtaProps) {
  return (
    <section id={id} className="relative overflow-hidden bg-brand-ink scroll-mt-24">
      <div className="absolute inset-0">
        {images.firepit.src && (
          <Image
            src={images.firepit.src}
            alt={images.firepit.alt}
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/95 to-brand-ink/80" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Copy */}
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
            <span className="h-px w-6 bg-brand-gold/60" />
            Request Availability
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-ivory sm:text-4xl lg:text-[2.75rem]">
            {finalCta.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-brand-ivory/75 md:text-lg">
            {finalCta.body}
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={siteConfig.phoneLink}
              className="flex items-center gap-3 text-brand-ivory/80 transition-colors hover:text-brand-gold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/25 bg-brand-gold/10 text-brand-gold">
                <Phone className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold">
                {siteConfig.hosts[0].name} · {siteConfig.hosts[0].phone}
              </span>
            </a>
            <div className="flex items-center gap-3 text-brand-ivory/80">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/25 bg-brand-gold/10 text-brand-gold">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold">
                {siteConfig.locationFull}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <EnquiryForm variant="hero" instanceId="final" />
        </Reveal>
      </div>
    </section>
  );
}
