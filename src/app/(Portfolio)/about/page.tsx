const About: React.FC = () => {
  return (
    <main>
      <div className="text-left">
        <div className="text-red-500">Skip Sob Story</div>

        {/* TODO needs more other info not programming related, less sob story */}
        <h1 className="mt-8 text-2xl">As the landing said, I&#39;m Noelle L&#39;Amour 👋</h1>
        <p className="text-lime-300 mt-8 text-xl">
          I&#39;ve been playing with coding as a hobby on and off for about the last 20 years. This
          never amounted to anything other than small side projects or code contributions. I never
          really got my interest to stick like it had in my early years of coding.
        </p>
        <p className="text-orange-300 mt-8 text-xl">
          Around 2016, my body just gave up on everything all at once.
        </p>
        <p className="text-orange-300 mt-8 text-xl">
          Around the middle of 2018, I decided to finally give in to the Call of the :nth Child and
          started my journey toward being a developer. Originally, I picked up Ruby and Rails and
          followed a few courses. I wasn&#39;t really feeling Ruby by the end of the course, but it was
          helpful in learning other concepts that carry over to any language.
        </p>
        <p className="text-orange-300 mt-8 text-xl">
          I picked up JavaScript after that, since most resources I found focused on JS-related
          stacks and how amazing its impossible number of libraries are! JavaScript and I vibed
          together pretty well, so I stuck with it.
        </p>
        <p className="text-orange-300 mt-8 text-xl">
          Once I felt confident enough in doing so, I stepped back out into the world and started
          freelancing.
        </p>
        {/* TODO maybe a lot less sob story, mention the jamstack, serverless, projects */}
        {/* TODO and mention work with BCHS */}
      </div>
    </main>
  );
};

export default About;
