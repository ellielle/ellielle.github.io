import { Fragment } from "react";
import ProjectList from "./ProjectList";

const FilteredProjects = ({ filtered }: { filtered: boolean }): JSX.Element => {
  return (
    <Fragment>
      <ProjectList filterSelected={filtered} />
    </Fragment>
  );
};

export default function Page({ params }: { params: { filtered: boolean } }) {
  return (
    <main className="px-8 grid gap-8 place-content-around">
      <h1 className="text-2xl mt-4 text-center">Some select projects I&#39;ve worked on</h1>
      <section className="md:mx-[8%] grid gap-4 mt-12 mb-12 md:grid-cols-2">
        <ProjectList filterSelected={false} />
      </section>
    </main>
  );
}

export { FilteredProjects };
