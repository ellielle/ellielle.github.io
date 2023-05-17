import type { BlogPostFormat } from "@blog/content";
// TODO THIS IS BLOG

// async function getPosts() {
//   const response = await fetch("http://localhost:3000/blog/api");
//   const posts: BlogPostFormat[] = await response.json();
//   console.log("posts work, blog/page");
//   return posts.map((post) => ({
//     slug: post.title.split(" ", 7).join("-"),
//     data: post,
//   }));
// }

const Blog = () => {
  return (
    <main className="px-8 blog-gradient">
      <div className="md:mx-[8%]">
        <h1 className="text-4xl">BLOG</h1>
      </div>
    </main>
  );
};

export default Blog;

// SEO is also a crucial factor for online brands, but Git doesn’t come with any specific
// support to help improve technical SEO. Developers using Git-based CMS that want to improve
// their online visibility will need to generate sitemaps, use metatags effectively, open graph
// tags, and use mobile-friendly themes.
// test.toLocaleDateString("default", {year: "numeric", day: "numeric", month: "long"})