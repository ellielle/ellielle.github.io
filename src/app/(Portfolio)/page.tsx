import Link from "next/link";
import Projects from "./projects/page";
import { techStacks } from "@components/Logos";
import { socialMedia } from "@components/Logos";
import { ShortBlurb } from "./about/page";

const Home = () => {
  return (
    <main className="px-4">
      <section className="text-left grid grid-cols-[2fr,1fr]">
        <div>
          <h1 className="text-3xl">
            Well met, I&#39;m <span className="text-name">Noelle L&#39;Amour</span>
          </h1>
          <div className="mb-10">
            <p className="text-xl mt-6">
              I am a full stack web developer from the shadow realm of Kalamazoo, where I have
              delved deep into the <span className="text-infernal">infernal</span> magicks of web
              development.{" "}
            </p>
            <p className="text-xl mt-6">
              With my arcane knowledge, I can weave spells of interactivity and bring forth designs
              from the depths of the abyss. I channel this ætheric energy to create websites that
              are mesmerizing portals into the unknown, beckoning users to explore their deepest
              desires and darkest fears.
            </p>
          </div>
        </div>
        <ul className="justify-center items-center text-md">
          {socialMedia.map((platform) => (
            <li key={platform.key} className="mb-4 grid grid-cols-[1fr,10fr]">
              {platform}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mt-20 text-center text-xl">Some of my favorite schools of magick</h2>
        <ul className="mt-[5.5rem] grid grid-cols-2 grid-flow-row gap-5 place-content-center justify-items-center md:grid-cols-3 w-[60%] mx-auto gap-10 lg:grid-cols-[repeat(auto-fill,minmax(20%,100px))]">
          {techStacks.map((stack) => (
            <li key={stack.key}>{stack}</li>
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
        <div className="mt-8 mx-[20%] grid gap-10 md:grid-cols-2">
          <Projects filtered={true} />
        </div>
      </section>
    </main>
  );
};

export default Home;
