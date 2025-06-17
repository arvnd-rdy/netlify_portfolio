import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto max-w-6xl px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              ABOUT ME
            </h2>
          </div>
          
          <div className={`space-y-8 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '200ms' }}>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className={`transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                I'm a passionate Full Stack Developer and AI/ML Engineer with a deep love for creating 
                innovative solutions that make a real impact. My journey in technology spans across 
                building scalable web applications, implementing machine learning models, and crafting 
                seamless user experiences.
              </p>
              
              <p className={`transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                With expertise in modern frameworks and cutting-edge AI technologies, I thrive on 
                solving complex problems and turning ideas into reality. I believe in writing clean, 
                efficient code and staying at the forefront of technological advancement.
              </p>
            </div>

            <div className={`pt-8 transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                DOWNLOAD RESUME →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
