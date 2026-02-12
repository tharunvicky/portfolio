import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper.tsx';
import { AboutData } from '../types.ts';

interface AboutProps {
  data: AboutData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <SectionWrapper id="about" title="About Me">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card p-8 rounded-2xl border border-primary/10 shadow-xl hover:border-primary/30 transition-colors"
      >
        <div className="space-y-4">
          {data.description.map((paragraph, index) => (
            <p key={index} className="text-secondary text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;