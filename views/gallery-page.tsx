import PageHero from "@/components/sections/page-hero";
import GalleryGrid from "@/components/sections/gallery-grid";
import WhatsAppBand from "@/components/sections/whatsapp-band";
import FinalCta from "@/components/sections/final-cta";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Gallery"
        title="The Bougasvlei Gallery"
        subtitle="The lodge, the hunt, the wildlife and the bushveld — a visual journey through the Bougasvlei Safaris experience in Thabazimbi, Limpopo."
        imageKey="firepit"
      />

      <section className="bg-brand-ink px-5 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid />
        </div>
      </section>

      <WhatsAppBand />
      <FinalCta />
    </>
  );
}
