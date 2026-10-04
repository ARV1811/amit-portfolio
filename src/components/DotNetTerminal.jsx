import React, { useState, useRef, useEffect } from 'react';
import { Play, Copy, Check, Terminal, RefreshCw, Code2, CornerDownLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const DotNetTerminal = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'AmitOS CLI Terminal [Version 2.8.0] - Type "help" or click quick commands below.'
    }
  ]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [pastCmds, setPastCmds] = useState([]);
  
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const expStat = portfolioData.personal.stats.find(s => s.id === 'exp');
  const expValue = expStat ? expStat.value : '2.8+';

  const csharpCode = `using System;
using System.Collections.Generic;

namespace AmitVanpariya.Portfolio;

public class Developer
{
    public string Name { get; set; } = "Amit Vanpariya";
    public string Role { get; set; } = ".NET & C# Developer";
    public string Experience { get; set; } = "${expValue} Years";
    public bool AvailableForHire { get; set; } = true;

    public List<string> TechStack => new()
    {
        "ASP.NET Core", "C#", "Entity Framework Core",
        "SQL Server", "Angular", "React", "REST APIs"
    };

    public void BuildEnterpriseSolution()
    {
        Console.WriteLine("🚀 Architecting high-throughput backend...");
        Console.WriteLine("⚡ Optimizing SQL queries and DevExpress grids...");
        Console.WriteLine("✨ 0 Errors, 0 Warnings — Production Ready!");
    }
}`;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    setPastCmds((prev) => [...prev, raw]);
    setCmdIndex(-1);

    const newHistory = [...history, { type: 'input', text: `amit@portfolio:~$ ${raw}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
  • dotnet run        - Compiles and runs DeveloperProfile.cs
  • about             - Summary of Amit's background & vision
  • skills            - Overview of core backend, frontend & data tech
  • projects          - Highlights major enterprise applications
  • experience        - Career timeline (Citta Solutions, Mission Dev)
  • contact           - Direct contact channels (Email, Phone, LinkedIn)
  • github            - GitHub profile and repository link
  • sudo hire amit    - ⭐ Priority direct hire sequence (Easter Egg)
  • clear             - Clears terminal output`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `Amit Vanpariya is a dedicated .NET & C# Developer with ${expValue} years of active experience specializing in high-throughput enterprise backends, SQL Server optimization, and modern Angular/React SPAs. Focused on scalable architectures, clean code, and business impact.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `CORE STACK:
  • Backend:  .NET 8, C#, ASP.NET Core Web API, EF Core, CQRS, MediatR
  • Database: MS SQL Server, Stored Procedures, Index Tuning, PostgreSQL
  • Frontend: Angular, React, TypeScript, DevExpress Grid Components
  • Cloud:    Microsoft Azure, Docker, GitHub Actions CI/CD`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `FEATURED ENTERPRISE SYSTEMS:
  1. Ameet Opticals            - Optical Store SaaS & Inventory Billing (.NET + Angular)
  2. Tikawoo Web Portal        - Enterprise CRM/ERP & Credit Risk Engine (ASP.NET Core)
  3. Big Box Footwear          - Multi-branch Retail & Commission POS (ASP.NET MVC)
  4. Passenger Transport Fleet - Mission software transit dispatch system (DevExpress)`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `CAREER TIMELINE (${expValue} Years Total):
  • May 2025 - Present : Junior Software Developer @ Mission Dev India Pvt Ltd
  • Jan 2024 - Mar 2025: Junior Software Developer @ Citta Solutions Pvt Ltd (15 mos)
  • Jul 2023 - Nov 2023: Junior Web Developer @ Tech Nishal (5 mos)`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `GET IN TOUCH:
  • Email:    ${portfolioData.personal.email}
  • Phone:    ${portfolioData.personal.phone}
  • LinkedIn: ${portfolioData.personal.linkedin}
  • GitHub:   ${portfolioData.personal.github}
  • Status:   100% Ready for new opportunities`
        });
        break;

      case 'github':
        newHistory.push({
          type: 'output',
          text: `Opening GitHub: ${portfolioData.personal.github}...`
        });
        window.open(portfolioData.personal.github, '_blank');
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo hire amit':
      case 'hire':
      case 'hire amit':
        newHistory.push({
          type: 'success',
          text: `🎉 EXCELLENT DECISION!
[AUTH] Privileges elevated: root / hiring-manager
[INFO] Initiating direct hire onboarding protocol...
[SUCCESS] Amit Vanpariya is ready to deliver high-performance .NET solutions for your team!`
        });
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.65 },
          colors: ['#a855f7', '#6366f1', '#10b981', '#38bdf8', '#f59e0b']
        });
        break;

      case 'dotnet run':
      case 'run':
        setIsRunning(true);
        setTimeout(() => {
          setIsRunning(false);
          setHistory((prev) => [
            ...prev,
            {
              type: 'success',
              text: `✔ [Build] Compiled successfully in 0.38s
🚀 Architecting high-throughput backend...
⚡ Optimizing SQL queries and DevExpress grids...
✨ 0 Errors, 0 Warnings — Production Ready!`
            }
          ]);
          confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#a855f7', '#6366f1', '#10b981', '#38bdf8']
          });
        }, 500);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${raw}". Type "help" to see available safe commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (pastCmds.length > 0) {
        const nextIndex = cmdIndex + 1 < pastCmds.length ? cmdIndex + 1 : cmdIndex;
        setCmdIndex(nextIndex);
        setInputVal(pastCmds[pastCmds.length - 1 - nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (cmdIndex > 0) {
        const nextIndex = cmdIndex - 1;
        setCmdIndex(nextIndex);
        setInputVal(pastCmds[pastCmds.length - 1 - nextIndex] || '');
      } else {
        setCmdIndex(-1);
        setInputVal('');
      }
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(csharpCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickCommands = ['help', 'about', 'skills', 'projects', 'contact', 'dotnet run', 'clear'];

  return (
    <div
      className="terminal-container glass-card"
      data-cursor-label="TERMINAL"
    >
      {/* Terminal Title Bar */}
      <div className="terminal-header">
        <div className="terminal-window-buttons">
          <span className="window-btn btn-close" />
          <span className="window-btn btn-minimize" />
          <span className="window-btn btn-maximize" />
        </div>

        <div className="terminal-tab">
          <Code2 size={13} className="text-purple-400" />
          <span className="tab-filename">DeveloperProfile.cs</span>
          <span className="tab-pill">C# 12 / .NET 8</span>
        </div>

        <div className="terminal-actions">
          <button
            onClick={copyCode}
            className="terminal-btn-icon"
            title="Copy C# Code"
            data-cursor-label="COPY"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span className="btn-text">{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          <button
            onClick={() => executeCommand('dotnet run')}
            disabled={isRunning}
            className="terminal-btn-run"
            title="Execute Code (dotnet run)"
            data-cursor-label="RUN F5"
          >
            {isRunning ? (
              <RefreshCw size={13} className="spin-icon" />
            ) : (
              <Play size={13} />
            )}
            <span>{isRunning ? 'Compiling...' : 'Run (F5)'}</span>
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="terminal-body">
        <pre className="code-block">
          <code>
            <span className="token-keyword">using</span> <span className="token-namespace">System</span>;{'\n'}
            <span className="token-keyword">using</span> <span className="token-namespace">System.Collections.Generic</span>;{'\n\n'}
            <span className="token-keyword">namespace</span> <span className="token-namespace">AmitVanpariya.Portfolio</span>;{'\n\n'}
            <span className="token-keyword">public class</span> <span className="token-class">Developer</span>{'\n'}
            {'{'}{'\n'}
            {'    '}<span className="token-keyword">public string</span> Name {'{'} <span className="token-keyword">get</span>; <span className="token-keyword">set</span>; {'}'} = <span className="token-string">"Amit Vanpariya"</span>;{'\n'}
            {'    '}<span className="token-keyword">public string</span> Role {'{'} <span className="token-keyword">get</span>; <span className="token-keyword">set</span>; {'}'} = <span className="token-string">".NET & C# Developer"</span>;{'\n'}
            {'    '}<span className="token-keyword">public string</span> Experience {'{'} <span className="token-keyword">get</span>; <span className="token-keyword">set</span>; {'}'} = <span className="token-string">"{expValue} Years"</span>;{'\n'}
            {'    '}<span className="token-keyword">public bool</span> AvailableForHire {'{'} <span className="token-keyword">get</span>; <span className="token-keyword">set</span>; {'}'} = <span className="token-keyword">true</span>;{'\n\n'}
            {'    '}<span className="token-keyword">public List</span>&lt;<span className="token-keyword">string</span>&gt; TechStack =&gt; <span className="token-keyword">new</span>(){'\n'}
            {'    '}{'{'}{'\n'}
            {'        '}<span className="token-string">"ASP.NET Core"</span>, <span className="token-string">"C#"</span>, <span className="token-string">"Entity Framework Core"</span>,{'\n'}
            {'        '}<span className="token-string">"SQL Server"</span>, <span className="token-string">"Angular"</span>, <span className="token-string">"React"</span>, <span className="token-string">"REST APIs"</span>{'\n'}
            {'    '}{'}'};{'\n\n'}
            {'    '}<span className="token-keyword">public void</span> <span className="token-method">BuildEnterpriseSolution</span>(){'\n'}
            {'    '}{'{'}{'\n'}
            {'        '}<span className="token-class">Console</span>.<span className="token-method">WriteLine</span>(<span className="token-string">"🚀 Architecting high-throughput backend..."</span>);{'\n'}
            {'        '}<span className="token-class">Console</span>.<span className="token-method">WriteLine</span>(<span className="token-string">"⚡ Optimizing SQL queries and DevExpress grids..."</span>);{'\n'}
            {'        '}<span className="token-class">Console</span>.<span className="token-method">WriteLine</span>(<span className="token-string">"✨ 0 Errors, 0 Warnings — Production Ready!"</span>);{'\n'}
            {'    '}{'}'}{'\n'}
            {'}'}
          </code>
        </pre>

        {/* Live Interactive Terminal Console */}
        <div className="cli-terminal-pane">
          <div className="cli-header">
            <div className="cli-title-wrap">
              <Terminal size={12} className="text-emerald-400" />
              <span>INTERACTIVE CLI — type commands or click below</span>
            </div>

            {/* Quick Command Pills */}
            <div className="quick-cmd-pills">
              {quickCommands.map((qCmd) => (
                <button
                  key={qCmd}
                  onClick={() => executeCommand(qCmd)}
                  className="quick-cmd-btn"
                >
                  {qCmd}
                </button>
              ))}
            </div>
          </div>

          <div className="cli-history">
            {history.map((item, idx) => (
              <div key={idx} className={`cli-line cli-${item.type}`}>
                <pre className="cli-text">{item.text}</pre>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Prompt Input */}
          <div className="cli-prompt-row">
            <span className="cli-prompt-label">amit@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type help, about, skills, sudo hire amit..."
              className="cli-prompt-input"
              spellCheck={false}
              autoComplete="off"
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="cli-enter-btn"
              title="Execute Command"
            >
              <CornerDownLeft size={12} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .terminal-container {
          background: rgba(14, 14, 20, 0.95);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.65), 0 0 30px rgba(168, 85, 247, 0.12);
          margin-top: 1rem;
          transition: border-color 0.3s ease;
        }

        .terminal-container:hover {
          border-color: rgba(168, 85, 247, 0.4);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          background: rgba(22, 22, 32, 0.85);
          border-bottom: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .terminal-window-buttons {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .window-btn {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          display: inline-block;
        }

        .btn-close { background: #ef4444; }
        .btn-minimize { background: #f59e0b; }
        .btn-maximize { background: #10b981; }

        .terminal-tab {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.3rem 0.75rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-family: var(--font-mono);
          font-size: 0.785rem;
          color: var(--text-primary);
        }

        .tab-filename {
          font-weight: 600;
        }

        .tab-pill {
          font-size: 0.65rem;
          background: rgba(168, 85, 247, 0.2);
          color: var(--accent-purple-light);
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          font-weight: 700;
        }

        .terminal-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .terminal-btn-icon {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.35rem 0.75rem;
          border-radius: 7px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .terminal-btn-icon:hover {
          background: rgba(255, 255, 255, 0.12);
          color: var(--text-primary);
        }

        .terminal-btn-run {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          border: none;
          color: #ffffff;
          padding: 0.35rem 0.9rem;
          border-radius: 7px;
          font-size: 0.775rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4);
        }

        .terminal-btn-run:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(124, 58, 237, 0.55);
        }

        .spin-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .terminal-body {
          padding: 1.25rem 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.825rem;
          line-height: 1.7;
          overflow-x: auto;
        }

        .code-block {
          margin: 0;
          color: #cbd5e1;
        }

        /* Syntax colors */
        .token-keyword { color: #c084fc; font-weight: 600; }
        .token-namespace { color: #67e8f9; }
        .token-class { color: #fde047; font-weight: 600; }
        .token-string { color: #86efac; }
        .token-method { color: #60a5fa; }

        /* CLI Terminal Pane */
        .cli-terminal-pane {
          margin-top: 1.25rem;
          background: rgba(6, 6, 10, 0.95);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: 12px;
          padding: 1rem 1.15rem;
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.6);
        }

        .cli-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cli-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.7rem;
          color: #34d399;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .quick-cmd-pills {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: wrap;
        }

        .quick-cmd-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          font-size: 0.685rem;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quick-cmd-btn:hover {
          background: rgba(168, 85, 247, 0.2);
          color: #c084fc;
          border-color: rgba(168, 85, 247, 0.4);
        }

        .cli-history {
          max-height: 180px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 0.75rem;
          padding-right: 0.5rem;
        }

        .cli-line {
          font-size: 0.785rem;
          line-height: 1.5;
        }

        .cli-text {
          margin: 0;
          font-family: var(--font-mono);
          white-space: pre-wrap;
          word-break: break-word;
        }

        .cli-system { color: #64748b; font-style: italic; }
        .cli-input { color: #38bdf8; font-weight: 600; }
        .cli-output { color: #e2e8f0; }
        .cli-success { color: #34d399; font-weight: 600; }
        .cli-error { color: #f87171; }

        .cli-prompt-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 7px;
          padding: 0.35rem 0.65rem;
        }

        .cli-prompt-label {
          color: #38bdf8;
          font-weight: 700;
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        .cli-prompt-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-family: var(--font-mono);
          font-size: 0.785rem;
        }

        .cli-prompt-input::placeholder {
          color: #475569;
        }

        .cli-enter-btn {
          background: rgba(168, 85, 247, 0.2);
          border: 1px solid rgba(168, 85, 247, 0.35);
          color: #c084fc;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .cli-enter-btn:hover {
          background: rgba(168, 85, 247, 0.4);
        }
      `}</style>
    </div>
  );
};
