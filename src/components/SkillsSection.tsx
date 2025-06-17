
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
    <section id="skills" className="py-32 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              SKILLS &<br />EXPERTISE
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              A comprehensive toolkit for building modern, intelligent applications with precision and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  {category}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div 
                      key={skill}
                      className="text-gray-600 hover:text-gray-900 transition-colors cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
