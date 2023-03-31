import Card from "@components/Card/Card";
import Image from "next/image";

const Projects = () => {
  return (
    <section>
      <h1>Some things I've built</h1>
      <div className="project-container">
        <Card>
          <Image src="@/public/otl.webp" alt="A streamer's website" />
        </Card>
        <Card>
          <Image src="@pubic/bchs.webp" alt="Website for Berkeley County Historical Society" />
        </Card>
      </div>
    </section>
  );
};

export default Projects;