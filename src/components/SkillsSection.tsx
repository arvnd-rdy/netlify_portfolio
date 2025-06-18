import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";

const SkillsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Full Stack Development",
      skills: [
        "HTML", "CSS", "JavaScript",
        "React", "Node.js", "Express",
        "MongoDB", "REST APIs",
        "Git", "GitHub", "VS Code",
        "Docker (for smoother dev + deployment)"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Programming Languages & Core",
      skills: [
        "Python (my go-to for AI stuff)",
        "C", "C++"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI / Machine Learning",
      skills: [
        "Python libraries — NumPy, Pandas, scikit-learn",
        "Hugging Face, Transformers",
        "Fine-tuning, RAG pipelines, Vector DBs",
        "Model training, evaluation, and deployment"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Dev Tools & Workflow",
      skills: [
        "Git & GitHub",
        "Postman, MongoDB Compass",
        "Docker",
        "Netlify, Render"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "3D / XR Development",
      skills: [
        "Unity, Blender",
        "AR/VR experiences",
        "Scene design, lighting, basic animation"
      ],
      color: "from-pink-500 to-yellow-500"
    }
  ];

  return (
    <motion.section 
      id="skills" 
      className="min-h-screen bg-white relative z-10 scroll-mt-28 flex items-center"
    >
      <motion.div 
        className="container mx-auto max-w-7xl px-8 w-full" 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Header */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <motion.h2 
              className="text-6xl md:text-8xl font-black text-gray-900 leading-tight"
              variants={staggerContainer}
            >
              <motion.span variants={staggerItem} className="block">TECH</motion.span>
              <motion.span variants={staggerItem} className="block text-gray-400">STACK</motion.span>
            </motion.h2>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                <div className="text-4xl font-black text-gray-900">50+</div>
                <div className="text-gray-600 uppercase tracking-wide text-sm">Technologies</div>
              </motion.div>
              <motion.div variants={staggerItem}>
                <div className="text-4xl font-black text-gray-900">5+</div>
                <div className="text-gray-600 uppercase tracking-wide text-sm">Years Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Skills Grid */}
          <motion.div 
            className="grid md:grid-cols-1 lg:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={category.title}
                className="group"
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-50 p-8 h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-wide">
                      {category.title}
                    </h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skill}
                          className="flex items-center space-x-3 group/skill"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`} />
                          <span className="text-gray-700 group-hover/skill:text-gray-900 transition-colors font-medium">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
