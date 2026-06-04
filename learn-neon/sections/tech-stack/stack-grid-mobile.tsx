import { mainStacks, secondaryStacks } from "@/data/tech-stack";

import TechItem from "./tech-item";

export default function StackGridMobile() {
  return (
    <div className="bg-border grid grid-cols-2 gap-px lg:hidden">
      {[...mainStacks, ...secondaryStacks].map((stack) => (
        <div key={stack.name} className="bg-background">
          <TechItem stack={stack} />
        </div>
      ))}
    </div>
  );
}
