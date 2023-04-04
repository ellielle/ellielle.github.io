import Card from "@components/Card";
import Image from "next/image";
import { projectList } from "@helpers/skillset";

const projects = projectList.map((project) => {
  return (
    <Card project={project} key={project.name}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={1794}
        height={946}
        className="w-[50%] h-auto"
        priority
      />
    </Card>
  );
});

const Projects = () => {
  return (
    <main>
      <h1>Some things I've built</h1>
      {/* TODO use a different style card/container? */}
      <div className="grid grid-cols-1 md:grid grid-cols-3">{projects}</div>
    </main>
  );
};

export default Projects;