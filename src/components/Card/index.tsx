import { Project } from "@helpers/skillset";

// TODO does it need container class with styles.container?
const cardStyle = ["grid", "p-[1rem]", "justify-self-center", "container"];

const Card = ({ children, project }: { children: React.ReactNode; project: Partial<Project> }) => {
  return (
    <div className="grid p-[1rem] justify-self-center border-[solid_1px_hsl(231,15%,18%)] rounded-lg shadow-[0_0_0.5rem_hsl(34,51%,43%)]">
      <div className="text-green-400">{project.name}</div>
      <div className="py-4">{children}</div>
      <div>{project.description}</div>
      <div>{project.stack}</div>
    </div>
  );
};

export default Card;
