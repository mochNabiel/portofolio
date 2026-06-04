"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface FloatingVideoProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export default function FloatingVideo({
  containerRef,
}: FloatingVideoProps) {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    gsap.set(video, {
      opacity: 0,
      scale: 0.8,
    });

    const xTo = gsap.quickTo(video, "x", {
      duration: 0.5,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(video, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    const handleEnter = () => {
      gsap.to(video, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
      });
    };

    const handleLeave = () => {
      gsap.to(video, {
        opacity: 0,
        scale: 0.8,
        duration: 0.25,
      });
    };

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      const x = e.clientX - rect.left + 20;
      const y = e.clientY - rect.top - 100;

      xTo(x);
      yTo(y);
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);
    container.addEventListener("mousemove", handleMove);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
      container.removeEventListener("mousemove", handleMove);
    };
  }, [containerRef]);

  return (
    <div
      ref={videoRef}
      className="
        pointer-events-none
        absolute
        top-0
        left-0
        z-20
        hidden
        lg:block
      "
    >
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            h-[240px]
            w-[380px]
            object-cover
          "
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}