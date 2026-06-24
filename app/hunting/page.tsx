import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { pageSeo } from "@/config/seo-config";
import { breadcrumbSchema } from "@/lib/schema";
import HuntingPage from "@/views/hunting-page";

export const metadata: Metadata = createMetadata({
  title: pageSeo.hunting.title,
  description: pageSeo.hunting.description,
  path: pageSeo.hunting.path,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema("Hunting", pageSeo.hunting.path)),
        }}
      />
      <HuntingPage />
    </>
  );
}
