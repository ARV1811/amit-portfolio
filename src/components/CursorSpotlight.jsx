import React, { useEffect, useState, useRef } from 'react';

export const CursorSpotlight = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);
  const targetPos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const animFrame = useRef(null);

  useEffect(() => {
    // Only enable on devices that support hover (non-touch)
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth interpolation loop
    const updatePosition = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.15;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.15;
      setPosition({ x: currentPos.current.x, y: currentPos.current.y });
      animFrame.current = requestAnimationFrame(updatePosition);
    };

    animFrame.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [visible]);

  return (
    <div
      className="cursor-spotlight"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '500px',
        height: '500px',
        transform: `translate(${position.x - 250}px, ${position.y - 250}px)`,
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease',
        filter: 'blur(35px)',
        willChange: 'transform'
      }}
    />
  );
};
