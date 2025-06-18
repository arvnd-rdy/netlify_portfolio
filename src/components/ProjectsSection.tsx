import React, { useState, useRef, useEffect } from "react";

const projects = [
  {
    title: "The Craft",
    description:
      "Gain the confidence to build anything you envision, transforming motion, interaction, and design principles into second nature.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 3h12l4 6-10 13L2 9Z" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    ),
    image: "https://picsum.photos/720/720?random=12",
    link: "#"
  },
  {
    title: "CSS Animation",
    description:
      "Master CSS animations from your very first set of @keyframes right through to things no one else ever teaches you.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18" />
        <path d="M3 7.5h4" />
        <path d="M3 12h18" />
        <path d="M3 16.5h4" />
        <path d="M17 3v18" />
        <path d="M17 7.5h4" />
        <path d="M17 16.5h4" />
      </svg>
    ),
    image: "https://picsum.photos/720/720?random=17",
    link: "#"
  },
  {
    title: "SVG Filters",
    description:
      "Shaders on a budget. Learn how to use noise to your advantage whilst making flames and stickers.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
    image: "https://picsum.photos/720/720?random=19",
    link: "#"
  },
  {
    title: "Scroll Animation",
    description:
      "Take your users on a journey with the joy of tasteful scroll animation. You might not even need JavaScript.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M19 17V5a2 2 0 0 0-2-2H4" />
        <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
      </svg>
    ),
    image: "https://picsum.photos/720/720?random=42",
    link: "#"
  },
  {
    title: "Taming Canvas",
    description:
      'Grasp how to tame the pixel playground and when to do so. Whilst building with "Performance Driven Development".',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    image: "https://picsum.photos/720/720?random=128",
    link: "#"
  },
  {
    title: "Layout Tricks",
    description:
      "Do you really need a library for that? Sometimes stepping back and rethinking the problem yields a nifty solution.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
        <path d="m14 7 3 3" />
        <path d="M5 6v4" />
        <path d="M19 14v4" />
        <path d="M10 2v2" />
        <path d="M7 8H3" />
        <path d="M21 16h-4" />
        <path d="M11 3H9" />
      </svg>
    ),
    image: "https://picsum.photos/720/720?random=56",
    link: "#"
  },
  {
    title: "Mastering Time",
    description:
      "It's not all just easings and compositions. Time plays a crucial part in various UI patterns that might not seem obvious at first.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M5 22h14" />
        <path d="M5 2h14" />
        <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
        <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
      </svg>
    ),
    image: "https://picsum.photos/720/720?random=39",
    link: "#"
  }
];

const gridBg = {
  backgroundImage:
    "linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
  backgroundSize: "45px 45px",
  backgroundPosition: "50% 50%",
};

const ProjectsSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  // Responsive card width calculation
  useEffect(() => {
    if (!listRef.current) return;
    const list = listRef.current;
    const items = Array.from(list.children);
    const cols = items.map((_, i) => (i === active ? "10fr" : "1fr")).join(" ");
    list.style.gridTemplateColumns = cols;
  }, [active]);

  // Resync on window resize for best fit
  useEffect(() => {
    const handleResize = () => {
      if (!listRef.current) return;
      const list = listRef.current;
      const items = Array.from(list.children);
      const cols = items.map((_, i) => (i === active ? "10fr" : "1fr")).join(" ");
      list.style.gridTemplateColumns = cols;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center py-16 relative z-10"
      style={gridBg}
    >
      <h1 className="fluid text-4xl md:text-6xl font-black mb-4 text-center">the craft of ui</h1>
      <p className="max-w-2xl text-center text-base md:text-lg text-gray-700 mb-12 opacity-80 font-mono">
        Unlock the art and science of interface development. This isn't just about pushing pixels or following documentation — it's about mastering the tools, understanding the nuances, and shaping experiences with intention.
      </p>
      <ul
        ref={listRef}
        className="grid gap-2 max-w-7xl w-full mx-auto"
        style={{
          gridTemplateColumns: projects.map((_, i) => (i === active ? "10fr" : "1fr")).join(" "),
          height: "clamp(390px, 52dvh, 616px)",
          transition: "grid-template-columns 0.6s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {projects.map((proj, i) => (
          <li
            key={proj.title}
            data-active={active === i}
            tabIndex={0}
            className={`relative overflow-hidden min-w-[60px] border border-gray-300 bg-white dark:bg-black rounded-lg cursor-pointer transition-all duration-500 group focus:outline-none`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            style={{
              zIndex: active === i ? 2 : 1,
              boxShadow: active === i ? "0 8px 32px 0 rgba(0,0,0,0.10)" : undefined,
              height: "100%",
            }}
          >
            <article className="absolute inset-0 flex flex-col justify-end gap-4 p-6 font-mono">
              <h3
                className="absolute top-4 left-6 origin-left rotate-90 text-base font-light uppercase opacity-60"
                style={{
                  whiteSpace: "nowrap",
                  fontFamily: "monospace",
                }}
              >
                {proj.title}
              </h3>
              <div className={`transition-opacity duration-500 ${active === i ? "opacity-80" : "opacity-0"}`}>
                <p className="text-sm mb-8 max-w-xs">{proj.description}</p>
              </div>
              <a
                href={proj.link}
                className={`absolute bottom-4 right-6 flex items-center gap-2 text-black dark:text-white transition-opacity duration-500 ${active === i ? "opacity-100" : "opacity-0"}`}
                tabIndex={active === i ? 0 : -1}
              >
                <span className="font-medium">Watch now</span>
              </a>
              <img
                src={proj.image}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-700 ${active === i ? "grayscale-0 brightness-100 scale-100" : "grayscale brightness-125 scale-110"}`}
                style={{
                  maskImage: "radial-gradient(100% 100% at 100% 0, #fff, #0000)",
                  WebkitMaskImage: "radial-gradient(100% 100% at 100% 0, #fff, #0000)",
                  zIndex: 0,
                }}
              />
            </article>
          </li>
        ))}
        {/* All Projects Card */}
        <li
          tabIndex={0}
          className={
            "relative overflow-hidden min-w-[60px] border border-gray-900 bg-black rounded-lg cursor-pointer transition-all duration-500 group focus:outline-none flex items-center justify-center"
          }
          style={{
            zIndex: 1,
            height: "100%",
          }}
          onClick={() => { window.location.href = '/projects'; }}
        >
          <span
            className="absolute top-4 left-6 origin-left rotate-90 text-base font-light uppercase text-white opacity-100 select-none pointer-events-none"
            style={{
              whiteSpace: "nowrap",
              fontFamily: "monospace",
            }}
          >
            ALL PROJECTS
          </span>
        </li>
      </ul>
    </section>
  );
};

export default ProjectsSection;
