import { Vue } from "./Tech/Vue";
import { CICD } from "./Tech/CICD";
import { Git } from "./Tech/Git";
import { React } from "./Tech/React";
import { Python } from "./Tech/Python";
import { TypeScript } from "./Tech/TypeScript";
import { Email } from "./Social/Email";
import { LinkedIn } from "./Social/LinkedIn";
import { GitHub } from "./Social/GitHub";
import { Tailwind } from "./Tech/Tailwind";
import { Docker} from "./Tech/Docker";
import { Nodejs } from "./Tech/Nodejs";
import { Go } from "./Tech/Go";

export const techStacks = [
  { Component: Go, url: "https://go.dev/", alt: "Go" },
  { Component: Python, url: "https://www.python.org/", alt: "Python" },
  { Component: TypeScript, url: "https://www.typescriptlang.org/", alt: "TypeScript" },
  { Component: Vue, url: "https://vuejs.org/", alt: "Vue" },
  { Component: React, url: "https://reactjs.org/", alt: "React" },
  { Component: Tailwind, url: "https://tailwindcss.com/", alt: "Tailwind CSS" },
  { Component: Git, url: "https://www.git-scm.com/", alt: "Git"},
  { Component: CICD, url: "https://docs.github.com/en/actions", alt: "CICD" },
    { Component: Docker, url: "https://www.docker.com/", alt: "Docker" },
  { Component: Nodejs, url: "https://nodejs.org/en", alt: "Node.js" },
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
