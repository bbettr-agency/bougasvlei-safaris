import { about } from "@/config/content";
import { images } from "@/config/images";
import ImageFrame from "@/components/ui/image-frame";
import Reveal from "@/components/ui/reveal";

export default function AboutStory() {
  return (
    <section className="bg-brand-ink px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <ImageFrame
              src={images.firepit.src}
              alt={images.firepit.alt}
              label="Firepit & boma"
              className="col-span-2 aspect-[16/10] w-full shadow-card"
            />
            <ImageFrame
              src={images.giraffe.src}
              alt={images.giraffe.alt}
              label="Wildlife"
              className="aspect-square w-full shadow-card"
            />
            <ImageFrame
              src={images.platter.src}
              alt={images.platter.alt}
              label="Bush catering"
              className="aspect-square w-full shadow-card"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
            <span className="h-px w-6 bg-brand-gold/60" />
            {about.eyebrow}
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-ivory sm:text-4xl lg:text-[2.6rem]">
            {about.title}
          </h2>
          <div className="mt-5 space-y-4">
            {about.body.map((para, i) => (
              <p key={i} className="text-base leading-7 text-brand-ivory/70 md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
