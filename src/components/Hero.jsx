import React, { useState } from 'react';
import { Mail, Phone, Calendar, FolderGit2, Users2, Rocket, ArrowRight, Sparkles, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { AnimatedCounter } from './AnimatedCounter';
import { RoleTyping } from './RoleTyping';
import { DotNetTerminal } from './DotNetTerminal';
import { DeveloperHUD } from './DeveloperHUD';

export const Hero = ({ onOpenContact, onShowToast }) => {
  const { personal } = portfolioData;
  const [isHudHovered, setIsHudHovered] = useState(false);

  const handleContactClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight
      },
      colors: ['#a855f7', '#6366f1', '#38bdf8', '#ec4899', '#ffffff']
    });
    onOpenContact?.();
  };

  const copyEmail = (e) => {
    navigator.clipboard.writeText(personal.email);
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 35,
      spread: 55,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight
      },
      colors: ['#a855f7', '#10b981', '#ffffff']
    });
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

      {/* Subtle Floating Code Syntax Tokens */}
      <div className="floating-code-token token-1" aria-hidden="true">C# 12</div>
      <div className="floating-code-token token-2" aria-hidden="true">.NET 8</div>
      <div className="floating-code-token token-3" aria-hidden="true">&lt;async / await&gt;</div>
      <div className="floating-code-token token-4" aria-hidden="true">SELECT * FROM Data</div>
      <div className="floating-code-token token-5" aria-hidden="true">.Where(x =&gt; x.Active)</div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          
          {/* 1. Left Avatar Card with 3D Tilt, Developer HUD & Floating Tech Badges */}
          <div
            className="hero-avatar-wrapper"
            data-cursor-label="DEVELOPER HUD"
            onMouseEnter={() => setIsHudHovered(true)}
            onMouseLeave={() => setIsHudHovered(false)}
          >
            <TiltCard maxTilt={9} className="hero-avatar-tilt-wrapper">
              <div className="hero-avatar-card">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="hero-avatar-img"
                />
                <div className="hero-avatar-glow" />

                {/* Developer HUD System Diagnostics Overlay */}
                <DeveloperHUD isVisible={isHudHovered} />

                {/* HUD Trigger Indicator Pill */}
                <div className="hud-indicator-pill">
                  <Activity size={10} className="text-emerald-400" />
                  <span>Developer HUD</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* 2. Middle Content Area with Dynamic Typing */}
          <div className="hero-content">
            <div className="hero-greeting-row">
              <div className="hero-greeting">
                <span>{personal.greeting}</span>
                <span className="wave-hand">👋</span>
              </div>
              {personal.availableForHire && (
                <div className="hero-available-badge">
                  <span className="pulse-radar" />
                  <span>Available for Hire</span>
                </div>
              )}
            </div>

            <h1 className="hero-name">
              Amit <span className="gradient-text-purple">Vanpariya</span>
            </h1>

            <h2 className="hero-role">
              <RoleTyping />
            </h2>

            <p className="hero-tagline">
              {personal.tagline}
            </p>

            {/* Quick Action Buttons */}
            <div className="hero-actions">
              <button onClick={handleContactClick} className="btn-contact-live">
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

          {/* 3. Right Stats Card with 3D Tilt & Animated Counters */}
          <div className="hero-stats-wrapper">
            <TiltCard maxTilt={7} className="hero-stats-tilt-wrapper">
              <div className="hero-stats-card glass-card">
                {personal.stats.map((stat) => (
                  <div key={stat.id} className="stat-row" title={stat.tooltip || undefined}>
                    <div className="stat-icon-box" style={{ color: stat.color }}>
                      {getStatIcon(stat.icon)}
                    </div>
                    <div className="stat-info">
                      <span className="stat-value">
                        <AnimatedCounter value={stat.value} />
                      </span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>

        </div>

        {/* 4. Interactive .NET Terminal Playground */}
        <div className="hero-terminal-section">
          <div className="terminal-section-intro">
            <div className="terminal-intro-badge">
              <span className="terminal-live-dot" />
              <span>Interactive .NET Sandbox</span>
            </div>
            <p className="terminal-intro-sub">
              Click <strong>"Run (F5)"</strong> to build and execute live C# code!
            </p>
          </div>
          <DotNetTerminal />
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
          position: relative;
        }

        .hero-avatar-tilt-wrapper {
          border-radius: 28px;
        }

        .hud-indicator-pill {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(14, 14, 22, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(168, 85, 247, 0.35);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: #e2e8f0;
          pointer-events: none;
          z-index: 4;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: opacity 0.2s ease;
        }

        .hero-avatar-card:hover .hud-indicator-pill {
          opacity: 0;
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

        .hero-greeting-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.6rem;
          flex-wrap: wrap;
        }

        .hero-greeting {
          font-size: 1.15rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 500;
        }

        .hero-available-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .pulse-radar {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: radarWave 1.8s infinite ease-out;
        }

        @keyframes radarWave {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.6; }
        }

        /* Floating Code Syntax Tokens */
        .floating-code-token {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 0.785rem;
          color: rgba(168, 85, 247, 0.35);
          pointer-events: none;
          z-index: 0;
          user-select: none;
          white-space: nowrap;
        }

        .token-1 {
          top: 14%;
          left: 5%;
          animation: floatToken 9s ease-in-out infinite;
        }

        .token-2 {
          top: 48%;
          left: 3%;
          animation: floatToken 11s ease-in-out infinite 2s;
        }

        .token-3 {
          top: 82%;
          left: 8%;
          animation: floatToken 10s ease-in-out infinite 1s;
        }

        .token-4 {
          top: 18%;
          right: 4%;
          animation: floatToken 12s ease-in-out infinite 3s;
        }

        .token-5 {
          top: 78%;
          right: 5%;
          animation: floatToken 10.5s ease-in-out infinite 1.5s;
        }

        @keyframes floatToken {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-16px) rotate(2deg);
            opacity: 0.45;
          }
        }

        /* Terminal Section Header */
        .hero-terminal-section {
          margin-top: 3.5rem;
          position: relative;
          z-index: 1;
        }

        .terminal-section-intro {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .terminal-intro-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: var(--accent-purple-light);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.775rem;
          font-weight: 700;
        }

        .terminal-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #a855f7;
          box-shadow: 0 0 8px #a855f7;
        }

        .terminal-intro-sub {
          font-size: 0.825rem;
          color: var(--text-muted);
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
