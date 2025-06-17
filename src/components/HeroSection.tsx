
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8 text-sm text-gray-600">
        <div>Full Stack & AI/ML Developer</div>
        <div className="flex space-x-8">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <div className="space-y-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none tracking-tight">
              ARVIND REDDY
            </h1>
            
            <div className="space-y-4 max-w-md">
              <p className="text-gray-600 leading-relaxed">
                Open to job opportunities worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.
              </p>
            </div>

            <Button 
              onClick={scrollToAbout}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              CONTACT →
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Arvind Reddy"
                className="w-80 h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-8 right-8 text-right">
        <div className="text-gray-400 text-sm">AVAILABLE FOR WORK</div>
        <div className="text-4xl font-black text-gray-900">JUN'25</div>
      </div>

      {/* Small Arrow Indicator */}
      <div className="absolute bottom-8 left-8">
        <ArrowDown className="w-4 h-4 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
