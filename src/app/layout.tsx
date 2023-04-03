import Header from "@components/Header";
import "./globals.css";

export const metadata = {
  title: "Noelle L'Amour",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 mt-[4rem]">{children}</div>
      </body>
    </html>
  );
}
