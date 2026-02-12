import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FooterData } from '../types.ts';

interface FooterProps {
  data: FooterData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-dark border-t border-primary/20 py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Social Links */}
        <div className="flex space-x-6 mb-8">
            <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-primary/10 rounded-full text-secondary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 group shadow-lg shadow-black/50"
                aria-label="GitHub"
            >
                <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-primary/10 rounded-full text-secondary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 group shadow-lg shadow-black/50"
                aria-label="LinkedIn"
            >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
                href={data.email}
                className="p-3 bg-card border border-primary/10 rounded-full text-secondary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 group shadow-lg shadow-black/50"
                aria-label="Email"
            >
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
        </div>

        {/* Copyright */}
        <p className="text-secondary/40 text-sm text-center">
            {data.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;