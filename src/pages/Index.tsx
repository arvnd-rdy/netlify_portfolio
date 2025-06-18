import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start h-screen sticky top-0 z-0"><HeroSection /></section>
      <section className="snap-start h-screen sticky top-0 z-10"><AboutSection /></section>
      <section className="snap-start h-screen sticky top-0 z-20"><SkillsSection /></section>
      <section className="snap-start h-screen sticky top-0 z-30"><ProjectsSection /></section>
      <section className="snap-start h-screen sticky top-0 z-40"><ExperienceSection /></section>
      <section className="snap-start h-screen sticky top-0 z-50"><ContactSection /></section>
    </div>
  );
};

export default Index;
