import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import LoadingScreen from './LoadingScreen';
import HomePage from '../pages/HomePage';
import ExpertisePage from '../pages/ExpertisePage';
import BackgroundPage from '../pages/BackgroundPage';
import ServicesPage from '../pages/ServicesPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import { usePageTransition } from '../../hooks/usePageTransition';
import { useLoadingScreen } from '../../hooks/useLoadingScreen';
import SvgIcon from '../common/SvgIcon';

const Layout = () => {
  const { currentPage, switchPage } = usePageTransition();
  const { isLoading } = useLoadingScreen();
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  const toggleLeftSidebar = () => {
    console.log('Toggle left sidebar - current state:', leftSidebarOpen);
    setLeftSidebarOpen(!leftSidebarOpen);
    if (rightSidebarOpen) setRightSidebarOpen(false);
  };

  const toggleRightSidebar = () => {
    console.log('Toggle right sidebar - current state:', rightSidebarOpen);
    setRightSidebarOpen(!rightSidebarOpen);
    if (leftSidebarOpen) setLeftSidebarOpen(false);
  };

  const closeMobileMenus = () => {
    setLeftSidebarOpen(false);
    setRightSidebarOpen(false);
  };

  // Add body classes for sidebar states
  useEffect(() => {
    if (leftSidebarOpen) {
      document.body.classList.add('left-sidebar-open');
    } else {
      document.body.classList.remove('left-sidebar-open');
    }
    
    if (rightSidebarOpen) {
      document.body.classList.add('right-sidebar-open');
    } else {
      document.body.classList.remove('right-sidebar-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('left-sidebar-open', 'right-sidebar-open');
    };
  }, [leftSidebarOpen, rightSidebarOpen]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={switchPage} />;
      case 'expertise':
        return <ExpertisePage />;
      case 'background':
        return <BackgroundPage />;
      case 'services':
        return <ServicesPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={switchPage} />;
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          {/* Mobile Menu Buttons */}
          <button 
            className="mobile-menu-btn mobile-left-menu-btn" 
            onClick={toggleLeftSidebar}
            aria-label="Toggle Profile Menu"
          >
            <SvgIcon name="ellipsis-vertical" size={20} />
          </button>
          
          <button 
            className="mobile-menu-btn mobile-right-menu-btn" 
            onClick={toggleRightSidebar}
            aria-label="Toggle Navigation Menu"
          >
            <SvgIcon name="bars" size={20} />
          </button>

          {/* Mobile Overlay */}
          {(leftSidebarOpen || rightSidebarOpen) && (
            <div 
              className="mobile-overlay active" 
              onClick={closeMobileMenus}
            />
          )}

          {/* Sidebars */}
          <LeftSidebar 
            isOpen={leftSidebarOpen}
            onClose={() => setLeftSidebarOpen(false)}
          />
          <RightSidebar 
            currentPage={currentPage} 
            onPageChange={(page) => {
              switchPage(page);
              closeMobileMenus();
            }}
            isOpen={rightSidebarOpen}
            onClose={() => setRightSidebarOpen(false)}
          />
          
          <div className="main-content">
            <AnimatePresence mode="wait">
              {renderCurrentPage()}
            </AnimatePresence>
          </div>
        </>
      )}
    </>
  );
};

export default Layout;