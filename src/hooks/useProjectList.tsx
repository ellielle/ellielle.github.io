import { useEffect, useState } from "react";
import Image from "next/image";
import Card from "@components/Card";
import { projectList } from "@utils/skillset";

export const useProjectList = () => {
  const [defaultList, setDefaultList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const list = projectList.map((project) => {
      return (
        <Card key={project.name} project={project}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1794}
            height={946}
            className="justify-self-center w-[50%] h-auto md:w-[20%]"
            priority
          />
        </Card>
      );
    });
    setDefaultList(list);
  }, []);

  return defaultList;
};
