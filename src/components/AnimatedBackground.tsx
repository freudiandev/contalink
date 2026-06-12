"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";

type Node = {
  startX: number;
  startY: number;
  angle: number;
  radius: number;
  x: number;
  y: number;
};

const NODE_COUNT = 14;
const CYCLE_SECONDS = 6;

export function AnimatedBackground() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: p5 | undefined;
    let cancelled = false;

    void import("p5").then(({ default: P5 }) => {
      if (cancelled || !host.current) return;

      instance = new P5((sketch) => {
        let nodes: Node[] = [];

        const createNodes = () => {
          sketch.randomSeed(42);
          nodes = Array.from({ length: NODE_COUNT }, (_, index) => ({
            startX: sketch.random(0.04, 0.96),
            startY: sketch.random(0.08, 0.92),
            angle: (sketch.TWO_PI / NODE_COUNT) * index,
            radius: sketch.random(0.09, 0.28),
            x: 0,
            y: 0,
          }));
        };

        sketch.setup = () => {
          const element = host.current;
          if (!element) return;
          sketch.pixelDensity(Math.min(window.devicePixelRatio || 1, 1.5));
          sketch.createCanvas(element.clientWidth, element.clientHeight).parent(element);
          sketch.frameRate(60);
          createNodes();
        };

        sketch.draw = () => {
          sketch.clear();

          const seconds = sketch.millis() / 1000;
          const cycle = (seconds % CYCLE_SECONDS) / CYCLE_SECONDS;
          const convergence = (1 - Math.cos(cycle * sketch.TWO_PI)) / 2;
          const centerX = sketch.width / 2;
          const centerY = sketch.height / 2;

          nodes.forEach((node, index) => {
            const orbit = node.angle + seconds * (index % 2 === 0 ? 0.18 : -0.14);
            const targetX = centerX + Math.cos(orbit) * sketch.width * node.radius;
            const targetY = centerY + Math.sin(orbit) * sketch.height * node.radius;
            const startX = node.startX * sketch.width;
            const startY = node.startY * sketch.height;

            node.x = sketch.lerp(startX, targetX, convergence);
            node.y = sketch.lerp(startY, targetY, convergence);
          });

          const connectionDistance = sketch.lerp(
            sketch.width * 0.11,
            sketch.width * 0.32,
            convergence,
          );

          for (let from = 0; from < nodes.length; from += 1) {
            for (let to = from + 1; to < nodes.length; to += 1) {
              const start = nodes[from];
              const end = nodes[to];
              const distance = sketch.dist(start.x, start.y, end.x, end.y);
              if (distance > connectionDistance) continue;

              const strength = 1 - distance / connectionDistance;
              sketch.stroke(212, 175, 55, 55 + strength * 120);
              sketch.strokeWeight(0.8 + strength * 0.7);
              sketch.line(start.x, start.y, end.x, end.y);
            }
          }

          nodes.forEach((node) => {
            sketch.noStroke();
            sketch.fill(245, 215, 110, 225);
            sketch.circle(node.x, node.y, 7);
          });
        };

        sketch.windowResized = () => {
          const element = host.current;
          if (!element) return;
          sketch.resizeCanvas(element.clientWidth, element.clientHeight);
        };
      }, host.current);
    });

    return () => {
      cancelled = true;
      instance?.remove();
    };
  }, []);

  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="p5-network" ref={host} />
    </div>
  );
}
