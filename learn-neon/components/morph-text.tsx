"use client";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface MorphTextProps {
  text: string;
  className?: string;
  start?: string;
  end?: string;
}

export default function MorphText({
  text,
  className = "",
  start = "top 70%",
  end = "bottom 50%",
}: MorphTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const completionPoints = useMemo(
    () =>
      text.split("").map(() => {
        return gsap.utils.random(0.15, 1, 0.1);
      }),
    [text],
  );

  useGSAP(
    () => {
      const chars = gsap.utils.toArray<HTMLElement>(
        ".morph-char",
        containerRef.current,
      );

      const fronts = chars.map((char) =>
        char.querySelector<HTMLElement>(".char-front"),
      );

      const backs = chars.map((char) =>
        char.querySelector<HTMLElement>(".char-back"),
      );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start,
        end,
        scrub: true,

        onUpdate: (self) => {
          const globalProgress = self.progress;

          chars.forEach((_, index) => {
            const front = fronts[index];
            const back = backs[index];

            if (!front || !back) return;

            const completion = completionPoints[index];

            const localProgress = Math.min(globalProgress / completion, 1);

            gsap.set(front, {
              yPercent: localProgress * 100,
            });

            gsap.set(back, {
              yPercent: -100 + localProgress * 100,
            });
          });
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [completionPoints],
    },
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <span key={index} className="w-[0.28em]" />;
        }

        return (
          <span
            key={index}
            className="morph-char relative inline-block overflow-hidden"
          >
            {/* layer atas */}
            <span className="char-front block">{char}</span>

            {/* layer bawah */}
            <span className="char-back absolute inset-0">{char}</span>
          </span>
        );
      })}
    </div>
  );
}
