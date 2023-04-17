export default function sitemap() {
  const routes = ["", "/about", "/projects", "/blog"].map((route) => ({
    url: `https://noellelamour.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
