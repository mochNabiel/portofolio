import { ITechStack } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechItemProps {
  stack: ITechStack;
  active?: boolean;
  aspect?: "square" | "video";
}

export default function TechItem({
  stack,
  active,
  aspect = "square",
}: TechItemProps) {
  return (
    <Tooltip delayDuration={100}>
      <TooltipTrigger asChild>
        <Link
          href={stack.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative z-20 flex items-center justify-center",
            aspect === "video" ? "aspect-video" : "aspect-square",
          )}
        >
          <Image
            src={stack.src}
            alt={stack.name}
            width={300}
            height={300}
            style={{
              height: `${stack.height}px`,
              width: "auto",
            }}
            className={cn(
              "object-contain transition-all duration-300",
              active && "invert",
            )}
          />
        </Link>
      </TooltipTrigger>

      <TooltipContent
        side="top"
        sideOffset={12}
        className="rounded-none border px-3 py-1.5 text-xs uppercase"
      >
        {stack.name}
      </TooltipContent>
    </Tooltip>
  );
}
