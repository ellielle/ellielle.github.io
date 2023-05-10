import type { MetadataRoute } from "next";

// TODO update sitemap when pages are complete
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about"].map((route) => ({
    url: `https://noellelamour.vercel.app${route}`,
    lastModified: new Date(),
  }));

  return [...routes];
}
