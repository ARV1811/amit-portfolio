import React from 'react';
import {
  Cpu, Server, Database, Globe, Atom, Flame,
  Terminal, ShieldCheck, Cloud, Container, GitBranch, Layers
} from 'lucide-react';

const marqueeSkills = [
  { name: '.NET 8 / C#', icon: Cpu, color: '#a855f7' },
  { name: 'ASP.NET Core', icon: Server, color: '#8b5cf6' },
  { name: 'Entity Framework Core', icon: Database, color: '#6366f1' },
  { name: 'SQL Server', icon: Database, color: '#ef4444' },
  { name: 'Angular', icon: Flame, color: '#f43f5e' },
  { name: 'React', icon: Atom, color: '#38bdf8' },
  { name: 'RESTful Web APIs', icon: Globe, color: '#10b981' },
  { name: 'DevExpress Grid & Forms', icon: Layers, color: '#f59e0b' },
  { name: 'Azure Cloud', icon: Cloud, color: '#0284c7' },
  { name: 'Docker Containers', icon: Container, color: '#38bdf8' },
  { name: 'Git & GitHub CI/CD', icon: GitBranch, color: '#f97316' },
  { name: 'Node.js & Express', icon: Terminal, color: '#22c55e' }
];

export const TechMarquee = () => {
  // Duplicate array for seamless infinite marquee loop
  const duplicated = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {duplicated.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="marquee-pill">
              <span className="marquee-pill-icon" style={{ color: item.color }}>
                <Icon size={16} />
              </span>
              <span className="marquee-pill-text">{item.name}</span>
            </div>
          );
        })}
      </div>

      <style>{`
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
          padding: 1.25rem 0;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 1.25rem;
          animation: scrollLeft 32s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-full);
          background: rgba(18, 18, 26, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
          white-space: nowrap;
        }

        .marquee-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(168, 85, 247, 0.45);
          box-shadow: 0 8px 20px rgba(168, 85, 247, 0.2);
        }

        .marquee-pill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marquee-pill-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
