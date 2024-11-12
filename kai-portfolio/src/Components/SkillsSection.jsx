import React from 'react';
import { Award } from 'lucide-react';

const SkillsSection = ({ scrollProgress }) => (
  <section id="skills" className="min-h-screen py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
        <Award className="w-8 h-8 mr-3 text-blue-500" />
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            category: 'Frontend',
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
          },
          {
            category: 'Backend',
            skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
          },
          {
            category: 'Tools',
            skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
          },
          {
            category: 'Soft Skills',
            skills: ['Leadership', 'Communication', 'Problem Solving', 'Agile'],
          },
        ].map((category, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg"
            style={{
              transform: `scale(${scrollProgress > 80 ? '1' : '0.8'})`,
              opacity: scrollProgress > 80 ? 1 : 0,
              transition: 'all 0.5s ease-out',
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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

export default SkillsSection;