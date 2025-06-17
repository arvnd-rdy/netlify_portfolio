import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";

const ContactSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactLinks = [
    { icon: Github, label: "GITHUB", href: "https://github.com" },
    { icon: Linkedin, label: "LINKEDIN", href: "https://linkedin.com" },
    { icon: Mail, label: "EMAIL", href: "mailto:arvind@example.com" }
  ];

  return (
    <footer id="contact" className="py-32 bg-white relative z-10 scroll-mt-28">
      <motion.div 
        className="container mx-auto max-w-6xl px-8" 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={fadeInLeft}>
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
              variants={staggerContainer}
            >
              <motion.span variants={staggerItem} className="block">LET'S</motion.span>
              <motion.span variants={staggerItem} className="block">CONNECT</motion.span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 leading-relaxed max-w-md mb-8"
              variants={staggerItem}
            >
              Ready to collaborate on something amazing? I'm always excited to discuss new opportunities and innovative projects.
            </motion.p>

            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 mb-12 hover:shadow-lg"
              >
                GET IN TOUCH →
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={fadeInRight}
          >
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
            >
              <motion.h3 
                className="text-xl font-bold text-gray-900 uppercase tracking-wide"
                variants={staggerItem}
              >
                CONNECT
              </motion.h3>
              <motion.div 
                className="space-y-3"
                variants={staggerContainer}
              >
                {contactLinks.map((item, index) => (
                  <motion.a 
                    key={item.label}
                    href={item.href} 
                    target={item.label !== "EMAIL" ? "_blank" : undefined}
                    rel={item.label !== "EMAIL" ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-all duration-300"
                    variants={staggerItem}
                    whileHover={{ 
                      x: 10,
                      scale: 1.05
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
          variants={staggerContainer}
        >
          <motion.p variants={staggerItem}>
            © 2025 ARVIND REDDY. BUILT WITH PASSION AND PRECISION.
          </motion.p>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-gray-500 hover:text-gray-900 transition-all duration-300 uppercase tracking-wide"
            variants={staggerItem}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            BACK TO TOP ↑
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default ContactSection;
