
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ExperienceSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

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
    <section id="experience" className="py-32 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              WORK<br />EXPERIENCE
            </h2>
            <p className={`text-gray-600 leading-relaxed max-w-md transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              Building innovative solutions across diverse industries and technologies with a focus on impact and excellence.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company} 
                className={`space-y-4 transition-all duration-1000 hover:translate-x-2 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide hover:text-gray-700 transition-colors duration-300">
                    {exp.company}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {exp.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {exp.duration}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li 
                      key={i} 
                      className={`text-gray-600 text-sm leading-relaxed hover:text-gray-900 transition-all duration-300 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                      style={{ transitionDelay: `${400 + index * 200 + i * 100}ms` }}
                    >
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
