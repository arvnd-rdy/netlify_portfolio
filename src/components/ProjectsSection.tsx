import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem, slideInHorizontal } from "@/utils/animations";

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with machine learning insights and predictive analytics for enterprise clients.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "TensorFlow", "D3.js"]
    },
    {
      title: "Smart E-Commerce Platform",
      description: "Full-stack application with AI-driven product recommendations and dynamic pricing optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "Neural Network Optimizer",
      description: "Advanced ML toolkit for optimizing neural network architectures and hyperparameters at scale.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["PyTorch", "FastAPI", "Docker", "AWS"]
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white relative z-10 scroll-mt-28" ref={containerRef}>
      <motion.div 
        className="container mx-auto max-w-6xl px-8" 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
            variants={staggerContainer}
          >
            <motion.span variants={staggerItem} className="block">SELECTED</motion.span>
            <motion.span variants={staggerItem} className="block">PROJECTS</motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 leading-relaxed max-w-md"
            variants={staggerItem}
          >
            A showcase of innovative solutions combining cutting-edge technology with thoughtful design and user experience.
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-24"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              variants={staggerItem}
              style={{ 
                x: index % 2 === 0 ? x1 : x2 
              }}
            >
              <motion.div 
                className={`group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                  whileHover={{ 
                    filter: "grayscale(0%)",
                    scale: 1.02
                  }}
                />
              </motion.div>
              
              <motion.div 
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                variants={staggerContainer}
              >
                <motion.h3 
                  className="text-3xl font-bold text-gray-900 uppercase hover:text-gray-700 transition-colors duration-300"
                  variants={staggerItem}
                  whileHover={{ x: 10 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  variants={staggerItem}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={staggerContainer}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tag}
                      className="text-sm text-gray-500 uppercase tracking-wide hover:text-gray-900 transition-all duration-300 cursor-default"
                      variants={staggerItem}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-24"
          variants={fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              VIEW ALL PROJECTS →
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
