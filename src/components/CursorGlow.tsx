import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="cursor-glow hidden lg:block"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    />
  );
}
