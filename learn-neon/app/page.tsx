import WorkSection from "@/app/_components/footer-section";
import HeroSection from "@/app/_components/hero-section";
import Header from "@/app/_components/header";
import TechStackSection from "./_components/tech-stack-section";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <TechStackSection />
        <WorkSection />
      </main>
    </div>
  );
}
