import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://reddy786techsolutions.in",
      lastModified: "2026-11-20",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
