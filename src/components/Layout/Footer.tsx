
// src/components/Layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-900 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Vasimalla Mahesh. Built for DevOne Hackathon 2025.</p>
        <p>Tech Stack: React, Tailwind CSS, Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
