import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  SiHtml5, SiCss3, SiJavascript, SiPython, SiC, SiCplusplus, SiReact, SiNodedotjs, SiExpress, SiNumpy, SiPandas, SiScikitlearn, SiGithub, SiPostman, SiMongodb, SiDocker, SiNetlify, SiUnity, SiBlender, SiVscodium
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const skillTabs = [
  {
    label: "Languages",
    skills: [
      { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "Python", icon: <SiPython color="#3776AB" /> },
      { name: "C", icon: <SiC color="#A8B9CC" /> },
      { name: "C++", icon: <SiCplusplus color="#00599C" /> }
    ]
  },
  {
    label: "Frameworks/Libraries",
    skills: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express", icon: <SiExpress color="#000000" /> }
    ]
  },
  {
    label: "AI / ML",
    skills: [
      { name: "NumPy", icon: <SiNumpy color="#013243" /> },
      { name: "Pandas", icon: <SiPandas color="#150458" /> },
      { name: "scikit-learn", icon: <SiScikitlearn color="#F7931E" /> },
      { name: "Hugging Face Transformers", icon: null },

      { name: "Fine-tuning", icon: null },
      { name: "RAG pipelines", icon: null },
      { name: "Vector DBs", icon: null },
      { name: "Model training", icon: null },

      { name: "deployment", icon: null }
    ]
  },
  {
    label: "Dev Tools & Workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub color="#181717" /> },
      { name: "VS Code", icon: <SiVscodium color="#22A6F2" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "MongoDB Compass", icon: <SiMongodb color="#47A248" /> },
      { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
      { name: "Render", icon: null }
    ]
  },
  {
    label: "3D / XR Development",
    skills: [
      { name: "Unity", icon: <SiUnity color="#000000" /> },
      { name: "Blender", icon: <SiBlender color="#F5792A" /> },
      { name: "AR/VR experiences", icon: null },
      { name: "Scene design", icon: null },
      { name: "lighting", icon: null },
      { name: "basic animation", icon: null }
    ]
  }
];

const SkillsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" className="min-h-screen bg-white flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-2">Technical Skills</h2>
        <p className="text-gray-500 text-lg mb-4">My expertise across various technologies and tools</p>
        <div className="flex flex-col gap-8 mt-8">
          {skillTabs.map((tab) => (
            <div key={tab.label}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">{tab.label}</h3>
              <motion.div
                className="flex flex-wrap justify-start gap-4 bg-gray-50 rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {tab.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-lg shadow text-gray-900 font-semibold text-base border border-gray-200"
                  >
                    {skill.icon && <span className="text-xl">{skill.icon}</span>}
                    {skill.name}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
