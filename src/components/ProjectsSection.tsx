import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ProjectsSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with machine learning insights and predictive analytics for enterprise clients.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "TensorFlow", "D3.js"]
    },
    {
      title: "Smart E-Commerce Platform",
      description: "Full-stack application with AI-driven product recommendations and dynamic pricing optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "Neural Network Optimizer",
      description: "Advanced ML toolkit for optimizing neural network architectures and hyperparameters at scale.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["PyTorch", "FastAPI", "Docker", "AWS"]
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto max-w-6xl px-8" ref={ref}>
        <div className={`mb-16 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            SELECTED<br />PROJECTS
          </h2>
          <p className={`text-gray-600 leading-relaxed max-w-md transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            A showcase of innovative solutions combining cutting-edge technology with thoughtful design and user experience.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              } ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className={`group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 cursor-pointer"
                />
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h3 className="text-3xl font-bold text-gray-900 uppercase hover:text-gray-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag}
                      className={`text-sm text-gray-500 uppercase tracking-wide hover:text-gray-900 transition-all duration-300 cursor-default ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: `${600 + index * 200 + tagIndex * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-24 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
          <Button 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            VIEW ALL PROJECTS →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
