import { useState, useEffect } from 'react';

export const useLoadingScreen = (duration = 2000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const text = "Loading portfolio...";
    let index = 0;

    const typeInterval = setInterval(() => {
      setLoadingText(text.substring(0, index));
      index++;

      if (index > text.length) {
        clearInterval(typeInterval);
      }
    }, 100);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(loadingTimeout);
    };
  }, [duration]);

  return { isLoading, loadingText };
};