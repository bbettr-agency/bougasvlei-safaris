import { images } from "@/config/images";
import ImageFrame from "@/components/ui/image-frame";
import Reveal from "@/components/ui/reveal";

// Mixed scenery/wildlife (Unsplash placeholders) + labelled slots for the client's
// own lodge, hunting, wildlife and team photography.
const galleryItems: { src: string | null; alt: string; label: string }[] = [
  { ...images.lodgeExterior, label: "Lodge exterior" },
  { ...images.huntingWalk, label: "Walk-and-stalk" },
  { ...images.bushveldSunset, label: "Bushveld sunset" },
  { ...images.lodgeInterior, label: "Lodge interior" },
  { ...images.gameDrive, label: "Game drive" },
  { ...images.huntingTrophy, label: "Trophy hunting" },
  { ...images.dining, label: "Bush dining" },
  { ...images.savanna, label: "Open savanna" },
  { ...images.lodgeFirepit, label: "Firepit & boma" },
  { src: null, alt: "Wildlife photo from Bougasvlei Safaris", label: "Wildlife" },
  { src: null, alt: "Trophy gallery photo from Bougasvlei Safaris", label: "Trophy gallery" },
  { src: null, alt: "Family safari photo from Bougasvlei Safaris", label: "Family moments" },
];

export default function GalleryGrid() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
      {galleryItems.map((item, i) => (
        <Reveal key={i} delay={(i % 3) * 0.05}>
          <ImageFrame
            src={item.src}
            alt={item.alt}
            label={item.label}
            className={`w-full break-inside-avoid shadow-card ${
              i % 5 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-square" : "aspect-[4/3]"
            }`}
          />
        </Reveal>
      ))}
    </div>
  );
}
