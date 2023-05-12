import type { Metadata } from "next";

// TODO replace lazy metadata
// TODO either add the built-in support for a sitemap or double-check the plugin's sitemap
// TODO maybe split metadata into importable chunks
export const openGraphMetadata: Metadata = {
  openGraph: {
    title: "Noelle L'Amour's Fantastical Portfolio",
    description: "Your Next Developer",
    siteName: "A Neat Portfolio",
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
};

export const twitterMetadata: Metadata = {
  twitter: {
    card: "summary_large_image",
    title: "Noelle L'Amour",
    // TODO creator: "",
  },
};

export const customMetadata: Metadata = {
  other: {
    custom: "meta",
    "google-site-verification": "pT0tr8qa4dd8GQR-SwLSyuag8A_dzwo2UJE0TmXDjCs",
  },
};

export const robotsMetadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
};

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

  icons: {
    // TODO change favicon from default vercel ico
    shortcut: "/favicon.ico",
  },
};
