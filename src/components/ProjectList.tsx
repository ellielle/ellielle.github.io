import Image from "next/image";
import Card from "@components/Card";
import { projectList, Project } from "@utils/skillset";

const ProjectList: React.FC<{ filterSelected: boolean }> = ({ filterSelected = false }) => {
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
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1794}
          height={946}
          className="justify-items-center h-auto w-max-[30%]"
          priority
        />
      </Card>
    );
  });

  return <>{list}</>;
};

export default ProjectList;
