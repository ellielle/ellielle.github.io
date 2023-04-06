import Link from "next/link";
import { useProjectList } from "@hooks/useProjectList";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const projectList = useProjectList();

const Home: React.FC = () => {
  return (
    <main className={inter.className}>
      <div className="text-center md:text-left ">
        <h1 className="text-4xl gradient-text">Noelle L'Amour 👋</h1>
        <div className="mb-10">
          {/* TODO finish intro */}
          <p>Full Stack Web Developer</p>
        </div>

        <Link href="/about" className="">
          View Profile --&gt;
        </Link>

        <h2 className="">Select Projects</h2>
        <section className="pt-8">
          <div className="grid gap-4 md:grid-cols-2">
            
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
