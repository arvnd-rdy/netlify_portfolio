
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projects = [
    {
      id: 1,
      title: "AI-POWERED ANALYTICS",
      subtitle: "DASHBOARD",
      description: "Real-time data visualization platform with machine learning insights and predictive analytics for enterprise clients.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      category: "Data Science"
    },
    {
      id: 2,
      title: "SMART E-COMMERCE",
      subtitle: "PLATFORM",
      description: "Full-stack application with AI-driven product recommendations and dynamic pricing optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      category: "E-Commerce"
    },
    {
      id: 3,
      title: "NEURAL NETWORK",
      subtitle: "OPTIMIZER",
      description: "Advanced ML toolkit for optimizing neural network architectures and hyperparameters at scale.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["PyTorch", "FastAPI", "Docker", "AWS"],
      category: "Machine Learning"
    },
    {
      id: 4,
      title: "BLOCKCHAIN",
      subtitle: "WALLET",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration for seamless trading.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web3", "Solidity", "React", "Ethereum"],
      category: "Blockchain"
    },
    {
      id: 5,
      title: "MOBILE HEALTH",
      subtitle: "TRACKER",
      description: "Cross-platform health monitoring app with real-time vitals tracking and AI-powered health insights.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Firebase", "TensorFlow", "HealthKit"],
      category: "Healthcare"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (isInView) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section 
      id="projects" 
      className="min-h-screen bg-white relative z-30 scroll-mt-28 overflow-hidden" 
      ref={containerRef}
    >
      <motion.div 
        className="container mx-auto max-w-7xl px-8 w-full py-20" 
        ref={ref}
        style={{ y }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          className="mb-20 text-center"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
            variants={staggerContainer}
          >
            <motion.span variants={staggerItem} className="block">FEATURED</motion.span>
            <motion.span variants={staggerItem} className="block">PROJECTS</motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-xl"
            variants={staggerItem}
          >
            Innovative solutions that push the boundaries of technology and design
          </motion.p>
        </motion.div>

        {/* Slideshow Container */}
        <motion.div 
          className="relative max-w-6xl mx-auto"
          variants={fadeInUp}
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-50" ref={carouselRef}>
            <motion.div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="min-w-full">
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0 min-h-[600px]">
                        {/* Image Side */}
                        <motion.div 
                          className="relative overflow-hidden"
                          initial={{ scale: 1.1, opacity: 0 }}
                          animate={currentIndex === index ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="absolute top-6 left-6">
                            <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                              {project.category}
                            </span>
                          </div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div 
                          className="flex flex-col justify-center p-12 bg-white"
                          initial={{ x: 50, opacity: 0 }}
                          animate={currentIndex === index ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 leading-tight">
                                {project.title}
                              </h3>
                              <h4 className="text-2xl md:text-3xl font-black text-gray-600 leading-tight">
                                {project.subtitle}
                              </h4>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed">
                              {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-gray-200 transition-colors duration-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* View Project Button */}
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button 
                                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-xl"
                              >
                                View Project <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-gray-900 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
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
