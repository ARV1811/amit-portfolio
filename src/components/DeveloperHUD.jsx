import React from 'react';
import { Cpu, Database, Server, Calendar, CheckCircle2, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const DeveloperHUD = ({ isVisible }) => {
  const expStat = portfolioData.personal.stats.find(s => s.id === 'exp');
  const expValue = expStat ? expStat.value : '2.8+';

  return (
    <div className={`developer-hud-overlay ${isVisible ? 'hud-visible' : ''}`}>
      <div className="hud-content">
        <div className="hud-header">
          <Activity size={12} className="text-emerald-400 hud-pulse" />
          <span className="hud-title">SYSTEM DIAGNOSTICS</span>
          <span className="hud-status-badge">ONLINE</span>
        </div>

        <div className="hud-grid">
          <div className="hud-item">
            <span className="hud-label">ROLE</span>
            <span className="hud-val text-purple">.NET & C# Developer</span>
          </div>

          <div className="hud-item">
            <span className="hud-label">EXPERIENCE</span>
            <span className="hud-val text-emerald">{expValue} Years (Active)</span>
          </div>

          <div className="hud-item">
            <span className="hud-label">BACKEND</span>
            <span className="hud-val">ASP.NET Core / Web API</span>
          </div>

          <div className="hud-item">
            <span className="hud-label">DATABASE</span>
            <span className="hud-val text-blue">SQL Server / EF Core</span>
          </div>

          <div className="hud-item">
            <span className="hud-label">FRONTEND</span>
            <span className="hud-val">Angular / React</span>
          </div>

          <div className="hud-item">
            <span className="hud-label">AVAILABILITY</span>
            <span className="hud-val text-emerald">Immediate / Full-time</span>
          </div>
        </div>

        <div className="hud-footer">
          <span className="hud-metric">LATENCY: &lt;1ms</span>
          <span className="hud-metric">BUILD: CLEAN</span>
          <span className="hud-metric">ERRORS: 0</span>
        </div>
      </div>

      <style>{`
        .developer-hud-overlay {
          position: absolute;
          inset: 0;
          background: rgba(8, 8, 14, 0.92);
          backdrop-filter: blur(12px);
          border-radius: 28px;
          padding: 1.15rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 8;
          opacity: 0;
          pointer-events: none;
          transform: translateY(6px);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: var(--font-mono, monospace);
          border: 1px solid rgba(168, 85, 247, 0.4);
          box-shadow: inset 0 0 20px rgba(168, 85, 247, 0.2);
        }

        .hud-visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .hud-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.45rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hud-title {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #94a3b8;
        }

        .hud-pulse {
          animation: hudPulse 1.2s infinite ease-in-out;
        }

        @keyframes hudPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.5; }
        }

        .hud-status-badge {
          font-size: 0.585rem;
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          font-weight: 700;
        }

        .hud-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.45rem;
          margin: 0.4rem 0;
        }

        .hud-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.675rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.25rem 0.45rem;
          border-radius: 6px;
        }

        .hud-label {
          color: #64748b;
          font-weight: 600;
          font-size: 0.6rem;
        }

        .hud-val {
          color: #f8fafc;
          font-weight: 600;
        }

        .text-purple { color: #c084fc !important; }
        .text-emerald { color: #34d399 !important; }
        .text-blue { color: #38bdf8 !important; }

        .hud-footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.585rem;
          color: #475569;
          padding-top: 0.45rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.08);
        }

        .hud-metric {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};
