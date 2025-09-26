
// src/components/Sections/ProjectsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard'; // Assume you create this component

const projectsData = [
  // New Featured Projects
  { title: "Zero Trust Model Implementation", tech: "Security Frameworks, Networking", highlight: "Architected and deployed 'Never trust, always verify' principles; critical for a future-ready portfolio.", link: "[GitHub/Docs Link]" },
  { title: "ASLØTHE ARC Model (AI Agent)", tech: "NLP, Custom AI, Express.js", highlight: "Modular, task-execution conversational agent for third-party API integration (ARC Hackathon submission).", link: "[GitHub Link]" },
  // High-Impact ML
  { title: "Surface Crack Detection", tech: "MobileNet, OC-SVM", highlight: "Achieved 95.25% Accuracy and 95.16% F1-score with anomaly rejection pipeline.", link: "[GitHub Link]" },
  { title: "Amazon Delivery Tracker", tech: "React, Node.js, Express", highlight: "Full-stack real-time tracking app demonstrating scalable API handling and state management.", link: "[GitHub Link]" },
  // Other Key Projects
  { title: "Underwater Image Classification", tech: "VGG16, ResNet50, GANs", highlight: "Reduced training time by 92% (15 hrs → 1.2 hrs) using GAN-based augmentation.", link: "[GitHub Link]" },
  { title: "Flutter Fundraising Portal App", tech: "Dart, Flutter", highlight: "Cross-platform app featuring custom Flutter animations and polished UI for maintenance.", link: "[GitHub Link]" },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">My Projects / Work</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          // Use Framer Motion to animate cards as they appear on screen
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
