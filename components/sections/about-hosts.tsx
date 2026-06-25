import { Phone, MessageCircle } from "lucide-react";

import { about } from "@/config/content";
import { siteConfig } from "@/config/site-config";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function AboutHosts() {
  return (
    <section className="bg-brand-charcoal px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={about.hosts.eyebrow}
          title={about.hosts.title}
          body={about.hosts.body}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {siteConfig.hosts.map((host, i) => (
            <Reveal key={host.name} delay={i * 0.1}>
              <div className="flex flex-col items-center rounded-3xl border border-brand-gold/12 bg-brand-ink/40 p-8 text-center">
                {/* Premium monogram avatar (real host portraits to be added later) */}
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 font-display text-3xl font-bold text-brand-gold">
                  {host.name.charAt(0)}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-ivory">
                  {host.name}
                </h3>
                <p className="mt-1 text-sm text-brand-gold">Your host</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={host.phoneLink}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-ivory/75 transition-colors hover:text-brand-gold"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {host.phone}
                  </a>
                  <a
                    href={`https://wa.me/${host.whatsapp}?text=${encodeURIComponent(
                      siteConfig.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white transition-all hover:brightness-110"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
