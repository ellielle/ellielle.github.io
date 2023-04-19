import { Vue } from "./Vue";
import { Next } from "./Next";
import { Nuxt } from "./Nuxt";
import { React } from "./React";
import { Netlify } from "./Netlify";
import { Vercel } from "./Vercel";
import { TypeScript } from "./TypeScript";
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
].map(({ Component, url }, index) => (
  <Fragment key={`${Component.name}-${index}`}>
    <Component />
  </Fragment>
));
