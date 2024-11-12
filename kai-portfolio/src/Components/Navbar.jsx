import React from 'react';

const Navbar = ({ smoothScroll, activeSection }) => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-40">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-gray-800">Kai Lee's Portfolio</h1>
        <div className="flex space-x-4">
          {['about', 'experience', 'education', 'skills'].map((section) => (
            <button
              key={section}
              onClick={() => smoothScroll(section)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === section
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;