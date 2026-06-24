import { Star, Quote } from "lucide-react";

import { reviews } from "@/config/content";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function Reviews() {
  return (
    <section className="relative bg-brand-ink px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={reviews.eyebrow} title={reviews.title} />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.items.map((review, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-brand-gold/12 bg-brand-charcoal/60 p-7">
                <Quote className="h-7 w-7 text-brand-gold/40" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-7 text-brand-ivory/75">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-brand-gold/10 pt-4">
                  <p className="text-sm font-bold text-brand-ivory">
                    {review.name}
                  </p>
                  <p className="text-xs text-brand-ivory/50">{review.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-brand-ivory/40">{reviews.note}</p>
      </div>
    </section>
  );
}
