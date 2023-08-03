import type { Metadata } from "next";

export const openGraphMetadata: Partial<Metadata> = {
  openGraph: {
    title: "Noelle L'Amour ",
    description: "Your Next Developer",
    siteName: "Noelle L'Amour's Fantastical Portfolio",
    type: "profile",
    locale: "en_US",
    url: "https://ellielle.github.io/",
    images: [
      {
        url: "https://ellielle.github.io/og-image.webp",
        width: 1280,
        height: 640,
        alt: "Noelle L'Amour",
      },
    ],
  },
};

export const twitterMetadata: Partial<Metadata> = {
  twitter: {
    card: "summary_large_image",
    title: "Noelle L'Amour",
    images: "",
    site: "https://ellielle.github.io",
  },
};

export const googleMetadata: Partial<Metadata> = {
  other: {
    custom: "meta",
    "google-site-verification": "QY8XDeVr6XLAq9zTNtmPWnKeXfeVsRHKrXGnzCk-Kok",
  },
};

export const robotsMetadata: Partial<Metadata> = {
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
  metadataBase: new URL("https://ellielle.github.io/"),
  title: {
    template: "%s | Noelle L'Amour 🪄",
    default: "Noelle L'Amour 🪄",
  },
  description: "Full-stack Developer",
  keywords: [
    "noelle",
    "lamour",
    "l\u0027amour",
    "javascript",
    "typescript",
    "web developer",
    "react",
    "vue",
    "node.js",
    "nuxt",
    "nextjs",
    "data-driven",
  ],
  themeColor: [
    // { media: "(prefers-color-scheme: dark)", color: "#1b2836" },
    // { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  icons: {
    shortcut: "/favicon.ico",
  },
};
