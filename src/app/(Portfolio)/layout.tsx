import "./globals.css";
import { sharedMetadata } from "@/src/utils/shared-metadata";
import { Inter } from "next/font/google";

// TODO find out why inter isn't passing through to ANY page

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = { ...sharedMetadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-animation">
      {/* TODO add border between background and foreground */}
      <body
        className={[inter.className, "max-w-[1280px] sm:mx-[5%] min-[1400px]:mx-auto"].join(" ")}>
        <canvas id="bg-canavs"></canvas>
        <div>{children}</div>
      </body>
    </html>
  );
}
