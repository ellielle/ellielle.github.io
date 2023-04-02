import Card from "@components/Card";
import Image from "next/image";
import { projectList } from "@/src/helpers/skillset";

const projects = projectList.map((project) => {
  return (
    <Card project={project}>
      <Image src={project.image} alt={project.imageAlt} width={160} height={90} />
    </Card>
  );
});

const Projects = () => {
  return (
    <main>
      <h1>Some things I've built</h1>
      {/* TODO use a different style card/container? */}
      <div className="project-container">{projects}</div>
    </main>
  );
};

export default Projects;
