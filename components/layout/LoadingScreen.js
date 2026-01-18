import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLoadingScreen } from '../../hooks/useLoadingScreen';

const LoadingScreen = () => {
  const { isLoading, loadingText } = useLoadingScreen();

  useEffect(() => {
    if (isLoading) {
      console.log('%c🌟 Welcome to my portfolio! ऋषिकेश | رشیکیش 🌟', 'color: #2ecc71; font-size: 16px; font-weight: bold;');
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader">
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control red"></span>
              <span className="control yellow"></span>
              <span className="control green"></span>
            </div>
            <span className="terminal-title">portfolio.exe</span>
          </div>
          <div className="terminal-body">
            <div className="loading-text">
              <span className="prompt">$</span>
              <span className="loading-command">{loadingText}</span>
              <motion.span 
                className="cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;