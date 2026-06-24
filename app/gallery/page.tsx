import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { pageSeo } from "@/config/seo-config";
import { breadcrumbSchema } from "@/lib/schema";
import GalleryPage from "@/views/gallery-page";

export const metadata: Metadata = createMetadata({
  title: pageSeo.gallery.title,
  description: pageSeo.gallery.description,
  path: pageSeo.gallery.path,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema("Gallery", pageSeo.gallery.path)),
        }}
      />
      <GalleryPage />
    </>
  );
}
