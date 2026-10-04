import React, { useEffect, useState, useRef } from 'react';

export const AnimatedCounter = ({ value, duration = 1400 }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const match = String(value).match(/^([0-9.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const suffix = match[2] || '';
    const isDecimal = match[1].includes('.');

    let startTimestamp = null;
    let animId = null;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const animate = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // Smooth cubic ease out
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentNum = ease * targetNum;

        setDisplayValue(
          isDecimal
            ? currentNum.toFixed(1) + suffix
            : Math.round(currentNum) + suffix
        );

        if (progress < 1) {
          animId = requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      animId = requestAnimationFrame(animate);
    };

    // Check if element is already in viewport or start after slight delay
    const timer = setTimeout(() => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          startAnimation();
          return;
        }
      }

      // Fallback intersection observer
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.05 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [value, duration]);

  return <span ref={elementRef}>{displayValue}</span>;
};
