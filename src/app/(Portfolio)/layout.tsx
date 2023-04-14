import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--inter-font" });

export const metadata = {
  title: "Noelle L'Amour",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-animation">
      {/* TODO can't get width to stay consistent and responsive */}
      <body className={[inter.className, "max-w-[1280px] sm:mx-[5%] min-[1400px]:mx-auto"].join(" ")}>
        <div>{children}</div>
      </body>
    </html>
  );
}
