import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
// import BlogSection from "@/components/BlogSection";
// import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="overflow-y-auto">
      <section className="min-h-screen"><HeroSection /></section>
      <section className="min-h-screen"><AboutSection /></section>
      <section className="min-h-screen"><SkillsSection /></section>
      <section className="min-h-screen"><ProjectsSection /></section>
      {/* <section className="min-h-screen"><BlogSection /></section> */}
      {/* <section className="min-h-screen"><ExperienceSection /></section> */}
      <section className="min-h-screen"><ContactSection /></section>
    </div>
  );
};

export default Index;
