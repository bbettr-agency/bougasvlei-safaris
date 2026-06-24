import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site-config";
import { sitemapRoutes } from "@/config/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: `${siteConfig.website}${route === "/" ? "" : route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
