import { Vue } from "./Tech/Vue";
import { Next } from "./Tech/Next";
import { Nuxt } from "./Tech/Nuxt";
import { React } from "./Tech/React";
import { Netlify } from "./Tech/Netlify";
import { Vercel } from "./Tech/Vercel";
import { TypeScript } from "./Tech/TypeScript";
import { Email } from "./Social/Email";
import { LinkedIn } from "./Social/LinkedIn";
import { GitHub } from "./Social/GitHub";
import { Fragment } from "react";
// import { Discord } from "./Social/Discord";
// import { Twitter } from "./Social/Twitter";

export const techStacks = [TypeScript, Vue, Nuxt, Netlify, React, Next, Vercel].map(
  (Component, index) => <Component key={`${Component.name}-${index}`} />
);

export const socialMedia = [
  { Component: Email, url: "mail" },
  { Component: LinkedIn, url: "https://www.linkedin.com/in/nlamour/" },
  { Component: GitHub, url: "https://github.com/ellielle" },
  // { Component: Discord, url: "" },
  // { Component: Twitter, url: "" },
].map(({ Component, url }, index) => (
  <Fragment key={`${Component.name}-${index}`}>
    <Component />
  </Fragment>
));
