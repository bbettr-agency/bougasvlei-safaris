import { Reveal } from "@/engine/motion";
import { seoSection } from "@/config/content";
import { images } from "@/config/images";
import ImageFrame from "@/components/ui/image-frame";
import Cta from "@/components/ui/cta";

/**
 * Region / SEO prose. Text-dominant editorial block that keeps the local +
 * national search intent while reading naturally. Internal links are text
 * links, not pills.
 */
export default function SeoContent() {
  return (
    <section className="bg-brand-ink px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-sand/80">
            In the Limpopo bushveld
          </p>
          <h2 className="mt-6 max-w-[18ch] text-[1.9rem] font-medium leading-[1.14] tracking-[-0.02em] text-brand-ivory sm:text-[2.4rem]">
            {seoSection.title}
          </h2>

          <Reveal className="mt-8 max-w-2xl space-y-5 text-[1.02rem] leading-[1.75] text-brand-ivory/65">
            {seoSection.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          <div className="mt-10 flex flex-col gap-4 border-t border-brand-ivory/12 pt-8 sm:flex-row sm:flex-wrap sm:gap-x-10">
            {seoSection.links.map((link) => (
              <Cta key={link.href} href={link.href} variant="link">
                {link.label}
              </Cta>
            ))}
          </div>
        </div>

        {/* A single quiet portrait — minimal framing, lets the animal breathe */}
        <div className="lg:col-span-5">
          <ImageFrame
            settle
            rounded="rounded-sm"
            src={images.sable.src}
            alt="Sable bull in the bushveld at the Bougasvlei Safaris game farm, Thabazimbi"
            className="aspect-[4/5] w-full lg:h-full"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
