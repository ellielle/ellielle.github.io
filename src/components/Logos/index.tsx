import { Vue } from "./Tech/Vue";
import { Next } from "./Tech/Next";
import { Nuxt } from "./Tech/Nuxt";
import { React } from "./Tech/React";
import { Netlify } from "./Tech/Netlify";
import { Vercel } from "./Tech/Vercel";
import { TypeScript } from "./Tech/TypeScript";
import { Prisma } from "./Tech/Prisma";
import { Email } from "./Social/Email";
import { LinkedIn } from "./Social/LinkedIn";
import { GitHub } from "./Social/GitHub";
import { Tailwind } from "./Tech/Tailwind";
import { Jest } from "./Tech/Jest";
// import { Discord } from "./Social/Discord";
// import { Twitter } from "./Social/Twitter";

export const techStacks = [
  TypeScript,
  Vue,
  React,
  Tailwind,
  Nuxt,
  Next,
  Jest,
  Prisma,
  Netlify,
  Vercel,
].map((Component, index) => <Component key={`${Component.name}-${index}`} />);

export const socialMedia = [
  { Component: Email, url: "mailto:noelle.a.lamour@gmail.com" },
  { Component: LinkedIn, url: "https://www.linkedin.com/in/nlamour/" },
  { Component: GitHub, url: "https://github.com/ellielle" },
  // { Component: Discord, url: "" },
  // { Component: Twitter, url: "" },
].map(({ Component, url }, index) => (
  <a href={url} target="_blank" rel="noreferrer" key={`${Component.name}-${index}`}>
    <Component />
  </a>
));
