import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, springConfig }) => {
  const words = useMemo(() => text.split(' '), [text]);

  return (
    <div className="animated-text">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition{{ duration: 0.5, type: 'spring', ...springConfig }}
>
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;