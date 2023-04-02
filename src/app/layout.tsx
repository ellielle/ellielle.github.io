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
        {children}
      </body>
    </html>
  );
}
// TODO delete if not needed
// .grid-container {
//   display: flex;
//   flex-direction: row;
//   /* grid-auto-flow: row dense; */
//   min-height: 100vh;
// }
