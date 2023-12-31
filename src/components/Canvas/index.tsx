"use client";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { particleOptions } from "@/src/models/particles";

export default function Background() {
  const particleInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="bg-stars"
      init={particleInit}
      loaded={particlesLoaded}
      options={particleOptions}
      className="hidden sm:contents"
      canvasClassName="background-animation"
    />
  );
}
