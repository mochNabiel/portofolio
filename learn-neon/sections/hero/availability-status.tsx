"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { messages } from "@/data/availability-status-msg";

interface AvailabilityStatusProps {
  className?: string;
  dotPosition?: "left" | "right";
}

export default function AvailabilityStatus({
  className,
  dotPosition = "left",
}: AvailabilityStatusProps) {
  const [index, setIndex] = useState(0);

  const INTERVAL = 2500;
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = textRef.current;
      if (!el) return;

      const nextIndex = (index + 1) % messages.length;

      const tl = gsap.timeline();

      tl.to(el, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      })
        .add(() => {
          setIndex(nextIndex);
        })
        .set(el, {
          y: 20,
        })
        .to(el, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
        });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [index]);

  const Dot = (
    <div className="relative h-1.5 w-1.5 shrink-0">
      <span className="bg-primary absolute inset-0 animate-ping rounded-full" />
      <span className="bg-primary absolute inset-0 rounded-full" />
    </div>
  );

  return (
    <div
      className={cn(
        "flex items-center gap-3",
        dotPosition === "right" && "flex-row-reverse",
      )}
    >
      {Dot}

      <div className="overflow-hidden">
        <span ref={textRef} className={cn("block text-sm font-light uppercase", className)}>
          {messages[index]}
        </span>
      </div>
    </div>
  );
}
