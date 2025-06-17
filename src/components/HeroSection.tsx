
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add smooth scrolling to html
    document.documentElement.style.scrollBehavior = 'smooth';
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      {/* Navigation */}
      <nav className={`flex justify-between items-center p-8 text-sm text-gray-600 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="transition-colors duration-300 hover:text-gray-900">Full Stack & AI/ML Developer</div>
        <div className="flex space-x-8">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={`hover:text-gray-900 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <div className={`space-y-8 transition-all duration-1200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none tracking-tight">
              ARVIND REDDY
            </h1>
            
            <div className={`space-y-4 max-w-md transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              <p className="text-gray-600 leading-relaxed">
                Open to job opportunities worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.
              </p>
            </div>

            <Button 
              onClick={scrollToAbout}
              className={`bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              CONTACT →
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Arvind Reddy"
                className="w-80 h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Text */}
      <div className={`absolute bottom-8 right-8 text-right transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
        <div className="text-gray-400 text-sm">AVAILABLE FOR WORK</div>
        <div className="text-4xl font-black text-gray-900">JUN'25</div>
      </div>

      {/* Small Arrow Indicator */}
      <div className={`absolute bottom-8 left-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '900ms' }}>
        <ArrowDown className="w-4 h-4 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
