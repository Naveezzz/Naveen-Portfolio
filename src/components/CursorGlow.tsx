import React, { useEffect, useState } from 'react';

const CursorGlow: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    // Throttle the mouse movement
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('visibilitychange', toggleVisibility);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('visibilitychange', toggleVisibility);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
        willChange: 'transform, opacity', // for better performance
        transition: 'opacity 0.2s'
      }}
    >
      <div className="cursor-glow" />
      {/* Add your glow effect here */}
    </div>
  );
};

export default CursorGlow;