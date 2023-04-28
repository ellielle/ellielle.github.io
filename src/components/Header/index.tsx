import Link from "next/link";

const menu: Array<[string, string]> = [
  ["/", "Home"],
  ["/projects", "Projects"],
  ["/blog", "Blog"],
];

// TODO refactor nav into a smaller section, go hamburger for small screen probably
// TODO then put a "home" link with a logo in left, and contacts by logo upper right

// TODO fix header font now that you're using Next
const navigationMenu = menu.map(([url, text]) => {
  return (
    <Link href={url} key={url}>
      <span className="text-[1.4rem]">{text}</span>
    </Link>
  );
});

const Header = (): JSX.Element => {
  return (
    <header className="grid content-center w-20 h-[3rem] top-0 left-0 bg-header">
      <nav className="h-[100%] w-[100%] flex justify-evenly md:w-[80%] place-self-center">
        {navigationMenu}
      </nav>
    </header>
  );
};

export default Header;
