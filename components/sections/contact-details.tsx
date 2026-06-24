import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import EnquiryForm from "@/components/forms/enquiry-form";
import Reveal from "@/components/ui/reveal";

const hostWhatsApp = [siteConfig.whatsappAndre, siteConfig.whatsappLida];

export default function ContactDetails() {
  return (
    <section className="relative bg-brand-ink px-5 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Details */}
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-brand-ivory sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-brand-ivory/70">
            For hunting packages, eco-friendly lodge accommodation, catering and
            guided safari experiences in {siteConfig.city}, {siteConfig.region},
            please use the enquiry form. {siteConfig.replyTime}
          </p>

          {/* Contact cards */}
          <div className="mt-8 space-y-4">
            <a
              href={siteConfig.emailLink}
              className="flex items-center gap-4 rounded-2xl border border-brand-gold/12 bg-brand-charcoal/60 p-5 transition-colors hover:border-brand-gold/35"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-sand/70">
                  Email
                </p>
                <p className="text-sm font-bold text-brand-ivory">
                  {siteConfig.email}
                </p>
              </div>
            </a>

            {siteConfig.hosts.map((host, i) => (
              <div
                key={host.name}
                className="flex items-center justify-between gap-4 rounded-2xl border border-brand-gold/12 bg-brand-charcoal/60 p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-sand/70">
                      {host.name}
                    </p>
                    <a
                      href={host.phoneLink}
                      className="text-sm font-bold text-brand-ivory transition-colors hover:text-brand-gold"
                    >
                      {host.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={hostWhatsApp[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-2 text-xs font-bold text-white transition-all hover:brightness-110"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </div>
            ))}

            <div className="flex items-center gap-4 rounded-2xl border border-brand-gold/12 bg-brand-charcoal/60 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-sand/70">
                  Location
                </p>
                <p className="text-sm font-bold text-brand-ivory">
                  {siteConfig.locationFull}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-brand-gold/12 bg-brand-charcoal/60 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-sand/70">
                  Response time
                </p>
                <p className="text-sm font-bold text-brand-ivory">
                  Within 24 hours on business days
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-gold/15">
            <iframe
              title={`Map of ${siteConfig.locationFull}`}
              src={siteConfig.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full grayscale-[0.2]"
            />
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <div id="enquire" className="scroll-mt-28 lg:sticky lg:top-28">
            <EnquiryForm variant="page" instanceId="contact" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
