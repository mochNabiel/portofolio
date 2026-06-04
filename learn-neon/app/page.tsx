import WorkSection from "@/sections/footer";
import HeroSection from "@/sections/hero";
import Header from "@/sections/header";
import TechStackSection from "@/sections/tech-stack";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <WorkSection />
        <TechStackSection />
      </main>
    </div>
  );
}
