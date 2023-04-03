import Image from "next/image";
import Link from "next/link";
import Card from "@components/Card";
import { Inter } from "next/font/google";
import { projectList } from "@helpers/skillset";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

const list = projectList.map((project) => {
  return (
    project.select && (
      <Card key={project.name} project={project}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={160}
          height={90}
          style={{ width: "20%", height: "auto" }}
          priority
        />
      </Card>
    )
  );
});

const Home = () => {
  return (
    <main className={[styles.main, inter.className].join(" ")}>
      <div className={styles.description}>
        <h1 className="font-3xl">Noelle L'Amour</h1>
        <div>
          {/* TODO finish intro */}
          <p>Full Stack Web Developer</p>
        </div>

        <Link href="/about" className={styles.moreAbout}>
          View Profile --&gt;
        </Link>

        <h2 className={styles.h2}>Select Projects</h2>
        {list}
      </div>
    </main>
  );
};

export default Home;
