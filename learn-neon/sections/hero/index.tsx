"use client";

import { useRef } from "react";

import AvailabilityStatus from "@/sections/hero/availability-status";
import RevealText from "@/components/reveal-text";
import FloatingVideo from "@/sections/hero/floating-video";
import MobileVideo from "./mobile-video";
import CurrentTime from "./current-time";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative mx-auto flex min-h-dvh w-full cursor-default flex-col items-center justify-center gap-4 overflow-hidden px-4 text-center lg:px-8"
    >
      {/* Floating video desktop */}
      <FloatingVideo src="/videos/hero-video.mp4" containerRef={heroRef} />

      {/* Availability Status Mobile */}
      <AvailabilityStatus className="flex lg:hidden" />

      {/* Mobile video */}
      <MobileVideo src="/videos/hero-video.mp4" />

      <RevealText
        lines={[
          "I Build Digital",
          "Experiences",
          <>
            That <span className="text-primary">Matter.</span>
          </>,
        ]}
        className="font-heading text-[clamp(3.5rem,9vw,20rem)] leading-none uppercase"
        direction="down"
        start="top bottom"
        rotate={3}
      />

      <div className="absolute bottom-4 hidden w-full items-center justify-between px-8 text-sm font-extralight uppercase lg:flex">
        <AvailabilityStatus />
        <CurrentTime />
      </div>
    </section>
  );
}
