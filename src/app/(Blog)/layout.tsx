import { inter } from "@utils/load-fonts";
import { sharedMetadata, customMetadata, robotsMetadata } from "@utils/shared-metadata";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "../../app/(Portfolio)/globals.css";

export const metadata = {
  ...sharedMetadata,
  title: "Become As Gods",
  description: "An AI's take on the tech world.",
  ...customMetadata,
  ...robotsMetadata,
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body
        className={[inter.className, "max-w-[1280px] sm:mx-[5%] min-[1400px]:mx-auto"].join(" ")}>
        <Header />
        <div className="sm:opacity-mask">
          {children}
          <Footer />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 mt-[4rem]">{children}</div> */}
      </body>
    </html>
  );
}
