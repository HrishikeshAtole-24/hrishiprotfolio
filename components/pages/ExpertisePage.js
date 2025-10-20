import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import CodeBackground from '../layout/CodeBackground';
import PageFooter from '../layout/PageFooter';

const ExpertisePage = () => {
  const { expertise } = portfolioData;

  return (
    <motion.div 
      className="page expertise-page"
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
          My Expertise
        </motion.h1>
        
        {/* Row 1: 3 Cards */}
        <motion.div 
          className="expertise-row-3"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {expertise.row1.map((item, index) => (
            <motion.div
              key={index}
              className="expertise-card"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Row 2: 2 Cards */}
        <motion.div 
          className="expertise-row-2"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {expertise.row2.map((item, index) => (
            <motion.div
              key={index}
              className="expertise-card"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <PageFooter />
    </motion.div>
  );
};

export default ExpertisePage;