import React from 'react';

const ProgressBar = ({ scrollProgress }) => (
  <div
    className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-300 z-50"
    style={{ width: `${scrollProgress}%` }}
  />
);

export default ProgressBar;