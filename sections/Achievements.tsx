import React from 'react';
import { motion, Variants } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper.tsx';
import { AchievementsData, Certification } from '../types.ts';
import { Trophy, Award, GitFork, BookOpen } from 'lucide-react';

interface AchievementsProps {
  achievements: AchievementsData;
  certifications: Certification[];
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const listVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const StatCard: React.FC<{ label: string; value: string; icon: React.ReactNode }> = ({ label, value, icon }) => (
  <motion.div
    variants={itemVariants}
    className="bg-card p-6 rounded-xl border border-primary/10 flex items-center gap-4 hover:bg-card/80 hover:border-primary/30 transition-colors"
  >
    <div className="p-3 bg-primary/10 text-primary rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="text-2xl font-bold text-white">{value}</h4>
      <p className="text-secondary text-sm uppercase tracking-wider">{label}</p>
    </div>
  </motion.div>
);

const Achievements: React.FC<AchievementsProps> = ({ achievements, certifications }) => {
  return (
    <SectionWrapper id="achievements" title="Achievements & Certifications">
      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <StatCard 
          label="B.Tech CGPA" 
          value={achievements.cgpa} 
          icon={<BookOpen size={24} />} 
        />
        <StatCard 
          label="Projects" 
          value={achievements.projectsCount} 
          icon={<Trophy size={24} />} 
        />
        <StatCard 
          label="Certifications" 
          value={achievements.certificationsCount} 
          icon={<Award size={24} />} 
        />
        <StatCard 
          label="Repositories" 
          value={achievements.githubRepos} 
          icon={<GitFork size={24} />} 
        />
      </motion.div>

      {/* Certifications List */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listVariants}
        className="bg-card rounded-2xl border border-primary/10 p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Award className="mr-3 text-primary" />
          Certifications
        </h3>
        <motion.div 
          className="space-y-4"
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, idx) => (
            <motion.div 
              key={idx}
              variants={listVariants}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-dark/30 rounded-lg border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div>
                <h4 className="font-semibold text-white group-hover:text-primary transition-colors">{cert.title}</h4>
                <p className="text-sm text-secondary">{cert.platform}</p>
              </div>
              {cert.link && cert.link !== '#' && (
                <a 
                  href={cert.link} 
                  className="mt-2 sm:mt-0 text-primary text-sm font-medium hover:underline opacity-80 hover:opacity-100"
                >
                  View Credential
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Achievements;