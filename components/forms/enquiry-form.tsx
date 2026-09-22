"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/utils/cn";

export const INTEREST_OPTIONS = [
  "A hunting safari",
  "Lodge accommodation",
  "Game drives",
  "Something else",
] as const;

type EnquiryFormProps = {
  /** Surface the form sits on. */
  tone?: "dark" | "light";
  instanceId?: string;
  className?: string;
};

/**
 * Enquiry form — composed as the start of a conversation with the lodge, not a
 * boxed lead widget. Underline fields, sentence-case labels, generous grouping.
 *
 * Lead destination unchanged: on submit it composes the enquiry into a pre-filled
 * WhatsApp message to André (GHL embed can replace this later). A success state
 * now confirms in-place and offers email as an alternative.
 */
export default function EnquiryForm({
  tone = "dark",
  instanceId = "enquiry",
  className,
}: EnquiryFormProps) {
  const [interest, setInterest] = useState<string>(INTEREST_OPTIONS[0]);
  const [sent, setSent] = useState(false);

  const dark = tone === "dark";

  const compose = (form: HTMLFormElement) => {
    const d = new FormData(form);
    const text = [
      "New enquiry from the Bougasvlei Safaris website:",
      `Name: ${d.get("name") || ""}`,
      `Email: ${d.get("email") || ""}`,
      `Phone: ${d.get("phone") || ""}`,
      `Interested in: ${interest}`,
      `Preferred dates: ${d.get("dates") || ""}`,
      d.get("message") ? `Message: ${d.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${siteConfig.whatsappNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(text)}`;
  };

  const [waUrl, setWaUrl] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = compose(e.currentTarget);
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field = cn(
    "w-full border-0 border-b bg-transparent px-0 py-2.5 text-[0.95rem] transition-colors focus:outline-none",
    dark
      ? "border-brand-ivory/25 text-brand-ivory placeholder:text-brand-ivory/30 focus:border-brand-gold"
      : "border-brand-charcoal/25 text-brand-charcoal placeholder:text-brand-charcoal/30 focus:border-brand-bronze"
  );
  const label = cn(
    "mb-1 block text-[0.8rem]",
    dark ? "text-brand-ivory/55" : "text-brand-charcoal/55"
  );
  const muted = dark ? "text-brand-ivory/55" : "text-brand-charcoal/55";

  if (sent) {
    return (
      <div className={cn("max-w-xl", className)}>
        <span
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full",
            dark ? "bg-brand-gold/15 text-brand-gold" : "bg-brand-bronze/15 text-brand-bronze"
          )}
        >
          <Check className="h-5 w-5" strokeWidth={2.5} />
        </span>
        <h3
          className={cn(
            "mt-5 text-2xl font-medium tracking-[-0.01em]",
            dark ? "text-brand-ivory" : "text-brand-charcoal"
          )}
        >
          Thank you — your enquiry is on its way.
        </h3>
        <p className={cn("mt-3 text-[0.95rem] leading-relaxed", muted)}>
          We&apos;ve opened WhatsApp so you can send it straight to André. If it
          didn&apos;t open, you can{" "}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "underline underline-offset-4",
              dark ? "text-brand-gold" : "text-brand-bronze"
            )}
          >
            open it here
          </a>{" "}
          or email us at{" "}
          <a
            href={siteConfig.emailLink}
            className={cn(
              "underline underline-offset-4",
              dark ? "text-brand-gold" : "text-brand-bronze"
            )}
          >
            {siteConfig.email}
          </a>
          . {siteConfig.replyTime}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("max-w-xl", className)}>
      {/* GHL FORM EMBED PLACEHOLDER — paste GoHighLevel form embed here to go live. */}
      <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        <div>
          <label htmlFor={`${instanceId}-name`} className={label}>
            Your name
          </label>
          <input id={`${instanceId}-name`} name="name" required autoComplete="name" placeholder="First and last name" className={field} />
        </div>
        <div>
          <label htmlFor={`${instanceId}-email`} className={label}>
            Email
          </label>
          <input id={`${instanceId}-email`} name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={field} />
        </div>
        <div>
          <label htmlFor={`${instanceId}-phone`} className={label}>
            Phone <span className={muted}>(optional)</span>
          </label>
          <input id={`${instanceId}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="+27 …" className={field} />
        </div>
        <div>
          <label htmlFor={`${instanceId}-interest`} className={label}>
            I&apos;m interested in
          </label>
          <div className="relative">
            <select
              id={`${instanceId}-interest`}
              name="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className={cn(field, "cursor-pointer appearance-none pr-6")}
            >
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="text-brand-charcoal">
                  {opt}
                </option>
              ))}
            </select>
            <span className={cn("pointer-events-none absolute right-0 top-3 text-xs", muted)}>▾</span>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${instanceId}-dates`} className={label}>
            Preferred dates <span className={muted}>(optional)</span>
          </label>
          <input id={`${instanceId}-dates`} name="dates" placeholder="e.g. May 2026, 5 nights" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${instanceId}-message`} className={label}>
            Tell us about your trip
          </label>
          <textarea
            id={`${instanceId}-message`}
            name="message"
            rows={3}
            placeholder="Your group, the species you're after, any questions…"
            className={cn(field, "resize-none")}
          />
        </div>
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-sandLight active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
        >
          {siteConfig.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className={cn("text-[0.8rem]", muted)}>
          Or WhatsApp André directly on {siteConfig.phone}.
        </p>
      </div>
    </form>
  );
}
