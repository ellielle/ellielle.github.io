import type { Project } from "@/src/app/model/skillset";
import Link from "next/link";

const Card = ({
  children,
  project,
}: {
  children: React.ReactNode;
  project: Project;
}): JSX.Element => {
  return (
    // TODO style cards
    <div className="card-container flex flex-col gap-2 w-[90%] md:w-[50%]">
      <div className="flex">{children}</div>
      <a href={project.url} target="_blank" rel="noreferrer" className="transition-opacity opacity-50 hover:opacity-100">{project.name}</a>
      <div>{project.description}</div>
      <div className="">{project.stack.join(" ")}</div>
    </div>
  );
};

export default Card;
