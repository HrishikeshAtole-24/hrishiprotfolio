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
              x: 2,
              transition: { duration: 0.2, ease: [0.22,0.61,0.36,1] }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.06,
                transition: { duration: 0.28, ease: [0.22,0.61,0.36,1] }
              }}
            >
              <SvgIcon name={item.iconName} size={20} />
            </motion.div>
            <span>{item.name}</span>
          </motion.div>
        ))}
      </motion.nav>
      
      {/* Hidden Easter Egg */}
      <div style={{ 
        position: 'absolute', 
        bottom: '15px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        fontSize: '9px', 
        opacity: 0.25,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        ऋषिकेश • رشیکیش
      </div>
    </div>
  );
};

export default RightSidebar;