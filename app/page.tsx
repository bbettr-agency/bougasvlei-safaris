import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { pageSeo } from "@/config/seo-config";
import HomePage from "@/views/home-page";

export const metadata: Metadata = createMetadata({
  title: pageSeo.home.title,
  description: pageSeo.home.description,
  path: pageSeo.home.path,
});

export default function Page() {
  return <HomePage />;
}
