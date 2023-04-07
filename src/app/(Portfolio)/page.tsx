import Link from "next/link";
import { inter } from "./layout";
import { Vue, Nuxt, React, Next, TypeScript, Netlify, Vercel } from "@components/Logos";

const Home: React.FC = () => {
  return (
    <main className={inter.className}>
      <div className="text-left">
        <h1 className="text-3xl gradient-text">Hey, I'm Noelle L&#39;Amour 👋</h1>
        <div className="mb-10">
          {/* TODO finish intro */}
          {/* have very dim fading css around kalamazoo saying "it exists ?" */}
          <p className="text-xl">
            I'm a full stack developer from the mythical city of Kalamazoo, where I've learned to
            weave the <span className="">infernal</span> magicks of "Web Dev".
          </p>
        </div>

        {/* TODO on the chopping block */}
        <Link href="/about" className="text-xl">
          Read My Tale --&gt;
        </Link>
        {/* TODO  */}

        <h2 className="mt-10 text-center text-xl">Some of my favorite schools of magick</h2>
        <section className="mt-8 grid grid-cols-2 grid-flow-row gap-5 place-content-center justify-items-center md:grid-cols-3 w-[60%] mx-auto gap-y-20 lg:grid-cols-[repeat(auto-fill,minmax(20%,100px))]">
          {/* CSS glow effect, maybe use a spell circle svg and make it transparent */}
          <Vue />
          <Nuxt />
          <React />
          <Next />
          <TypeScript />
          <Netlify />
          <Vercel />
        </section>
      </div>
    </main>
  );
};

export default Home;
