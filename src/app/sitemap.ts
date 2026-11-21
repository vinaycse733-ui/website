import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://reddy786techsolutions.in",
      lastModified: "2026-11-20",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://reddy786techsolutions.in/solutions/local-ai-agents",
      lastModified: "2026-11-21",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
