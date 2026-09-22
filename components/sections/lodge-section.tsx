import Image from "next/image";

import { Reveal } from "@/engine/motion";
import { lodge } from "@/config/content";
import { images } from "@/config/images";
import Cta from "@/components/ui/cta";

export default function LodgeSection() {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-brand-ink text-brand-ivory">
      {/* Full-bleed lodge photography at dusk */}
      <div className="absolute inset-0">
        {images.firepit.src && (
          <Reveal preset="imageReveal" as="div" className="absolute inset-0">
            <Image
              src={images.firepit.src}
              alt={images.firepit.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </Reveal>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/55 to-brand-ink/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-8 sm:pb-20">
        <Reveal className="max-w-xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-sand">
            The lodge
          </p>
          <h2 className="mt-6 text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-brand-ivory sm:text-[2.5rem]">
            An eco-friendly bushveld lodge, built for slow evenings
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-ivory/75">
            {lodge.body}
          </p>

          <ul className="mt-8 grid max-w-lg grid-cols-1 gap-x-8 gap-y-2.5 border-t border-brand-ivory/15 pt-6 text-sm text-brand-ivory/70 sm:grid-cols-2">
            {lodge.features.map((f) => (
              <li key={f} className="leading-snug">
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Cta href="#enquire" variant="link">
              Enquire about a stay
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
