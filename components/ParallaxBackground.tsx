import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';

// Generate random particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // %
    y: Math.random() * 100, // %
    size: Math.random() * 3 + 1, // px
    duration: Math.random() * 20 + 10, // s
    delay: Math.random() * 5, // s
    opacity: Math.random() * 0.5 + 0.2,
    moveRange: Math.random() * 30 + 20, // px movement
  }));
};

const ParallaxBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [particles, setParticles] = useState<any[]>([]);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Generate particles on client side
    setParticles(generateParticles(50));

    // Initialize mouse at center to avoid flash
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax transforms for blobs - move slightly opposite to scroll
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Dynamic masks and gradients based on mouse position
  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;
  const glowBackground = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(252, 163, 17, 0.12), transparent 80%)`;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-dark">
      {/* Base Grid Pattern (Faint Static) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Interactive Grid Highlight (Revealed by Mouse) */}
      <motion.div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(#fca311 1px, transparent 1px), linear-gradient(90deg, #fca311 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: maskImage,
          WebkitMaskImage: maskImage, // Safari support
        }}
      />

      {/* Ambient Mouse Glow */}
      <motion.div
        className="absolute inset-0"
        style={{ background: glowBackground }}
      />

      {/* Vignette / Edge Fading */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark/90" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -particle.moveRange, 0],
            x: [0, particle.moveRange / 2, 0],
            opacity: [particle.opacity * 0.5, particle.opacity, particle.opacity * 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large Ambient Glowing Blobs */}
      <motion.div
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px] will-change-transform"
      />

      <motion.div
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -40, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] bg-card/40 rounded-full blur-[140px] will-change-transform"
      />

      <motion.div
        style={{ y: y3 }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[130px]"
      />
    </div>
  );
};

export default ParallaxBackground;