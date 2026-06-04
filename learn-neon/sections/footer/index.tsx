"use client";

import { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const inners = lineRefs.current.filter(Boolean);
      if (!revealRef.current || inners.length === 0) return;

      gsap.set(inners, {
        y: "110%",
        rotation: 6,
        opacity: 0,
        transformOrigin: "left center",
      });

      gsap.set(revealRef.current, {
        width: 0,
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(inners, {
        y: "0%",
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.18,
      });

      tl.to(
        revealRef.current,
        {
          width: "14vw",
          duration: 2,
          ease: "expo.out",
        },
        "-=0.5",
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        once: true,
        onEnter: () => tl.play(),
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-foreground text-background min-h-screen px-4 py-8 lg:px-8"
    >
      <h1 className="font-heading text-[clamp(3.5rem,9vw,20rem)] leading-[1.1] font-black tracking-wide">
        <span className="block overflow-hidden">
          <span
            ref={(el) => {
              lineRefs.current[0] = el;
            }}
            className="block will-change-transform"
          >
            LET&apos;S WORK
          </span>
        </span>

        <span className="block overflow-hidden">
          <span
            ref={(el) => {
              lineRefs.current[1] = el;
            }}
            className="flex items-center gap-3 will-change-transform"
          >
            <span
              ref={revealRef}
              className="bg-primary inline-flex h-[0.85em] w-0 shrink-0 items-center justify-center overflow-hidden rounded-lg"
            >
              <DotLottieReact
                src="/lottie/work-together.lottie"
                loop
                autoplay
                className="object-contain"
              />
            </span>
            TOGETHER
          </span>
        </span>
      </h1>
    </section>
  );
}
