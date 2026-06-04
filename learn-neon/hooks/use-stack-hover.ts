"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

export function useStackHover() {
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

  return {
    gridRef,
    indicatorRef,
    activeStack,
    moveIndicator,
    hideIndicator,
  };
}
