import React, { useState, useEffect, useRef } from 'react';
import { Award } from 'lucide-react';

const SkillsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const opacity = inView ? (scrollY - 200) / 300 : 0;
  const scale = inView ? 0.5 + (scrollY - 200) / 600 : 0.5;

  const styles = {
    opacity: Math.max(0, opacity),
    transform: `scale(${Math.max(0.5, Math.min(1, scale))})`,
    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-gradient-to-b black"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto px-4" style={styles}>
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-blue-100 p-3 rounded-full">
            <Award className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-5xl font-bold text-gray-100">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              category: 'Frontend',
              skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
            },
            {
              category: 'Backend',
              skills: ['Node.js', 'Python', 'Firestore'],
            },
            {
              category: 'Programming/Scripting Languages',
              skills: ['TypeScript', 'Python', 'JavaScript', 'C', 'SQL', 'MATLAB'],
            },
            {
              category: 'Frameworks and Tools',
              skills: ['GCP', 'Firebase', 'Linux', 'BigQuery', 'Redux', 'Expo', 'GIT', 'NumPy', 'PyTorch', 'TensorFlow'],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg transform transition-all duration-500 hover:shadow-xl hover:scale-105"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-lg font-semibold text-gray-100 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;