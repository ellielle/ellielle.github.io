import { nunito, sacramento } from "@utils/load-fonts";

// TODO refactor metadata into importable sections
export const metadata = {};

const fancyCapitals = (letter: string) => {
  return <span className={[sacramento.className, "text-4xl"].join(" ")}>{letter}</span>;
};

const ShortBlurb = (): JSX.Element => {
  return (
    <div className="text-left">
      <h1 className="mt-6 text-2xl"></h1>
      <p>
        In my youth, I dabbled in the dark arts of programming, honing my skills with simple
        incantations of HTML and CSS on Geocities. Soon, I discovered the realm of{" "}
        <em>
          <a href="https://www.graalonline.com/">Graal Online</a>
        </em>
        , where I delved deeper into the arcane. I came under the tutelage of a group of masters of
        the craft, who taught me the basics of the ancient tongue of C++. I used this knowledge to
        weave code into the very fabric of the world.
      </p>
    </div>
  );
};

const About = (): JSX.Element => {
  return (
    <main className="px-8 flex flex-col">
      <article className={[nunito.className, "md:mx-[8%]"].join(" ")}>
        <p className="text-xl">
          {fancyCapitals("L")}isten, traveler, for I have traversed the varied realms of software
          development for nigh on two decades. It began with humble origins; simple incantations of
          HTML and CSS. In my 12th summer, I was taken under the wing of a number of masters of the
          craft, who set me on this path. Their first test: deciphering the ancient tongue of C++
          with nothing but samples to learn from.
        </p>
        <p className="mt-8 text-xl">
          {fancyCapitals("I")} fervently pursued more knowledge until I was of age to attend an
          academic institute. Though my passion waned in my second year of academia, I never truly
          abandoned my craft. I continued to dabble in various forms of the art, crafting simple
          spells of C# and Ruby.
        </p>
        <p className="mt-8 text-xl">
          {fancyCapitals("Y")}et, I could not resist the Call of the :nth Child forever. I returned
          to the fold, delving into the mysteries of Ruby and Rails. But it was not until I came
          upon the cult of the Lord of the Pits, JavaScript, that I learned to wield my knowledge
          properly. With their guidance, I have been weaving more and more complex spells, delving
          deeper into the secrets this &#39;web&#39; holds.
        </p>
        <p className="mt-8 text-xl">
          {fancyCapitals("N")}ow, I roam the land as a wandering{" "}
          <span className="text-name font-bold text-2xl">CSSorceress</span>, offering my skills to
          those in need. From small-scale charms to large serverless rituals that call upon multiple
          APIs, I am always eager to push the boundaries of my craft. And when my skills are not
          needed for hire, I offer them freely to a not-for-profit guild in my homeland.
        </p>
      </article>

      <hr className="place-self-center w-[80%] mt-12 border-gray-600" />
    </main>
  );
};

export { ShortBlurb };
export default About;
