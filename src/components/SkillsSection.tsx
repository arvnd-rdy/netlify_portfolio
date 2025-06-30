import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss3, SiReact, SiRedux, SiNodedotjs, SiExpress, SiDjango, SiSpringboot, SiGraphql, SiPostgresql, SiMysql, SiMongodb, SiDocker, SiNetlify, SiGithubactions, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiKeras, SiPytorch, SiHuggingface, SiSpacy, SiOpencv, SiUnity, SiBlender
} from 'react-icons/si';
import { Cloud } from 'lucide-react';
import Masonry from './Masonry';

const skillCategories = [
  {
    heading: 'Full-Stack Development',
    groups: [
      {
        title: 'Frontend',
        shadow: 'shadow-[0_4px_24px_0_rgba(59,130,246,0.15)]',
        skills: [
          { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
          { name: 'CSS', icon: SiCss3, color: '#1572B6' },
          { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
          { name: 'React', icon: SiReact, color: '#61DAFB' },
        ]
      },
      {
        title: 'Backend',
        shadow: 'shadow-[0_4px_24px_0_rgba(16,185,129,0.15)]',
        skills: [
          { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
          { name: 'Express.js', icon: SiExpress, color: '#000000' },
          { name: 'Django (DRF)', icon: SiDjango, color: '#092E20' },
          { name: 'REST & GraphQL APIs', icon: SiGraphql, color: '#E10098' },
        ]
      },
      {
        title: 'Programming Languages',
        shadow: 'shadow-[0_4px_24px_0_rgba(99,102,241,0.15)]',
        skills: [
          { name: 'C++', icon: SiCplusplus, color: '#00599C' },
          { name: 'C', icon: SiCplusplus, color: '#A8B9CC' },
          { name: 'Python', icon: SiPython, color: '#3776AB' },
          { name: 'C#', icon: SiCplusplus, color: '#512BD4' },
        ]
      },
      {
        title: 'Cloud & DevOps',
        shadow: 'shadow-[0_4px_24px_0_rgba(14,165,233,0.15)]',
        skills: [
          { name: 'AWS (Lambda, S3, etc.)', icon: Cloud, color: '#FF9900' },
          { name: 'Azure (EC2, Web Apps, Functions App)', icon: Cloud, color: '#0089D6' },
          { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
          { name: 'Docker', icon: SiDocker, color: '#2496ED' },
          { name: 'Vercel', icon: Cloud, color: '#000000' },
          { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
        ]
      },
      {
        title: 'Databases',
        shadow: 'shadow-[0_4px_24px_0_rgba(251,146,60,0.15)]',
        skills: [
          { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
          { name: 'SQLite', icon: SiMysql, color: '#4479A1' },
          { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        ]
      },
    ]
  },
  {
    heading: 'AI / ML Development',
    groups: [
      {
        title: 'Languages & Libraries',
        shadow: 'shadow-[0_4px_24px_0_rgba(99,102,241,0.15)]',
        skills: [
          { name: 'Python', icon: SiPython, color: '#3776AB' },
          { name: 'NumPy', icon: SiNumpy, color: '#013243' },
          { name: 'Pandas', icon: SiPandas, color: '#150458' },
          { name: 'SciPy', icon: Cloud, color: '#0089D6' },
        ]
      },
      {
        title: 'Core ML',
        shadow: 'shadow-[0_4px_24px_0_rgba(251,191,36,0.15)]',
        skills: [
          { name: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
          { name: 'TensorFlow & Keras', icon: SiTensorflow, color: '#FF6F00' },
          { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
        ]
      },
      {
        title: 'NLP & Transformers',
        shadow: 'shadow-[0_4px_24px_0_rgba(251,191,36,0.15)]',
        skills: [
          { name: 'Hugging Face (BERT, GPT)', icon: SiHuggingface, color: '#FF9900' },
          { name: 'PEFT/LoRA', icon: Cloud, color: '#0089D6' },
          { name: 'spaCy', icon: SiSpacy, color: '#09A3D5' },
        ]
      },
      {
        title: 'Computer Vision',
        shadow: 'shadow-[0_4px_24px_0_rgba(251,191,36,0.15)]',
        skills: [
          { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
          { name: 'Albumentations', icon: Cloud, color: '#0089D6' },
        ]
      },
      {
        title: 'MLOps & Fine-Tuning',
        shadow: 'shadow-[0_4px_24px_0_rgba(251,191,36,0.15)]',
        skills: [
          { name: 'MLflow', icon: Cloud, color: '#0089D6' },
          { name: 'Weights & Biases', icon: Cloud, color: '#FFBE00' },
          { name: 'Ollama', icon: Cloud, color: '#000000' },
          { name: 'Docker for model serving', icon: SiDocker, color: '#2496ED' },
        ]
      },
    ]
  },
  {
    heading: 'AR / VR Development',
    groups: [
      {
        title: '3D Modeling & Animation',
        shadow: 'shadow-[0_4px_24px_0_rgba(139,92,246,0.15)]',
        skills: [
          { name: 'Blender (modeling, scene creation, animation)', icon: SiBlender, color: '#F5792A' },
        ]
      },
      {
        title: 'Engines & Languages',
        shadow: 'shadow-[0_4px_24px_0_rgba(139,92,246,0.15)]',
        skills: [
          { name: 'Unity (C#)', icon: SiUnity, color: '#000000' },
        ]
      },
      {
        title: 'SDKs',
        shadow: 'shadow-[0_4px_24px_0_rgba(139,92,246,0.15)]',
        skills: [
          { name: 'ARKit', icon: Cloud, color: '#0089D6' },
        ]
      },
    ]
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="text-5xl md:text-6xl font-black mb-8 text-center">Expertise & Tools</h2>
      <div className="w-[80vw] mx-auto flex flex-col gap-16">
        {skillCategories.map((cat) => (
          <div key={cat.heading}>
            <h3 className="text-3xl md:text-4xl font-black mb-8 text-left">{cat.heading}</h3>
            {cat.heading === 'Full-Stack Development' ? (
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: 'auto auto auto',
                  gridTemplateAreas: `
                    'frontend backend'
                    'cloud cloud'
                    'languages databases'
                  `,
                }}
              >
                {cat.groups.map((group) => {
                  let area = '';
                  if (group.title === 'Frontend') area = 'frontend';
                  if (group.title === 'Backend') area = 'backend';
                  if (group.title === 'Cloud & DevOps') area = 'cloud';
                  if (group.title === 'Programming Languages') area = 'languages';
                  if (group.title === 'Databases') area = 'databases';
                  return (
                    <div
                      key={group.title}
                      style={{ gridArea: area }}
                      className={`break-inside-avoid bg-white/70 border border-gray-300 rounded-md transition-all duration-300 p-6 backdrop-blur-lg ${group.shadow} hover:scale-105 hover:-translate-y-1 hover:shadow-2xl`}
                    >
                      <div className="flex items-center justify-between pb-3 mb-3">
                        <h4 className="text-xl font-bold">{group.title}</h4>
                      </div>
                      <ul className="flex flex-wrap gap-3">
                        {group.skills.map(({ name, icon: Icon, color }) => (
                          <li
                            key={name}
                            className="flex items-center bg-white rounded-xl p-3 shadow-sm"
                          >
                            {Icon && <Icon className="w-7 h-7 mr-2" style={{ color }} />}
                            <span className="text-base font-semibold">{name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {cat.groups.map((group) => (
                  <div
                    key={group.title}
                    className={`break-inside-avoid bg-white/70 border border-gray-300 rounded-md transition-all duration-300 mb-4 p-6 backdrop-blur-lg ${group.shadow} hover:scale-105 hover:-translate-y-1 hover:shadow-2xl`}
                  >
                    <div className="flex items-center justify-between pb-3 mb-3">
                      <h4 className="text-xl font-bold">{group.title}</h4>
                    </div>
                    <ul className="flex flex-wrap gap-3">
                      {group.skills.map(({ name, icon: Icon, color }) => (
                        <li
                          key={name}
                          className="flex items-center bg-white rounded-xl p-3 shadow-sm"
                        >
                          {Icon && <Icon className="w-7 h-7 mr-2" style={{ color }} />}
                          <span className="text-base font-semibold">{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
