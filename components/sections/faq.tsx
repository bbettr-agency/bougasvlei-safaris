"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { faqs } from "@/config/content";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/utils/cn";

type FaqProps = {
  tone?: "light" | "dark";
};

export default function Faq({ tone = "dark" }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "px-5 py-20 sm:px-6 md:py-28 lg:px-8",
        dark ? "bg-brand-charcoal" : "bg-brand-bone"
      )}
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          light={dark}
          eyebrow="FAQ"
          title="Your questions, answered"
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-colors",
                  dark
                    ? "border-brand-gold/12 bg-brand-ink/40"
                    : "border-brand-charcoal/10 bg-white"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "font-display text-base font-semibold sm:text-lg",
                      dark ? "text-brand-ivory" : "text-brand-charcoal"
                    )}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      dark
                        ? "bg-brand-gold/15 text-brand-gold"
                        : "bg-brand-bronze/10 text-brand-bronze"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p
                    className={cn(
                      "px-6 pb-6 text-sm leading-7",
                      dark ? "text-brand-ivory/65" : "text-brand-charcoal/65"
                    )}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
