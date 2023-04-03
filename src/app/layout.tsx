import Header from "@components/Header";
import "./globals.css";

export const metadata = {
  title: "Noelle L'Amour",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-100vh mt-[4rem]">
        <Header />
        {children}
      </body>
    </html>
  );
}
