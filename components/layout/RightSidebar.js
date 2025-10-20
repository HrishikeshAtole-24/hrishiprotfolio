import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import SvgIcon from '../common/SvgIcon';

const RightSidebar = ({ currentPage, onPageChange, isOpen, onClose }) => {
  const { navigation } = portfolioData;

  // Debug: Log the props
  console.log('RightSidebar isOpen:', isOpen);

  return (
    <div className={`right-sidebar ${isOpen ? 'mobile-active' : ''}`}>
      <motion.nav 
        className="main-nav"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {navigation.map((item, index) => (
          <motion.div
            key={item.page}
            className={`nav-item ${currentPage === item.page ? 'active' : ''}`}
            onClick={() => onPageChange(item.page)}
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <SvgIcon name={item.iconName} size={20} />
            </motion.div>
            <span>{item.name}</span>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
};

export default RightSidebar;