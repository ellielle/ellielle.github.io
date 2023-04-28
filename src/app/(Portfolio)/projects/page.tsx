import { Fragment } from "react";
import ProjectList from "@components/ProjectList";

const Projects = ({ filtered }: { filtered: boolean }): JSX.Element => {
  return (
    <Fragment>
      {/* TODO use a different style card/container? */}
      <ProjectList filterSelected={filtered} />
    </Fragment>
  );
};

export default Projects;
