import Link from "next/link";
import Projects from "./projects/page";
import Tech from "@components/Logos/Tech";
import { ShortBlurb } from "./about/page";

const Home = () => {
  return (
    <main className="px-8">
      <div className="md:mx-[8%]">
        <section className="text-left grid">
          <div>
            <h1 className="text-3xl">
              Well met, I&#39;m <span className="text-name">Noelle L&#39;Amour</span>
            </h1>
            <div className="mb-10">
              <p className="text-xl mt-6">
                I am a full stack web developer from the forgotten realm of Kalamazoo, where I have
                delved deep into the <span className="text-infernal">infernal</span> magicks of web
                development.{" "}
              </p>
              <p className="text-xl mt-6">
                With my arcane knowledge, I can weave spells of interactivity and bring forth
                designs from the depths of the abyss. I channel this ætheric energy to create
                websites that are mesmerizing portals into the unknown, beckoning users to explore
                their deepest desires and darkest fears.
              </p>
            </div>
          </div>
        </section>

        <Tech />

        <section className="text-xl pb-20 text-center">
          <ShortBlurb />
          <div className="mt-10">
            <Link href="/about">More About Me --&#62;</Link>
          </div>
        </section>

        <section className="text-center text-xl pb-10">
          <h2>Some of the things I&#39;ve worked on</h2>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[1fr,1fr] md:mx-[15%]">
            <Projects filtered={true} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
