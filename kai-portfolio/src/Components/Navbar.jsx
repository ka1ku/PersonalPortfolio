import React from 'react';

const Navbar = ({ smoothScroll, activeSection }) => (
  <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md shadow-md z-40">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-4">
          {['about', 'experience', 'projects', 'skills',].map((section) => (
            <button
              key={section}
              onClick={() => smoothScroll(section)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === section
                  ? 'text-white bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
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