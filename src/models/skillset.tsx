import { StaticImageData } from "next/image";
import otl from "@/public/otl.png";
import bchs from "@/public/bchs.png";
import gw2 from "@/public/gw2.png";

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
    name: "VinceOTL",
    description: "A web app for a Twitch streamer to track his backlog progress.",
    stack: ["Nuxt", "Vue.js", "Vuetify", "Netlify", "FaunaDB"],
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
    select: true,
  },
  {
    name: "GW2 Dark Mode Wiki",
    description: "Enables the built-in dark mode theme without requiring logging in.",
    stack: ["Node.js"],
    url: "https://github.com/ellielle/gw2-wiki-dark",
    image: gw2,
    imageAlt: "GW2 Dark Mode Wiki",
    select: true,
  },
];

export { projectList };
export type { Project };
