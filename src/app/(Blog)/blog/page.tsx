const Blog = () => {
  console.log("posts");
  // TODO fetch blog posts, blog should always be shown on the initial page
  return (
    <main className="px-8 blog-gradient">
      <div className="md:mx-[8%]">
        <h1 className="text-4xl">hi</h1>
      </div>
    </main>
  );
};

// FIXME see if there's a better way to import JSON files into nextjs, or maybe use the route handlers?

export default Blog;

// SEO is also a crucial factor for online brands, but Git doesn’t come with any specific
// support to help improve technical SEO. Developers using Git-based CMS that want to improve
// their online visibility will need to generate sitemaps, use metatags effectively, open graph
// tags, and use mobile-friendly themes.
// test.toLocaleDateString("default", {year: "numeric", day: "numeric", month: "long"})
