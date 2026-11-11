import { HeroSection } from "@/components/ui/HeroSection";
import { Intro } from "@/components/sections/Intro";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Updates } from "@/components/sections/Updates";

export default function Home() {
  return (
    <main className="relative bg-[#05050f] min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
      <HeroSection />

      <div className="relative z-10 pt-[100vh]">
        <Intro />
        <Experience />
        <Projects />
        <Achievements />
        <Updates />
        <Skills />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
