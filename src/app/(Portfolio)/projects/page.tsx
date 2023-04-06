import { useProjectList } from "@hooks/useProjectList";

const projectList = useProjectList();

const Projects = () => {
  return (
    <main>
      <h1>Some things I've built</h1>
      {/* TODO use a different style card/container? */}
      <div className="pt-8 grid gap-4">{projectList}</div>
    </main>
  );
};

export default Projects;
