
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Horizontal parallax transforms for different cards
  const x1 = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x3 = useTransform(scrollYProgress, [0, 1], [250, -250]);

  const projects = [
    {
      title: "AI-POWERED ANALYTICS",
      subtitle: "DASHBOARD",
      description: "Real-time data visualization platform with machine learning insights and predictive analytics for enterprise clients.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "TensorFlow", "D3.js"]
    },
    {
      title: "SMART E-COMMERCE",
      subtitle: "PLATFORM",
      description: "Full-stack application with AI-driven product recommendations and dynamic pricing optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "NEURAL NETWORK",
      subtitle: "OPTIMIZER",
      description: "Advanced ML toolkit for optimizing neural network architectures and hyperparameters at scale.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["PyTorch", "FastAPI", "Docker", "AWS"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-white relative z-30 scroll-mt-28 overflow-hidden" ref={containerRef}>
      <motion.div 
        className="container mx-auto max-w-6xl px-8 w-full py-20" 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          className="mb-20 text-center"
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
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg"
            variants={staggerItem}
          >
            A showcase of innovative solutions combining cutting-edge technology with thoughtful design and user experience.
          </motion.p>
        </motion.div>

        {/* Horizontal Parallax Cards */}
        <div className="relative h-[600px] overflow-hidden">
          {projects.map((project, index) => {
            const transforms = [x1, x2, x3];
            const currentTransform = transforms[index % transforms.length];
            
            return (
              <motion.div
                key={project.title}
                className="absolute top-0 w-[400px] h-[500px]"
                style={{
                  x: currentTransform,
                  left: `${20 + index * 30}%`,
                  zIndex: projects.length - index
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div
                  className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.4 }
                  }}
                >
                  {/* Image */}
                  <div className="h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 h-[236px] flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-black text-gray-900 mb-1 leading-tight">
                        {project.title}
                      </h3>
                      <h4 className="text-xl font-black text-gray-600 leading-tight">
                        {project.subtitle}
                      </h4>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 uppercase tracking-wide hover:text-gray-900 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-24"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 rounded-full text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-2xl"
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
