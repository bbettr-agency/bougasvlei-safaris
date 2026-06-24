import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { pageSeo } from "@/config/seo-config";
import { breadcrumbSchema } from "@/lib/schema";
import GameSpeciesPage from "@/views/game-species-page";

export const metadata: Metadata = createMetadata({
  title: pageSeo.gameSpecies.title,
  description: pageSeo.gameSpecies.description,
  path: pageSeo.gameSpecies.path,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema("Game Species", pageSeo.gameSpecies.path)
          ),
        }}
      />
      <GameSpeciesPage />
    </>
  );
}
