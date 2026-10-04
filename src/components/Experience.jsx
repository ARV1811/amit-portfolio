import React from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const Experience = () => {
  const { experience } = portfolioData;

  const getVersionTag = (id) => {
    switch (id) {
      case 'exp-1': return { ver: 'v3.0.0', label: 'Current Release', active: true };
      case 'exp-2': return { ver: 'v2.0.0', label: 'Enterprise Architecture', active: false };
      case 'exp-3': return { ver: 'v1.0.0', label: 'API Foundation', active: false };
      default: return { ver: 'v1.0.0', label: '', active: false };
    }
  };

  return (
    <section id="experience" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span>Experience</span>
          </h2>
          <p className="section-subtitle">
            A quick look at my professional journey and software engineering evolution.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="experience-timeline-container" data-cursor-label="TIMELINE">
          
          <div className="experience-grid">
            {experience.map((item, index) => {
              const version = getVersionTag(item.id);
              return (
                <React.Fragment key={item.id}>
                  
                  {/* Timeline Card with 3D Tilt */}
                  <TiltCard maxTilt={5} style={{ height: '100%' }}>
                    <div className="experience-card glass-card">
                      
                      {/* Version Evolution Pill */}
                      <div className="exp-version-bar">
                        <span className={`exp-ver-tag ${version.active ? 'ver-active' : ''}`}>
                          <code>{version.ver}</code> <span>· {version.label}</span>
                        </span>
                      </div>

                      {/* Top Bar: Company Logo & Info */}
                      <div className="exp-card-header">
                      <div
                        className="exp-company-logo"
                        style={{
                          background: item.id === 'exp-1' ? '#ffffff' : item.id === 'exp-2' ? '#ffffff' : '#4f46e5',
                          color: item.id === 'exp-3' ? '#ffffff' : '#0f172a'
                        }}
                      >
                        {item.id === 'exp-1' && (
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.75rem', color: '#000', lineHeight: 1 }}>
                            <span style={{ fontSize: '0.85rem', color: '#7c3aed' }}>⚡</span>
                          </div>
                        )}
                        {item.id === 'exp-2' && (
                          <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#0284c7' }}>
                            Citta
                          </div>
                        )}
                        {item.id === 'exp-3' && (
                          <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#ffffff' }}>
                            TN
                          </div>
                        )}
                      </div>

                      <div className="exp-company-details">
                        <h3 className="exp-company-name">{item.company}</h3>
                        <p className="exp-role-title">{item.role}</p>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="exp-period-wrap">
                      <Calendar size={13} className="text-purple-400" />
                      <span className="exp-period-text">{item.period}</span>
                      {item.duration && (
                        <span className="exp-duration-tag">· {item.duration}</span>
                      )}
                      {item.isCurrent && <span className="exp-current-tag">Present</span>}
                    </div>

                    {/* Description */}
                    <p className="exp-description">
                      {item.description}
                    </p>

                    {/* Highlights Bullet Points */}
                    <div className="exp-highlights-list">
                      {item.highlights && item.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="exp-highlight-item">
                          <ChevronRight size={13} style={{ color: '#a855f7', flexShrink: 0, marginTop: '2px' }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </TiltCard>

                {/* Connecting Node & Line (between cards on desktop) */}
                {index < experience.length - 1 && (
                  <div className="timeline-connector">
                    <div className="connector-line" />
                    <div className="connector-node" />
                    <div className="connector-line" />
                  </div>
                )}

              </React.Fragment>
                );
              })}
          </div>

          {/* Seamless Freelance & Contract Engineering Callout */}
          <div className="exp-freelance-banner glass-card">
            <div className="exp-freelance-left">
              <div className="exp-freelance-badge">
                <span className="live-status-dot" />
                <span>Freelance & Advisory Engineering</span>
              </div>
              <h4 className="exp-freelance-title">
                Available for Contract Software Engineering & Database Modernization
              </h4>
              <p className="exp-freelance-desc">
                In addition to my full-time roles, I partner with companies for custom ASP.NET Core applications,
                high-throughput REST APIs, SQL Server query tuning, and legacy system modernization.
              </p>
            </div>
            <a
              href="#hire-me"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('hire-me') || document.getElementById('services');
                target?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary exp-freelance-cta"
              data-cursor-label="SERVICES"
            >
              <span>Explore Services & Hire Me</span>
              <ChevronRight size={16} />
            </a>
          </div>

        </div>

      </div>

      <style>{`
        .experience-timeline-container {
          position: relative;
          margin-top: 2rem;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 0.5rem;
        }

        .experience-card {
          padding: 1.6rem 1.4rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: var(--glass-shadow);
        }

        .experience-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-focus);
          box-shadow: var(--glow-shadow);
        }

        .exp-card-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.85rem;
        }

        .exp-version-bar {
          margin-bottom: 0.75rem;
        }

        .exp-ver-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.685rem;
          font-family: var(--font-mono);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
          padding: 0.15rem 0.55rem;
          border-radius: 6px;
        }

        .exp-ver-tag code {
          font-weight: 700;
          color: var(--accent-purple-light);
        }

        .ver-active {
          background: rgba(16, 185, 129, 0.12);
          border-color: rgba(16, 185, 129, 0.35);
          color: #34d399;
        }

        .ver-active code {
          color: #34d399;
        }

        .exp-company-logo {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1px solid var(--border-subtle);
        }

        .exp-company-details {
          display: flex;
          flex-direction: column;
        }

        .exp-company-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .exp-role-title {
          font-size: 0.825rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .exp-period-wrap {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.85rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }

        .exp-period-text {
          font-size: 0.785rem;
          font-weight: 600;
        }

        .exp-duration-tag {
          font-size: 0.74rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .exp-current-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.7rem;
          background: rgba(168, 85, 247, 0.15);
          color: var(--accent-purple);
          border: 1px solid rgba(168, 85, 247, 0.3);
          padding: 0.15rem 0.55rem;
          border-radius: 9999px;
          font-weight: 700;
          box-shadow: 0 0 12px rgba(168, 85, 247, 0.2);
        }

        .exp-current-tag::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGreen 1.6s infinite;
        }

        @keyframes pulseGreen {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.8); }
        }

        .exp-description {
          font-size: 0.865rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .exp-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-top: auto;
        }

        .exp-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
          font-size: 0.785rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        /* Animated Glowing Timeline Connectors */
        .timeline-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
        }

        .connector-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, rgba(168, 85, 247, 0.2), #a855f7, #38bdf8, rgba(168, 85, 247, 0.2));
          background-size: 200% 100%;
          animation: beamGlow 2.8s linear infinite;
        }

        @keyframes beamGlow {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .connector-node {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--accent-purple);
          box-shadow: 0 0 12px var(--accent-purple-glow), 0 0 24px rgba(168, 85, 247, 0.4);
          flex-shrink: 0;
          position: relative;
        }

        .connector-node::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1.5px solid rgba(168, 85, 247, 0.45);
          animation: ringPulse 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        @keyframes ringPulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        .exp-freelance-banner {
          margin-top: 3rem;
          padding: 1.75rem 2.25rem;
          border-radius: 18px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          box-shadow: var(--glass-shadow);
          transition: all 0.3s ease;
        }

        .exp-freelance-banner:hover {
          border-color: var(--border-focus);
          transform: translateY(-2px);
          box-shadow: var(--glow-shadow);
        }

        .exp-freelance-left {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .exp-freelance-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          width: fit-content;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399;
          font-size: 0.725rem;
          font-weight: 700;
          font-family: var(--font-mono);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .exp-freelance-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .exp-freelance-desc {
          font-size: 0.885rem;
          color: var(--text-secondary);
          max-width: 680px;
          line-height: 1.55;
        }

        .exp-freelance-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.4rem;
          white-space: nowrap;
          text-decoration: none;
          flex-shrink: 0;
        }

        @media (max-width: 990px) {
          .experience-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .timeline-connector {
            display: none;
          }

          .exp-freelance-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.5rem;
            gap: 1.25rem;
          }

          .exp-freelance-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
