import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { pageSeo } from "@/config/seo-config";
import { breadcrumbSchema } from "@/lib/schema";
import HuntingWithUsPage from "@/views/hunting-with-us-page";

export const metadata: Metadata = createMetadata({
  title: pageSeo.huntingWithUs.title,
  description: pageSeo.huntingWithUs.description,
  path: pageSeo.huntingWithUs.path,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema("Hunting With Us", pageSeo.huntingWithUs.path)
          ),
        }}
      />
      <HuntingWithUsPage />
    </>
  );
}
