import { motion } from 'framer-motion';
import { useLoadingScreen } from '../../hooks/useLoadingScreen';

const LoadingScreen = () => {
  const { isLoading, loadingText } = useLoadingScreen();

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