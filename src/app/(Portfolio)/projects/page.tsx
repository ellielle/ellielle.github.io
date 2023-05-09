import { Fragment } from "react";
import ProjectList from "./ProjectList";

const Projects = ({ filtered }: { filtered: boolean }): JSX.Element => {
  return (
    <Fragment>
      <ProjectList filterSelected={filtered} />
    </Fragment>
  );
};

export default Projects;
