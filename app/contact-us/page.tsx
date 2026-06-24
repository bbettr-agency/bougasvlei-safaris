import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { pageSeo } from "@/config/seo-config";
import { breadcrumbSchema } from "@/lib/schema";
import ContactPage from "@/views/contact-page";

export const metadata: Metadata = createMetadata({
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  path: pageSeo.contact.path,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema("Contact", pageSeo.contact.path)),
        }}
      />
      <ContactPage />
    </>
  );
}
