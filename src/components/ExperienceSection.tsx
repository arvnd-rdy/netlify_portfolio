
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
      location: "San Francisco, CA",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented AI-powered recommendation system increasing engagement by 45%",
        "Mentored 5 junior developers and established code review practices"
      ],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      company: "AI SOLUTIONS LTD.",
      role: "Machine Learning Engineer", 
      duration: "2020 - 2022",
      location: "New York, NY",
      achievements: [
        "Developed computer vision models with 95% accuracy for medical imaging",
        "Built real-time data processing pipelines handling 100K+ records/hour",
        "Collaborated with cross-functional teams to deploy ML models to production"
      ],
      gradient: "from-green-600 to-teal-600"
    },
    {
      company: "STARTUPXYZ",
      role: "Full Stack Developer",
      duration: "2019 - 2020", 
      location: "Austin, TX",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Optimized database queries reducing response time by 60%",
        "Implemented automated testing achieving 90% code coverage"
      ],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <motion.section 
      id="experience" 
      className="min-h-screen bg-gray-900 relative z-10 scroll-mt-28 flex items-center"
    >
      <motion.div 
        className="container mx-auto max-w-7xl px-8 w-full py-20" 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side - Header */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <motion.h2 
              className="text-6xl md:text-8xl font-black text-white leading-tight"
              variants={staggerContainer}
            >
              <motion.span variants={staggerItem} className="block">WORK</motion.span>
              <motion.span variants={staggerItem} className="block text-gray-500">JOURNEY</motion.span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 leading-relaxed text-xl max-w-md"
              variants={staggerItem}
            >
              Building innovative solutions across diverse industries with a focus on impact and excellence.
            </motion.p>
          </motion.div>

          {/* Right Side - Experience Timeline */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company}
                className="group relative"
                variants={staggerItem}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-800 p-8 relative overflow-hidden border border-gray-700 group-hover:border-gray-600 transition-colors">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-wide group-hover:text-gray-200 transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-gray-400 font-semibold text-lg">
                          {exp.role}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {exp.location}
                        </p>
                      </div>
                      <span className="text-gray-500 text-sm font-bold uppercase tracking-wide">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div 
                          key={i}
                          className="flex items-start space-x-3 group/achievement"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0`} />
                          <span className="text-gray-400 text-sm leading-relaxed group-hover/achievement:text-gray-300 transition-colors">
                            {achievement}
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

export default ExperienceSection;
