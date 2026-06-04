"use client";

import Image from "next/image";
import { otherStacks as stacks } from "@/data/tech-stack";

export default function OtherStackMarquee() {
  const items = [...stacks, ...stacks];

  return (
    <div className="relative overflow-hidden border-y">
      <div className="animate-marquee flex w-max">
        {items.map((stack, index) => (
          <div
            key={`${stack.name}-${index}`}
            className="flex items-center gap-3 px-8 py-6"
          >
            <Image
              src={stack.src || "#"}
              alt={stack.name || ""}
              width={28}
              height={28}
              className="h-7 w-auto object-contain"
            />

            <span className="font-mono text-sm uppercase">{stack.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
