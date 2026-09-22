import { MapPin } from "lucide-react";

import { Reveal } from "@/engine/motion";
import { finalCta } from "@/config/content";
import { siteConfig } from "@/config/site-config";
import EnquiryForm from "@/components/forms/enquiry-form";

type FinalCtaProps = { id?: string };

export default function FinalCta({ id = "enquire" }: FinalCtaProps) {
  const andre = siteConfig.hosts[0];
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-brand-ivory/10 bg-brand-ink px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-sand/80">
            Plan your safari
          </p>
          <h2 className="mt-6 text-[2.2rem] font-medium leading-[1.1] tracking-[-0.02em] text-brand-ivory sm:text-[2.75rem]">
            {finalCta.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-brand-ivory/70">
            {finalCta.body}
          </p>

          <div className="mt-9 space-y-3 border-t border-brand-ivory/12 pt-8 text-sm">
            <a
              href={andre.phoneLink}
              className="block text-brand-ivory/80 transition-colors hover:text-brand-gold"
            >
              {andre.name} · {andre.phone}
            </a>
            <a
              href={siteConfig.emailLink}
              className="block text-brand-ivory/80 transition-colors hover:text-brand-gold"
            >
              {siteConfig.email}
            </a>
            <p className="flex items-center gap-2 text-brand-ivory/55">
              <MapPin className="h-3.5 w-3.5 text-brand-sand/70" />
              {siteConfig.locationFull}
            </p>
          </div>
        </div>

        <Reveal delay={0.05} className="lg:col-span-7">
          <EnquiryForm tone="dark" instanceId="home" className="max-w-none" />
        </Reveal>
      </div>
    </section>
  );
}
