import { Inter } from "next/font/google";
import { sharedMetadata } from "@utils/shared-metadata";
import "./globals.css";
import dynamic from "next/dynamic";
const Background = dynamic(() => import("@/src/components/Canvas/background"));

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = { ...sharedMetadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={[inter.className, "max-w-[1280px] sm:mx-[5%] min-[1400px]:mx-auto"].join(" ")}>
        <div className="sm:opacity-mask">{children}</div>
        <Background />
      </body>
    </html>
  );
}
