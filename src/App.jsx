import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { ServicesHireMe } from './components/ServicesHireMe';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { ContactCta } from './components/ContactCta';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { CursorSpotlight } from './components/CursorSpotlight';
import { CustomCursor } from './components/CustomCursor';
import { CanvasBackground } from './components/CanvasBackground';
import { BootSequence } from './components/BootSequence';
import { CommandPalette } from './components/CommandPalette';
import { HowIBuiltThisModal } from './components/HowIBuiltThisModal';
import { CheckCircle } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isHowIBuiltThisOpen, setIsHowIBuiltThisOpen] = useState(false);
  const [hasBooted, setHasBooted] = useState(() => {
    return sessionStorage.getItem('amit_booted') === 'true';
  });
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

  // Global Ctrl + K / Cmd + K shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Automatic redirect to projects section when opening portfolio
  useEffect(() => {
    const scrollToProjects = (smooth = false) => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
        if (!window.location.hash || window.location.hash === '#hero') {
          window.history.replaceState(null, '', '#projects');
        }
      }
    };

    if (hasBooted) {
      scrollToProjects(false);
      const timer = setTimeout(() => {
        scrollToProjects(true);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [hasBooted]);

  const handleBootComplete = () => {
    setHasBooted(true);
    sessionStorage.setItem('amit_booted', 'true');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (!window.location.hash || window.location.hash === '#hero') {
          window.history.replaceState(null, '', '#projects');
        }
      }
    }, 150);
  };

  const replayBootSequence = () => {
    setHasBooted(false);
  };

  return (
    <div className="portfolio-app">
      {/* Cinematic Developer Boot Sequence */}
      {!hasBooted && (
        <BootSequence onComplete={handleBootComplete} />
      )}

      {/* Lightweight Interactive Constellation Background */}
      <CanvasBackground />

      {/* Precision Developer Cursor with Contextual Badges */}
      <CustomCursor />

      {/* Ambient Cursor Spotlight Glow */}
      <CursorSpotlight />

      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenHowIBuiltThis={() => setIsHowIBuiltThisOpen(true)}
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

        {/* Services & Hire Me (Freelance Engineering) Section */}
        <ServicesHireMe
          onOpenContact={() => setIsContactOpen(true)}
          onShowToast={showToast}
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

      {/* Case Study Modal with Developer Inspection Tabs */}
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

      {/* Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenHowIBuiltThis={() => setIsHowIBuiltThisOpen(true)}
        onReplayBoot={replayBootSequence}
      />

      {/* Developer Mode Architecture Specification Modal */}
      <HowIBuiltThisModal
        isOpen={isHowIBuiltThisOpen}
        onClose={() => setIsHowIBuiltThisOpen(false)}
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

