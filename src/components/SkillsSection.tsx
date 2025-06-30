import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss3, SiReact, SiRedux, SiFramer, SiNodedotjs, SiExpress, SiDjango, SiSpringboot, SiGraphql, SiPostgresql, SiMysql, SiMongodb, SiNetlify, SiDocker, SiGithubactions, SiNumpy, SiPandas, SiScikitlearn, SiHuggingface, SiUnity, SiBlender
} from 'react-icons/si';
import { ChevronRight, Cloud } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming Languages',
    shadow: 'shadow-[0_4px_24px_0_rgba(99,102,241,0.15)]',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C / C++', icon: SiCplusplus, color: '#00599C' }
    ]
  },
  {
    title: 'Front-End',
    shadow: 'shadow-[0_4px_24px_0_rgba(59,130,246,0.15)]',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' }
    ]
  },
  {
    title: 'Back-End',
    shadow: 'shadow-[0_4px_24px_0_rgba(16,185,129,0.15)]',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' }
    ]
  },
  {
    title: 'Databases & Storage',
    shadow: 'shadow-[0_4px_24px_0_rgba(251,146,60,0.15)]',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'DynamoDB', icon: Cloud, color: '#FF9900' },
      { name: 'Pinecone / FAISS', icon: Cloud, color: '#0089D6' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    shadow: 'shadow-[0_4px_24px_0_rgba(14,165,233,0.15)]',
    skills: [
      { name: 'AWS', icon: Cloud, color: '#FF9900' },
      { name: 'Azure', icon: Cloud, color: '#0089D6' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' }
    ]
  },
  {
    title: 'AI / ML & RAG',
    shadow: 'shadow-[0_4px_24px_0_rgba(251,191,36,0.15)]',
    skills: [
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Hugging Face', icon: SiHuggingface, color: '#FF9900' }
    ]
  },
  {
    title: '3D / XR',
    shadow: 'shadow-[0_4px_24px_0_rgba(139,92,246,0.15)]',
    skills: [
      { name: 'Unity', icon: SiUnity, color: '#000000' },
      { name: 'Blender', icon: SiBlender, color: '#F5792A' },
      { name: 'AR/VR', icon: SiUnity, color: '#000000' }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="text-5xl md:text-6xl font-black mb-8 text-center">Expertise & Tools</h2>
      <div className="w-[80vw] mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`break-inside-avoid bg-white/70 border border-gray-300 rounded-md transition-all duration-300 mb-4 p-6 backdrop-blur-lg ${group.shadow} hover:scale-105 hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div className="flex items-center justify-between pb-3 mb-3">
                <h3 className="text-xl font-bold">{group.title}</h3>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
              <ul className="flex flex-wrap gap-3">
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="flex items-center bg-white rounded-xl p-3 shadow-sm"
                  >
                    <Icon className="w-7 h-7 mr-2" style={{ color }} />
                    <span className="text-base font-semibold">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
