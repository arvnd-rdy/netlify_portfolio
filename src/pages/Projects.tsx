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
  },
  {
    id: "4",
    title: "E-Commerce Product Finder",
    description: "A smart product search and recommendation engine for e-commerce platforms. Built with Vue.js, Express, and Elasticsearch.",
    image: "https://picsum.photos/720/480?random=104",
    tech: ["Vue.js", "Express", "Elasticsearch"],
    link: "#",
    date: "2023-12-10"
  },
  {
    id: "5",
    title: "Fitness Progress Tracker",
    description: "Mobile app to log workouts, track progress, and visualize fitness goals. Built with React Native and Firebase.",
    image: "https://picsum.photos/720/480?random=105",
    tech: ["React Native", "Firebase"],
    link: "#",
    date: "2023-11-22"
  },
  {
    id: "6",
    title: "Portfolio Website Generator",
    description: "A tool for developers to generate and customize their own portfolio websites. Built with Svelte, Node.js, and Tailwind CSS.",
    image: "https://picsum.photos/720/480?random=106",
    tech: ["Svelte", "Node.js", "Tailwind CSS"],
    link: "#",
    date: "2023-10-30"
  },
  {
    id: "7",
    title: "Weather Insights Dashboard",
    description: "Interactive dashboard for real-time weather analytics and forecasts. Built with Angular, D3.js, and OpenWeatherMap API.",
    image: "https://picsum.photos/720/480?random=107",
    tech: ["Angular", "D3.js", "OpenWeatherMap API"],
    link: "#",
    date: "2023-09-18"
  },
  {
    id: "8",
    title: "Recipe Sharing Platform",
    description: "A social platform for sharing and discovering recipes, with user ratings and comments. Built with Django, React, and PostgreSQL.",
    image: "https://picsum.photos/720/480?random=108",
    tech: ["Django", "React", "PostgreSQL"],
    link: "#",
    date: "2023-08-05"
  },
  {
    id: "9",
    title: "Virtual Event Platform",
    description: "A scalable platform for hosting virtual conferences and webinars. Built with Laravel, Vue.js, and WebRTC.",
    image: "https://picsum.photos/720/480?random=109",
    tech: ["Laravel", "Vue.js", "WebRTC"],
    link: "#",
    date: "2023-07-12"
  }
];

const gridBg = {
  backgroundImage:
    "linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
  backgroundSize: "45px 45px",
  backgroundPosition: "50% 50%",
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen w-full" style={gridBg}>
      <header className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="fluid text-5xl md:text-7xl font-black mb-6">All Projects</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 font-mono max-w-2xl mx-auto">
            Explore all my projects, from web apps to AI tools and creative technology solutions.
          </p>
        </div>
      </header>
      <main className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </main>
    </div>
  );
};

export default Projects;
