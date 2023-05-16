// import getPosts from "@/src/utils/getPosts";
import type { BlogPostFormat } from "@/src/models/posts";

export async function generateStaticParams() {
  const repsonse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: BlogPostFormat[] = await repsonse.json();
  console.log(posts);

  return posts.map((post) => ({
    slug: post.title.split(" ", 7).join("-"),
  }))
}

const Page = async ({posts}: {posts: BlogPostFormat[]}): Promise<JSX.Element> => {
  
  console.log(posts);
  // TODO fetch blog posts, blog should always be shown on the initial page
  return (
    <main className="px-8 blog-gradient">
      <div className="md:mx-[8%]">
        <h1 className="text-4xl">{posts[0].title}</h1>
      </div>
    </main>
  );
};

// FIXME see if there's a better way to import JSON files into nextjs, or maybe use the route handlers?

export default Page;

// SEO is also a crucial factor for online brands, but Git doesn’t come with any specific
// support to help improve technical SEO. Developers using Git-based CMS that want to improve
// their online visibility will need to generate sitemaps, use metatags effectively, open graph
// tags, and use mobile-friendly themes.
// test.toLocaleDateString("default", {year: "numeric", day: "numeric", month: "long"})
