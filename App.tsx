import React from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Hero from './sections/Hero.tsx';
import About from './sections/About.tsx';
import Skills from './sections/Skills.tsx';
import Projects from './sections/Projects.tsx';
import Achievements from './sections/Achievements.tsx';
import ParallaxBackground from './components/ParallaxBackground.tsx';

// Import data
import data from './data/portfolioData.ts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-black relative">
      <ParallaxBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Achievements 
          achievements={data.achievements} 
          certifications={data.certifications} 
        />
      </main>

      <Footer data={data.footer} />
    </div>
  );
};

export default App;