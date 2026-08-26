import React from 'react';
import { Send, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactCta = ({ onOpenContact }) => {
  const handleCtaClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#a855f7', '#7c3aed', '#6366f1', '#ec4899']
    });
    onOpenContact();
  };

  return (
    <section id="contact" style={{ padding: '4rem 0 5rem 0', position: 'relative' }}>
      <div className="container">
        
        <div className="contact-cta-card glass-card">
          
          {/* Ambient Glow */}
          <div className="cta-glow-effect" />

          <div className="cta-left-wrap">
            <div className="cta-icon-badge">
              <Send size={24} className="text-purple-300" />
            </div>

            <div className="cta-text-content">
              <h2 className="cta-headline">
                Let's build something <span className="gradient-text-purple">amazing</span> together!
              </h2>
              <p className="cta-subtext">
                I'm currently open to new opportunities and interesting projects.
              </p>
            </div>
          </div>

          <div className="cta-right-wrap">
            <button onClick={handleCtaClick} className="btn-primary cta-btn">
              <span>Get In Touch</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>

      <style>{`
        .contact-cta-card {
          position: relative;
          padding: 2.25rem 2.75rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          box-shadow: var(--glass-shadow);
          overflow: hidden;
        }

        .cta-glow-effect {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--accent-purple-glow) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }

        .cta-left-wrap {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .cta-icon-badge {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: rgba(147, 51, 234, 0.15);
          border: 1px solid rgba(168, 85, 247, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--accent-purple);
        }

        .cta-text-content {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .cta-headline {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .cta-subtext {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .cta-right-wrap {
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .cta-btn {
          padding: 0.85rem 1.85rem;
          font-size: 1rem;
          border-radius: var(--radius-full);
          font-weight: 700;
        }

        @media (max-width: 820px) {
          .contact-cta-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 2rem;
            gap: 1.75rem;
          }

          .cta-right-wrap {
            width: 100%;
          }

          .cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
