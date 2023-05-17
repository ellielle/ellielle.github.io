"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  const getBackgroundColor = (path: string) => {
    if (path.match(/\/blog/) || path.match(/\/blog\/[a-zA-Z0-9]+/)) {
      return "bg-[#111111ff]";
    } else {
      return "bg-[#010b10aa]";
    }
  };

  return (
    <footer className={`grid grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr] ${getBackgroundColor(path)}`}>
      <nav className="flex flex-col py-4 pl-8 w-full place-items-center md:pr-8 md:place-items-end">
        <Link href="/">
          <strong className="text-xl">Home</strong>
        </Link>
        <Link href="/about">About</Link>
        <Link href="#">
          <s>Projects</s>
        </Link>
        <Link href="/blog">Blog</Link>
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
