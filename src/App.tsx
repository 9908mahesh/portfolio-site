
// src/App.tsx
import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomeSection from './components/Sections/HomeSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import SkillsSection from './components/Sections/SkillsSection';
import ContactSection from './components/Sections/ContactSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Each component is a full section, using Framer Motion for scroll effects */}
        <section id="home"><HomeSection /></section>
        <section id="projects" className="py-20 bg-gray-800"><ProjectsSection /></section>
        <section id="skills" className="py-20"><SkillsSection /></section>
        <section id="contact" className="py-20 bg-gray-800"><ContactSection /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
