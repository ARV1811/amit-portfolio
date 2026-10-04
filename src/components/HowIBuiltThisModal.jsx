import React, { useEffect } from 'react';
import { X, Code2, Cpu, Zap, Layers, Database, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const HowIBuiltThisModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content built-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="built-modal-header">
          <div className="built-header-badge">
            <Code2 size={15} className="text-purple-400" />
            <span>DEVELOPER MODE — ARCHITECTURE SPECIFICATION</span>
          </div>
          <button onClick={onClose} className="btn-icon" aria-label="Close modal">
            <X size={19} />
          </button>
        </div>

        {/* Hero Banner */}
        <div className="built-hero-banner">
          <h2 className="built-hero-title">
            Engineering Behind This <span className="gradient-text-purple">Portfolio</span>
          </h2>
          <p className="built-hero-desc">
            This portfolio was built by hand to demonstrate enterprise frontend & backend architectural principles: high performance, modular state management, custom physics engines, and dynamic calculation algorithms.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="built-pillars-grid">
          {/* Pillar 1 */}
          <div className="built-pillar-card glass-card">
            <div className="pillar-top-row">
              <div className="pillar-icon-wrap" style={{ color: '#a855f7' }}>
                <Zap size={18} />
              </div>
              <span className="pillar-tech-tag">Performance & Math</span>
            </div>
            <h4 className="pillar-card-title">Custom 3D & Animation Physics</h4>
            <p className="pillar-card-body">
              Built with zero heavy animation dependencies. Uses pure <code>requestAnimationFrame</code> for 3D perspective tilts, lerp-interpolated cursor dynamics, and CSS hardware-accelerated transforms to maintain a steady 60–120 FPS with 0 Cumulative Layout Shift (CLS).
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="built-pillar-card glass-card">
            <div className="pillar-top-row">
              <div className="pillar-icon-wrap" style={{ color: '#38bdf8' }}>
                <Cpu size={18} />
              </div>
              <span className="pillar-tech-tag">Dynamic Logic</span>
            </div>
            <h4 className="pillar-card-title">Live Auto-Incrementing Experience</h4>
            <p className="pillar-card-body">
              Instead of hardcoded text, an algorithmic utility computes exact tenures from <strong>January 2024 (Citta Solutions)</strong> through the current date, automatically updating the Hero stats, timeline duration badges, and bio copy without manual code edits.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="built-pillar-card glass-card">
            <div className="pillar-top-row">
              <div className="pillar-icon-wrap" style={{ color: '#10b981' }}>
                <Layers size={18} />
              </div>
              <span className="pillar-tech-tag">Architecture</span>
            </div>
            <h4 className="pillar-card-title">Clean Modular Components</h4>
            <p className="pillar-card-body">
              Designed following clean architecture patterns: decoupled data layers (<code>portfolioData.js</code>), pure calculation utilities (<code>experience.js</code>), reusable micro-components (<code>TiltCard</code>, <code>AnimatedCounter</code>, <code>DotNetTerminal</code>), and single-source design tokens.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="built-pillar-card glass-card">
            <div className="pillar-top-row">
              <div className="pillar-icon-wrap" style={{ color: '#f59e0b' }}>
                <Database size={18} />
              </div>
              <span className="pillar-tech-tag">Full-Stack Heritage</span>
            </div>
            <h4 className="pillar-card-title">Enterprise .NET & SQL Foundation</h4>
            <p className="pillar-card-body">
              The project structures reflect enterprise backends built in production: ASP.NET Core Web APIs, SQL Server stored procedures, DevExpress controls, and RESTful paradigms deployed across multi-tier SaaS and ERP platforms.
            </p>
          </div>
        </div>

        {/* Tech Stack Summary Table */}
        <div className="built-tech-table-box glass-card">
          <h4 className="tech-table-title">System Blueprint & Dependencies</h4>
          <div className="tech-spec-row">
            <span className="tech-spec-label">Core Engine:</span>
            <span className="tech-spec-val">React 19 + Vite 8 (Ultra-fast HMR & ESM build)</span>
          </div>
          <div className="tech-spec-row">
            <span className="tech-spec-label">Styling System:</span>
            <span className="tech-spec-val">Handcrafted Vanilla CSS tokens, Glassmorphism & GPU transforms</span>
          </div>
          <div className="tech-spec-row">
            <span className="tech-spec-label">Icons & Visuals:</span>
            <span className="tech-spec-val">Lucide React Icons + Custom SVG vectors</span>
          </div>
          <div className="tech-spec-row">
            <span className="tech-spec-label">Linting & Quality:</span>
            <span className="tech-spec-val">Oxlint (Next-generation high-speed Rust-based linter)</span>
          </div>
          <div className="tech-spec-row">
            <span className="tech-spec-label">Shortcuts:</span>
            <span className="tech-spec-val"><code>Ctrl + K</code> Command Palette, Interactive .NET Terminal, Developer HUD</span>
          </div>
        </div>

        {/* Footer */}
        <div className="built-modal-footer">
          <div className="built-footer-status">
            <CheckCircle2 size={15} className="text-emerald-400" />
            <span>Built by Amit Vanpariya — 100% Production Ready</span>
          </div>
          <button onClick={onClose} className="btn-primary" style={{ padding: '0.45rem 1.25rem', fontSize: '0.85rem' }}>
            Back to Portfolio
          </button>
        </div>
      </div>

      <style>{`
        .built-modal-content {
          max-width: 780px !important;
          max-height: 88vh;
          overflow-y: auto;
          padding: 2rem 2.25rem !important;
          background: rgba(14, 14, 22, 0.98) !important;
          border: 1px solid rgba(168, 85, 247, 0.35) !important;
          border-radius: 24px !important;
          box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.85), 0 0 40px rgba(168, 85, 247, 0.25) !important;
        }

        .built-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .built-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: var(--accent-purple-light);
          padding: 0.25rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-mono);
          letter-spacing: 0.04em;
        }

        .built-hero-banner {
          margin-bottom: 2rem;
        }

        .built-hero-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .built-hero-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .built-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 680px) {
          .built-pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .built-pillar-card {
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
        }

        .pillar-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .pillar-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pillar-tech-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .pillar-card-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .pillar-card-body {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .pillar-card-body code {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-family: var(--font-mono);
        }

        .built-tech-table-box {
          padding: 1.25rem 1.5rem;
          background: rgba(10, 10, 16, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          margin-bottom: 2rem;
        }

        .tech-table-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.85rem;
          font-family: var(--font-mono);
        }

        .tech-spec-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.45rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.8rem;
        }

        .tech-spec-row:last-child {
          border-bottom: none;
        }

        .tech-spec-label {
          color: #64748b;
          font-weight: 600;
        }

        .tech-spec-val {
          color: #e2e8f0;
          font-weight: 500;
        }

        .tech-spec-val code {
          background: rgba(255, 255, 255, 0.08);
          padding: 0.1rem 0.3rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          color: #a855f7;
        }

        .built-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .built-footer-status {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: #34d399;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};
