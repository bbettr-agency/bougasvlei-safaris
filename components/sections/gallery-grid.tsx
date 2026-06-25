"use client";

import { useState } from "react";
import {
  galleryImages,
  galleryCategories,
  type GalleryCategory,
} from "@/config/gallery";
import ImageFrame from "@/components/ui/image-frame";
import { cn } from "@/utils/cn";

type Filter = "All" | GalleryCategory;
const FILTERS: Filter[] = ["All", ...galleryCategories];

export default function GalleryGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((i) => i.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
              active === filter
                ? "bg-brand-gold text-brand-ink shadow-gold"
                : "border border-brand-gold/25 text-brand-ivory/75 hover:border-brand-gold/50 hover:text-brand-ivory"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((item, i) => (
          <ImageFrame
            key={item.src}
            src={item.src}
            alt={item.alt}
            label={item.category}
            className={cn(
              "w-full break-inside-avoid shadow-card",
              i % 5 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-square" : "aspect-[4/3]"
            )}
          />
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-brand-ivory/40">
        Showing {filtered.length} of {galleryImages.length} images
      </p>
    </div>
  );
}
