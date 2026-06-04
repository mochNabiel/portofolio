"use client";

import { mainStacks, secondaryStacks } from "@/data/tech-stack";
import TechItem from "./tech-item";
import { useStackHover } from "@/hooks/use-stack-hover";

export default function StackGridDesktop() {
  const { gridRef, indicatorRef, activeStack, moveIndicator, hideIndicator } =
    useStackHover();

  return (
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
            className="bg-background"
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
            className="bg-background"
            onMouseEnter={(e) => moveIndicator(e, stack.name)}
          >
            <TechItem stack={stack} active={activeStack === stack.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
