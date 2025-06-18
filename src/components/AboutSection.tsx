import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";

const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section 
      id="about" 
      className="min-h-screen bg-white relative z-10 scroll-mt-28 flex items-center"
    >
      <motion.div 
        className="container mx-auto max-w-6xl px-8 w-full" 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Hero Image */}
          <motion.div 
            variants={fadeInLeft}
            className="flex justify-center lg:justify-start"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="/hero.png"
                alt="Arvind Reddy - About"
                className="w-[400px] h-[500px] object-cover rounded-lg shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </motion.div>
          
          {/* Right Side - About Content */}
          <motion.div 
            className="space-y-8"
            variants={fadeInRight}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.span variants={staggerItem} className="block">ABOUT</motion.span>
              <motion.span variants={staggerItem} className="block">ME</motion.span>
            </motion.h2>
            <motion.div 
              className="space-y-6 text-gray-600 leading-relaxed"
              variants={staggerContainer}
            >
              <motion.p variants={staggerItem}>
                I'm a passionate Full Stack Developer and AI/ML Engineer with a deep love for creating 
                innovative solutions that make a real impact. My journey in technology spans across 
                building scalable web applications, implementing machine learning models, and crafting 
                seamless user experiences.
              </motion.p>
              <motion.p variants={staggerItem}>
                With expertise in modern frameworks and cutting-edge AI technologies, I thrive on 
                solving complex problems and turning ideas into reality. I believe in writing clean, 
                efficient code and staying at the forefront of technological advancement.
              </motion.p>
            </motion.div>
            <motion.div 
              className="pt-8"
              variants={staggerItem}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  DOWNLOAD RESUME →
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
