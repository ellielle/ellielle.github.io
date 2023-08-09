import Image from "next/image";
import Card from "@components/Card";
import { projectList, Project } from "@/src/models/skillset";

export default function ProjectList({
  filterSelected = false,
}: {
  filterSelected: boolean;
}): JSX.Element {
  let list: JSX.Element[] = [];
  let mappableList: Project[] = filterSelected
    ? projectList.filter((project) => project.select)
    : projectList;

  list = mappableList.map((project) => {
    return (
      <Card key={project.name} project={project}>
        <a href={project.url} target="_blank" rel="noreferrer">
          <Image
            src={project.image}
            alt={project.imageAlt}
            className="justify-items-center hover:brightness-125 rounded-lg transition-all"
            priority
          />
        </a>
      </Card>
    );
  });
  return <>{list}</>;
}
