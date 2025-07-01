import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
// import BlogSection from "@/components/BlogSection";
// import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <div>
      <div className="bg-yellow-100 text-yellow-900 text-center py-2 px-4 rounded-b-md shadow-md text-sm font-medium">
        Disclaimer: This website is still being built. Some of the information is mock data and subject to change.
      </div>
      <div className="overflow-y-auto">
        <section className="min-h-screen"><HeroSection /></section>
        <section className="min-h-screen"><AboutSection /></section>
        <section className="min-h-screen"><SkillsSection /></section>
        <section className="min-h-screen"><ProjectsSection /></section>
        {/* <section className="min-h-screen"><BlogSection /></section> */}
        {/* <section className="min-h-screen"><ExperienceSection /></section> */}
        <section className="min-h-screen"><ContactSection /></section>
      </div>
    </div>
  );
}
