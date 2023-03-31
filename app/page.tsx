import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Image src="/bchs.webp" alt="13" width={40} height={31} priority />
      </div>
    </main>
  );
};

export default Home;
