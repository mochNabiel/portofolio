"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

import MorphText from "@/components/morph-text";
import { mainStacks, secondaryStacks } from "@/data/tech-stack";
import TechItem from "./tech-item";

export default function TechStackSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const [activeStack, setActiveStack] = useState<string | null>(null);

  const moveIndicator = (
    e: React.MouseEvent<HTMLDivElement>,
    stackName: string,
  ) => {
    if (!gridRef.current || !indicatorRef.current) return;

    const itemRect = e.currentTarget.getBoundingClientRect();
    const gridRect = gridRef.current.getBoundingClientRect();

    setActiveStack(stackName);

    gsap.to(indicatorRef.current, {
      x: itemRect.left - gridRect.left,
      y: itemRect.top - gridRect.top,
      width: itemRect.width,
      height: itemRect.height,
      opacity: 1,
      duration: 0.55,
      ease: "expo.out",
    });
  };

  const hideIndicator = () => {
    setActiveStack(null);

    gsap.to(indicatorRef.current, {
      opacity: 0,
      duration: 0.2,
    });
  };

  return (
    <section className="flex w-full flex-col items-center p-4 lg:p-8">
      <div className="w-full py-24">
        <MorphText
          text="MODERN"
          className="font-heading text-primary text-[16vw] leading-none uppercase"
        />

        <MorphText
          text="TECH STACK"
          className="font-heading text-[16vw] leading-none uppercase"
        />
      </div>

      <div className="w-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative h-2 w-2">
            <span className="bg-primary absolute inset-0 animate-ping rounded-full" />
            <span className="bg-primary absolute inset-0 rounded-full" />
          </div>
          <h2 className="font-medium tracking-[0.2em] uppercase">
            Technologies I Work With
          </h2>
        </div>

        <div
          ref={gridRef}
          className="bg-border relative hidden flex-col gap-px lg:flex"
          onMouseLeave={hideIndicator}
        >
          <div
            ref={indicatorRef}
            className="bg-foreground pointer-events-none absolute top-0 left-0 z-10 opacity-0"
          />

          <div className="grid grid-cols-3 gap-px">
            {mainStacks.map((stack) => (
              <div
                key={stack.name}
                className="bg-background relative"
                onMouseEnter={(e) => moveIndicator(e, stack.name)}
              >
                <TechItem
                  stack={stack}
                  aspect="video"
                  active={activeStack === stack.name}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-px">
            {secondaryStacks.map((stack) => (
              <div
                key={stack.name}
                className="bg-background relative"
                onMouseEnter={(e) => moveIndicator(e, stack.name)}
              >
                <TechItem stack={stack} active={activeStack === stack.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="bg-border grid grid-cols-2 gap-px lg:hidden">
          {[...mainStacks, ...secondaryStacks].map((stack) => (
            <div key={stack.name} className="bg-background">
              <TechItem stack={stack} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
