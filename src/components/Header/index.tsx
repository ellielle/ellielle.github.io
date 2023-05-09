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

const throttle = (callback: () => void, delay: number) => {
  let throttling = false;
  return (...args: any[]) => {
    if (!throttling) {
      throttling = true;
      setTimeout(() => {
        throttling = false;
        callback();
      }, delay);
    }
  };
};

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const previousY = useRef(0);

  const handleScroll = throttle(
    useCallback(() => {
      const currentY = window.scrollY;
      if (currentY > previousY.current) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
      previousY.current = currentY;
    }, []),
    400
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [handleScroll]);

  const headerStyle = isOpen ? "top-0" : "top-[-4rem]";

  return (
    <header
      className={`${headerStyle} duration-300 ease-in-out sticky left-0 z-[11] flex content-center h-[3rem] md:mx-[16%] md:header px-8 mb-8 rounded-md`}>
      <nav className="h-full w-full gap-8 hidden place-self-center items-center md:flex">
        {navigationMenu}
      </nav>
      <div className="h-full w-full place-content-end gap-8 place-self-center items-center hidden md:flex">
        <Social />
      </div>
    </header>
  );
};

export default Header;
