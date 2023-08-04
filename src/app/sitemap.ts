import type { MetadataRoute } from "next";

// TODO update sitemap when pages are complete
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://ellielle.github.io/", lastModified: new Date() },
    { url: "https://ellielle.github.io/about", lastModified: new Date() },
    { url: "https://ellielle.github.io/projects", lastModified: new Date() },
  ];
}
