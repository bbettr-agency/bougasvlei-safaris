"use client";

import { FormEvent, useState } from "react";
import { Send, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/utils/cn";

export const INTEREST_OPTIONS = [
  "Hunting Safari",
  "Lodge Accommodation",
  "Game Drives",
  "General Enquiry",
] as const;

type EnquiryFormProps = {
  variant?: "hero" | "page";
  instanceId?: string;
  className?: string;
};

/**
 * Enquiry / "Request Availability" form.
 *
 * This is a styled, front-end placeholder prepared for a GoHighLevel embed.
 * Until the GHL form is connected, submitting composes the enquiry into a
 * pre-filled WhatsApp message to André — so the lead is never lost.
 *
 * To go live with GHL: replace the <form> below with the GHL embed, OR POST the
 * fields to a GHL inbound webhook / API route. (GHL EMBED PLACEHOLDER marked.)
 */
export default function EnquiryForm({
  variant = "page",
  instanceId = "enquiry",
  className,
}: EnquiryFormProps) {
  const [interest, setInterest] = useState<string>(INTEREST_OPTIONS[0]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const dates = (data.get("dates") as string) || "";
    const message = (data.get("message") as string) || "";

    const text = [
      `New enquiry from the Bougasvlei Safaris website:`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interested in: ${interest}`,
      `Preferred dates: ${dates}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${siteConfig.whatsappNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const dark = variant === "hero";

  const fieldBase = cn(
    "w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2",
    dark
      ? "border-white/15 bg-white/5 text-brand-ivory placeholder:text-brand-ivory/40 focus:border-brand-gold/60 focus:ring-brand-gold/30"
      : "border-brand-charcoal/15 bg-brand-ivory text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-brand-bronze focus:ring-brand-bronze/20"
  );
  const labelBase = cn(
    "mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em]",
    dark ? "text-brand-sand/80" : "text-brand-bronze"
  );

  return (
    <div
      className={cn(
        "rounded-3xl border p-6 shadow-card sm:p-7",
        dark
          ? "border-white/10 bg-brand-charcoal/80 backdrop-blur-xl"
          : "border-brand-charcoal/10 bg-white",
        className
      )}
    >
      <div className="mb-5">
        <h3
          className={cn(
            "font-display text-xl font-bold",
            dark ? "text-brand-ivory" : "text-brand-charcoal"
          )}
        >
          Request Availability
        </h3>
        <p
          className={cn(
            "mt-1 text-sm",
            dark ? "text-brand-ivory/60" : "text-brand-charcoal/60"
          )}
        >
          {siteConfig.replyTime}
        </p>
      </div>

      {/* GHL FORM EMBED PLACEHOLDER — paste GoHighLevel form embed here to go live. */}
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${instanceId}-name`} className={labelBase}>
              Full Name
            </label>
            <input
              id={`${instanceId}-name`}
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldBase}
            />
          </div>
          <div>
            <label htmlFor={`${instanceId}-email`} className={labelBase}>
              Email
            </label>
            <input
              id={`${instanceId}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@email.com"
              className={fieldBase}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${instanceId}-phone`} className={labelBase}>
              Phone Number
            </label>
            <input
              id={`${instanceId}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+27 ..."
              className={fieldBase}
            />
          </div>
          <div>
            <label htmlFor={`${instanceId}-interest`} className={labelBase}>
              Interested In
            </label>
            <select
              id={`${instanceId}-interest`}
              name="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className={cn(fieldBase, "cursor-pointer")}
            >
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="text-brand-charcoal">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor={`${instanceId}-dates`} className={labelBase}>
            Preferred Dates
          </label>
          <input
            id={`${instanceId}-dates`}
            name="dates"
            placeholder="e.g. May 2026 · 5 nights"
            className={fieldBase}
          />
        </div>

        <div>
          <label htmlFor={`${instanceId}-message`} className={labelBase}>
            Message
          </label>
          <textarea
            id={`${instanceId}-message`}
            name="message"
            rows={variant === "hero" ? 2 : 4}
            placeholder="Tell us about your group, species of interest or any questions…"
            className={cn(fieldBase, "resize-none")}
          />
        </div>

        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-bold text-brand-ink transition-all duration-300 hover:bg-brand-sandLight hover:shadow-gold"
        >
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          {siteConfig.cta}
        </button>

        <p
          className={cn(
            "flex items-center justify-center gap-1.5 text-center text-[11px]",
            dark ? "text-brand-ivory/45" : "text-brand-charcoal/50"
          )}
        >
          <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
          No spam · Your details are only used to answer your enquiry.
        </p>
      </form>
    </div>
  );
}
