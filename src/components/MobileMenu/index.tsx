"use client";

import Link from "next/link";
import { Fragment, useState, useCallback } from "react";
import Hamburger from "@components/MobileMenu/Hamburger";
import Modal from "../Modal";

export default function Mobile(): JSX.Element {
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const createLink = useCallback((url: string, text: string) => {
    return (
      <Fragment key={`${url}-${text}`}>
        <li className="mobile-nav">
          {url.startsWith("/") ? (
            <Link href={url}>{text}</Link>
          ) : (
            <a href={url} target="_blank" rel="noreferrer">
              {text}
            </a>
          )}
        </li>
        <hr className="border-gray-600 w-[70%] self-center" />
      </Fragment>
    );
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    ["/", "Home"],
    ["/about", "About"],
    ["/projects", "Projects"],
    ["https://github.com/ellielle", "Github"],
    ["https://www.linkedin.com/in/nlamour/", "LinkedIn"],
  ];

  const NavigationMenu = navLinks.map((linkArray) => createLink(linkArray[0], linkArray[1]));

  return (
    <Fragment>
      <Hamburger
        className="fixed top-4 right-4 hover:cursor-pointer opacity-70 md:opacity-0 md:disabled"
        onClickHandler={toggleModal}
      />
      {isOpen && (
        <Modal closeModal={toggleModal} isOpen>
          <nav className="flex w-full h-full justify-around md:disabled">
            <ul className="flex flex-col w-[90%] justify-around text-center">{NavigationMenu}</ul>
          </nav>
        </Modal>
      )}
    </Fragment>
  );
}
