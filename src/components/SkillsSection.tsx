
const SkillsSection = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div 
              key={category}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-serif">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-warm-red-50 text-warm-red-800 rounded-full text-sm font-medium hover:bg-warm-red-100 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
