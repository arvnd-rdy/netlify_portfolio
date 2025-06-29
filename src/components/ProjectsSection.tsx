import React from "react";

const projects = [
  {
    id: "1",
    title: "AI Image Enhancer",
    description: "A web app that uses AI to upscale and enhance low-resolution images in real time. Built with React, TensorFlow.js, and Tailwind CSS.",
    image: "https://picsum.photos/720/480?random=101",
    tech: ["React", "TensorFlow.js", "Tailwind CSS"],
    link: "#",
    date: "2024-03-01"
  },
  {
    id: "2",
    title: "Personal Finance Tracker",
    description: "Track your expenses, set budgets, and visualize your financial health with interactive charts. Built with TypeScript, D3.js, and Firebase.",
    image: "https://picsum.photos/720/480?random=102",
    tech: ["TypeScript", "D3.js", "Firebase"],
    link: "#",
    date: "2024-02-15"
  },
  {
    id: "3",
    title: "Remote Team Dashboard",
    description: "A dashboard for remote teams to manage tasks, meetings, and performance analytics. Built with Next.js, Node.js, and MongoDB.",
    image: "https://picsum.photos/720/480?random=103",
    tech: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
    date: "2024-01-28"
  }
];

const gridBg = {
  backgroundImage:
    "linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
  backgroundSize: "45px 45px",
  backgroundPosition: "50% 50%",
};

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center py-16 relative z-10"
      style={gridBg}
    >
      <h1 className="fluid text-4xl md:text-6xl font-black mb-4 text-center">Projects</h1>
      <p className="max-w-2xl text-center text-base md:text-lg text-gray-700 mb-12 opacity-80 font-mono">
        A selection of my recent projects, showcasing my skills in web development, AI, and creative technology.
      </p>
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              onClick={() => project.link && window.open(project.link, "_blank")}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Content */}
              <div className="p-6">
                {/* Tech Stack and Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-wide bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                    {project.tech.join(", ")}
                  </span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                {/* View Project */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                    View Project
                  </span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </div>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
      {/* View All Projects Button */}
      <div className="text-center mt-12">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-mono text-sm uppercase tracking-wide hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 rounded-lg"
        >
          View All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
