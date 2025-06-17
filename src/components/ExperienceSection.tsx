import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";

const ExperienceSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const experiences = [
    {
      company: "TECHCORP INC.",
      role: "Senior Full Stack Developer",
      duration: "2022 - Present",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented AI-powered recommendation system increasing engagement by 45%",
        "Mentored 5 junior developers and established code review practices"
      ]
    },
    {
      company: "AI SOLUTIONS LTD.",
      role: "Machine Learning Engineer",
      duration: "2020 - 2022",
      achievements: [
        "Developed computer vision models with 95% accuracy for medical imaging",
        "Built real-time data processing pipelines handling 100K+ records/hour",
        "Collaborated with cross-functional teams to deploy ML models to production"
      ]
    },
    {
      company: "STARTUPXYZ",
      role: "Full Stack Developer",
      duration: "2019 - 2020",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Optimized database queries reducing response time by 60%",
        "Implemented automated testing achieving 90% code coverage"
      ]
    }
  ];

  return (
    <motion.section 
      id="experience" 
      className="py-32 bg-gray-50 relative z-10 scroll-mt-28"
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
              <motion.span variants={staggerItem} className="block">WORK</motion.span>
              <motion.span variants={staggerItem} className="block">EXPERIENCE</motion.span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 leading-relaxed max-w-md"
              variants={staggerItem}
            >
              Building innovative solutions across diverse industries and technologies with a focus on impact and excellence.
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-12"
            variants={staggerContainer}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company} 
                className="space-y-4"
                variants={staggerItem}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide hover:text-gray-700 transition-colors duration-300">
                    {exp.company}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {exp.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {exp.duration}
                  </p>
                </motion.div>
                
                <motion.ul 
                  className="space-y-2"
                  variants={staggerContainer}
                >
                  {exp.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i} 
                      className="text-gray-600 text-sm leading-relaxed hover:text-gray-900 transition-all duration-300"
                      variants={staggerItem}
                      whileHover={{ x: 5 }}
                    >
                      • {achievement}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
