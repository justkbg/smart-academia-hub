import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import upsaLogo from '@/assets/upsa-logo.jpg';

interface LoadingSplashProps {
  onComplete?: () => void;
  duration?: number;
}

const LoadingSplash = ({ onComplete, duration = 2000 }: LoadingSplashProps) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Loading...');

  useEffect(() => {
    const statusMessages = [
      'Initializing...',
      'Loading UPSA Bot...',
      'Preparing features...',
      'Almost ready...',
    ];

    let currentMessage = 0;
    const messageInterval = setInterval(() => {
      if (currentMessage < statusMessages.length) {
        setStatusText(statusMessages[currentMessage]);
        currentMessage++;
      }
    }, duration / statusMessages.length);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(() => onComplete?.(), 300);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background via-card to-background"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl"
          />
        </div>

        {/* Logo with animation */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8,
          }}
          className="relative z-10 mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(14, 165, 255, 0.2)',
                '0 0 40px rgba(14, 165, 255, 0.4)',
                '0 0 20px rgba(14, 165, 255, 0.2)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-2xl p-2 bg-card"
          >
            <img
              src={upsaLogo}
              alt="UPSA Logo"
              className="w-48 h-48 object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Status text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground text-sm mb-4 relative z-10"
        >
          {statusText}
        </motion.p>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden relative z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-accent"
          />
        </div>

        {/* Animated dots */}
        <motion.div
          className="flex gap-2 mt-4 relative z-10"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingSplash;
