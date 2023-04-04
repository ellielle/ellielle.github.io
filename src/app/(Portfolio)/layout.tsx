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
        <div className="mt-[4rem]">{children}</div>
      </body>
    </html>
  );
}
0