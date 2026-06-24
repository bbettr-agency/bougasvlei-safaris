"use client";

import Link from "next/link";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site-config";

/**
 * Bottom sticky conversion bar — mobile only. Always keeps the two primary
 * actions (WhatsApp + Request Availability) within thumb reach.
 */
export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-gold/20 bg-brand-ink/95 px-3 py-2.5 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-2.5">
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <Link
          href="/contact-us"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gold px-4 py-3 text-sm font-bold text-brand-ink"
        >
          <CalendarCheck className="h-4 w-4" />
          Request Availability
        </Link>
      </div>
    </div>
  );
}
