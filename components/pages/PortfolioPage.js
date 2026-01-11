import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import CodeBackground from '../layout/CodeBackground';
import PageFooter from '../layout/PageFooter';

const PortfolioPage = () => {
  const { portfolio } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div 
      className="page portfolio-page"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <CodeBackground />
      
      <div className="page-content">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </motion.h1>
        
        <motion.div 
          className="portfolio-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                className="portfolio-item"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="portfolio-card-inner">
                  <div className="portfolio-image">
                    {project.demoUrl && project.demoUrl !== '#' ? (
                      <div className="portfolio-iframe-container">
                        <iframe
                          src={project.demoUrl}
                          title={project.title}
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                          className="portfolio-iframe"
                        />
                        <div className="portfolio-iframe-overlay" />
                      </div>
                    ) : (
                      <div className="portfolio-placeholder">
                        <i className="fas fa-code portfolio-placeholder-icon"></i>
                        <p>{project.title}</p>
                      </div>
                    )}
                    
                    <motion.div 
                      className="portfolio-hover-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.description}
                      </motion.p>
                    </motion.div>
                  </div>
                  
                  <div className="portfolio-info">
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>
                    <div className="portfolio-actions">
                      {project.demoUrl && project.demoUrl !== '#' && (
                        <>
                          <motion.button
                            onClick={() => setSelectedProject(project)}
                            className="portfolio-btn portfolio-btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <i className="fas fa-expand-alt"></i> Preview
                          </motion.button>
                          <motion.a 
                            href={project.demoUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio-btn portfolio-btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <i className="fas fa-external-link-alt"></i> Visit
                          </motion.a>
                        </>
                      )}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <motion.a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="portfolio-btn portfolio-btn-secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fab fa-github"></i> Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
      
      <PageFooter />

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="portfolio-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="portfolio-modal-header">
                <div className="portfolio-modal-info">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.description}</p>
                </div>
                <button
                  className="portfolio-modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="portfolio-modal-body">
                <iframe
                  src={selectedProject.demoUrl}
                  title={selectedProject.title}
                  className="portfolio-modal-iframe"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                />
              </div>
              <div className="portfolio-modal-footer">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-modal-btn"
                >
                  <i className="fas fa-external-link-alt"></i> Open in New Tab
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-modal-btn"
                >
                  <i className="fab fa-github"></i> View Source
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PortfolioPage;