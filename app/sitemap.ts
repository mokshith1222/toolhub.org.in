import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolhub.org.in";
  // Fixed, reliable modification date representing this major release
  const lastReleaseDate = new Date("2026-11-22T00:00:00.000Z");

  return [
    {
      url: baseUrl,
      lastModified: lastReleaseDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: lastReleaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/speed-converter`,
      lastModified: lastReleaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/speed-distance-time`,
      lastModified: lastReleaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/fuel-cost-calculator`,
      lastModified: lastReleaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/petrol-cost-for-100-km`,
      lastModified: lastReleaseDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastReleaseDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastReleaseDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastReleaseDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: lastReleaseDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
