
// src/components/Sections/ContactSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-4xl mx-auto p-8 text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect and Build</h2>
      <p className="text-xl text-gray-400 mb-10">
        I'm actively seeking roles and collaborations. Reach out to discuss my projects or potential opportunities.
      </p>

      <div className="space-y-4">
        <p className="text-2xl font-semibold">Email: <a href="mailto:maheshvasimalla333@gmail.com" className="text-teal-400 hover:underline">maheshvasimalla333@gmail.com</a></p>
        <p className="text-2xl font-semibold">Phone: <span className="text-teal-400">+91-7013047882</span></p>

        <div className="flex justify-center space-x-6 pt-6 text-3xl">
          {/* Use actual icons (e.g., from react-icons) here */}
          <a href="[LinkedIn Link]" target="_blank" className="text-white hover:text-teal-400 transition duration-300" aria-label="LinkedIn">🔗 LinkedIn</a>
          <a href="[GitHub Link]" target="_blank" className="text-white hover:text-teal-400 transition duration-300" aria-label="GitHub">💻 GitHub</a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
