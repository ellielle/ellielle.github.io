import { blogPosts } from "@blog/content";
import { sharedMetadata, robotsMetadata } from "@utils/shared-metadata";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function getSlug(title: string) {
  return encodeURIComponent(title.toLowerCase().split(" ", 7).join("-"));
}

async function getPost(postSlug: string) {
  const post = await Promise.resolve(blogPosts.find((post) => getSlug(post.title) === postSlug));
  if (!post) {
    return undefined;
  }
  return post;
}

export async function generateStaticParams() {
  const posts = await Promise.resolve(Object.values(blogPosts));

  return posts.map(({ title }) => ({
    slug: getSlug(title),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);


  // TODO fill out metadata
  return {
    ...sharedMetadata,
    title: post?.title,
    keywords: ["web developer", "ai", "blog"],
    ...robotsMetadata,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="px-8 blog-gradient">
      <article className="md:mx-[8%] flex flex-col flex-auto">
        <h1 className="text-3xl">{post.title}</h1>
        <span>{post.date}</span>
        {post.body.map((paragraph) => (
          <p key={`${post.title}-${paragraph.length}`} className="mt-4 indent-8">
            {paragraph}
          </p>
        ))}
      </article>
    </main>
  );
}

// export async function generateMetadata({ params }: { params: { slug: string; id: number } }) {}
// export default Page;

// SEO is also a crucial factor for online brands, but Git doesn’t come with any specific
// support to help improve technical SEO. Developers using Git-based CMS that want to improve
// their online visibility will need to generate sitemaps, use metatags effectively, open graph
// tags, and use mobile-friendly themes.
// test.toLocaleDateString("default", {year: "numeric", day: "numeric", month: "long"})
