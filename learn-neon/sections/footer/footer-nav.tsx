"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const navGroups = [
  {
    heading: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/#work" },
      { label: "About", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "GitHub", href: "https://github.com/nabiel", external: true },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/nabiel",
        external: true,
      },
      {
        label: "Dribbble",
        href: "https://dribbble.com/nabiel",
        external: true,
      },
      { label: "Twitter / X", href: "https://x.com/nabiel", external: true },
      { label: "Read.cv", href: "https://read.cv/nabiel", external: true },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Case Studies", href: "/work" },
      { label: "Playground", href: "/playground" },
      { label: "Blog", href: "/blog" },
      { label: "Resume", href: "/resume.pdf", external: true },
    ],
  },
];

export default function FooterNav() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const groups = containerRef.current?.querySelectorAll(".nav-group");
      if (!groups?.length) return;

      gsap.set(groups, { opacity: 0, y: 24 });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(groups, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
          });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="grid grid-cols-2 gap-8 lg:grid-cols-3">
      {navGroups.map(({ heading, links }) => (
        <div key={heading} className="nav-group flex flex-col gap-4">
          <p className="text-background/40 text-[0.65rem] tracking-[0.2em] uppercase">
            {heading}
          </p>
          <ul className="flex flex-col gap-2.5">
            {links.map(({ label, href, external }) => (
              <li key={label}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-background/70 hover:text-primary inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                  >
                    {label}
                    <svg
                      className="h-2.5 w-2.5 translate-x-0 -translate-y-px opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M2 8L8 2M4 2h4v4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="text-background/70 hover:text-primary text-sm font-medium transition-colors duration-200"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
