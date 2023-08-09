import { StaticImageData } from "next/image";
import otl from "@/public/otl.webp";
import bchs from "@/public/bchs.webp";
import gw2 from "@/public/gw2.webp";
import portfolio from "@/public/nl.webp";

interface Project {
  name: string;
  description: string;
  stack: string[];
  url: string;
  image: StaticImageData;
  imageAlt: string;
  select: boolean;
}

const projectList: Project[] = [
  {
    name: "GW2 Dark Mode Wiki",
    description: "Enables the built-in dark mode theme without requiring logging in.",
    stack: ["TypeScript", "Vite"],
    url: "https://addons.mozilla.org/en-US/firefox/addon/gw2-wiki-dark-mode/",
    image: gw2,
    imageAlt: "GW2 Dark Mode Wiki",
    select: true,
  },
  {
    name: "Portfolio",
    description: "This portfolio.",
    stack: ["React", "TypeScript", "Next.js"],
    url: "https://github.com/ellielle/ellielle.github.io",
    image: portfolio,
    imageAlt: "Noelle L'`Amour's portfolio",
    select: false,
  },
  {
    name: "VinceOTL",
    description: "A web app for a Twitch streamer to track his backlog progress.",
    stack: ["Vue.js", "Nuxt", "Vuetify", "FaunaDB"],
    url: "https://vinceotl.netlify.app",
    image: otl,
    imageAlt: "VinceOTL's front page",
    select: true,
  },
  {
    name: "Berkeley County Historical Society",
    description: "Historical Society for Berkeley County, WV.",
    stack: ["WordPress"],
    url: "https://www.historicberkeley.org/",
    image: bchs,
    imageAlt: "Berkeley County Historical Society's website.",
    select: false,
  },
];

export { projectList };
export type { Project };
