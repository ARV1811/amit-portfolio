import React, { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const currentDisplayImage = project.gallery && project.gallery[activeImageIndex]
    ? project.gallery[activeImageIndex].image
    : project.image;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-icon"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 10,
            background: 'rgba(0, 0, 0, 0.65)'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Project Hero / Active Gallery Image */}
        <div style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)', background: '#0a0a0e' }}>
          <img
            src={currentDisplayImage}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#0d0d14' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(17, 17, 23, 0.1) 0%, rgba(17, 17, 23, 0.85) 100%)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.5rem',
              right: '1.5rem',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  background: '#7c3aed',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  marginBottom: '0.5rem'
                }}
              >
                PROJECT #{project.number}
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                {project.title}
              </h2>
              <p style={{ color: '#c084fc', fontSize: '0.95rem', fontWeight: 500 }}>
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery Switcher (if multiple images exist) */}
        {project.gallery && project.gallery.length > 1 && (
          <div
            style={{
              padding: '1rem 2rem 0.5rem 2rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <ImageIcon size={14} style={{ color: '#a855f7' }} />
              <span>Project Screenshots & Views</span>
            </div>
            
            <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              {project.gallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.45rem 0.85rem',
                    background: activeImageIndex === idx ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${activeImageIndex === idx ? 'rgba(168, 85, 247, 0.6)' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '8px',
                    color: activeImageIndex === idx ? '#ffffff' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '0.825rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: activeImageIndex === idx ? '#c084fc' : 'transparent', border: activeImageIndex === idx ? 'none' : '1px solid var(--text-muted)' }} />
                  <span>{item.title}</span>
                </button>
              ))}
            </div>

            {project.gallery[activeImageIndex]?.description && (
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem', fontStyle: 'italic' }}>
                💡 {project.gallery[activeImageIndex].description}
              </p>
            )}
          </div>
        )}

        {/* Modal Body */}
        <div style={{ padding: '1.75rem 2rem' }}>
          
          {/* Tech Stack Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'var(--bg-pill)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} className="text-purple-400" />
              Project Overview
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} style={{ color: '#10b981' }} />
                Key Highlights & Features
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem' }}>
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      background: 'var(--bg-pill)',
                      border: '1px solid var(--border-subtle)',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px'
                    }}
                  >
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-purple)', marginTop: '0.55rem', flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={18} style={{ color: '#38bdf8' }} />
                Technical Architecture
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '1rem', borderRadius: '10px' }}>
                {project.architecture}
              </p>
            </div>
          )}

          {/* Action Links */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.875rem' }}
              >
                <GithubIcon size={16} />
                <span>View Code</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="btn-primary"
              style={{ fontSize: '0.875rem' }}
            >
              <span>Close Case Study</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
