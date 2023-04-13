import { Fragment } from "react";
import { usePathname } from "next/navigation";

const ShortBlurb: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="text-center">
      <h1 className="mt-[6rem] text-2xl">A bit about myself</h1>

      <p className="text-lime-300 mt-8 text-xl">
        I&#39;ve been playing with programming as a hobby on and off for about the last 20 years. I
        started with making simple websites with HTML and CSS on Geocities. I was around 13 or so
        when I picked up <a href="https://www.graalonline.com/">Graal Online</a>, which eventually
        introduced player-made worlds. I talked my way into a group and started to learn very simple
        C++. Some of my code made it into the main game server (at the time), so it&#39;s quite possible
        it&#39;s still there! Though I hope for their sake it isn&#39;t. 😅
      </p>
      <p
        className={[
          typeof children === "string" ? "image-mask" : "",
          "text-orange-300 mt-8 text-xl",
        ].join(" ")}>
        I lost interest after my second year of university, but still played around with some small
        projects in C# and Ruby over the years. I also made a couple small games with GameMaker, but
        they&#39;ve been lost to time.
      </p>
      {children}
    </div>
  );
};

const RestOfTheOwl: React.FC = () => {
  return (
    <Fragment>
      <p className="text-orange-300 mt-8 text-xl">
        Around the middle of 2018, I decided to finally give in to the Call of the :nth Child and
        started my journey toward more than hobby coding. Originally, I picked up Ruby and Rails and
        followed a few courses. I wasn&#39;t really feeling Ruby by the end of the course, but the
        experience of properly structured learning and a deeper understanding of concepts in general
        brought back the spark.
      </p>
      <p className="text-orange-300 mt-8 text-xl">
        I picked up JavaScript afterward and decided to focus more on web development. JavaScript
        and I vibe together pretty well, I&#39;ve been expanding my knowledge and toolkit since. I&#39;m
        currently working on a deeper understanding of the frameworks I use, and the language
        itself. I&#39;ve also picked up Go recently, though I haven&#39;t had much time to play with it yet.
      </p>
      <p className="text-orange-300 mt-8 text-xl">
        Once I felt confident enough in doing so, I emerged back out into the world and began
        freelancing. I&#39;ve worked on a projects from small in scope to a full serverless web app that
        consumes multiple APIs. I also donate time to a not-for-profit from my home town when they
        need updates to their WordPress site.
      </p>
    </Fragment>
  );
};

const About: React.FC = () => {
  return (
    <main className="px-4">
      <ShortBlurb>{<RestOfTheOwl />}</ShortBlurb>
    </main>
  );
};

export { ShortBlurb };
export default About;
