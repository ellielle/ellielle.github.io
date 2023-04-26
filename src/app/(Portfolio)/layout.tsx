import { Inter } from "next/font/google";
import { sharedMetadata } from "@utils/shared-metadata";
import "./globals.css";
import dynamic from "next/dynamic";
const Background = dynamic(() => import("@/src/components/Canvas/background"), { ssr: false });

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = { ...sharedMetadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* TODO add border between background and foreground, add fading opacity so stars can be seen */}
      <body
        className={[inter.className, "max-w-[1280px] sm:mx-[5%] min-[1400px]:mx-auto"].join(" ")}>
        <Background />
        <div>{children}</div>
      </body>
    </html>
  );
}
