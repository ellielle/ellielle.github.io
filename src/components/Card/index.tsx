"use client";

import type { Project } from "@/src/app/model/skillset";

const Card = ({
  children,
  project,
}: {
  children: React.ReactNode;
  project: Project;
}): JSX.Element => {
  const { url, name, description, stack } = project;
  return (
    <div className="card-container flex flex-col gap-2 w-[90%] h-full md:w-[50%] bg-transparent shadow-lg rounded-lg overflow-hidden transform rotate-[-7deg] hover:rotate-[0deg] transition-all duration-300 border-2 border-black">
      <div className="card-image">{children}</div>
      <div className="card-body p-3">
        <div className="card-title font-bold text-white text-lg">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-200">
            {name}
          </a>
        </div>
        <div className="card-text text-gray-400 text-sm">{description}</div>
      </div>
      <div className="card-footer border-t-1 border-black text-sm text-gray-400">
        <div className="card-stack text-white text-sm mt-2">{stack.join(" ")}</div>
      </div>
    </div>
  );
};

export default Card;
