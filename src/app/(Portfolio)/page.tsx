import Link from "next/link";
import { inter } from "./layout";

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
        <Link href="/about" className="">
          Read My Tale --&gt;
        </Link>
        {/* TODO  */}

        <h2 className="mt-10 text-center">Some of my favorite schools of magick</h2>
        <section className="mt-8">
          {/* CSS glow effect, maybe use a spell circle svg and make it transparent */}
        </section>
      </div>
    </main>
  );
};

export default Home;
