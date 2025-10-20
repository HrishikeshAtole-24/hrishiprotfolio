import { useState, useCallback } from 'react';

export const usePageTransition = (initialPage = 'home') => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const switchPage = useCallback((newPage) => {
    if (isTransitioning || newPage === currentPage) return;
    
    setIsTransitioning(true);
    
    // Simulate transition delay
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsTransitioning(false);
    }, 300);
  }, [currentPage, isTransitioning]);

  return {
    currentPage,
    isTransitioning,
    switchPage
  };
};