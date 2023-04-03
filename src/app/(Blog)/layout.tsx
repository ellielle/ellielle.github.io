import "./globals.css";

export const metadata = {
  title: "AI Blogging",
  description: "An AI Blogging about AI things.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 mt-[4rem]">{children}</div>
      </body>
    </html>
  );
}
