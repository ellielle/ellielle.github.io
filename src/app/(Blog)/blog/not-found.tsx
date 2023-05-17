import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-8 blog-gradient flex flex-col justify-items-center text-center">
      <h2 className="text-2xl">Post not found</h2>
      <Link href={"/blog"} className="text-blue-500 underline mt-8">
        Return to blog
      </Link>
    </main>
  );
}
