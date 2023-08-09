"use client";

import type { Project } from "@/src/models/skillset";

export default function Card({
  children,
  project,
}: {
  children: React.ReactNode;
  project: Project;
}) {
  const { url, name, description, stack } = project;
  return (
    <div className="card-container pb-8 rounded-lg overflow-hidden border-2 border-black">
      <div>{children}</div>
      <div className="p-3">
        <div className="font-bold text-white text-lg">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-white cursor-pointer hover:text-cyan-600 transition-all ease-in-out duration-500"
          >
            {name}
          </a>
        </div>
        <div className="mt-3 text-gray-400 text-sm">{description}</div>
      </div>
      <div className="text-white text-sm mt-2">
        {stack.map((item, index) => (
          <span className="p-2 mx-1 badge" key={`${item}-${index}`}>
            {item + " "}
          </span>
        ))}
      </div>
    </div>
  );
}
