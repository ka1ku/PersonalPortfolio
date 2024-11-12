import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import kaiHeadshot from '../Assets/KaiHeadshot.jpg';

const HeroSection = () => (
  <section
    id="about"
    className="h-1/2-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50"
  >
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <img
        src={kaiHeadshot}
        alt="Profile"
        className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
      />
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Kai Lee</h1>
      <h2 className="text-2xl text-gray-600 mb-6">Software Engineer</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
      I like to build software that tackles real-world problems. My interests span from neuroscience to developing applications that simplify complex financial interactions.
      </p>
      <div className="flex justify-center space-x-4">
  <a
    href="https://github.com/ka1ku"
    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="w-6 h-6 text-gray-700" />
  </a>
  <a
    href="https://www.linkedin.com/in/kai-lee-068072210/"
    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-6 h-6 text-gray-700" />
  </a>
  <a
    href="mailto:ka1@uchicago.edu"
    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
  >
    <Mail className="w-6 h-6 text-gray-700" />
  </a>
</div>
    </div>
  </section>
);

export default HeroSection;