import React from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span>Experience</span>
          </h2>
          <p className="section-subtitle">
            A quick look at my professional journey so far.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="experience-timeline-container">
          
          <div className="experience-grid">
            {experience.map((item, index) => (
              <React.Fragment key={item.id}>
                
                {/* Timeline Card */}
                <div className="experience-card glass-card">
                  
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

                {/* Connecting Node & Line (between cards on desktop) */}
                {index < experience.length - 1 && (
                  <div className="timeline-connector">
                    <div className="connector-line" />
                    <div className="connector-node" />
                    <div className="connector-line" />
                  </div>
                )}

              </React.Fragment>
            ))}
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
        }

        .exp-period-text {
          font-size: 0.785rem;
          font-weight: 600;
        }

        .exp-current-tag {
          font-size: 0.7rem;
          background: rgba(168, 85, 247, 0.15);
          color: var(--accent-purple);
          border: 1px solid rgba(168, 85, 247, 0.3);
          padding: 0.1rem 0.45rem;
          border-radius: 4px;
          font-weight: 600;
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

        /* Timeline Connectors */
        .timeline-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
        }

        .connector-line {
          flex: 1;
          height: 2px;
          background: var(--border-subtle);
        }

        .connector-node {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent-purple);
          box-shadow: 0 0 10px var(--accent-purple-glow);
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
        }
      `}</style>
    </section>
  );
};
