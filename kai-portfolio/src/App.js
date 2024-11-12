import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from './Components/ProgessBar';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import ExperienceSection from './Components/ExperienceSection';
import EducationSection from './Components/EducationSection';
import SkillsSection from './Components/SkillsSection';
import Footer from './Components/Footer';

const Test = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('about');

  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressBar scrollProgress={scrollProgress} />
      <Navbar smoothScroll={smoothScroll} activeSection={activeSection} />
      <main className="pt-20 pb-12">
        <section ref={heroRef} id="about">
          <HeroSection />
        </section>
        <section ref={experienceRef} id="experience">
          <ExperienceSection scrollProgress={scrollProgress} />
        </section>
        <section ref={educationRef} id="education">
          <EducationSection scrollProgress={scrollProgress} />
        </section>
        <section ref={skillsRef} id="skills">
          <SkillsSection scrollProgress={scrollProgress} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Test;