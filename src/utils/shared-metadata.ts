import { Metadata } from "next";

// TODO replace lazy metadata
// TODO add favicon
// TODO add og:image
// TODO either add the built-in support for a sitemap or double-check the plugin's sitemap
export const sharedMetadata: Metadata = {
  metadataBase: new URL("https://noellelamour.vercel.app/"),
  title: {
    template: "%s | Noelle L'Amour",
    default: "Noelle L'Amour",
  },
  description: "Full-stack Developer",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1b2836" },
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
        //  TODO add og:image
        url: "https://noellelamour.vercel.app/og-image.png",
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
    // TODO change favicon from default vercel ico
    shortcut: "/favicon.ico",
  },
};
