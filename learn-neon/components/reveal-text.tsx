"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

interface RevealTextProps {
  lines: (string | React.ReactNode)[];
  className?: string;
  lineClassName?: string;
  start?: string;
  stagger?: number;
  duration?: number;
  ease?: string;
  once?: boolean;
  direction?: Direction;
  rotate?: number;
  distance?: string;
}

function getInitial(direction: Direction, distance: string, rotate: number) {
  return {
    x:
      direction === "left"
        ? `-${distance}`
        : direction === "right"
          ? distance
          : "0%",
    y:
      direction === "up"
        ? `-${distance}`
        : direction === "down"
          ? distance
          : "0%",
    rotation: rotate,
    opacity: 0,
  };
}

export default function RevealText({
  lines,
  className = "",
  lineClassName = "",
  start = "top 50%",
  stagger = 0.25,
  duration = 1.5,
  ease = "power4.out",
  once = true,
  direction = "down",
  rotate = 0,
  distance = "110%",
}: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const inners = lineRefs.current.filter(Boolean);
      if (!inners.length) return;

      const initial = getInitial(direction, distance, rotate);
      gsap.set(inners, {
        ...initial,
        transformOrigin: "left center",
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start,
        once,
        onEnter: () => {
          gsap.to(inners, {
            x: "0%",
            y: "0%",
            rotation: 0,
            opacity: 1,
            duration,
            ease,
            stagger,
          });
        },
      });
    },
    { scope: containerRef },
  );

  const needsClip = direction === "up" || direction === "down";

  return (
    <div ref={containerRef}>
      <h1 className={className}>
        {lines.map((line, i) => (
          <span
            key={i}
            className="block"
            style={needsClip ? { overflow: "hidden" } : undefined}
          >
            <span
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className={`block will-change-transform ${lineClassName}`}
            >
              {line}
            </span>
          </span>
        ))}
      </h1>
    </div>
  );
}
