import React, { useState } from "react";
import { Github, ExternalLink, Monitor, Layout, Smartphone } from "lucide-react";
import { Award } from "lucide-react";

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "IOU",
      description: "A full-stack web application built with React, Firestore, and Node.js",
      tags: ["React-Native", "Node.js", "Firestore"],
      icon: <Smartphone className="w-6 h-6" />,
      type: "Mobile App",
      link: "https://example.com/project-one",
      github: "https://github.com/username/project-one",
    },
    {
      title: "Tune Bug",
      description: "A fantasy sports-like app for investing in music artists",
      tags: ["AWS", "React-Native"],
      icon: <Smartphone className="w-6 h-6" />,
      type: "AI/ML",
      link: "https://example.com/project-two",
      github: "https://github.com/username/project-two",
    },
    {
      title: "Lowdose LSD",
      description: "A ML Classifer for detecting LSD usage in by monitoring different regions of the brain",
      tags: ["Python", "Numpy", "TensorFlow", "Machine Learning"],
      icon: <Layout className="w-6 h-6" />,
      type: "Mobile App",
      link: "https://example.com/project-three",
      github: "https://github.com/username/project-three",
    },
    // {
    //   title: "Project Four",
    //   description: "CLI tool for automating development workflows",
    //   tags: ["Python", "Automation", "DevOps"],
    //   icon: <Code className="w-6 h-6" />,
    //   type: "Tool",
    //   link: "https://example.com/project-four",
    //   github: "https://github.com/username/project-four",
    // },
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-blue-100 p-3 rounded-full">
            <Award className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-5xl font-bold text-gray-100">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className={`
                transform transition-all duration-500 ease-out
                bg-gradient-to-br from-gray-800 to-gray-900
                rounded-xl p-6 h-full
                ${
                  activeIndex === index
                    ? "scale-105 -rotate-1"
                    : "scale-100 rotate-0"
                }
                hover:shadow-2xl hover:shadow-blue-500/20
              `}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      {project.icon}
                    </div>
                    <span className="text-sm font-medium text-blue-400">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.link}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`
                  absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0
                  transform transition-opacity duration-1000
                  ${activeIndex === index ? "opacity-100" : "opacity-0"}
                `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
