import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper.tsx';
import { SkillsData } from '../types.ts';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

interface SkillsProps {
  data: SkillsData;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const SkillCategory: React.FC<{ title: string; skills: string[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
  <motion.div
    variants={itemVariants}
    className="bg-card p-6 rounded-xl border border-primary/10 hover:border-primary transition-colors group shadow-lg"
  >
    <div className="flex items-center mb-4">
      <div className="p-2 bg-primary/10 text-primary rounded-lg mr-3 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-dark text-secondary text-sm rounded-full border border-gray-800 group-hover:border-primary/30 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <SkillCategory 
          title="Programming Languages" 
          skills={data.languages} 
          icon={<Code2 size={24} />} 
        />
        <SkillCategory 
          title="Frameworks & Libraries" 
          skills={data.frameworks} 
          icon={<Layout size={24} />} 
        />
        <SkillCategory 
          title="Databases" 
          skills={data.databases} 
          icon={<Database size={24} />} 
        />
        <SkillCategory 
          title="Tools & Platforms" 
          skills={data.tools} 
          icon={<Terminal size={24} />} 
        />
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;