
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
      color: "bg-blue-500"
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
      color: "bg-green-500"
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
      color: "bg-purple-500"
    }
  ];

  return (
    <motion.section 
      id="experience" 
      className="min-h-screen bg-gray-50 relative z-40 scroll-mt-28 flex items-center"
    >
      <motion.div 
        className="container mx-auto max-w-7xl px-8 w-full py-20" 
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
              <motion.span variants={staggerItem} className="block">MY</motion.span>
              <motion.span variants={staggerItem} className="block text-gray-400">JOURNEY</motion.span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 leading-relaxed text-xl max-w-md"
              variants={staggerItem}
            >
              A timeline of growth, innovation, and impact across diverse tech landscapes
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                <div className="text-4xl font-black text-gray-900">5+</div>
                <div className="text-gray-600 uppercase tracking-wide text-sm">Years Experience</div>
              </motion.div>
              <motion.div variants={staggerItem}>
                <div className="text-4xl font-black text-gray-900">50+</div>
                <div className="text-gray-600 uppercase tracking-wide text-sm">Projects Completed</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div 
            className="relative"
            variants={fadeInRight}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <motion.div 
              className="space-y-12"
              variants={staggerContainer}
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.company}
                  className="relative flex items-start space-x-8"
                  variants={staggerItem}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Timeline Dot */}
                  <div className={`w-4 h-4 ${exp.color} rounded-full relative z-10 mt-6 flex-shrink-0`}></div>
                  
                  {/* Content */}
                  <div className="bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-black text-gray-900 uppercase tracking-wide">
                          {exp.company}
                        </h3>
                        <p className="text-gray-700 font-semibold">
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
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <div className={`w-2 h-2 ${exp.color} rounded-full mt-2 flex-shrink-0`} />
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
