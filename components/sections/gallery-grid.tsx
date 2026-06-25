import { images } from "@/config/images";
import ImageFrame from "@/components/ui/image-frame";
import Reveal from "@/components/ui/reveal";

// Curated mix of the client's bushveld/wildlife, hunting and lodge photography.
const galleryItems: { src: string | null; alt: string; label: string }[] = [
  { ...images.buffaloWaterhole, label: "Bushveld" },
  { ...images.firepit, label: "Firepit & boma" },
  { ...images.giraffe, label: "Wildlife" },
  { ...images.diningTable, label: "Lodge dining" },
  { ...images.trophyHunt, label: "Trophy hunting" },
  { ...images.sable, label: "Sable" },
  { ...images.platter, label: "Bush catering" },
  { ...images.buffaloHerd, label: "Cape buffalo" },
  { ...images.living, label: "Lodge living" },
  { ...images.gate, label: "Arrival" },
  { src: "/images/gallery/Lodge outdoor 3.png", alt: "Bushveld scenery at Bougasvlei Safaris, Thabazimbi", label: "Bushveld" },
  { src: "/images/gallery/Lodge food 9.png", alt: "Home-cooked meal at the Bougasvlei Safaris lodge", label: "Catering" },
  { src: "/images/gallery/Lodge living 3.png", alt: "Comfortable lodge interior at Bougasvlei Safaris", label: "Lodge interior" },
  { src: "/images/gallery/Lodge outdoor 8.png", alt: "Wildlife in the Limpopo bushveld at Bougasvlei Safaris", label: "Wildlife" },
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
