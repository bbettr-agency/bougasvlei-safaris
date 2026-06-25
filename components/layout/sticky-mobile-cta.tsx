"use client";

import Link from "next/link";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site-config";

/**
 * Bottom sticky conversion bar — mobile only. Keeps the two primary actions
 * (WhatsApp + Request Availability) within thumb reach, each on a single line.
 * WhatsApp is sized to its content so "Request Availability" gets the room it
 * needs to stay on one line without wrapping.
 */
export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-gold/20 bg-brand-ink/95 px-3 py-2.5 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-2.5">
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-[13px] font-bold text-white"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          <span className="whitespace-nowrap">WhatsApp</span>
        </a>
        <Link
          href="/contact-us"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gold px-3.5 py-3.5 text-[13px] font-bold text-brand-ink"
        >
          <CalendarCheck className="h-4 w-4 shrink-0" />
          <span className="whitespace-nowrap">Request Availability</span>
        </Link>
      </div>
    </div>
  );
}
