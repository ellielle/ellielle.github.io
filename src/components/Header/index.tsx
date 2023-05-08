"use client";

// import { useEffect } from "react";
import Link from "next/link";
import Social from "@components/Logos/Social";
import { useState, useEffect, useCallback, useRef } from "react";

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
  const [isOpen, setIsOpen] = useState(true);
  const previousY = useRef(0);

  const handleScroll = useCallback(debounce(() => {
    const currentY = window.scrollY;
    if (currentY > previousY.current) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    previousY.current = currentY;
  }, 200), [previousY.current]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    }
  }, [previousY]);

  const headerStyle = isOpen ? "top-0" : "top-[-4rem]";

  return (
    <header className={`${headerStyle} duration-300 ease-in-out sticky left-0 z-[11] flex content-center h-[3rem] md:mx-[16%] md:header md:header px-8 mb-8 rounded-md`}>
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
