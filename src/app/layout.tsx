import { Suspense } from "react";
import { inter } from "@utils/load-fonts";
import {
  sharedMetadata,
  googleMetadata,
  openGraphMetadata,
  robotsMetadata,
  twitterMetadata,
} from "@utils/shared-metadata";
import dynamic from "next/dynamic";
import Header from "@components/Header";
import Footer from "@components/Footer";
const Background = dynamic(() => import("@components/Canvas/"));
import MobileMenu from "@components/MobileMenu";
import "@assets/styles/globals.css";

export const metadata = {
  ...sharedMetadata,
  ...googleMetadata,
  ...openGraphMetadata,
  ...robotsMetadata,
  ...twitterMetadata,
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body
        className={[inter.className, "max-w-[1280px] sm:mx-[5%] min-[1400px]:mx-auto"].join(" ")}
      >
        <MobileMenu />
        <Header />
        <div className="sm:opacity-mask">
          {children}
          <Footer />
        </div>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </body>
    </html>
  );
}
