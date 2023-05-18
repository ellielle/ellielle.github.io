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
  return <div></div>;
}

export { FilteredProjects };
