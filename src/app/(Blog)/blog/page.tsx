import Link from "next/link";
import { blogPosts, type BlogPostFormat } from "@blog/content";

async function getPostTitles() {
  return blogPosts.map((post: Pick<BlogPostFormat, "title" | "date">) => ({
    title: post.title,
    date: post.date,
  }));
}

function getSlug(title: string) {
  return encodeURIComponent(title.toLowerCase().replace(/\'/g, "-").split(" ", 7).join("-"));
}

export default async function Page() {
  const postTitles = await getPostTitles();

  return (
    <main className="px-12 blog-gradient grid md:grid-cols-[4fr,1fr]">
      <article className="md:mx-[8%] flex flex-col flex-auto">
        <h1 className="text-3xl">I Don&#39;t Really Blog Much</h1>
        <span className="mb-8">May 5, 2023</span>

        <p className="mt-4 indent-8 text-xl">
          Hello, Good Morrow and welcome to this blog. I honestly do not blog much, if at all, but I
          saw this as an opportunity to play around with new AI tools and see what they could come
          up with. So that will be the main focus; ChatGPT (and similar flavors of text generation)
          will be given a small set of constraints and a topic and then let loose to hallucinate to
          their cores&#39; content.
        </p>
        <p className="mt-4 indent-8 text-xl">
          If you do read through some of the posts, keep in mind that I&#39;ve been using fairly
          simple prompts about current events or just a topic that pops into my head. AI isn&#39;t
          perfect, this is just for fun, etc. I&#39;m not responsible for any existential crises or
          hurt feelings you may have.
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
      {/* TODO Gussy it up, only show 4 most recent posts */}
      <aside className="md:mx-[8%] flex flex-col">
        {postTitles.map((post) => (
          <Link href={`/blog/${getSlug(post.title)}`} key={post.title}>
            <h3
              key={`${post.title}-${post.title.length}`}
              className="underline hover:cursor-pointer mb-8">
              {post.title}
            </h3>
          </Link>
        ))}
      </aside>
    </main>
  );
}
