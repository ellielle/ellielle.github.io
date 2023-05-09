import Image from "next/image";
import Card from "@components/Card";
import { projectList, Project } from "@/src/app/model/skillset";

const ProjectList = ({ filterSelected = false }: { filterSelected: boolean }): JSX.Element => {
  let list: JSX.Element[] = [];
  let mappableList: Project[] = filterSelected
    ? projectList.filter((project) => project.select)
    : projectList;

  for (let i = 0; i < mappableList.length; i++) {
    const project = mappableList[i];
    list.push(
      <Card key={project.name} project={project}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1794}
          height={946}
          className="justify-items-center rounded-lg"
          priority
        />
      </Card>
    );
  }
  return <>{list}</>;
};

export default ProjectList;
