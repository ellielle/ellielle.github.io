import { Vue } from "./Tech/Vue";
import { Next } from "./Tech/Next";
import { Nuxt } from "./Tech/Nuxt";
import { React } from "./Tech/React";
import { Vercel } from "./Tech/Vercel";
import { TypeScript } from "./Tech/TypeScript";
import { Email } from "./Social/Email";
import { LinkedIn } from "./Social/LinkedIn";
import { GitHub } from "./Social/GitHub";
import { Tailwind } from "./Tech/Tailwind";
import { Jest } from "./Tech/Jest";
import { Nodejs } from "./Tech/Nodejs";
import { Supabase } from "./Tech/Supabase";

export const techStacks = [
  { Component: TypeScript, url: "https://www.typescriptlang.org/", alt: "TypeScript" },
  { Component: Vue, url: "https://vuejs.org/", alt: "Vue" },
  { Component: React, url: "https://reactjs.org/", alt: "React" },
  { Component: Tailwind, url: "https://tailwindcss.com/", alt: "Tailwind CSS" },
  { Component: Nuxt, url: "https://nuxt.com/", alt: "Nuxt" },
  { Component: Next, url: "https://nextjs.org/", alt: "Next" },
  { Component: Jest, url: "https://jestjs.io/", alt: "Jest" },
  { Component: Nodejs, url: "https://nodejs.org/en", alt: "Node.js" },
  { Component: Supabase, url: "https://supabase.com/", alt: "Supabase" },
  { Component: Vercel, url: "https://vercel.com/", alt: "Vercel" },
].map(({ Component, url, alt }, index) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    aria-label={alt}
    key={`${Component.name}-${index}`}
  >
    <Component key={`${Component.name}-${index}`} />
  </a>
));

export const socialMedia = [
  { Component: Email, url: "mailto:noelle.a.lamour@gmail.com", alt: "Email" },
  { Component: LinkedIn, url: "https://www.linkedin.com/in/nlamour/", alt: "LinkedIn" },
  { Component: GitHub, url: "https://github.com/ellielle", alt: "GitHub" },
].map(({ Component, url, alt }, index) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    aria-label={alt}
    key={`${Component.name}-${index}`}
  >
    <Component />
  </a>
));
