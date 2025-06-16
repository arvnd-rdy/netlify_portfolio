
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight">
                Arvind Reddy
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-light">
                Full Stack / AI / ML
              </p>
              <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                Crafting intelligent solutions with modern technology, bridging the gap between complex algorithms and beautiful user experiences.
              </p>
            </div>
            
            <Button 
              onClick={scrollToAbout}
              className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Explore My World
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Arvind Reddy - Full Stack & AI/ML Developer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-warm-red-200 to-warm-red-300 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
