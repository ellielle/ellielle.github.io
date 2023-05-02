"use client";

// import { useEffect } from "react";
import Link from "next/link";
import Social from "@components/Logos/Social";
import { useState, useEffect } from "react";

const menu: Array<[string, string]> = [
  ["/", "Home"],
  ["/about", "About"],
  // ["/projects", "Projects"],
  // ["/blog", "Blog"],
];

const navigationMenu = menu.map(([url, text]) => {
  return (
    <Link href={url} key={url}>
      <span className="text-[1.4rem]">{text}</span>
    </Link>
  );
});

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [previousY, setPreviousY] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentY = window.scrollY;
      if (currentY > previousY) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
      setPreviousY(currentY);
    }, 400);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    }
  }, [previousY]);

  const headerStyle = isOpen ? "opacity-100" : "opacity-0";

  return (
    <header className={`${headerStyle} sticky top-0 left-0 z-[11] flex content-center h-[3rem] md:mx-[16%] px-8 mb-8`}>
      <nav className="h-full w-full gap-8 hidden place-self-center items-center md:flex">
        {navigationMenu}
      </nav>
      {/* TODO MOBILE NAV COMPONENT */}
      <div className="h-full w-full place-content-end gap-8 place-self-center items-center hidden md:flex">
        <Social />
      </div>
    </header>
  );
};

export default Header;
