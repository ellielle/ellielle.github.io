import Card from "@components/Card";
import Image from "next/image";
import { projectList } from "@helpers/skillset";
import styles from "./projects.module.css";

const projects = projectList.map((project) => {
  return (
    <Card project={project} key={project.name}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={160}
        height={90}
        className="w-[100%] h-auto"
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
      <div className="flex-auto md:grid-cols-3">{projects}</div>
    </main>
  );
};

export default Projects;
