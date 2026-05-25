import type { MetadataRoute } from "next";

const baseUrl = "https://nightshiftsystems.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-18"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
