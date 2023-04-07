// import Link from "next/link";
import { Fragment } from "react";
import { inter } from "./layout";
import { techStacks } from "@components/Logos";
import MagicCircle from "@components/MagicCircle";

const Home: React.FC = () => {
  return (
    <main className={inter.className}>
      <div className="text-left">
        <h1 className="text-3xl">
          Hey, I'm <span className="gradient-text">Noelle L&#39;Amour</span>
        </h1>
        <div className="mb-10">
          {/* TODO finish intro */}
          {/* have very dim fading css around kalamazoo saying "it exists ?" */}
          <p className="text-xl mt-6">
            I'm a full stack web developer from the mythical city of Kalamazoo, where I've learned
            to weave the <span className="text-red-600">infernal</span> magicks of{" "}
            <span className="text-yellow-400">"Web Dev"</span>.
          </p>
        </div>

        {/* TODO on the chopping block */}
        {/* <Link href="/about" className="text-xl">
          Read My Tale --&gt;
        </Link> */}
        {/* TODO  */}

        <h2 className="mt-20 text-center text-xl">Some of my favorite schools of magick</h2>
        <section className="mt-[5.5rem] grid grid-cols-2 grid-flow-row gap-5 place-content-center justify-items-center md:grid-cols-3 w-[60%] mx-auto gap-10 lg:grid-cols-[repeat(auto-fill,minmax(20%,100px))]">
          {/* CSS glow effect, maybe use a spell circle svg and make it transparent */}
          {/* these components probably need to become an array through mapping */}
          {techStacks.map((stack) => (
            <Fragment key={stack.key}>{stack}</Fragment>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
