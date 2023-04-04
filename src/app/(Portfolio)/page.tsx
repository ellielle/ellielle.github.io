import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";
import { Inter } from "next/font/google";
import { projectList } from "@helpers/skillset";

const inter = Inter({ subsets: ["latin"] });

const list = projectList.map((project) => {
  return (
    project.select && (
      <Card key={project.name} project={project}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1794}
          height={946}
          style={{ width: "20%", height: "auto" }}
          priority
        />
      </Card>
    )
  );
});

const Home = () => {
  return (
    <main className={[inter.className].join(" ")}>
      <div className="">
        <h1 className="text-4xl">Noelle L'Amour</h1>
        <div className="mb-10">
          {/* TODO finish intro */}
          <p>Full Stack Web Developer</p>
        </div>

        <Link href="/about" className="">
          View Profile --&gt;
        </Link>

        <h2 className="">Select Projects</h2>
        <section>{list}</section>
      </div>
    </main>
  );
};

export default Home;
