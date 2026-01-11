import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface TypewriterTextProps {
  text: string;
  className?: string;
}

export function TypewriterText({ text, className = '' }: TypewriterTextProps) {
  return (
    <div className={`font-mono overflow-hidden ${className}`}>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: 'auto' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-coral"
        style={{ animation: 'blink 1s step-end infinite' }}
      >
        {text}
      </motion.span>
    </div>
  );
}

