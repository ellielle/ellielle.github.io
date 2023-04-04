import Link from "next/link";
import styles from "./Header.module.css";

const menu = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/contact", "Contact"],
];

const navigationMenu = menu.map(([url, text]) => {
  return (
    <Link href={url} key="url">
      <span className="text-[1.4rem]">{text}</span>
    </Link>
  );
});

const Header = () => {
  return (
    <header className="fixed grid content-center w-[100%] h-[3rem] top-0 left-0 bg-{--bg-primary-hsl} shadow-[0_0_0.5rem_0.2rem_hsla(0,0%,0%,0.4)]">
      <nav className="h-[100%] w-[100%] flex justify-evenly md:w-[80%] place-self-center">
        {navigationMenu}
      </nav>
    </header>
  );
};

export default Header;
