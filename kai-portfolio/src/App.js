import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from './Components/ProgessBar';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import ExperienceSection from './Components/ExperienceSection';
import SkillsSection from './Components/SkillsSection';
import ProjectsSection from './Components/ProjectsSection';
// import ProjectsSection from './Components/ProjectsSectionDepricated'; // Import the new component

import './index.css';

const Test = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const projects2Ref = useRef(null); // Add a ref for the new section

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: e.clientX,
        y: e.clientY 
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Spotlight Effect */}
      <div 
        className="fixed pointer-events-none z-50"
        style={{
          background: 'radial-gradient(circle 200px at center, rgba(255,255,255,0.05) 0%, transparent 90%)',
          width: '400px',
          height: '400px',
          left: 0,
          top: 0,
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
          transition: 'transform 0.05s',
          willChange: 'transform'
        }}
      />
      
      <ProgressBar scrollProgress={scrollProgress} />
      <Navbar smoothScroll={smoothScroll} activeSection={activeSection} />
      <main className="pt-20 pb-12 relative z-0">
        <section ref={heroRef} id="about">
          <HeroSection scrollProgress={scrollProgress} />
        </section>
        <section ref={experienceRef} id="experience">
          <ExperienceSection scrollProgress={scrollProgress} />
        </section>
        <section ref={projectsRef} id="projects">
          <ProjectsSection scrollProgress={scrollProgress} />
        </section>
        <section ref={skillsRef} id="skills">
          <SkillsSection scrollProgress={scrollProgress} />
        </section>


      </main>
    </div>
  );
};

export default Test;