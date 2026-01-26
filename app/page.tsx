import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import Achievements from "@/components/main/achievements";
import About from "@/components/main/about";
import SmartTalk from "@/components/main/smart-talk";
import Contact from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <SmartTalk />
        <Contact />
      </div>
    </main>
  );
}
