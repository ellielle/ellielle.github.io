import type { Project } from "@/src/app/model/skillset";

const Card = ({ children, project }: { children: React.ReactNode; project: Project }) => {
  return (
    // TODO style cards
    <div className="card-container">
      <div className="">{children}</div>
      <div className="text-green-400">{project.name}</div>
      <div>{project.description}</div>
      <div>{project.stack}</div>
    </div>
  );
};

export default Card;
