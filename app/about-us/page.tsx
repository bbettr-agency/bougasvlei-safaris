import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { pageSeo } from "@/config/seo-config";
import { breadcrumbSchema } from "@/lib/schema";
import AboutPage from "@/views/about-page";

export const metadata: Metadata = createMetadata({
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  path: pageSeo.about.path,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema("About Us", pageSeo.about.path)),
        }}
      />
      <AboutPage />
    </>
  );
}
