import Image from "next/image";
import { awards } from "@/config/awards";
import { cn } from "@/utils/cn";

type AwardLogosSize = "sm" | "md" | "lg";

type AwardLogosProps = {
  size?: AwardLogosSize;
  className?: string;
};

// Identical card sizing for all three logos. Logos fill the card via
// object-contain with a small, consistent padding (never cropped/distorted).
const heights: Record<AwardLogosSize, string> = {
  sm: "h-14 sm:h-16", // footer
  md: "h-20 sm:h-24", // trust strips (about / contact / hunting)
  lg: "h-20 sm:h-24", // hero
};

const pad: Record<AwardLogosSize, string> = {
  sm: "p-2",
  md: "p-2.5",
  lg: "p-2.5",
};

/**
 * Reusable award-logo row. Single source of presentation so the three awards
 * look identical everywhere (hero, trust strips, footer). White cards keep the
 * transparent logos legible on dark surfaces.
 */
export default function AwardLogos({ size = "md", className }: AwardLogosProps) {
  return (
    <div className={cn("flex items-stretch gap-3", className)}>
      {awards.map((award) => (
        <div
          key={award.id}
          className={cn(
            "relative flex-1 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5",
            heights[size]
          )}
        >
          {award.image && (
            <Image
              src={award.image}
              alt={award.name}
              fill
              sizes="200px"
              className={cn("object-contain", pad[size])}
            />
          )}
        </div>
      ))}
    </div>
  );
}
