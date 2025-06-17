import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative">
      {/* Hero Section - Fixed at bottom layer */}
      <div className="fixed top-0 left-0 right-0 z-0">
        <HeroSection />
      </div>
      
      {/* Spacer to push content down */}
      <div className="h-screen"></div>
      
      {/* Content Sections - Each becomes sticky when it reaches top */}
      <div className="relative">
        {/* About Section */}
        <div className="sticky top-0 z-10">
          <AboutSection />
        </div>
        
        {/* Skills Section */}
        <div className="sticky top-0 z-20">
          <SkillsSection />
        </div>
        
        {/* Projects Section */}
        <div className="sticky top-0 z-30">
          <ProjectsSection />
        </div>
        
        {/* Experience Section */}
        <div className="sticky top-0 z-40">
          <ExperienceSection />
        </div>
        
        {/* Contact Section */}
        <div className="sticky top-0 z-50">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
