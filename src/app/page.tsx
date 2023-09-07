import Link from "next/link";
import Tech from "@components/Logos/Tech";
import { ShortBlurb } from "./about/page";
import { FilteredProjects } from "./projects/page";

export default function Page() {
  return (
    <main className="px-8">
      <div className="md:mx-[8%] pb-8">
        <section className="text-left grid">
          <div>
            <h1 className="text-3xl">
              Well met, I am <span className="text-name font-semibold">Noelle L&#39;Amour</span>
            </h1>
            <div className="mb-2">
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

        <section className="text-xl mb-20 grid">
          <ShortBlurb />
          <div className="mt-14 mr-14 text-right">
            <Link href="/about" className="text-infernal">
              More About Me --&#62;
            </Link>
          </div>
        </section>

        <section>
          <Tech />
        </section>

        <section className="text-center text-xl mt-24 pb-12">
          <h2>Some of the things I&#39;ve worked on:</h2>
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <FilteredProjects filtered={true} />
          </div>
        </section>
      </div>
    </main>
  );
}
