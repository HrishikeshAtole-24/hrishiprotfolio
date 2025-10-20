import { useState, useEffect } from 'react';

export const useTypingAnimation = (texts, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentText = texts[currentIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, speed / 2);

      if (displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, speed);

      if (displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed]);

  return displayText;
};