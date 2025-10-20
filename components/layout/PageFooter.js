import { motion } from 'framer-motion';

const PageFooter = () => {
  return (
    <motion.footer 
      className="page-footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="footer-content">
        <div className="footer-left">
          <p>Made with <i className="fas fa-heart"></i> by Hrishikesh</p>
        </div>
        <div className="footer-right">
          <p>Copyright © 2025 | All Rights Reserved</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default PageFooter;