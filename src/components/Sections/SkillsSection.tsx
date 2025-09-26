
// src/components/Sections/SkillsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { title: "ML/AI & Data", list: ["Python", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "NLP", "Deep Learning"], color: "bg-pink-500" },
  { title: "Web & Mobile", list: ["React", "Node.js", "Express.js", "Flutter", "JavaScript", "Dart", "Socket.IO"], color: "bg-blue-500" },
  { title: "Core & Security", list: ["DSA", "DBMS", "Networking", "Zero Trust Architecture", "SQL", "MongoDB", "Linux/OS"], color: "bg-teal-500" },
];

const SkillsSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">Skills & Tech Stack</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillsData.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 rounded-xl bg-gray-700 shadow-xl border-t-4 border-teal-500"
          >
            <h3 className={`text-2xl font-bold mb-4 ${skillGroup.color.replace('bg-', 'text-')}`}>{skillGroup.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {skillGroup.list.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2 text-teal-400">→</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <p className="text-center mt-10 text-lg text-gray-400">
        **Certified:** TATA iQ – GenAI Powered Data Analytics (Forage)
      </p>
    </div>
  );
};

export default SkillsSection;
