import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ theme, toggleTheme, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { personal } = portfolioData;

  const navItems = [
    { label: 'My Story', href: '#story' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['story', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'var(--header-scrolled-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        padding: '1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontWeight: 700,
            fontSize: '1.05rem',
            letterSpacing: '-0.01em'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.9rem',
              color: '#ffffff',
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {personal.initials}
          </div>
          <span>{personal.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.925rem',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'var(--transition-smooth)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-purple)')}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? 'var(--text-primary)' : 'var(--text-secondary)';
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button
            onClick={onOpenContact}
            className="btn-secondary"
            style={{
              padding: '0.45rem 1.15rem',
              fontSize: '0.875rem'
            }}
          >
            <span>Say Hello</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn-icon"
            style={{ width: '38px', height: '38px' }}
            aria-label="Toggle theme"
            title="Toggle theme mode"
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn btn-icon"
            style={{ display: 'none', width: '38px', height: '38px' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--modal-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: 'var(--glass-shadow)'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                color: activeSection === item.href.replace('#', '') ? '#a855f7' : 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: 500,
                padding: '0.4rem 0'
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="btn-primary"
            style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
          >
            <Send size={16} />
            <span>Say Hello</span>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
