import React, { useState, useEffect, useRef } from 'react';
import {
  Search, Terminal, Sparkles, FolderGit2, Briefcase,
  UserCheck, Mail, Sun, Moon, ArrowRight, CornerDownLeft, X, Code2, RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CommandPalette = ({
  isOpen,
  onClose,
  theme,
  toggleTheme,
  onOpenContact,
  onOpenHowIBuiltThis,
  onReplayBoot
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'hire',
      title: 'sudo hire amit',
      category: 'Easter Egg',
      icon: Sparkles,
      color: '#a855f7',
      run: () => {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#a855f7', '#6366f1', '#10b981', '#38bdf8', '#f59e0b']
        });
        onOpenContact?.();
      }
    },
    {
      id: 'how-built',
      title: 'Developer Mode: How I Built This',
      category: 'Architecture',
      icon: Code2,
      color: '#38bdf8',
      run: () => onOpenHowIBuiltThis?.()
    },
    {
      id: 'boot',
      title: 'Replay System Boot Sequence',
      category: 'System',
      icon: RotateCcw,
      color: '#10b981',
      run: () => onReplayBoot?.()
    },
    {
      id: 'projects',
      title: 'View Projects',
      category: 'Navigation',
      icon: FolderGit2,
      color: '#8b5cf6',
      run: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'services',
      title: 'Services & Hire Me (Freelance Solutions)',
      category: 'Navigation',
      icon: Briefcase,
      color: '#ec4899',
      run: () => {
        const target = document.getElementById('hire-me') || document.getElementById('services');
        target?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'experience',
      title: 'View Experience Timeline',
      category: 'Navigation',
      icon: Briefcase,
      color: '#7c3aed',
      run: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'skills',
      title: 'Explore Tech Stack & Skills',
      category: 'Navigation',
      icon: Terminal,
      color: '#38bdf8',
      run: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`,
      category: 'Preferences',
      icon: theme === 'dark' ? Sun : Moon,
      color: '#f59e0b',
      run: () => toggleTheme?.()
    },
    {
      id: 'contact',
      title: 'Get In Touch / Contact Amit',
      category: 'Action',
      icon: Mail,
      color: '#ec4899',
      run: () => onOpenContact?.()
    }
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].run();
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div
        className="palette-modal"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="palette-search-row">
          <Search size={16} className="palette-search-icon" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="palette-input"
            spellCheck={false}
          />
          <span className="palette-esc-badge">ESC</span>
        </div>

        {/* Action Items List */}
        <div className="palette-list">
          {filtered.length === 0 ? (
            <div className="palette-empty">No matching commands found.</div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  className={`palette-item ${isSelected ? 'palette-item-selected' : ''}`}
                  onClick={() => {
                    item.run();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="palette-item-left">
                    <div className="palette-icon-box" style={{ color: item.color }}>
                      <Icon size={16} />
                    </div>
                    <div className="palette-item-info">
                      <span className="palette-item-title">{item.title}</span>
                      <span className="palette-item-cat">{item.category}</span>
                    </div>
                  </div>

                  <div className="palette-item-enter">
                    {isSelected && <CornerDownLeft size={12} />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Palette Footer Tip */}
        <div className="palette-footer">
          <span>Use <strong>↑</strong> <strong>↓</strong> to navigate</span>
          <span><strong>↵</strong> to select</span>
          <span><strong>ESC</strong> to close</span>
        </div>
      </div>

      <style>{`
        .palette-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5, 5, 10, 0.75);
          backdrop-filter: blur(10px);
          z-index: 99999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 15vh;
          animation: fadeIn 0.2s ease-out;
        }

        .palette-modal {
          width: 100%;
          max-width: 580px;
          background: rgba(18, 18, 26, 0.96);
          border: 1px solid rgba(168, 85, 247, 0.35);
          border-radius: 18px;
          box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(168, 85, 247, 0.2);
          overflow: hidden;
          animation: scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.97) translateY(-8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .palette-search-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
          background: rgba(24, 24, 36, 0.6);
        }

        .palette-search-icon {
          color: var(--accent-purple);
          flex-shrink: 0;
        }

        .palette-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: var(--font-main);
        }

        .palette-input::placeholder {
          color: var(--text-muted);
        }

        .palette-esc-badge {
          font-size: 0.65rem;
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-muted);
          padding: 0.2rem 0.45rem;
          border-radius: 4px;
          font-weight: 700;
          font-family: var(--font-mono);
        }

        .palette-list {
          max-height: 330px;
          overflow-y: auto;
          padding: 0.5rem;
        }

        .palette-empty {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .palette-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.65rem 0.85rem;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .palette-item-selected {
          background: rgba(168, 85, 247, 0.15);
          border: 1px solid rgba(168, 85, 247, 0.3);
        }

        .palette-item-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .palette-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .palette-item-info {
          display: flex;
          flex-direction: column;
        }

        .palette-item-title {
          font-size: 0.865rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .palette-item-cat {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .palette-item-enter {
          color: var(--accent-purple-light);
        }

        .palette-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.65rem 1.25rem;
          background: rgba(12, 12, 18, 0.85);
          border-top: 1px solid var(--border-subtle);
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .palette-footer strong {
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};
