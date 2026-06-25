import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { galleryFeatured } from "@/config/gallery";
import ImageFrame from "@/components/ui/image-frame";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/utils/cn";

export default function GalleryPreview() {
  return (
    <section className="relative bg-brand-charcoal px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="A glimpse of the Bougasvlei experience"
          body="The lodge, the bushveld, the hunt and the hospitality — a few of our favourite moments."
        />

        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryFeatured.map((item, i) => (
              <ImageFrame
                key={item.src}
                src={item.src}
                alt={item.alt}
                label={item.category}
                className={cn(
                  "w-full shadow-card",
                  i === 0
                    ? "col-span-2 row-span-2 aspect-[4/3] lg:aspect-auto"
                    : "aspect-square"
                )}
              />
            ))}
          </div>
        </Reveal>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-7 py-3.5 text-sm font-bold text-brand-gold transition-all hover:bg-brand-gold hover:text-brand-ink"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
