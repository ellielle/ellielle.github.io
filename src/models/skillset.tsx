import { StaticImageData } from "next/image";
import otl from "@/public/otl.png";
import bchs from "@/public/bchs.png";

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
  // {
  //   name: "Templio",
  //   description: "Easy framework starter templates.",
  //   stack: ["Node.js", "Vue.js", "Nuxt", "React", "Next.js"],
  //   url: "https://github.com/ellielle/templio",
  //   image: otl,
  //   imageAlt: "Templio's github page",
  //   select: true,
  // },
];

const skillSet = [
  { name: "JavaScript ES6", url: "" },
  { name: "TypeScript", url: "" },
  { name: "Vue.js", url: "" },
  { name: "Nuxt", url: "" },
  { name: "Vite", url: "" },
  { name: "React", url: "" },
  { name: "Next.js", url: "" },
  { name: "Jest", url: "" },
  { name: "Vitest", url: "" },
  { name: "MSW", url: "" },
  { name: "Ruby", url: "" },
  { name: "Rails", url: "" },
  { name: "GraphQL", url: "" },
  { name: "FaunaDB", url: "" },
  { name: "MongoDB", url: "" },
  { name: "Jamstack", url: "" },
  { name: "Netlify", url: "" },
  { name: "Vercel", url: "" },
  { name: "Prisma", url: "" },
];

export { skillSet, projectList };
export type { Project };
