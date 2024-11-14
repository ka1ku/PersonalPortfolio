import React, { useState, useEffect } from 'react';
import { Briefcase, Building2, Calendar, ExternalLink } from 'lucide-react';

const ExperienceSection = ({  }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Rockitcoin',
      period: '2023 - Present',
      skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'Google Cloud', 'Firebase'],
      description: [
        'Spearheaded the full-cycle development of RockitcoinGo, a cash-alternative solution for cryptocurrency transactions, optimizing crypto-to-cash purchases at kiosks.',
        'Architected and implemented backend services using TypeScript, Node.js, SQL (PostgreSQL), Google Firestore, and Google Cloud Functions to ensure secure, real-time crypto payment processing and system reliability.',
        'Collaborated with cross-functional teams, including external partners from Loomis and Unit21, to ensure smooth integration of AML compliance, fraud detection, and operational efficiency.',
      ],
    },
    {
      id: 2,
      title: 'Machine Learning Intern',
      company: 'Shure Inc',
      period: 'March 2022 - May 2022',
      skills: ['TensorFlow', 'Python', 'EEG Processing', 'Machine Learning', 'Data Analysis'],
      description: [
        'Data collected from the University of Chicago was used to deliver an alternative method for processing EEG using the TensorFlow machine learning library.',
        'Used pre-processed EEG spectrograms to differentiate between subjects given a placebo and low-dose LSD.',
        'Presented a working demonstration of EEG-based drug classification.',
      ],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 to-black p-8">
      <div
        className="max-w-4xl mx-auto transform transition-all duration-500"
        style={{
          opacity: Math.min(1, (scrollY - 200) / 300),
          transform: `scale(${Math.min(1, 0.5 + (scrollY - 200) / 600)})`,
        }}
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-blue-100 p-3 rounded-full">
            <Briefcase className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-5xl font-bold text-gray-100">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((job, index) => (
            <div
              key={job.id}
              className="bg-gray-800 rounded-lg p-6 shadow-md transform transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
              <div className="pb-4 border-b border-gray-700">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-gray-100">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4 flex-shrink-0" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{job.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <ul className="space-y-4">
                  {job.description.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;