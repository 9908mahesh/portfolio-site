
// src/components/Sections/HomeSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HomeSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center min-h-screen max-w-6xl mx-auto p-8 pt-24"
    >
      <p className="text-xl text-teal-400 mb-2">Hello, I'm</p>
      <h1 className="text-7xl lg:text-8xl font-extrabold text-white mb-4">Vasimalla Mahesh.</h1>
      
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-4xl font-semibold text-gray-300 mb-8"
      >
        <span className="text-pink-400">ML Engineer</span> | Full-Stack Developer | Security Enthusiast
      </motion.h2>

      <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-10">
        Computer Science graduate specializing in **Deep Learning, NLP, and modern Full-Stack architectures (React/Node.js, Flutter)**. I deliver resilient, production-ready solutions, from advanced **Zero Trust** models to high-accuracy CNN pipelines.
      </p>

      <div className="flex space-x-4">
        <a href="#projects" className="px-8 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg font-bold transition duration-300">View My Work</a>
        <a href="[GitHub Link]" target="_blank" className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-bold transition duration-300">GitHub Profile</a>
      </div>
    </motion.div>
  );
};

export default HomeSection;
