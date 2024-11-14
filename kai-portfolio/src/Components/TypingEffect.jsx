import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const phrases = [
    "Fullstack",
    "Backend Development",
    "API Development",
    "Database Management",
    "React",
    "Node.js",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Reinforcement Learning",
    "Data Engineering",
    "Model Deployment",
    "AI Ethics",
    "Feature Engineering",
    "Time Series Analysis"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100; // Speed for typing
    const deleteSpeed = 50; // Speed for deleting
    const pauseDuration = 1500; // How long to pause at complete phrase

    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        // Typing
        if (currentText !== currentPhrase) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        } else {
          // Finished typing
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((current) => (current + 1) % phrases.length);
        } else {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <div className="h-auto flex flex-col items-center justify-center text-3xl">
      <div className="flex">
      <span className="ml-2 text-white min-w-[20px]">
          I am interested in 
          </span>
        <span className="ml-2 text-white min-w-[20px]">
          {currentText}
          <span className="animate-pulse">|</span>
        </span>
      </div>
    </div>
  );
};

export default TypingEffect;