"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { cn } from "@/utils/cn";

type ImageFrameProps = {
  src: string | null;
  alt: string;
  label?: string; // shown on the placeholder slot when there's no image
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
  /**
   * Editorial photography settle — a slow `imageReveal` scale (1.06 → 1) on the
   * image as it enters view. Scale-only (never opacity), so a `priority` image
   * still preloads as an LCP candidate. Reserved for feature photography; leave
   * off for grids, thumbnails and SVG illustrations.
   */
  settle?: boolean;
};

/**
 * Premium image wrapper. Renders a next/image when `src` is set, and a tasteful
 * labelled placeholder (charcoal → bronze gradient) when it's missing OR when the
 * remote image fails to load. This guarantees the layout never breaks while the
 * client's real photography is still pending.
 */
export default function ImageFrame({
  src,
  alt,
  label,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  rounded = "rounded-3xl",
  settle = false,
}: ImageFrameProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  const image = (
    <Image
      src={src as string}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      // SVG assets (game-species illustrations) are served straight from
      // /public — the Next image optimizer rejects SVGs, so skip it for them.
      unoptimized={(src as string)?.toLowerCase().endsWith(".svg")}
      onError={() => setFailed(true)}
      className={cn("object-cover", imageClassName)}
    />
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-brand-bark",
        rounded,
        className
      )}
    >
      {showPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand-charcoal via-brand-bark to-brand-clay">
          <div className="bg-grain absolute inset-0 opacity-60" />
          <ImageIcon className="relative h-7 w-7 text-brand-gold/60" />
          <span className="relative mt-2 px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-sand/70">
            {label ?? "Photo to be added"}
          </span>
        </div>
      ) : settle ? (
        // Photography breathes: a slow, opacity-free scale settle inside the frame.
        <Reveal preset="imageReveal" as="div" className="absolute inset-0">
          {image}
        </Reveal>
      ) : (
        image
      )}
    </div>
  );
}
