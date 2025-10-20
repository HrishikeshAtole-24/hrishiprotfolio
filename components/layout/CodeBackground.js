import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const CodeBackground = () => {
  const { codeSnippets } = portfolioData;
  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 8000); // Change snippet every 8 seconds

    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  return (
    <div className="code-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSnippet}
          className="code-snippet-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {codeSnippets[currentSnippet].lines.map((line, lineIndex) => (
            <motion.div
              key={lineIndex}
              className="code-line"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: lineIndex * 0.15, 
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              {line || '\u00A0'}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CodeBackground;