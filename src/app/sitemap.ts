import type { MetadataRoute } from "next";

// TODO update sitemap when pages are complete
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://noellelamour.vercel.app/", lastModified: new Date() },
    { url: "https://noellelamour.vercel.app/about", lastModified: new Date() },
    { url: "https://noellelamour.vercel.app/blog", lastModified: new Date() },
  ];
}
