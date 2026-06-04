"use client";

import { useRef } from "react";

import AvailabilityStatus from "@/components/availability-status";
import RevealText from "@/components/reveal-text";
import ScrollText from "@/components/scroll-text";
import FloatingVideo from "@/components/floating-video";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative mx-auto flex min-h-dvh w-full flex-col items-center justify-center gap-4 overflow-hidden px-4 text-center lg:px-8"
    >
      {/* Floating video desktop */}
      <FloatingVideo containerRef={heroRef} />

      {/* Availability Status Mobile */}
      <AvailabilityStatus className="flex lg:hidden" />

      {/* Mobile video */}
      <div className="mb-8 flex w-full lg:hidden">
        <div className="overflow-hidden rounded-3xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="aspect-video w-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <h1 className="relative z-10">
        <RevealText
          lines={[
            "I Build Digital",
            "Experiences",
            <>
              That <span className="text-primary">Matter.</span>
            </>,
          ]}
          className="font-heading text-[clamp(4rem,9vw,20rem)] leading-none uppercase"
          direction="down"
          start="top bottom"
          rotate={3}
        />
      </h1>

      <div className="absolute bottom-4 hidden w-full items-center justify-between px-8 text-sm font-extralight uppercase lg:flex">
        <ScrollText />
        <AvailabilityStatus />
      </div>
    </section>
  );
}
