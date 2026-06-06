"use client";

import { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function FooterHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLSpanElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const year = new Date().getFullYear();

  useGSAP(
    () => {
      const inners = lineRefs.current.filter(Boolean);
      if (!containerRef.current || inners.length === 0) return;

      gsap.set(inners, {
        y: "110%",
        rotation: 6,
        opacity: 0,
        transformOrigin: "left center",
      });

      gsap.set(revealRef.current, { width: 0 });
      gsap.set(ctaRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({ paused: true });

      tl.to(inners, {
        y: "0%",
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.18,
      })
        .to(
          revealRef.current,
          {
            width: "clamp(5rem, 10vw, 16rem)",
            duration: 1,
            ease: "expo.out",
          },
          "-=0.5",
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4",
        );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        once: true,
        onEnter: () => tl.play(),
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
    >
      <h1 className="font-heading text-[clamp(3.5rem,6vw,18rem)] leading-[1.1] font-black tracking-wide">
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

      <div className="flex flex-col gap-2 lg:items-end lg:gap-4">
        <p className="text-background/50 max-w-xs text-sm tracking-[0.2em] uppercase lg:text-right">
          Open for select projects &amp; collaborations in {year}
        </p>
        <Link ref={ctaRef} href="mailto:hello@nabiel.dev">
          <Button className="cursor-pointer">Start a Project</Button>
        </Link>
      </div>
    </div>
  );
}
