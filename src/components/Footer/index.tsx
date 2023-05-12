import Link from "next/link";

const Footer = () => {
  return (
    <footer className="grid grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr] bg-[#010b10aa]">
      <nav className="flex flex-col py-4 pl-8 w-full place-items-center md:pr-8 md:place-items-end">
        <Link href="/">
          <strong className="text-xl">Home</strong>
        </Link>
        <Link href="/about">About</Link>
        <a href="#">
          <s>Projects</s>
        </a>
        <a href="/blog">
          Blog
        </a>
      </nav>

      <div className="flex flex-col py-4 pr-8 w-full h-full place-items-center md:pl-8 md:place-items-start">
        <strong className="text-xl footer-text ">Contact</strong>
        <a href="mailto:noelle.a.lamour@gmail.com" className="footer-text">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/nlamour/"
          className="footer-text "
          rel="noreferrer"
          target="_blank">
          LinkedIn
        </a>
        <a
          href="https://github.com/ellielle"
          className="footer-text"
          rel="noreferrer"
          target="_blank">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
