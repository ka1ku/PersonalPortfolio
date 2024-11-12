import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = ({ scrollProgress }) => (
  <section id="experience" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
        <Briefcase className="w-8 h-8 mr-3 text-blue-500" />
        Experience
      </h2>
      {[
        {
          title: 'Software Engineer',
          company: 'Rockitcoin',
          period: '2023 - Present',
          description: [
            'Spearheaded the full-cycle development of RockitcoinGo, a cash-alternative solution for cryptocurrency transactions, optimizing crypto-to-cash purchases at kiosks.',
            'Architected and implemented backend services using TypeScript, Node.js, SQL (PostgreSQL), Google Firestore, and Google Cloud Functions to ensure secure, real-time crypto payment processing and system reliability.',
            'Collaborated with cross-functional teams, including external partners from Loomis and Unit21, to ensure smooth integration of AML compliance, fraud detection, and operational efficiency.',
          ],
        },
        {
          title: 'Machine Learning Intern',
          company: 'Shure Inc',
          period: 'March 2022 - May 2022',
          description: [
            'Data collected from the University of Chicago was used to deliver an alternative method for processing EEG using the TensorFlow machine learning library.',
            'Used pre-processed EEG spectrograms to differentiate between subjects given a placebo and low-dose LSD.',
            'Presented a working demonstration of EEG-based drug classification.',
          ],
        },
      ].map((job, index) => (
        <div
          key={index}
          className="mb-12 relative pl-8 border-l-2 border-gray-200"
          style={{
            transform: `translateX(${scrollProgress > 10 ? '0' : '-20px'})`,
            opacity: scrollProgress > 10 ? 1 : 0,
            transition: 'all 0.5s ease-out',
          }}
        >
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {job.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <span className="mr-4">{job.company}</span>
            <span className="text-sm">{job.period}</span>
          </div>
          <ul className="list-disc list-inside text-gray-600">
            {job.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;