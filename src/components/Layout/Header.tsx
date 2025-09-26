
// src/components/Layout/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full p-4 bg-gray-900/95 backdrop-blur-sm z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-3xl font-bold text-teal-400 hover:text-teal-300 transition">VM</a>
        <div className="space-x-6 hidden sm:flex">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-teal-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* You can add a mobile menu toggle here */}
      </nav>
    </header>
  );
};

export default Header;
