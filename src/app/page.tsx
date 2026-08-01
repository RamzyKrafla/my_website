import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { WorkingNotes } from "@/components/WorkingNotes";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CredibilityStrip />
      <SelectedWork />
      <Experience />
      <Education />
      <Projects />
      <Publications />
      <WorkingNotes />
      <Skills />
      <Contact />
    </main>
  );
}
