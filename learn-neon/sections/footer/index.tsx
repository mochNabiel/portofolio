"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterHeadline from "./footer-headline";
import FooterNav from "./footer-nav";
import FooterBottom from "./footer-bottom";
import { Separator } from "@/components/ui/separator";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <footer
      ref={sectionRef}
      className="bg-foreground text-background min-h-dvh space-y-8 px-4 py-8 lg:px-8"
    >
      <FooterHeadline />
      <Separator className="bg-background/10" />
      <FooterNav />
      <Separator className="bg-background/10" />
      <FooterBottom />
    </footer>
  );
}
