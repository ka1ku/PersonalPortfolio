import React, {useEffect, useState} from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import kaiHeadshot from '../Assets/KaiHeadshot.jpg';
import uchicago from "../Assets/uchicago.png"
import TypingEffect from './TypingEffect';

const Cube = ({ x, y, z, rotateX, rotateY, rotateZ }) => (
  <div 
    className="absolute w-20 h-20 border border-white/20 rounded-lg bg-gradient-to-br from-white/10 to-white/5"
    style={{
      transform: `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
      transition: 'transform 0.3s ease-out'
    }}
  />
);

const HeroSection = ({ scrollProgress }) => {
  const [cubes, setCubes] = useState([]);
  const [prevScrollProgress, setPrevScrollProgress] = useState(0);

  useEffect(() => {
    // Generate initial cubes
    const initialCubes = Array.from({ length: 15 }, () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth- 100,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 100 - 50,
      rotateX: Math.random() * 40,
      rotateY: Math.random() * 40,
      rotateZ: Math.random() * 360
    }));
    setCubes(initialCubes);
  }, []);

  useEffect(() => {
    // Detect scroll direction
    const delta = scrollProgress - prevScrollProgress;

    setCubes(prevCubes =>
      prevCubes.map(cube => ({
        ...cube,
        y: cube.y - delta * 10,
      }))
    );
  
    setPrevScrollProgress(scrollProgress);
  }, [scrollProgress]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCubes(prevCubes =>
        prevCubes.map(cube => ({
          ...cube,
          rotateX: (cube.rotateX + Math.random() * 1) % 60,
          rotateY: (cube.rotateY + Math.random() * 1) % 60,
          rotateZ: (cube.rotateZ + Math.random() * 1) % 60,
        }))
      );
    }, 100);
  
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background Cubes */}
      <div className="absolute inset-0 z-0">
        {cubes.map(cube => (
          <Cube key={cube.id} {...cube} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img 
              src={kaiHeadshot} 
              alt="Kai's Headshot" 
              className="w-48 h-48 rounded-full border-4 border-white/20"
            />
          </div>

          {/* Name and Title */}
          <div>
  <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
    Kai Lee
  </h1>
  <TypingEffect/>
  {/* <p className="text-2xl sm:text-3xl text-gray-300">
    Software Engineer
  </p> */}

</div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ka1ku" className="text-white hover:text-gray-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kai-lee-068072210/" className="text-white hover:text-gray-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your@email.com" className="text-white hover:text-gray-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;