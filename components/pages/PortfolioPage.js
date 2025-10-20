import { motion } from 'framer-motion';
import Image from 'next/image';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import CodeBackground from '../layout/CodeBackground';
import PageFooter from '../layout/PageFooter';

const PortfolioPage = () => {
  const { portfolio } = portfolioData;

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
                <div className="portfolio-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                  <motion.div 
                    className="portfolio-overlay"
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
                    <motion.div 
                      className="portfolio-links"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.a 
                        href={project.demoUrl} 
                        className="portfolio-link"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fas fa-eye"></i>
                      </motion.a>
                      <motion.a 
                        href={project.githubUrl} 
                        className="portfolio-link"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-github"></i>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
      
      <PageFooter />
    </motion.div>
  );
};

export default PortfolioPage;