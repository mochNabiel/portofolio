import { cn } from "@/lib/utils";

interface MobileVideoProps {
  src: string;
  className?: string;
}

export default function MobileVideo({ src, className }: MobileVideoProps) {
  return (
    <div className="mb-8 flex w-full lg:hidden">
      <div className="overflow-hidden rounded-3xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={cn("aspect-video w-full object-cover", className)}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
