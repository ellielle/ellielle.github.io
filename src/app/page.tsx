import Image from "next/image";
import Link from "next/link";
import Card from "@/src/components/Card/Card";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Noelle L'Amour</h1>
        <div>
          {/* TODO finish intro */}
          <p>Full Stack Web Developer</p>
        </div>
        <Link href="/about" className={styles.moreAbout}>
          View Profile --&gt;
        </Link>

        <h2 className={styles.h2}>Select Projects</h2>
        <Card>
          <h1>{/* {{ project.name }} */}</h1>

          <div>{/* <Image :src="project.image" :alt="project.imageAlt" /> */}</div>
          {/* <p>{{ project.description }}</p> */}
          {/* <span>{{ project.stack }}</span> */}
        </Card>
      </div>
    </main>
  );
};

export default Home;
