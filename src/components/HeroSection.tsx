
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.section 
      className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden fixed top-0 left-0 right-0 z-0"
      style={{ y: y1, opacity }}
    >
      {/* Navigation */}
      <motion.nav 
        className="flex justify-between items-center p-8 text-sm text-gray-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="transition-colors duration-300 hover:text-gray-900"
          whileHover={{ scale: 1.05 }}
        >
          Full Stack & AI/ML Developer
        </motion.div>
        <motion.div 
          className="flex space-x-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="hover:text-gray-900 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              variants={staggerItem}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div 
            className="space-y-8"
            style={{ y: y2 }}
          >
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                ARVIND
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                REDDY
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="space-y-4 max-w-md"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              <motion.p 
                className="text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                Open to job opportunities worldwide.
              </motion.p>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
            >
              <Button 
                onClick={scrollToAbout}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-lg"
              >
                CONTACT →
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            style={{ y: y2 }}
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Arvind Reddy"
                className="w-80 h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Text */}
      <motion.div 
        className="absolute bottom-8 right-8 text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="text-gray-400 text-sm">AVAILABLE FOR WORK</div>
        <div className="text-4xl font-black text-gray-900">JUN'25</div>
      </motion.div>

      {/* Small Arrow Indicator */}
      <motion.div 
        className="absolute bottom-8 left-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
