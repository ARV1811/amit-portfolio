import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const animFrame = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const onMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setTargetPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Check contextual hover target
      const target = e.target.closest('[data-cursor-label]');
      if (target) {
        setCursorLabel(target.getAttribute('data-cursor-label') || '');
        setIsHovered(true);
      } else if (e.target.closest('button, a, input, [role="button"]')) {
        setCursorLabel('');
        setIsHovered(true);
      } else {
        setCursorLabel('');
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth lerp loop for the outer ring
    const loop = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.2;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.2;
      setPos({ x: posRef.current.x, y: posRef.current.y });
      animFrame.current = requestAnimationFrame(loop);
    };

    animFrame.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="custom-cursor-root" aria-hidden="true">
      {/* Inner Precision Dot */}
      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${targetPos.x - 3}px, ${targetPos.y - 3}px, 0)`
        }}
      />

      {/* Outer Follower Ring & Contextual Badge */}
      <div
        className={`cursor-ring ${isHovered ? 'ring-hovered' : ''} ${isClicking ? 'ring-clicking' : ''} ${cursorLabel ? 'ring-labeled' : ''}`}
        style={{
          transform: `translate3d(${pos.x - (cursorLabel ? 45 : isHovered ? 20 : 14)}px, ${pos.y - (cursorLabel ? 16 : isHovered ? 20 : 14)}px, 0)`
        }}
      >
        {cursorLabel && <span className="cursor-label-text">{cursorLabel}</span>}
      </div>

      <style>{`
        .custom-cursor-root {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999999;
        }

        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          background: #c084fc;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000000;
          box-shadow: 0 0 8px #c084fc;
          will-change: transform;
        }

        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 28px;
          height: 28px;
          border: 1.5px solid rgba(168, 85, 247, 0.65);
          background: rgba(168, 85, 247, 0.04);
          border-radius: 50%;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: width 0.25s ease, height 0.25s ease, background 0.25s ease, border-color 0.25s ease;
          will-change: transform;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.15);
        }

        .ring-hovered {
          width: 40px;
          height: 40px;
          border-color: rgba(56, 189, 248, 0.8);
          background: rgba(56, 189, 248, 0.1);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
        }

        .ring-clicking {
          transform: scale(0.85);
          border-color: #ec4899;
        }

        .ring-labeled {
          width: auto !important;
          height: 28px !important;
          padding: 0 0.75rem !important;
          border-radius: 9999px !important;
          background: rgba(18, 18, 28, 0.9) !important;
          border-color: rgba(168, 85, 247, 0.8) !important;
          backdrop-filter: blur(8px) !important;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(168, 85, 247, 0.35) !important;
        }

        .cursor-label-text {
          font-family: var(--font-mono, monospace);
          font-size: 0.65rem;
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: 0.06em;
          white-space: nowrap;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};
