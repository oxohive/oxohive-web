import type { MetadataRoute } from "next";
import { legalDocs, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-08-28"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...legalDocs.map((doc) => ({
      url: `${site.url}/${doc.slug}`,
      lastModified: new Date(doc.updatedISO),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
