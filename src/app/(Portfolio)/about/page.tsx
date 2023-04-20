import { Fragment } from "react";

export const metadata = {};

const ShortBlurb = () => {
  return (
    <div className="text-center">
      <h1 className="mt-[6rem] text-2xl"></h1>

      <p className="text-orange-500 mt-8 text-xl">
        In my youth, I dabbled in the dark arts of programming, honing my skills with simple
        incantations of HTML and CSS on Geocities. Soon, I discovered the realm of{" "}
        <a href="https://www.graalonline.com/">Graal Online</a>, where I delved deeper into the
        arcane. I came under the tutelage of a group of masters of the craft, who taught me the
        basics of the ancient tongue of C++. I used this knowledge to weave code into the very
        fabric of the world.
      </p>
    </div>
  );
};

const RestOfTheOwl = () => {
  return (
    <Fragment>
      <p className="text-orange-500 mt-8 text-xl">
        Listen, traveler, for I have traversed the varied realms of software development for nigh on
        two decades. It began with humble origins; simple incantations of HTML and CSS. In my 12th
        summer, I was taken under the wing of a number of masters of the craft, who set me on this
        path. Their first test: deciphering the ancient tongue of C++ with nothing but samples to
        learn from.
      </p>
      <p className="text-orange-300 mt-8 text-xl">
        I fervently pursued more knowledge until I was of age to attend an academic institute.
        Though my passion waned in my second year of academia, I never truly abandoned my craft. I
        continued to dabble in various forms of the art, crafting simple spells of C# and Ruby.
      </p>
      <p className="text-orange-300 mt-8 text-xl">
        Yet, I could not resist the Call of the :nth Child forever. I returned to the fold, delving
        into the mysteries of Ruby and Rails. But it was not until I came upon the cult of the Lord
        of the Pits, JavaScript, that I learned to wield my knowledge properly. With their guidance,
        I have been weaving more and more complex spells, delving deeper into the secrets this
        &#39;web&#39; holds.
      </p>
      <p className="text-orange-300 mt-8 text-xl">
        Now, I roam the land as a wandering CSSorceress, offering my skills to those in need. From
        small-scale charms to large serverless rituals that call upon multiple APIs, I am always
        eager to push the boundaries of my craft. And when my skills are not needed for hire, I
        offer them freely to a not-for-profit guild in my homeland.
      </p>
    </Fragment>
  );
};

const About = () => {
  return (
    <main>
      <article>
        <RestOfTheOwl />
      </article>
    </main>
  );
};

export { ShortBlurb };
export default About;
