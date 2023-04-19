import { Vue } from "./Vue";
import { Next } from "./Next";
import { Nuxt } from "./Nuxt";
import { React } from "./React";
import { Netlify } from "./Netlify";
import { Vercel } from "./Vercel";
import { TypeScript } from "./TypeScript";
// import { Discord } from "./Social/Discord";
import { Email } from "./Social/Email";
import { LinkedIn } from "./Social/LinkedIn";
// import { Twitter } from "./Social/Twitter";
import { GitHub } from "./Social/GitHub";

export const techStacks = [TypeScript, Vue, Nuxt, Netlify, React, Next, Vercel].map(
  (Component, index) => <Component key={`${Component.name}-${index}`} />
);

export const socialMedia = [Email, LinkedIn, GitHub].map((Component, index) => (
  <Component key={`${Component.name}-${index}`} />
));
