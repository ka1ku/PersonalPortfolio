import React, { useState } from 'react';
import { Book } from 'lucide-react';
import uchicago from '../Assets/uchicago.png';

const EducationSection = ({ scrollProgress }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
          <Book className="w-8 h-8 mr-3 text-blue-500" />
          Education
        </h2>
        <div className="grid gap-8">
          {[
            {
              degree: 'Bachelor of Science in Computer Science',
              school: 'University of Chicago',
              period: 'Expected 2026',
            },
          ].map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center"
              style={{
                transform: `translateY(${scrollProgress > 60 ? '0' : '20px'}) rotateY(${(mousePosition.x - 75) / 15}deg) rotateX(${(mousePosition.y - 75) / -15}deg)`,
                opacity: scrollProgress > 60 ? 1 : 0,
                transition: 'all 0.5s ease-out, transform 0.1s, box-shadow 0.1s',
                transitionDelay: `${index * 200}ms`,
                perspective: '1000px',
                boxShadow: `${(mousePosition.x - 75) / 10}px ${(mousePosition.y - 75) / 10}px 20px rgba(0, 0, 0, 0.2)`,
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={uchicago}
                alt="University of Chicago"
                className="w-16 h-16 mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 mb-2">{edu.school}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;