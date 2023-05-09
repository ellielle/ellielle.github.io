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
    <div className="card-container flex flex-col gap-2 w-[90%] h-full md:w-[50%] bg-transparent shadow-lg rounded-lg overflow-hidden border-2 border-black">
      <div className="card-image">{children}</div>
      <div className="p-3">
        <div className="font-bold text-white text-lg">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-white cursor-pointer hover:text-cyan-600 transition-all ease-in-out duration-500">
            {name}
          </a>
        </div>
        <div className="mt-3 text-gray-400 text-sm">{description}</div>
      </div>
      <div className="text-white text-sm mt-2">
        {stack.map((item) => (
          <span className="px-2">{item + " "}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
