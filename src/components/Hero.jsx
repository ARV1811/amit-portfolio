import React from 'react';
import { Mail, Phone, Calendar, FolderGit2, Users2, Rocket, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenContact, onShowToast }) => {
  const { personal } = portfolioData;

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    onShowToast?.('Email copied to clipboard!');
  };

  const getStatIcon = (name) => {
    switch (name) {
      case 'Calendar':
        return <Calendar size={20} className="text-purple-400" />;
      case 'FolderGit2':
        return <FolderGit2 size={20} className="text-purple-400" />;
      case 'Users2':
        return <Users2 size={20} className="text-purple-400" />;
      case 'Rocket':
        return <Rocket size={20} className="text-purple-400" />;
      default:
        return <Calendar size={20} />;
    }
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: '7.5rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          
          {/* 1. Left Avatar Card */}
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-card">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="hero-avatar-img"
              />
              <div className="hero-avatar-glow" />
            </div>
          </div>

          {/* 2. Middle Content Area */}
          <div className="hero-content">
            <div className="hero-greeting">
              <span>{personal.greeting}</span>
              <span className="wave-hand">👋</span>
            </div>

            <h1 className="hero-name">
              Amit <span className="gradient-text-purple">Vanpariya</span>
            </h1>

            <h2 className="hero-role">
              <span className="role-highlight">.NET & C#</span> Developer
            </h2>

            <p className="hero-tagline">
              {personal.tagline}
            </p>

            {/* Quick Action Buttons */}
            <div className="hero-actions">
              <button onClick={onOpenContact} className="btn-contact-live">
                <span className="pulse-dot" />
                <span>Contact me</span>
              </button>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="btn-icon hero-icon-btn"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={19} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-icon hero-icon-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={19} />
              </a>

              {personal.phone && (
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="btn-icon hero-icon-btn"
                  title={`Call ${personal.phone}`}
                  aria-label={`Call ${personal.phone}`}
                >
                  <Phone size={19} />
                </a>
              )}

              <button
                onClick={copyEmail}
                className="btn-icon hero-icon-btn"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                <Mail size={19} />
              </button>
            </div>
          </div>

          {/* 3. Right Stats Card */}
          <div className="hero-stats-wrapper">
            <div className="hero-stats-card glass-card">
              {personal.stats.map((stat) => (
                <div key={stat.id} className="stat-row">
                  <div className="stat-icon-box" style={{ color: stat.color }}>
                    {getStatIcon(stat.icon)}
                  </div>
                  <div className="stat-info">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 280px 1fr 260px;
          gap: 2.5rem;
          align-items: center;
        }

        .hero-avatar-wrapper {
          display: flex;
          justify-content: center;
        }

        .hero-avatar-card {
          position: relative;
          width: 270px;
          height: 340px;
          border-radius: 28px;
          overflow: hidden;
          background: var(--bg-card);
          border: 1.5px solid var(--border-subtle);
          box-shadow: var(--glass-shadow);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .hero-avatar-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: var(--glow-shadow);
        }

        .hero-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 15%;
          display: block;
        }

        .hero-avatar-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 70%, rgba(0, 0, 0, 0.45) 100%);
          pointer-events: none;
        }

        .hero-greeting {
          font-size: 1.15rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.4rem;
          font-weight: 500;
        }

        .wave-hand {
          display: inline-block;
          animation: wave 2.2s infinite ease-in-out;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        .hero-name {
          font-size: 3.25rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
        }

        .hero-role {
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
        }

        .role-highlight {
          color: var(--accent-purple);
        }

        .hero-tagline {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 460px;
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-contact-live {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-card);
          color: var(--text-primary);
          padding: 0.65rem 1.4rem;
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          font-weight: 600;
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: var(--glass-shadow);
          backdrop-filter: blur(10px);
        }

        .btn-contact-live:hover {
          background: var(--bg-card-hover);
          border-color: var(--border-focus);
          transform: translateY(-2px);
          box-shadow: var(--glow-shadow);
        }

        .hero-icon-btn {
          width: 44px;
          height: 44px;
        }

        .hero-stats-card {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--glass-shadow);
        }

        .stat-row {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          transition: transform 0.2s ease;
        }

        .stat-row:hover {
          transform: translateX(4px);
        }

        .stat-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--bg-pill);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.825rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 1040px) {
          .hero-grid {
            grid-template-columns: 260px 1fr;
          }
          .hero-stats-wrapper {
            grid-column: span 2;
          }
          .hero-stats-card {
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-avatar-wrapper {
            margin: 0 auto;
          }
          .hero-greeting {
            justify-content: center;
          }
          .hero-name {
            font-size: 2.5rem;
          }
          .hero-role {
            font-size: 1.4rem;
          }
          .hero-tagline {
            margin: 0 auto 1.75rem auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-stats-wrapper {
            grid-column: span 1;
          }
          .hero-stats-card {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};
