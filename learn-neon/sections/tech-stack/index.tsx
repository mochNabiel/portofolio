import MorphText from "@/components/morph-text";

import PingText from "@/components/ping-text";

import StackGridDesktop from "./stack-grid-desktop";
import StackGridMobile from "./stack-grid-mobile";
import OtherStackMarquee from "./other-stack-marquee";

export default function TechStackSection() {
  return (
    <section className="flex w-full flex-col items-center p-4 lg:p-8">
      <div className="w-full py-24">
        <MorphText
          text="MODERN"
          className="font-heading text-primary text-[16vw] leading-none uppercase"
        />

        <MorphText
          text="TECH STACK"
          className="font-heading text-[16vw] leading-none uppercase"
        />
      </div>

      <div className="w-full mb-16">
        <PingText>Technologies I Work With</PingText>

        <StackGridDesktop />
        <StackGridMobile />

        <OtherStackMarquee />
      </div>
    </section>
  );
}
