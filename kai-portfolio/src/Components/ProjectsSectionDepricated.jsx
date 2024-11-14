import React, { useEffect, useState } from 'react';

const ProjectsSection = ({ scrollProgress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [bgColor, setBgColor] = useState('black');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setBgColor('#ebf8ff'); // Change to the color of the iPhone screen
    } else {
      setBgColor('black');
    }
  }, [isVisible]);

  // Adjust these values to control animation timing
  const sectionStart = 70; // Start animation earlier
  const progress = Math.max(0, Math.min(1, (scrollProgress - sectionStart) / 20));
  const hideThreshold = .2; // Adjust this value to control when to hide the iPhone

  return (
    <div
      className="w-full h-[150vh] flex items-center justify-center perspective-[10000px]"
      style={{ backgroundColor: 'white', transition: 'background-color 0.6s ease-out' }}
    >
      <div
        style={{
          transform: `
            rotateZ(${progress * 100}deg)
            scale(${1 + progress * 20})
          `,
          opacity: isVisible ? 1 : 0,
          visibility: progress < hideThreshold ? 'visible' : 'hidden',

          transition: 'all 0.6s ease-out',
          marginTop: '-400px', // Move the iPhone higher
        }}
      >
        <div className="w-[300px] h-[600px] bg-gray-800 rounded-[40px] relative border-[12px] border-gray-900 shadow-xl">
          <div className="w-[150px] h-[25px] bg-gray-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[15px]" />
          {/* Add iPhone screen content here */}
          <div className="w-full h-full bg-white rounded-[28px] overflow-hidden">
            {/* Add your project showcase content here */}
          </div>
        </div>
      </div>
      <div className="mb-[5000px]"></div> {/* Increased margin to add more space */}
    </div>
  );
};

export default ProjectsSection;