import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Send, Search, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({
  theme,
  toggleTheme,
  onOpenContact,
  onOpenCommandPalette,
  onOpenHowIBuiltThis
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

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

      // Scroll Progress Calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }

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

    window.addEventListener('scroll', handleScroll, { passive: true });
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
        padding: '0.85rem 0'
      }}
    >
      {/* Scroll Reading Progress Bar */}
      <div
        className="navbar-scroll-progress-line"
        style={{ width: `${scrollProgress}%` }}
      />
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          
          {/* Developer Mode Architecture Button */}
          <button
            onClick={onOpenHowIBuiltThis}
            className="btn-dev-mode"
            title="Explore Architecture Specification"
            data-cursor-label="DEV MODE"
          >
            <Code2 size={13} className="text-purple-400" />
            <span>Dev Mode</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="btn-cmd-k"
            title="Open Command Palette (Ctrl + K)"
            data-cursor-label="SEARCH"
          >
            <Search size={13} />
            <span className="cmd-k-text">⌘K</span>
          </button>

          <button
            onClick={onOpenContact}
            className="btn-secondary"
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.85rem'
            }}
            data-cursor-label="CONTACT"
          >
            <span>Say Hello</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn-icon theme-toggle-btn"
            style={{ width: '36px', height: '36px' }}
            aria-label="Toggle theme"
            title="Toggle theme mode"
            data-cursor-label="THEME"
          >
            {theme === 'dark' ? <Moon size={17} /> : <Sun size={17} />}
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
        .navbar-scroll-progress-line {
          position: absolute;
          top: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #a855f7, #38bdf8);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.7);
          transition: width 0.1s linear;
          z-index: 1000;
        }

        .btn-dev-mode {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          color: #c084fc;
          padding: 0.38rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-dev-mode:hover {
          background: rgba(168, 85, 247, 0.22);
          border-color: rgba(168, 85, 247, 0.6);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .btn-cmd-k {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.38rem 0.65rem;
          border-radius: 8px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-cmd-k:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          border-color: rgba(168, 85, 247, 0.4);
        }

        .cmd-k-text {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.7rem;
        }

        .theme-toggle-btn {
          transition: transform 0.35s ease;
        }

        .theme-toggle-btn:hover {
          transform: rotate(20deg);
        }

        @media (max-width: 920px) {
          .btn-dev-mode span {
            display: none;
          }
          .btn-dev-mode {
            padding: 0.45rem;
            border-radius: 8px;
          }
        }

        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .btn-cmd-k {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
