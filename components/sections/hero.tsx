"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, MessageCircle, CalendarCheck } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { hero } from "@/config/content";
import { images } from "@/config/images";
import AwardLogos from "@/components/ui/award-logos";
import EnquiryForm from "@/components/forms/enquiry-form";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-ink text-brand-ivory">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        {images.heroHome.src && (
          <Image
            src={images.heroHome.src}
            alt={images.heroHome.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/95 via-brand-ink/70 to-brand-ink/40" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      {/* Soft glow orbs */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-[420px] w-[420px] rounded-full bg-brand-gold/15 blur-[140px]" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-28 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-32">
        {/* LEFT — copy + CTAs (priority: hunting → lodge → WhatsApp) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold backdrop-blur">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(201,162,75,0.9)]" />
            {hero.eyebrow}
          </div>

          <h1 className="mt-6 max-w-2xl font-display text-[2.1rem] font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.headlineLead}{" "}
            <span className="bg-gradient-to-r from-brand-gold to-brand-sand bg-clip-text text-transparent">
              {hero.headlineHighlight}
            </span>{" "}
            {hero.headlineTail}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-brand-ivory/75 md:text-lg">
            {hero.subheadline}
          </p>

          {/* Trust points */}
          <ul className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
            {hero.trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-6 text-brand-ivory/85">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#enquire"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-gold px-7 py-4 text-base font-bold text-brand-ink shadow-gold transition-all duration-300 hover:bg-brand-sandLight"
            >
              <CalendarCheck className="h-5 w-5" />
              {siteConfig.cta}
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 text-base font-bold text-white shadow-[0_18px_50px_-20px_rgba(37,211,102,0.7)] transition-all duration-300 hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              {siteConfig.ctaWhatsApp}
            </a>
          </div>

          {/* Awards — Trusted & Recognised (3 logos, one row on all viewports) */}
          <div className="mt-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ivory/50">
              Trusted &amp; Recognised
            </p>
            <AwardLogos size="lg" className="mt-2.5 max-w-md" />
          </div>
        </motion.div>

        {/* RIGHT — enquiry form above the fold (desktop) */}
        <motion.div
          id="enquire"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="scroll-mt-28"
        >
          <EnquiryForm variant="hero" instanceId="hero" />
        </motion.div>
      </div>
    </section>
  );
}
