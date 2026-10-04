import React, { useState, useEffect } from 'react';

const roles = [
  { prefix: '.NET & C#', suffix: 'Developer' },
  { prefix: 'ASP.NET Core', suffix: 'Web API Engineer' },
  { prefix: 'SQL Server', suffix: 'Database Specialist' },
  { prefix: 'Enterprise', suffix: 'Systems Architect' }
];

export const RoleTyping = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const fullText = `${current.prefix} ${current.suffix}`;
    
    let timer;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        // Typing
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, 55);
      } else {
        // Finished typing full text, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        // Deleting
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        }, 30);
      } else {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const currentRole = roles[roleIndex];
  const fullText = `${currentRole.prefix} ${currentRole.suffix}`;
  
  // Format prefix with gradient if currently typed
  const prefixLength = currentRole.prefix.length;
  const typedPrefix = displayText.substring(0, Math.min(displayText.length, prefixLength));
  const typedSuffix = displayText.length > prefixLength ? displayText.substring(prefixLength) : '';

  return (
    <span className="role-typing-wrapper">
      <span className="role-highlight gradient-text-purple">{typedPrefix}</span>
      <span>{typedSuffix}</span>
      <span className="typing-cursor" aria-hidden="true">|</span>
      <style>{`
        .role-typing-wrapper {
          display: inline-block;
          min-height: 1.25em;
        }
        .typing-cursor {
          display: inline-block;
          color: var(--accent-purple);
          font-weight: 300;
          margin-left: 2px;
          animation: blink 0.9s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};
