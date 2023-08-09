import { techStacks } from ".";
const Tech = (): JSX.Element => {
  return (
    <section>
      <h2 className="mt-12 mb-16 text-center text-xl">Spell components I regularly prepare:</h2>
      <ul className="mt-[5.5rem] md:mt-12 grid grid-cols-1 gap-10 place-content-center justify-items-center sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fill,minmax(15%,1fr))]">
        {techStacks.map((stack) => (
          <li key={stack.key}>{stack}</li>
        ))}
      </ul>
    </section>
  );
};

export default Tech;
