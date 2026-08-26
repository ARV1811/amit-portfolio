import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { ContactCta } from './components/ContactCta';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { CheckCircle } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="portfolio-app">
      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          onShowToast={showToast}
        />

        {/* Projects Section */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Story / About Section */}
        <Story />

        {/* Contact Banner CTA */}
        <ContactCta
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Contact Dialog Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onShowToast={showToast}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="toast-notice">
          <CheckCircle size={18} style={{ color: '#10b981' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
