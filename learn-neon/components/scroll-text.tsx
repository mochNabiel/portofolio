import gsap from "gsap/all";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ScrollText() {
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!arrowRef.current) return;

    gsap.fromTo(
      arrowRef.current,
      {
        yPercent: -100,
      },
      {
        yPercent: 100,
        duration: 1.2,
        repeat: -1,
        ease: "power2.inOut",
      },
    );
  }, []);

  return (
    <div className="flex items-center gap-1">
      <div className="h-fit overflow-hidden">
        <ArrowDown ref={arrowRef} className="h-5 w-5" strokeWidth={1} />
      </div>

      <p className="animate-pulse">Scroll for Cool Things</p>
    </div>
  );
}
