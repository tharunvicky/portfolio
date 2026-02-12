import React from 'react';
import { motion, Variants } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper.tsx';
import { Project } from '../types.ts';
import { Github, Folder } from 'lucide-react';

interface ProjectsProps {
  data: Project[];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    variants={cardVariants}
    className="bg-card rounded-xl overflow-hidden border border-primary/10 flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 group"
  >
    <div className="p-6 flex-grow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:text-black group-hover:bg-primary transition-colors duration-300">
          <Folder size={24} />
        </div>
        <div className="flex gap-2">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors"
            aria-label={`View source code for ${project.title}`}
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-secondary text-sm mb-4 line-clamp-3">{project.description}</p>
      
      <ul className="space-y-2 mb-6">
        {project.points.slice(0, 2).map((point, idx) => (
          <li key={idx} className="text-secondary/80 text-sm flex items-start">
            <span className="mr-2 text-primary">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>

    <div className="px-6 py-4 bg-black/30 border-t border-white/5 mt-auto">
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-primary/80"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <SectionWrapper id="projects" title="Featured Projects">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;