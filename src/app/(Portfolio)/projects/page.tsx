import { Fragment } from "react";
import ProjectList from "@components/ProjectList";

const Projects = ({ filtered }: { filtered: boolean }) => {
  return (
    <Fragment>
      {/* TODO use a different style card/container? */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProjectList filterSelected={filtered} />
      </div>
    </Fragment>
  );
};

export default Projects;
