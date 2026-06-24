import { about } from "@/config/content";
import { siteConfig } from "@/config/site-config";
import ImageFrame from "@/components/ui/image-frame";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

export default function AboutHosts() {
  return (
    <section className="bg-brand-charcoal px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={about.hosts.eyebrow}
          title={about.hosts.title}
          body={about.hosts.body}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {siteConfig.hosts.map((host, i) => (
            <Reveal key={host.name} delay={i * 0.1}>
              <div className="overflow-hidden rounded-3xl border border-brand-gold/12 bg-brand-ink/40">
                <ImageFrame
                  src={null}
                  alt={`${host.name}, host at Bougasvlei Safaris`}
                  label={`${host.name} — photo`}
                  rounded="rounded-none"
                  className="aspect-[4/3] w-full"
                />
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-brand-ivory">
                    {host.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-gold">Your host</p>
                  <a
                    href={host.phoneLink}
                    className="mt-2 inline-block text-sm text-brand-ivory/65 transition-colors hover:text-brand-gold"
                  >
                    {host.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
