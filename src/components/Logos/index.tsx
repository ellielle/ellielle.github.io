import { Vue } from "./Vue";
import { Next } from "./Next";
import { Nuxt } from "./Nuxt";
import { React } from "./React";
import { Netlify } from "./Netlify";
import { Vercel } from "./Vercel";
import { TypeScript } from "./TypeScript";
import { Discord } from "./Social/Discord";
import { Email } from "./Social/Email";
import { LinkedIn } from "./Social/LinkedIn";
import { Twitter } from "./Social/Twitter";
import { Github } from "./Social/Github";

export const techStacks = [
  <TypeScript key="1" />,
  <Vue key="2" />,
  <Nuxt key="3" />,
  <Netlify key="4" />,
  <React key="5" />,
  <Next key="6" />,
  <Vercel key="7" />,
];
export const socialMedia = { Discord, Email, LinkedIn, Twitter, Github };
