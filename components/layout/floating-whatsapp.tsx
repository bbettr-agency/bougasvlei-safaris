"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bougasvlei Safaris on WhatsApp"
      className="group fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.8)] transition-transform hover:scale-105 sm:bottom-6 lg:right-6"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-brand-charcoal px-3 py-1.5 text-xs font-semibold text-brand-ivory opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
