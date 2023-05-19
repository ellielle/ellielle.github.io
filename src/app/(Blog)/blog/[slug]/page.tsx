import { BlogPostFormat, blogPosts } from "@blog/content";
import { sharedMetadata, robotsMetadata } from "@utils/shared-metadata";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function getSlug(title: string) {
  return encodeURIComponent(title.toLowerCase().replace(/\'/g, "%27").split(" ", 7).join("-"));
}

async function getPost(postSlug: string): Promise<BlogPostFormat | undefined> {
  const post = await Promise.resolve(blogPosts.find((post) => getSlug(post.title) === postSlug));
  if (!post) {
    return undefined;
  }
  return post;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
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
    keywords: post?.keywords,
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
        <span className="mb-12">{post.date}</span>
        {post.body.map((paragraph) => (
          <p
            key={`${post.title}-${paragraph.length}`}
            className="mb-4 indent-8 text-xl last-of-type:mb-20">
            {paragraph}
          </p>
        ))}
      </article>
    </main>
  );
}
