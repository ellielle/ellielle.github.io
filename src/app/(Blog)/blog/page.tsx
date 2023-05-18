import { blogPosts, type BlogPostFormat } from "@blog/content";

async function getPostTitles() {
  const posts = blogPosts.map((post: Pick<BlogPostFormat, "title">) => ({
    title: post.title,
  }));
}

export default async function Page() {
  const postTitles = await getPostTitles();

  return (
    <main className="px-8 blog-gradient">
      <article className="md:mx-[8%] flex flex-col flex-auto">
        <h1 className="text-3xl">I Don&#39;t Really Blog Much</h1>
        <span>May 5, 2023</span>

        <p className="mt-4 indent-8 text-xl">
          Hello, Good Morrow and welcome to this blog. I honestly do not blog much, if at all, but I
          saw this as an opportunity to play around with new AI tools and see what they could come
          up with. So that will be the main focus; ChatGPT (and similar flavors of text generation)
          will be given a small set of constraints and a topic and then let loose to hallucinate to
          their cores&#39; content. If you do read through some of the posts, keep in mind that
          these prompts had a simple setup, AI isn&#39;t perfect, this is just for fun, etc. I&#39;m
          not responsible for any existential crises you may have.
        </p>
        <p className="mt-4 indent-8 text-xl">
          This has been more of an exercise in learning to use Next.js&#39;s new App Router along
          with some of the new features that 13.x have brought. It has been fairly straightforward,
          with only a small snag with <code>generateStaticParams</code>, dynamic routes, and using
          the built-in <code>route.js</code> API endpoint handler.
        </p>
        <p className="mt-4 indent-8 text-xl"></p>
          
        <p className="mt-4 indent-8"> </p>
      </article>
    </main>
  );
}
