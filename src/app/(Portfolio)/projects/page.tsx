import ProjectList from "@components/ProjectList";

const Projects = () => {
  return (
    <main>
      <h1>Some things I've built</h1>
      {/* TODO use a different style card/container? */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProjectList filterSelected={true} />
      </div>
    </main>
  );
};

export default Projects;
