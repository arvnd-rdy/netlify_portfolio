
const ExperienceSection = () => {
  const experiences = [
    {
      company: "TechCorp Inc.",
      role: "Senior Full Stack Developer",
      duration: "2022 - Present",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented AI-powered recommendation system increasing engagement by 45%",
        "Mentored 5 junior developers and established code review practices"
      ]
    },
    {
      company: "AI Solutions Ltd.",
      role: "Machine Learning Engineer",
      duration: "2020 - 2022",
      achievements: [
        "Developed computer vision models with 95% accuracy for medical imaging",
        "Built real-time data processing pipelines handling 100K+ records/hour",
        "Collaborated with cross-functional teams to deploy ML models to production"
      ]
    },
    {
      company: "StartupXYZ",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building innovative solutions across diverse industries and technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-warm-red-200"></div>

          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className={`relative flex items-center mb-12 animate-fade-in-up ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-warm-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 font-serif">
                      {exp.role}
                    </h3>
                    <p className="text-warm-red-600 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {exp.duration}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-warm-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
