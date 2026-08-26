import React from 'react';
import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '2.5rem 0',
        backgroundColor: 'var(--bg-main)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          {/* Copyright */}
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>

          {/* Center Socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              style={{ width: '34px', height: '34px' }}
              title="GitHub"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              style={{ width: '34px', height: '34px' }}
              title="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
            {personal.phone && (
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="btn-icon"
                style={{ width: '34px', height: '34px' }}
                title={`Call ${personal.phone}`}
              >
                <Phone size={15} />
              </a>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="btn-icon"
              style={{ width: '34px', height: '34px' }}
              title="Email"
            >
              <Mail size={15} />
            </a>
          </div>

          {/* Built With Info & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem'
              }}
            >
              <span>Built with</span>
              <Heart size={14} style={{ color: '#ef4444', fill: '#ef4444' }} />
              <span>and React + Vite</span>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-icon"
              style={{ width: '34px', height: '34px' }}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
