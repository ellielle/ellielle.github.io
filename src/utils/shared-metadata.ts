import { Metadata } from "next";

// TODO replace lazy metadata
// TODO add favicon
// TODO add og:image
export const sharedMetadata: Metadata = {
  metadataBase: new URL("https://noellelamour.vercel.app/"),
  title: {
    template: "%s | Noelle L'Amour",
    default: "Noelle L'Amour",
  },
  description: "Full-stack Developer",
  themeColor: [
    // TODO add theme-colors
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  openGraph: {
    title: "Noelle L'Amour",
    description: "Portfolio",
    siteName: "Noelle L'Amour",
    type: "website",
    locale: "en_US",
    url: "https://noellelamour.vercel.app/",
    images: [
      {
        //  TODO add og:image via api ?
        url: "https://noellelamour.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noelle L'Amour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noelle L'Amour",
    // TODO creator: "",
  },
  icons: {
    // TODO add favicon via api ?
    shortcut: "https://noellelamour.vercel.app/images/favicon.ico",
  },
};
