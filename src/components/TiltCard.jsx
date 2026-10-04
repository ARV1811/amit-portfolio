import React, { useRef, useState, useCallback } from 'react';

export const TiltCard = ({
  children,
  className = '',
  style = {},
  maxTilt = 8,
  glare = true,
  onClick,
  ...props
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotX = (0.5 - y) * maxTilt;
    const rotY = (x - 0.5) * maxTilt;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      setTransform(`perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
      if (glare) {
        setGlareStyle({
          opacity: 1,
          background: `radial-gradient(circle at ${(x * 100).toFixed(1)}% ${(y * 100).toFixed(1)}%, rgba(168, 85, 247, 0.16) 0%, transparent 65%)`
        });
      }
    });
  }, [maxTilt, glare]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: transform,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        willChange: 'transform',
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {children}
      {glare && (
        <div
          className="tilt-card-glare"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 10,
            transition: isHovered ? 'opacity 0.2s ease' : 'opacity 0.5s ease',
            ...glareStyle
          }}
        />
      )}
    </div>
  );
};
