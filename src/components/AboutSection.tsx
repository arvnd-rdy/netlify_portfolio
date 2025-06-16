
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Full Stack Developer and AI/ML Engineer with a deep love for creating 
              innovative solutions that make a real impact. My journey in technology spans across 
              building scalable web applications, implementing machine learning models, and crafting 
              seamless user experiences.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With expertise in modern frameworks and cutting-edge AI technologies, I thrive on 
              solving complex problems and turning ideas into reality. I believe in writing clean, 
              efficient code and staying at the forefront of technological advancement.
            </p>
            
            <blockquote className="text-xl font-serif text-gray-800 italic border-l-4 border-warm-red-500 pl-6 my-8">
              "Code is poetry written in logic, and every algorithm tells a story."
            </blockquote>
          </div>

          <div className="pt-8">
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
