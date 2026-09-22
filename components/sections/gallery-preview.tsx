import { images } from "@/config/images";
import ImageFrame from "@/components/ui/image-frame";
import Cta from "@/components/ui/cta";

const spread = [
  { img: images.buffaloWaterhole, span: "col-span-2 row-span-2 aspect-[4/3] lg:aspect-auto" },
  { img: images.firepit, span: "aspect-square" },
  { img: images.trophyHunt, span: "aspect-square" },
  { img: images.diningTable, span: "aspect-square" },
  { img: images.giraffe, span: "aspect-square" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-brand-ink px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-sand/80">
              The gallery
            </p>
            <h2 className="mt-6 text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-brand-ivory sm:text-[2.5rem]">
              Bougasvlei, in photographs
            </h2>
          </div>
          <Cta href="/gallery" variant="link">
            View the full gallery
          </Cta>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {spread.map((item, i) => (
            <ImageFrame
              key={i}
              settle
              rounded="rounded-sm"
              src={item.img.src}
              alt={item.img.alt}
              label="Bougasvlei"
              className={`w-full ${item.span}`}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
