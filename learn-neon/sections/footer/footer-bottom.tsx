"use client";

import Image from "next/image";
import AvailabilityStatus from "../hero/availability-status";
import { Separator } from "@/components/ui/separator";

export default function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
            <Image
              src="/icons/logo-black.svg"
              alt="Nabiel Logo"
              width={80}
              height={80}
              className="h-6 w-6"
            />
          </div>
          <div className="flex flex-col leading-snug">
            <span className="text-background text-xl font-bold uppercase">
              Mochammad Nabiel
            </span>
            <span className="text-primary text-xs tracking-widest uppercase">
              Fullstack Developer
            </span>
          </div>
        </div>
        <p className="text-muted-foreground max-w-xs text-xs leading-relaxed">
          Based in Surakarta, Indonesia — building modern web experiences for
          brands, startups, and ambitious ideas.
        </p>
      </div>

      <Separator className="bg-background/10 lg:hidden " />

      <div className="flex flex-col gap-2 lg:items-end">
        <AvailabilityStatus className="text-xs" />

        <p className="text-background/30 text-xs tracking-widest uppercase">
          &copy; {year} Mochammad Nabiel. All rights reserved.
        </p>
      </div>
    </div>
  );
}
