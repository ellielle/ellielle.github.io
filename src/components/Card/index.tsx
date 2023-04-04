import { Project } from "@helpers/skillset";

const Card = ({ children, project }: { children: React.ReactNode; project: Partial<Project> }) => {
  return (
    <div className="grid text-center p-[1rem] border-[solid_1px_hsl(231,15%,18%)] rounded-lg shadow-[0_0_0.5rem_hsl(34,51%,43%)]">
      <div className="text-green-400">{project.name}</div>
      <div className="py-4 grid">{children}</div>
      <div>{project.description}</div>
      <div>{project.stack}</div>
    </div>
  );
};

export default Card;
