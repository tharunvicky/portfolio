import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { HeroData } from '../types.ts';

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect: moves text slightly down as user scrolls, creating depth against background
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-dark to-dark z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          style={{ y, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p 
            variants={itemVariants}
            className="text-primary font-medium mb-4 text-lg"
          >
            Hi, I am
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            {data.name}
            <span className="block text-secondary/60 mt-2 text-4xl md:text-6xl">
              {data.role}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-secondary text-xl max-w-2xl mb-10 leading-relaxed">
            {data.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href={data.cta.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-white transition-all shadow-lg shadow-primary/20 group"
            >
              <Download size={18} className="mr-2 group-hover:translate-y-0.5 transition-transform" />
              View Resume
            </a>
            
            <div className="flex items-center gap-4 ml-0 sm:ml-4">
              <a
                href={data.cta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-secondary hover:text-white hover:bg-card border border-transparent hover:border-primary/50 rounded-full transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href={data.cta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-secondary hover:text-white hover:bg-card border border-transparent hover:border-primary/50 rounded-full transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={data.cta.email}
                className="p-3 text-secondary hover:text-white hover:bg-card border border-transparent hover:border-primary/50 rounded-full transition-all hover:scale-110"
                aria-label="Send Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;