
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { ExternalLink, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const featuredProjects = [
    {
      id: 1,
      title: "AI ANALYTICS DASHBOARD",
      description: "Real-time data visualization platform with machine learning insights and predictive analytics for enterprise clients.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      category: "Data Science"
    },
    {
      id: 2,
      title: "SMART E-COMMERCE PLATFORM",
      description: "Full-stack application with AI-driven product recommendations and dynamic pricing optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      category: "E-Commerce"
    },
    {
      id: 3,
      title: "NEURAL NETWORK OPTIMIZER",
      description: "Advanced ML toolkit for optimizing neural network architectures and hyperparameters at scale.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["PyTorch", "FastAPI", "Docker", "AWS"],
      category: "Machine Learning"
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className="min-h-screen bg-white relative z-30 scroll-mt-28 flex items-center"
    >
      <motion.div 
        className="container mx-auto max-w-7xl px-8 w-full py-20" 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          className="mb-20"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-tight"
            variants={staggerContainer}
          >
            <motion.span variants={staggerItem} className="block">FEATURED</motion.span>
            <motion.span variants={staggerItem} className="block text-gray-400">PROJECTS</motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 leading-relaxed max-w-2xl text-xl"
            variants={staggerItem}
          >
            Showcasing innovation through cutting-edge technology and thoughtful design
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
              <Card className="bg-white border border-gray-200 overflow-hidden group cursor-pointer h-full hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-800 px-3 py-1 text-xs rounded-full uppercase tracking-wide hover:bg-gray-200 transition-colors"
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
                className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 rounded-full text-lg font-bold uppercase tracking-wide transition-all duration-300 group hover:shadow-xl"
              >
                VIEW ALL PROJECTS 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
