import Link from "next/link";
import Projects from "./projects/page";
import { techStacks } from "@components/Logos";
import { ShortBlurb } from "./about/page";

const Home = () => {
  return (
    <main className="px-4">
      <section className="text-left grid grid-cols-2">
        <div>
          <h1 className="text-3xl">
            Hey, I&#39;m <span className="gradient-text">Noelle L&#39;Amour</span>
          </h1>
          <div className="mb-10">
            {/* TODO have very dim fading css around kalamazoo saying "it exists ?" */}
            <p className="text-xl mt-6">
              I&#39;m a full-stack web developer from the mythical city of Kalamazoo, where I&#39;ve
              learned to channel the <span className="infernal">infernal</span> magicks of &#34;Web
              Dev&#34;.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center text-xl">
          <p>Here is all of my personal information</p>
        </div>
      </section>

      <section>
        <h2 className="mt-20 text-center text-xl">Some of my favorite schools of magick</h2>
        <ul className="mt-[5.5rem] grid grid-cols-2 grid-flow-row gap-5 place-content-center justify-items-center md:grid-cols-3 w-[60%] mx-auto gap-10 lg:grid-cols-[repeat(auto-fill,minmax(20%,100px))]">
          {techStacks.map((stack) => (
            <li key={Math.random()}>{stack}</li>
          ))}
        </ul>
      </section>

      <section className="text-xl pb-20 text-center">
        <ShortBlurb>{""}</ShortBlurb>
        <div className="mt-10">
          <Link href="/about">More About Me --&#62;</Link>
        </div>
      </section>

      <section className="text-center text-xl pb-10">
        <h2>Some of the things I&#39;ve worked on</h2>
        <div className="mt-8 mx-[20%] grid gap-4 md:grid-cols-2">
          <Projects filtered={true} />
        </div>
      </section>
    </main>
  );
};

export default Home;
