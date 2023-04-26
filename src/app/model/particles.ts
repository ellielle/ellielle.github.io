import type { ISourceOptions } from "tsparticles-engine";

export const particleOptions: ISourceOptions = {
  id: "bg-stars",
  detectRetina: false,
  delay: 1,
  backgroundMode: {
    enable: true,
    zIndex: -1,
  },
  fpsLimit: 30,
  interactivity: {
    detectsOn: "window",
    events: {
      resize: false,
    },
  },
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
