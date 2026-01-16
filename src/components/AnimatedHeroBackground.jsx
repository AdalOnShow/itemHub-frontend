"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated Hero Background Component
 * Creates mouse-interactive floating gradient orbs with parallax effect
 */
export default function AnimatedHeroBackground() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      
      // Calculate mouse position relative to container center (-1 to 1)
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = (clientX - centerX) / (width / 2);
      const deltaY = (clientY - centerY) / (height / 2);

      setMousePosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Calculate parallax transforms for each orb
  const getTransform = (speed) => {
    const x = mousePosition.x * speed;
    const y = mousePosition.y * speed;
    const scale = 1 + Math.abs(mousePosition.x) * 0.05;
    return `translate(${x}px, ${y}px) scale(${scale})`;
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Gradient Orbs with increased visibility */}
      <div 
        className="absolute top-0 -left-4 w-96 h-96 bg-primary/30 dark:bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-80 dark:opacity-60 animate-blob"
        style={{ 
          transform: getTransform(30),
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute top-0 -right-4 w-96 h-96 bg-accent/30 dark:bg-accent/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-80 dark:opacity-60 animate-blob animation-delay-2000"
        style={{ 
          transform: getTransform(50),
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute -bottom-8 left-20 w-96 h-96 bg-primary/20 dark:bg-primary/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 dark:opacity-50 animate-blob animation-delay-4000"
        style={{ 
          transform: getTransform(40),
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      
      {/* Additional floating particles with stronger parallax */}
      <div 
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/20 dark:bg-accent/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 dark:opacity-50"
        style={{ 
          transform: getTransform(60),
          transition: 'transform 0.5s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary/20 dark:bg-primary/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 dark:opacity-50"
        style={{ 
          transform: getTransform(70),
          transition: 'transform 0.5s ease-out'
        }}
      ></div>
    </div>
  );
}
