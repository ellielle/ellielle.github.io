import type { ISourceOptions } from "tsparticles-engine";

export const particleOptions: ISourceOptions = {
  // TODO rogue canvas element from tsparticles is causing layout shift
  // TODO figure out how to optimize and/or fix
  // TODO currently the element is pushed to the bottom. Maybe make absolute?
  id: "bg-stars",
  detectRetina: false,
  delay: 2,
  backgroundMode: {
    enable: true,
    zIndex: -1,
  },
  fpsLimit: 30,
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: false,
    },
  },
  pauseOnOutsideViewport: true,
  particles: {
    color: {
      value: "#fff",
    },
    number: {
      density: {
        enable: true,
        area: 1080,
      },
      limit: 0,
      value: 400,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 0.5,
        sync: false,
        startValue: "min",
      },
      random: {
        enable: true,
        minimumValue: 0.05,
      },
      value: 1,
    },
    zIndex: {
      value: -1,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 0.5,
      },
      value: 1,
    },
  },
};
