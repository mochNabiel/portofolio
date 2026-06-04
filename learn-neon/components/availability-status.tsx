"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const messages = [
  "Open for Opportunities",
  "Available for Freelance Work",
  "Open to New Collaborations",
  "Available for Hire",
];

export default function StatusText({ className }: { className?: string }) {
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

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="overflow-hidden">
        <span ref={textRef} className="block text-sm font-light uppercase">
          {messages[index]}
        </span>
      </div>
      <div className="relative h-1.5 w-1.5">
        <span className="bg-primary absolute inset-0 animate-ping rounded-full" />
        <span className="bg-primary absolute inset-0 rounded-full" />
      </div>
    </div>
  );
}
