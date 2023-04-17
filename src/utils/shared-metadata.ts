import { Metadata } from "next";

// TODO replace lazy metadata
// TODO add favicon
// TODO add og:image
export const sharedMetadata: Metadata = {
  title: "Noelle L'Amour",
  description: "Portfolio",
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
    type: "website",
    locale: "en_US",
    url: "noellelamour.vercel.app",
    title: "Noelle L'Amour",
    description: "Portfolio",
    siteName: "Noelle L'Amour",
  },
};

// export const sharedMetadataWithImage: Metadata = {
//   ...sharedMetadata,
//   openGraph: {
//     ...sharedMetadata.openGraph,
//     images: [
//       {
//         url: "https://noellelamour.vercel.app/images/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Noelle L'Amour",
//       },
//     ],
//   },
// };
