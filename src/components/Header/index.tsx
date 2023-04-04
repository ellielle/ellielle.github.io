import Link from "next/link";

const menu = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  // ["/redact", "[REDACTED]"],
  // ["/redact", "[REDACTED]"],
];

const navigationMenu = menu.map(([url, text]) => {
  return (
    <Link href={url} key={url}>
      <span className="text-[1.4rem]">{text}</span>
    </Link>
  );
});

const Header = () => {
  return (
    <header className="fixed grid content-center w-[100%] h-[3rem] top-0 left-0 bg-[--bg-primary-hsl] shadow-[0_0_0.5rem_0.2rem_hsl(0,0%,0%)]">
      <nav className="h-[100%] w-[100%] flex justify-evenly md:w-[80%] place-self-center">
        {navigationMenu}
      </nav>
    </header>
  );
};

export default Header;
