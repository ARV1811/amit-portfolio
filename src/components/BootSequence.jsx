import React, { useState, useEffect } from 'react';
import { Terminal, CheckCircle2, ChevronRight } from 'lucide-react';

const bootSteps = [
  { text: 'Initializing CoreCLR .NET 8 Runtime...', time: '0.04s' },
  { text: 'Mounting ASP.NET Core Web API & CQRS Pipelines...', time: '0.22s' },
  { text: 'Connecting SQL Server & Entity Framework Core...', time: '0.45s' },
  { text: 'Indexing C# Solutions, Projects & Architecture Blueprints...', time: '0.68s' },
  { text: 'Synchronizing Experience Timeline (Since Jan 2024 @ Citta)...', time: '0.90s' },
  { text: 'Launching UI Engine & Interactive .NET Terminal...', time: '1.15s' },
  { text: 'System Ready. Welcome to Amit Vanpariya Portfolio.', time: '1.35s' }
];

export const BootSequence = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Progress through boot steps
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < bootSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setTimeout(() => {
            handleFinish();
          }, 400);
          return prev;
        }
      });
    }, 180);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleFinish();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(stepInterval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleFinish = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete?.();
    }, 450);
  };

  const progressPercent = Math.min(100, Math.round(((currentStep + 1) / bootSteps.length) * 100));

  return (
    <div className={`boot-overlay ${isFading ? 'boot-fade-out' : ''}`}>
      <div className="boot-container">
        {/* Terminal Window Chrome */}
        <div className="boot-header">
          <div className="boot-window-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="boot-title">
            <Terminal size={13} className="text-purple-400" />
            <span>AmitOS v2.8 (x86_64-dotnet8)</span>
          </div>
          <button onClick={handleFinish} className="boot-skip-btn">
            Skip [Esc]
          </button>
        </div>

        {/* Boot Logs */}
        <div className="boot-logs">
          {bootSteps.slice(0, currentStep + 1).map((step, idx) => (
            <div key={idx} className="boot-log-row">
              <span className="boot-time">[{step.time}]</span>
              <span className="boot-text">{step.text}</span>
              <span className="boot-status">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span>OK</span>
              </span>
            </div>
          ))}
          {currentStep < bootSteps.length - 1 && (
            <div className="boot-cursor-line">
              <ChevronRight size={13} className="text-purple-400" />
              <span className="boot-cursor" />
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="boot-footer">
          <div className="boot-progress-bar">
            <div
              className="boot-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="boot-progress-text">
            <span>Loading system components...</span>
            <span className="progress-num">{progressPercent}%</span>
          </div>
        </div>
      </div>

      <style>{`
        .boot-overlay {
          position: fixed;
          inset: 0;
          background: #050508;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .boot-fade-out {
          opacity: 0;
          transform: scale(1.02);
          pointer-events: none;
        }

        .boot-container {
          width: 100%;
          max-width: 620px;
          background: rgba(14, 14, 22, 0.95);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 16px;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(147, 51, 234, 0.18);
          overflow: hidden;
          font-family: var(--font-mono, monospace);
        }

        .boot-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: rgba(22, 22, 34, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .boot-window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .boot-title {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          color: #cbd5e1;
          font-weight: 600;
        }

        .boot-skip-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #94a3b8;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .boot-skip-btn:hover {
          background: rgba(168, 85, 247, 0.25);
          color: #ffffff;
          border-color: rgba(168, 85, 247, 0.4);
        }

        .boot-logs {
          padding: 1.25rem 1.25rem 0.75rem 1.25rem;
          min-height: 210px;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .boot-log-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.775rem;
          animation: fadeInRow 0.2s ease-out;
        }

        @keyframes fadeInRow {
          from { opacity: 0; transform: translateX(-4px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .boot-time {
          color: #64748b;
          font-size: 0.725rem;
          flex-shrink: 0;
        }

        .boot-text {
          color: #e2e8f0;
          flex: 1;
        }

        .boot-status {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.7rem;
          color: #34d399;
          font-weight: 700;
          flex-shrink: 0;
        }

        .boot-cursor-line {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.25rem;
        }

        .boot-cursor {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: #a855f7;
          animation: blink 0.8s infinite;
        }

        .boot-footer {
          padding: 0.75rem 1.25rem 1.15rem 1.25rem;
          background: rgba(10, 10, 16, 0.8);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .boot-progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .boot-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #7c3aed, #a855f7, #38bdf8);
          transition: width 0.18s ease-out;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
        }

        .boot-progress-text {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          color: #94a3b8;
        }

        .progress-num {
          color: #c084fc;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};
