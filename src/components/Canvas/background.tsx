"use client";

import { useRef, useEffect } from "react";
import { Particle } from "../../app/model/particle";

const createParticle = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const angle = Math.random() * Math.PI * 2;
  const sign = Math.random() > 0.5 ? 1 : -1;
  const radius = 1 + Math.random() * 5;
  const rotationRadius = window.innerWidth / 3 + Math.random() * 100;
  return new Particle(
    screenWidth,
    screenHeight,
    angle,
    sign,
    radius,
    rotationRadius,
    screenWidth / 2,
    screenHeight / 2
  );
};

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { current: canvas } = canvasRef;

    const count = 50;
    let particles: Particle[] = [];
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
          particle.draw(ctx);
          particle.update();
        });

        window.requestAnimationFrame(animate);
      };
      animate();
    }
  });

  return <canvas ref={canvasRef} />;
};

export default Background;
