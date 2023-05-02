import { inter } from "@utils/load-fonts";
import { sharedMetadata } from "@utils/shared-metadata";
import dynamic from "next/dynamic";
import Header from "@components/Header";
const Background = dynamic(() => import("@components/Canvas/background"));
import "./globals.css";

export const metadata = { ...sharedMetadata };

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body
        className={[inter.className, "max-w-[1280px] sm:mx-[5%] min-[1400px]:mx-auto"].join(" ")}>
        <Header />
        <div className="sm:opacity-mask">{children}</div>
        <Background />
      </body>
    </html>
  );
}
