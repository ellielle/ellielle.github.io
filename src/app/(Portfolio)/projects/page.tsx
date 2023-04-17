import { Fragment } from "react";
import ProjectList from "@components/ProjectList";

const Projects = ({ filtered }: { filtered: boolean }) => {
  return (
    <Fragment>
      <h1>Some things I&#39;ve built</h1>
      {/* TODO use a different style card/container? */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProjectList filterSelected={true} />
      </div>
    </Fragment>
  );
};

export default Projects;
