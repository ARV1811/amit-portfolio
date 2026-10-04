import React from 'react';
import {
  Atom,
  Layers,
  FileCode2,
  Palette,
  Box,
  Flame,
  Cpu,
  Server,
  Globe,
  Terminal,
  Route,
  Zap,
  Network,
  LayoutGrid,
  Database,
  HardDrive,
  Sparkles,
  Droplets,
  Boxes,
  ShieldCheck,
  Cloud,
  Triangle,
  Container,
  GitPullRequest,
  CloudSun,
  Gauge,
  GitBranch,
  Send,
  CheckCircle2,
  Award,
  PenTool
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechMarquee } from './TechMarquee';

export const Skills = () => {
  const { skillCategories } = portfolioData;

  const renderIcon = (iconName, color) => {
    const iconProps = { size: 15, style: { color } };
    switch (iconName) {
      case 'Atom': return <Atom {...iconProps} />;
      case 'Layers': return <Layers {...iconProps} />;
      case 'FileCode2': return <FileCode2 {...iconProps} />;
      case 'Palette': return <Palette {...iconProps} />;
      case 'Box': return <Box {...iconProps} />;
      case 'Flame': return <Flame {...iconProps} />;
      case 'Cpu': return <Cpu {...iconProps} />;
      case 'Server': return <Server {...iconProps} />;
      case 'Globe': return <Globe {...iconProps} />;
      case 'Terminal': return <Terminal {...iconProps} />;
      case 'Route': return <Route {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      case 'Network': return <Network {...iconProps} />;
      case 'LayoutGrid': return <LayoutGrid {...iconProps} />;
      case 'Database': return <Database {...iconProps} />;
      case 'HardDrive': return <HardDrive {...iconProps} />;
      case 'Sparkles': return <Sparkles {...iconProps} />;
      case 'Droplets': return <Droplets {...iconProps} />;
      case 'Boxes': return <Boxes {...iconProps} />;
      case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
      case 'Cloud': return <Cloud {...iconProps} />;
      case 'Triangle': return <Triangle {...iconProps} />;
      case 'Container': return <Container {...iconProps} />;
      case 'GitPullRequest': return <GitPullRequest {...iconProps} />;
      case 'CloudSun': return <CloudSun {...iconProps} />;
      case 'Gauge': return <Gauge {...iconProps} />;
      case 'GitBranch': return <GitBranch {...iconProps} />;
      case 'Send': return <Send {...iconProps} />;
      case 'CheckCircle2': return <CheckCircle2 {...iconProps} />;
      case 'Award': return <Award {...iconProps} />;
      case 'PenTool': return <PenTool {...iconProps} />;
      default: return <Sparkles {...iconProps} />;
    }
  };

  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="dim">My</span> <span>Skills</span>
          </h2>
          <p className="section-subtitle">
            This is a curated shortlist of the tools I use most to ship production-ready products. I keep this section focused on the technologies I use most in real projects.
          </p>
        </div>

        {/* Continuous Tech Marquee */}
        <div style={{ marginBottom: '2.5rem' }}>
          <TechMarquee />
        </div>

        {/* Skills Categories Rows */}
        <div className="skills-stack">
          {skillCategories.map((group) => (
            <div key={group.category} className="skills-category-row">
              <div className="category-label-col">
                <span className="category-label">{group.category}</span>
              </div>
              
              <div className="skills-badges-wrap">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    <span className="skill-icon">{renderIcon(skill.icon, skill.color)}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .skills-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skills-category-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          align-items: center;
          gap: 1.5rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        .skills-category-row:last-child {
          border-bottom: none;
        }

        .category-label-col {
          display: flex;
          align-items: center;
        }

        .category-label {
          font-size: 0.925rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .skills-badges-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.835rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
          box-shadow: var(--glass-shadow);
        }

        .skill-pill:hover {
          background: var(--bg-card-hover);
          border-color: var(--border-focus);
          transform: translateY(-2px);
          box-shadow: var(--glow-shadow);
        }

        .skill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .skills-category-row {
            grid-template-columns: 1fr;
            gap: 0.75rem;
            padding: 1.1rem 0;
          }
        }
      `}</style>
    </section>
  );
};
