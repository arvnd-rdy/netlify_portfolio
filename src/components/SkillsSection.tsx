
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";

const SkillsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const skills = {
    "Languages": [
      "JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"
    ],
    "Frontend": [
      "React", "Vue.js", "Angular", "Next.js", "Tailwind CSS", "Sass"
    ],
    "Backend": [
      "Node.js", "Express", "Django", "FastAPI", "Spring Boot", "GraphQL"
    ],
    "AI/ML": [
      "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenAI API"
    ],
    "Database": [
      "PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL", "Supabase"
    ],
    "Tools": [
      "Docker", "AWS", "Git", "Vercel", "Figma", "VS Code"
    ]
  };

  return (
    <motion.section 
      id="skills" 
      className="py-32 bg-gray-50 relative z-10"
    >
      <motion.div 
        className="container mx-auto max-w-6xl px-8" 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div variants={fadeInLeft}>
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
              variants={staggerContainer}
            >
              <motion.span variants={staggerItem} className="block">SKILLS &</motion.span>
              <motion.span variants={staggerItem} className="block">EXPERTISE</motion.span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 leading-relaxed max-w-md"
              variants={staggerItem}
            >
              A comprehensive toolkit for building modern, intelligent applications with precision and creativity.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div 
                key={category} 
                className="space-y-4"
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  {category}
                </h3>
                <motion.div 
                  className="space-y-2"
                  variants={staggerContainer}
                >
                  {skillList.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill}
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 cursor-default"
                      variants={staggerItem}
                      whileHover={{ x: 8, color: "#111827" }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
