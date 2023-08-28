import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://ellielle.github.io/", lastModified: new Date() },
    { url: "https://ellielle.github.io/about", lastModified: new Date() },
    { url: "https://ellielle.github.io/projects", lastModified: new Date() },
  ];
}
