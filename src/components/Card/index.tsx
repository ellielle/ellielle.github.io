import { Project } from "@utils/skillset";

const Card: React.FC<{ children: React.ReactNode; project: Partial<Project> }> = ({
  children,
  project,
}) => {
  return (
    <div className="card-container">
      <div className="">{children}</div>
      <div className="text-green-400">{project.name}</div>
      <div>{project.description}</div>
      <div>{project.stack}</div>
    </div>
  );
};

export default Card;
