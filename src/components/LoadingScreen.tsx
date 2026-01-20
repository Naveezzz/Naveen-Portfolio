import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0f1419' }}
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="text-4xl font-bold" style={{ background: 'linear-gradient(135deg, #f0e5d8 0%, #e88888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Naveen JN
            </div>
            <div className="text-sm font-mono text-center mt-2" style={{ color: '#e88888' }}>
              DevOps Engineer
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 h-1 rounded-full overflow-hidden" style={{ backgroundColor: '#1a2129' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #3d6b7d, #e88888)' }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Loading Text */}
          <motion.div
            className="mt-4 font-mono text-sm"
            style={{ color: '#6b7b8a' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Initializing cloud infrastructure...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
