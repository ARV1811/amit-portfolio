import React from 'react';
import { Sparkles, Code2, Database, Rocket, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Story = () => {
  const { about } = portfolioData;

  return (
    <section id="story" style={{ padding: '3.5rem 0', position: 'relative' }}>
      <div className="container">
        
        <div className="story-card glass-card">
          <div className="story-header">
            <div className="story-badge">
              <Sparkles size={16} className="text-purple-400" />
              <span>About Me</span>
            </div>
            <h2 className="story-title">
              Engineering high-performance enterprise applications with passion.
            </h2>
          </div>

          <div className="story-content-grid">
            <div className="story-text-col">
              {about.bio.map((paragraph, idx) => (
                <p key={idx} className="story-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="story-pillars-col">
              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Code2 size={20} style={{ color: '#a855f7' }} />
                </div>
                <div>
                  <h4 className="pillar-title">Clean Backend Architecture</h4>
                  <p className="pillar-desc">ASP.NET Core, CQRS, RESTful APIs, and maintainable C# design patterns.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Database size={20} style={{ color: '#38bdf8' }} />
                </div>
                <div>
                  <h4 className="pillar-title">Optimized Database Systems</h4>
                  <p className="pillar-desc">Advanced SQL Server stored procedures, indexing, performance tuning & Entity Framework Core.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Rocket size={20} style={{ color: '#ec4899' }} />
                </div>
                <div>
                  <h4 className="pillar-title">End-to-End Delivery</h4>
                  <p className="pillar-desc">Seamless UI integration with React, Angular, DevExpress, and automated deployments.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .story-card {
          padding: 3rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 24px;
          box-shadow: var(--glass-shadow);
        }

        .story-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: var(--accent-purple);
          padding: 0.25rem 0.85rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .story-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          max-width: 800px;
          line-height: 1.3;
          margin-bottom: 2rem;
        }

        .story-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .story-paragraph {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .story-paragraph:last-child {
          margin-bottom: 0;
        }

        .story-pillars-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: var(--bg-pill);
          border: 1px solid var(--border-subtle);
          padding: 1rem 1.25rem;
          border-radius: 14px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .pillar-item:hover {
          transform: translateX(4px);
          border-color: var(--border-focus);
        }

        .pillar-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--bg-pill);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-title {
          font-size: 0.925rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .pillar-desc {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 820px) {
          .story-card {
            padding: 2rem 1.5rem;
          }
          .story-title {
            font-size: 1.45rem;
          }
          .story-content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};
