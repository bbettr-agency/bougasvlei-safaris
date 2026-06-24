import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import Reveal from "@/components/ui/reveal";

export default function WhatsAppBand() {
  return (
    <section className="bg-brand-charcoal px-5 py-14 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#25D366]/30 bg-gradient-to-r from-[#25D366]/15 via-brand-charcoal to-brand-charcoal p-8 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white">
              <MessageCircle className="h-7 w-7" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-ivory">
                Have a quick question?
              </h2>
              <p className="mt-1 text-sm text-brand-ivory/65">
                Chat directly with André on WhatsApp — the fastest way to plan
                your safari.
              </p>
            </div>
          </div>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-bold text-white transition-all hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" />
            {siteConfig.ctaWhatsApp}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
