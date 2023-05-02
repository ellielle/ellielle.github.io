import Image from "next/image";
import Card from "@components/Card";
import { projectList, Project } from "@/src/app/model/skillset";

const ProjectList = ({ filterSelected = false }: { filterSelected: boolean }): JSX.Element => {
  let list: JSX.Element[] = [];
  let mappableList: Project[] = [];

  if (filterSelected) {
    mappableList = projectList.filter((project) => project.select);
  } else {
    mappableList = projectList;
  }

  list = mappableList.map((project) => {
    return (
      <Card key={project.name} project={project}>
        {/* <Image
          src={project.image}
          alt={project.imageAlt}
          width={1794}
          height={946}
          className="justify-items-center rounded-lg"
          priority
        /> */}
      </Card>
    );
  });
  // TODO see if returning an actual element is better
  return <>{list}</>;
};

export default ProjectList;
