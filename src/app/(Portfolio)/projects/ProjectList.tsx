import Image from "next/image";
import Card from "@components/Card";
import { projectList, Project } from "@/src/models/skillset";

const ProjectList = ({ filterSelected = false }: { filterSelected: boolean }): JSX.Element => {
  let list: JSX.Element[] = [];
  let mappableList: Project[] = filterSelected
    ? projectList.filter((project) => project.select)
    : projectList;
  
    list = mappableList.map((project) => {
      return (
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
    });
  return <>{list}</>;
};

export default ProjectList;
