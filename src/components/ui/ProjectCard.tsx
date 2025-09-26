
// src/components/ui/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  tech: string;
  highlight: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, highlight, link }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-xl h-full flex flex-col hover:bg-gray-600 transition duration-300 transform hover:scale-[1.02] shadow-xl">
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-teal-400 font-mono text-sm mb-4">{tech}</p>
      
      <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
        {highlight}
      </p>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="self-start text-pink-400 hover:text-pink-300 font-semibold transition"
      >
        View Code / Docs →
      </a>
    </div>
  );
};

export default ProjectCard;
