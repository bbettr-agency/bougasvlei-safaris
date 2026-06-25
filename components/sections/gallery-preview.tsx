import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { images } from "@/config/images";
import ImageFrame from "@/components/ui/image-frame";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

const previewItems = [
  { img: images.buffaloWaterhole, label: "Bushveld", span: "lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto" },
  { img: images.trophyHunt, label: "Hunting", span: "aspect-square" },
  { img: images.giraffe, label: "Wildlife", span: "aspect-square" },
  { img: images.firepit, label: "Lodge", span: "aspect-square" },
  { img: images.platter, label: "Catering", span: "aspect-square" },
];

export default function GalleryPreview() {
  return (
    <section className="relative bg-brand-charcoal px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="A glimpse of the Bougasvlei experience"
          body="The lodge, the bushveld and the hunt — captured. Replace these with your own photography to bring the gallery to life."
        />

        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {previewItems.map((item, i) => (
              <ImageFrame
                key={i}
                src={item.img.src}
                alt={item.img.alt}
                label={item.label}
                className={`w-full shadow-card ${item.span}`}
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
