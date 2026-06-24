import PageHero from "@/components/sections/page-hero";
import ContactDetails from "@/components/sections/contact-details";
import AwardsStrip from "@/components/sections/awards-strip";
import Faq from "@/components/sections/faq";
import WhatsAppBand from "@/components/sections/whatsapp-band";

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact & Enquiries"
        title="Contact Bougasvlei Safaris"
        subtitle="For hunting packages, eco-friendly lodge accommodation, catering and guided safaris in Thabazimbi, Limpopo — send an enquiry or WhatsApp us. We reply within 24 hours on business days."
        imageKey="lodgeInterior"
      />
      <ContactDetails />
      <AwardsStrip tone="dark" heading="Trusted & Recognised" />
      <WhatsAppBand />
      <Faq tone="dark" />
    </>
  );
}
