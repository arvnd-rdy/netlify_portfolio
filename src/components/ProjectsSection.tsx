
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const featuredProjects = [
    {
      id: 1,
      title: "AI ANALYTICS DASHBOARD",
      description: "Real-time data visualization with ML insights",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "TensorFlow"],
      category: "AI/ML"
    },
    {
      id: 2,
      title: "E-COMMERCE PLATFORM",
      description: "Full-stack app with AI recommendations",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      category: "Web App"
    },
    {
      id: 3,
      title: "BLOCKCHAIN WALLET",
      description: "Secure multi-chain cryptocurrency wallet",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web3", "Solidity", "React"],
      category: "Blockchain"
    }
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen bg-black text-white relative z-30 scroll-mt-28 flex items-center" 
      ref={ref}
    >
      <motion.div 
        className="container mx-auto max-w-7xl px-8 w-full py-20"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          className="mb-20 text-center"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
            variants={staggerContainer}
          >
            <motion.span variants={staggerItem} className="block">FEATURED</motion.span>
            <motion.span variants={staggerItem} className="block text-gray-400">WORK</motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 leading-relaxed max-w-2xl mx-auto text-xl"
            variants={staggerItem}
          >
            Selected projects that showcase innovation and technical excellence
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <Link to="/projects">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-white hover:bg-gray-200 text-black px-12 py-4 rounded-none text-lg font-bold uppercase tracking-wide transition-all duration-300 group"
              >
                VIEW ALL PROJECTS 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
